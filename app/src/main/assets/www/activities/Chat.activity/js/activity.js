requirejs.config({baseUrl:"lib",paths:{activity:"../js"}});const app=Vue.createApp({components:{message:Message,"chat-input":ChatInput,"typing-effect":TypingEffect,"sugar-activity":SugarActivity,"sugar-toolitem":SugarToolitem,"sugar-toolbar":SugarToolbar,"sugar-journal":SugarJournal,"sugar-localization":SugarLocalization,"sugar-presence":SugarPresence,"sugar-tutorial":SugarTutorial,"sugar-icon":SugarIcon,"sugar-popup":SugarPopup},data:function(){return{SugarL10n:null,SugarPresence:null,SugarJournal:null,messages:[],userInfo:{name:"",id:"",color:""},usersTyping:{},l10n:{stringTutoExplainTitle:"",stringTutoExplainContent:"",stringTutoNetworkTitle:"",stringTutoNetworkContent:"",stringTutoClearChat:"",stringTutoClearChatContent:"",stringTutoStopTitle:"",stringTutoStopContent:"",stringTutoMessageTitle:"",stringTutoMessageContent:"",stringTutoEmojisContent:"",stringImageTitle:"",stringTutoImageContent:"",stringFullscreen:"",stringJoin:"",stringLeave:"",stringChat:"",stringNewMsgFrom:""},isFullscreen:!1,isShared:!1}},created(){var e=this;window.addEventListener("localized",(s=>{s.detail.l10n.localize(e.l10n)}),{once:!0})},mounted(){this.SugarL10n=this.$refs.SugarL10n,this.SugarPresence=this.$refs.SugarPresence,this.SugarJournal=this.$refs.SugarJournal},methods:{initialized(){window.top.sugar.environment.sharedId&&(this.isShared=!0);const e=this.$refs.SugarActivity.getEnvironment().user;this.userInfo={name:e.name,id:e.networkId,color:e.colorvalue}},handleSendFromJournal(){this.SugarJournal.insertFromJournal([{mimetype:"image/png"},{mimetype:"image/jpeg"}]).then(((e,s)=>{e&&this.sendMessage(e,"image")}))},sendMessage(e,s){const t={msg:e,type:s,userName:this.userInfo.name,userId:this.userInfo.id,fill:this.userInfo.color.fill,stroke:this.userInfo.color.stroke,key:(new Date).getTime()};this.messages.push(t),this.sendMessageToList(t,"add-message"),this.scrollLatestMsg()},sendMessageToList(e,s){if(!this.SugarPresence.isShared())return;const t={user:this.SugarPresence.getUserInfo(),content:e,action:s};this.SugarPresence.sendMessage(t)},scrollLatestMsg(){setTimeout((()=>{this.$refs.msgContainer.scrollTop=this.$refs.msgContainer.scrollHeight}),50)},handleNetworkMessage(e){if(this.$refs.msgContainer.scrollHeight-this.$refs.msgContainer.scrollTop-this.$refs.msgContainer.clientHeight<100)this.scrollLatestMsg();else switch(e.msg){case 1:this.$refs.SugarPopup.log(`${e.userName} ${this.l10n.stringJoin} ${this.l10n.stringChat}`);break;case-1:this.$refs.SugarPopup.log(`${e.userName} ${this.l10n.stringLeave} ${this.l10n.stringChat}`);break;default:this.$refs.SugarPopup.log(this.l10n.stringNewMsgFrom+" "+e.userName)}this.messages.push(e)},deleteMessage(e){this.messages=this.messages.filter((s=>s.key!==e)),this.sendMessageToList(e,"delete-message")},clearHistory(){this.messages=[]},onNetworkDataReceived(e){const{name:s,networkId:t}=e.user;switch(console.log("Recieved",e.action),e.action){case"init":this.messages=e.content;break;case"start-typing":this.usersTyping[t]={name:s};break;case"stop-typing":delete this.usersTyping[t];break;case"add-message":this.handleNetworkMessage(e.content);break;case"delete-message":const n=e.content;this.messages=this.messages.filter((e=>e.key!==n))}},onNetworkUserChanged(e){const s={msg:e.move,type:"status",userName:e.user.name,userId:e.user.networkId,fill:e.user.colorvalue.fill,stroke:e.user.colorvalue.stroke,key:(new Date).getTime()};if(this.handleNetworkMessage(s),1===e.move)this.SugarPresence.isHost&&this.sendMessageToList(this.messages,"init"),this.$refs.ChatInput.sentTypingStatus();else if(-1===e.move){if(this.userInfo.id===e.user.networkId)return this.usersTyping={},void(this.isShared=!1);delete this.usersTyping[e.user.networkId]}},shouldShowUsername(e){const s=this.messages[e-1];return"status"===this.messages[e].type||!s||"status"===s.type||s.userId!==this.messages[e].userId},onJournalNewInstance(){},onJournalDataLoaded(e,s){this.messages=e.messages,this.scrollLatestMsg()},onShared(e,s){this.SugarPresence.onShared(e,s),this.isShared=!0},onHelp(){const e=[{title:this.l10n.stringTutoExplainTitle,intro:this.l10n.stringTutoExplainContent},{element:"#network-button",position:"bottom",title:this.l10n.stringTutoNetworkTitle,intro:this.l10n.stringTutoNetworkContent},{element:"#clear-button",position:"bottom",title:this.l10n.stringTutoClearChat,intro:this.l10n.stringTutoClearChatContent},{element:"#stop-button",position:"bottom",title:this.l10n.stringTutoStopTitle,intro:this.l10n.stringTutoStopContent},{element:".chat-input",title:this.l10n.stringTutoMessageTitle,intro:this.l10n.stringTutoMessageContent}];this.isShared&&e.push({element:"#insert-journal",title:this.l10n.stringImageTitle,intro:this.l10n.stringTutoImageContent},{element:".emojis-container",title:"Emojis",intro:this.l10n.stringTutoEmojisContent}),this.$refs.SugarTutorial.show(e)},onStop(){this.$refs.SugarJournal.saveData({messages:this.messages})}}});app.mount("#app");