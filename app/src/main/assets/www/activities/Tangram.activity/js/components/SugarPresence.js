Vue.component("sugar-presence",{data:function(){return{activity:null,LZString:null,bundleId:"",palette:null,presence:null,isHost:!1}},mounted(){var e=this;requirejs(["sugar-web/activity/activity","sugar-web/env","lz-string"],(function(t,n,r){e.activity=t,e.LZString=r,n.getEnvironment((function(n,r){e.bundleId=r.bundleId,r.sharedId&&(console.log("Shared instance"),e.presence=t.getPresenceObject((function(t,n){t&&console.log(t),n.onDataReceived(e.onNetworkDataReceived),n.onSharedActivityUserChanged(e.onNetworkUserChanged)})))}))}))},methods:{isConnected:function(){return null!=this.presence},getSharedInfo:function(){return this.presence.getSharedInfo()},getUserInfo:function(){return this.presence.getUserInfo()},sendMessage:function(e){var t=this.LZString.compressToUTF16(JSON.stringify(e));this.presence.sendMessage(this.presence.getSharedInfo().id,t)},onShared:function(e,t){t.popDown();var n=this;console.log("Want to share"),this.presence=n.activity.getPresenceObject((function(e,t){e?console.log("Sharing error"):(t.createSharedActivity(n.bundleId,(function(e){console.log("Activity shared"),n.isHost=!0})),t.onDataReceived(n.onNetworkDataReceived),t.onSharedActivityUserChanged(n.onNetworkUserChanged))}))},onNetworkDataReceived:function(e){var t=JSON.parse(this.LZString.decompressFromUTF16(e));this.getUserInfo().networkId!==t.user.networkId&&this.$emit("data-received",t)},onNetworkUserChanged:function(e){if(this.getUserInfo().networkId===e.user.networkId)return;this.$emit("user-changed",e),console.log("User "+e.user.name+" "+(1==e.move?"joined":"left"));let t=this;if(this.$root.$refs.SugarPopup){let n="";if(this.$root.$refs.SugarL10n){let t="User"+(1==e.move?"Joined":"Left");n=this.$root.$refs.SugarL10n.get(t,{name:e.user.name})}else n="User "+e.user.name+" "+(1==e.move?"joined":"left");this.$root.$refs.SugarIcon?this.$root.$refs.SugarIcon.generateIconWithColors("../icons/owner-icon.svg",e.user.colorvalue).then(e=>{let r='<div style="display: flex; align-items:center;">';r+=""+("<img style='height:40px; margin:10px; vertical-align: middle;' src='"+e+"'>"),r+=`<span>${n}</span>`,r+="</div>",t.$root.$refs.SugarPopup.log(r)}):this.$root.$refs.SugarPopup.log(n)}}}});