var networkItemsCache=[],wifiItemsCache=[],lastWifiUpdate=0;enyo.kind({name:"Sugar.NeighborhoodView",kind:enyo.Control,components:[{name:"owner",kind:"Sugar.Icon",size:constant.sizeNeighbor,colorized:!0,classes:"owner-icon",showing:!1},{name:"server",kind:"Sugar.Icon",size:constant.sizeNeighbor,colorized:!0,classes:"server-icon",showing:!1,data:{networkId:"server"}},{name:"network",showing:!0,onresize:"draw",components:[]},{name:"otherview",showing:!0,components:[]},{name:"networkPopup",kind:"Sugar.Popup",showing:!1},{name:"empty",classes:"cloud-empty",showing:!1},{name:"message",classes:"cloud-message",showing:!1},{name:"settings",classes:"cloud-line",showing:!1,components:[{name:"gotosettings",kind:"Sugar.IconButton",icon:{directory:"icons",icon:"preferences-system.svg"},classes:"listview-button cloud-gotosettings",ontap:"doSettings"}]},{name:"refresh",classes:"cloud-line",showing:!1,components:[{name:"refreshstate",kind:"Sugar.IconButton",icon:{directory:"icons",icon:"system-restart.svg"},classes:"listview-button cloud-gotosettings",ontap:"doRefresh"}]}],create:function(){this.inherited(arguments),this.$.owner.setIcon({directory:"icons",icon:"owner-icon.svg"}),this.$.owner.setPopupShow(enyo.bind(this,"showBuddyPopup")),this.$.owner.setPopupHide(enyo.bind(this,"hideBuddyPopup")),this.$.server.setIcon({directory:"icons",icon:"network-wireless-connected-100.svg"}),this.$.server.setPopupShow(enyo.bind(this,"showServerPopup")),this.$.server.setPopupHide(enyo.bind(this,"hideServerPopup"));var e=this.findInCache({icon:this.$.server}),t=Math.floor(Math.random()*xoPalette.colors.length);this.$.server.setColorizedColor(e?e.colorvalue:xoPalette.colors[t]),this.users=[],this.activities=[],this.eeMode=!1,this.timer=window.setInterval(enyo.bind(this,"updateNetworkState"),constant.timerUpdateNetwork),(presence.isConnected()||window.sugarizerOS)&&this.updateNetworkState(),"rtl"==l10n.language.direction&&this.$.message.addClass("rtl-10"),this.draw()},getToolbar:function(){return null==this.toolbar&&(this.toolbar=new Sugar.NeighborhoodToolbar),this.toolbar},getPopup:function(){return this.$.networkPopup},updateNetworkState:function(){var e=preferences.getColor();if(presence.isConnected()&&"#005FE4"==e.stroke&&"#FF2B34"==e.fill&&this.toolbar&&"Sugarizer contributors"==this.toolbar.getSearchText()){if(!this.eeMode){for(var t=new Sugar.EE({mode:3}).contributors(),o=0;o<t.length;o++)this.users.push(t[o]);this.eeMode=!0,this.draw(),this.filterNetwork()}}else presence.isConnected()?(this.$.owner.setShowing(!0),this.$.server.setShowing(!0),this.$.empty.setShowing(!1),this.$.message.setShowing(!1),this.$.settings.setShowing(!1),this.$.refresh.setShowing(!1),app.toolbar&&app.toolbar.showServerWarning&&app.toolbar.showServerWarning(!1),presence.listUsers(enyo.bind(this,"userListReceived")),presence.listSharedActivities(enyo.bind(this,"sharedListReceived")),this.eeMode=!1):(this.$.owner.setShowing(!1),this.$.server.setShowing(!1),this.$.empty.setShowing(!0),this.$.message.setShowing(!0),app.toolbar&&app.toolbar.showServerWarning&&app.toolbar.showServerWarning(!0),preferences.isConnected()?(this.$.message.setContent(l10n.get("UnableToConnect")),this.$.refresh.setShowing(!0)):(this.$.message.setContent(l10n.get("ServerNotSet")),this.$.settings.setShowing(!0)),this.eeMode=!1)},showBuddyPopup:function(e){this.getPopup().setHeader({icon:e.icon,colorized:!0,colorizedColor:null,name:preferences.getName(),title:null,action:enyo.bind(this,"doSettings")}),this.getPopup().setItems(null);var t=[];t.push({icon:{directory:"icons",icon:"preferences-system.svg"},colorized:!1,name:l10n.get("MySettings"),action:enyo.bind(this,"doSettings"),data:null}),t.push({icon:{directory:"icons",icon:"system-shutdown.svg"},colorized:!1,name:l10n.get("Logoff"),action:enyo.bind(this,"doLogoff"),data:null}),enyo.platform.electron&&t.push({icon:{directory:"lib/sugar-web/graphics/icons/actions",icon:"activity-stop.svg"},colorized:!1,name:l10n.get("Quit"),action:enyo.bind(this,"doQuit"),data:null}),this.getPopup().setFooter(t),this.getPopup().showPopup()},hideBuddyPopup:function(e){return!(!(this&&this.getPopup&&e&&this.getPopup())||this.getPopup().cursorIsInside()||e.cursorIsInside())&&(this.getPopup().hidePopup(),!0)},doLogoff:function(){stats.trace(constant.viewNames[app.getView()],"click","logoff"),this.getPopup().hidePopup(),!preferences.isConnected()||preferences.isConnected()&&!preferences.getOptions("sync")?(this.otherview=this.$.otherview.createComponent({kind:"Sugar.DialogWarningMessage"},{owner:this}),this.otherview.show()):util.cleanDatastore(null,(function(){util.restartApp()}))},doQuit:function(){stats.trace(constant.viewNames[app.getView()],"click","quit"),util.quitApp()},doSettings:function(){stats.trace(constant.viewNames[app.getView()],"click","my_settings"),this.getPopup().hidePopup(),this.otherview=this.$.otherview.createComponent({kind:"Sugar.DialogServer"},{owner:this}),this.otherview.show()},doRefresh:function(){if(presence.isConnected())this.updateNetworkState();else{var e=this;presence.joinNetwork((function(t,o){t?console.log("WARNING: Can't connect to presence server"):e.updateNetworkState()}))}},showServerPopup:function(e){var t=myserver.getServer(),o=preferences.getServer();o&&o.name&&(t=o.name),this.getPopup().setHeader({icon:e.icon,colorized:!0,colorizedColor:e.colorizedColor,name:t,title:l10n.get("Connected"),action:null}),this.getPopup().setItems(null),this.getPopup().setFooter(null),this.getPopup().showPopup()},hideServerPopup:function(e){return!(!(this&&this.getPopup&&e&&this.getPopup())||this.getPopup().cursorIsInside()||e.cursorIsInside())&&(this.getPopup().hidePopup(),!0)},disconnect:function(){this.getPopup().hidePopup()},forgetPassword:function(e){this.getPopup().hidePopup()},joinNetwork:function(e){},enterKey:function(e){this.getPopup().hidePopup()},showUserPopup:function(e){this.getPopup().setHeader({icon:e.icon,colorized:!0,colorizedColor:e.colorizedColor,name:e.getData().name,title:null,action:null}),this.getPopup().setItems(null),this.getPopup().setFooter(null),this.getPopup().showPopup()},hideUserPopup:function(e){return!(!(this&&this.getPopup&&e&&this.getPopup())||this.getPopup().cursorIsInside()||e.cursorIsInside())&&(this.getPopup().hidePopup(),!0)},showActivityPopup:function(e){this.getPopup().setHeader({icon:e.icon,colorized:!0,colorizedColor:e.colorizedColor,name:e.getData().activity.name,title:null,action:enyo.bind(this,"joinActivity"),data:[e.getData(),null]});var t=[];t.push({icon:{directory:"icons",icon:"activity-start.svg"},colorized:!1,name:l10n.get("JoinActivity"),action:enyo.bind(this,"joinActivity"),data:[e.getData(),null]}),this.getPopup().setItems(t),this.getPopup().setFooter(null),this.getPopup().showPopup()},hideActivityPopup:function(e){return!(!(this&&this.getPopup&&e&&this.getPopup())||this.getPopup().cursorIsInside()||e.cursorIsInside())&&(this.getPopup().hidePopup(),!0)},joinSharedActivity:function(e){this.joinActivity(e.data)},joinActivity:function(e){preferences.runActivity(e.activity,null,e.activity.name,e.shared.id)},userListReceived:function(e){if(this.users.length==e.length){for(var t=this.users.length,o=0,i=0;i<t;i++)for(var n=0;n<t;n++)if(e[i].networkId==this.users[n].networkId){o++;break}if(o==t)return}this.users=e;for(i=0;i<0;i++)this.users.push({networkId:"nxx"+i,name:"dummy "+i,colorvalue:xoPalette.colors[Math.floor(Math.random()*xoPalette.colors.length)]});this.draw()},sharedListReceived:function(e){if(this.activities.length==e.length){for(var t=this.activities.length,o=0,i=0;i<t;i++)for(var n=0;n<t;n++)if(e[i].activityId==this.activities[n].activityId&&e[i].users.length==this.activities[n].users.length){o++;break}if(o==t)return}this.activities=e,this.draw()},draw:function(){var e=util.getCanvasCenter();this.$.empty.applyStyle("margin-left",e.x-constant.sizeEmpty/4-10+"px");var t=e.y-constant.sizeEmpty/4-80;this.$.empty.applyStyle("margin-top",t+"px"),this.$.message.applyStyle("margin-top",t+70+"px"),this.$.gotosettings.applyStyle("margin-top",t+90+"px"),this.$.gotosettings.setText(l10n.get("MySettings")),this.$.refreshstate.applyStyle("margin-top",t+90+"px"),this.$.refreshstate.setText(l10n.get("Refresh")),tutorial.setElement("owner",this.$.owner.getAttribute("id")),tutorial.setElement("server",this.$.server.getAttribute("id"));var o=!1,i=!1,n=[];enyo.forEach(this.$.network.getControls(),(function(e){e.used=!1,n.push(e)}));var isAlreadyHere=function(e){for(var t=0;t<n.length;t++){var o=n[t],i=e.icon.data?e.icon.data:e.data,s=o.icon.getData?o.icon.getData():o.data;if(s){if(s.networkId&&i.networkId&&s.networkId==i.networkId)return o.used=!0,o;if(s.shared&&i.shared&&s.shared==i.shared)return o.used=!0,o}}return null},s=(e=util.getCanvasCenter(),[]);s.push({icon:this.$.owner,x:e.x-constant.sizeNeighbor/2,y:e.y-constant.sizeNeighbor/2,size:this.$.owner.getSize(),locked:!0,child:[]}),this.$.server.getShowing()&&s.push({icon:this.$.server,size:this.$.server.getSize(),locked:!1,child:[]}),this.createNetworkIcons(s);for(var r=s.length,a=0;a<r;a++){if(!(f=s[a]).locked){var h=f.child.length>0?1:0,c=this.findInCache(f),l=e.dx-f.size-2*h*f.size;f.x=c&&c.x<l?c.x:f.size*h+Math.floor(Math.random()*l);var d=e.dy-f.size-2*h*f.size;f.y=c&&c.y<d?c.y:f.size*h+Math.floor(Math.random()*d),c||this.addToCache(f);for(var p=f.child.length,u=0;u<p;u++){var g=f.child[u],v=2*Math.PI/p*u;g.x=f.x+f.size*Math.sin(v),g.y=f.y-f.size*Math.cos(v)}}}var w=this.detectCollisions(s);w.length>0&&this.solveCollisions(w,s);for(a=0;a<r;a++){var f;if((f=s[a]).icon!=this.$.owner&&f.icon!=this.$.server){var y=isAlreadyHere(f);y?f.icon=y:(f.icon=this.$.network.createComponent(f.icon,{owner:this}),f.icon.render()),f.icon.applyStyle("margin-left",f.x+"px"),f.icon.applyStyle("margin-top",f.y+"px"),!o&&f.icon.data.networkId&&(tutorial.setElement("other",f.icon.getAttribute("id")),o=!0),!i&&f.icon.data.shared&&(tutorial.setElement("activity",f.icon.getAttribute("id")),i=!0);for(p=f.child.length,u=0;u<p;u++){g=f.child[u];var m=null;enyo.forEach(this.$.network.getControls(),(function(e){m||(m=isAlreadyHere(g))})),m?g=m:(g=this.$.network.createComponent(g,{owner:this})).render(),g.applyStyle("margin-left",f.child[u].x+"px"),g.applyStyle("margin-top",f.child[u].y+"px")}}else f.icon.applyStyle("margin-left",f.x+"px"),f.icon.applyStyle("margin-top",f.y+"px")}!function(){for(var e=0;e<n.length;e++)n[e].used||n[e].destroy()}(),this.filterNetwork()},createNetworkIcons:function(e){for(var t=this.users.length,o=[],i=0;i<t;i++){var n=this.users[i];if(n.networkId!=preferences.getNetworkId()){var s={kind:"Sugar.Icon",icon:{directory:"icons",icon:"owner-icon.svg"},size:constant.sizeNeighbor,colorized:!0,colorizedColor:n.colorvalue,popupShow:enyo.bind(this,"showUserPopup"),popupHide:enyo.bind(this,"hideUserPopup"),data:n};o.push(s)}}t=this.activities.length;var r=[];for(i=0;i<t;i++){var a=this.activities[i],h=preferences.getActivity(a.activityId);if(h!=preferences.genericActivity){s={kind:"Sugar.Icon",icon:{directory:h.directory,icon:h.icon},size:constant.sizeNeighbor,colorized:!0,colorizedColor:a.colorvalue,ontap:"joinSharedActivity",popupShow:enyo.bind(this,"showActivityPopup"),popupHide:enyo.bind(this,"hideActivityPopup"),data:{shared:a,activity:h}};for(var c=[],l=a.users.length,d=0;d<l;d++)for(var p=o.length,u=0;u<p;u++){var g=o[u];a.users[d]==g.data.networkId&&(c.push(g),r.push(g))}e.push({icon:s,size:constant.sizeNeighbor,locked:!1,child:c})}}for(p=o.length,l=r.length,i=0;i<p;i++){var v=!1;for(s=o[i],d=0;d<l&&!v;d++)s.data.networkId==r[d].data.networkId&&(v=!0);v||e.push({icon:s,size:constant.sizeNeighbor,locked:!1,child:[]})}},detectCollisions:function(e){for(var t=[],o=e.length,i=0;i<o;i++)for(var n=i+1;n<o;n++){var s=e[i],r=e[n],a=s.size,h=r.size,c=s.x,l=s.x+a,d=s.y,p=s.y+a,u=r.x,g=r.x+h,v=r.y,w=r.y+h;s.child.length>0&&(c-=a,l+=a,d-=a,p+=a),r.child.length>0&&(u-=h,g+=h,v-=h,w+=h),l<u||c>g||d>w||p<v||(s.locked?t.push(r):t.push(s))}return t},solveCollisions:function(e,t){for(var o=!0,i=util.getCanvasCenter(),n=0;o&&n<constant.maxCollisionTry;n++){for(var s=0;s<e.length;s++){var r=e[s],a=r.child.length>0?1:0;r.x=r.size*a+Math.floor(Math.random()*(i.dx-r.size-2*a*r.size)),r.y=r.size*a+Math.floor(Math.random()*(i.dy-r.size-2*a*r.size));for(var h=r.child.length,c=0;c<h;c++){var l=r.child[c],d=2*Math.PI/h*c;l.x=r.x+r.size*Math.sin(d),l.y=r.y-r.size*Math.cos(d)}}o=(e=this.detectCollisions(t)).length>0}},filterNetwork:function(){var e=this.toolbar&&!this.eeMode?this.toolbar.getSearchText().toLowerCase():"";enyo.forEach(this.$.network.getControls(),(function(t){t.setDisabled(0!=e.length&&t.data&&t.data.name&&-1==t.data.name.toLowerCase().indexOf(e))})),this.$.server.setDisabled(0!=e.length&&-1==myserver.getServer().toLowerCase().indexOf(e))},addToCache:function(e){var t,o=e.icon.data;o.networkId?t=o.networkId:o.shared&&o.shared.id&&(t=o.shared.id);for(var i=networkItemsCache,n=!1,s=0;s<i;s++){var r=networkItemsCache[s];r.name==t&&(r.x=x,r.y=y,n=!0)}n||networkItemsCache.push({name:t,x:e.x,y:e.y,colorvalue:e.icon.colorizedColor})},findInCache:function(e){var t,o=e.icon.data;o.networkId?t=o.networkId:o.shared&&o.shared.id&&(t=o.shared.id);for(var i=networkItemsCache.length,n=0;n<i;n++){var s=networkItemsCache[n];if(s.name==t)return s}return null},destroy:function(){this.inherited(arguments),clearTimeout(this.timer)}}),enyo.kind({name:"Sugar.NeighborhoodToolbar",kind:enyo.Control,components:[{name:"neighborsearch",kind:"Sugar.SearchField",onTextChanged:"filterNetwork",classes:"neighbor-filter-text"},{name:"helpbutton",kind:"Button",classes:"toolbutton help-button",title:"Help",ontap:"startTutorial"},{name:"radialbutton",kind:"Button",classes:"toolbutton view-desktop-button",title:"Home",title:"Home",ontap:"gotoDesktop"}],create:function(){this.inherited(arguments),this.localize()},rendered:function(){this.inherited(arguments),this.localize()},localize:function(){this.$.neighborsearch.setPlaceholder(l10n.get("SearchNeighbor")),this.$.radialbutton.setNodeProperty("title",l10n.get("Home")),this.$.helpbutton.setNodeProperty("title",l10n.get("Tutorial"))},getSearchText:function(){return this.$.neighborsearch.getText()},gotoDesktop:function(){window.clearInterval(app.otherview.timer),util.vibrate(),app.showView(constant.radialView)},filterNetwork:function(){app.otherview.filterNetwork()},startTutorial:function(){tutorial.setElement("radialbutton",this.$.radialbutton.getAttribute("id")),tutorial.setElement("neighborsearch",this.$.neighborsearch.getAttribute("id")),stats.trace(constant.viewNames[app.getView()],"tutorial","start",null),tutorial.start()}});