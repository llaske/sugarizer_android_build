define(["sugar-web/activity/activity","sugar-web/datastore","notepalette","zoompalette","sugar-web/graphics/presencepalette","humane","tutorial","sugar-web/env","webL10n","sugar-web/graphics/journalchooser","activity/backgroundColorChooser"],(function(e,t,o,n,i,a,c,r,d,l,s){var u="#FFF29F",g=!1,y=!1,m=null,p={};requirejs(["domReady!"],(function(f){e.setup();var v=0,h=document.getElementById("nodetext-button"),b=document.getElementById("delete-button"),switchMode=function(e){v=e,h.classList.remove("active"),b.classList.remove("active"),saveAndFinishEdit(),0==e?h.classList.add("active"):1==e&&b.classList.add("active"),null!=N&&(unselectAllNode(),N=null)};h.addEventListener("click",(function(){switchMode(0)}),!0),b.addEventListener("click",(function(){switchMode(1)}),!0);var x=document.getElementById("color-button");colorPalette=new o.NotePalette(x),colorPalette.setColor("rgb(255, 242, 159)"),colorPalette.addEventListener("colorChange",(function(e){isSelectedNode(N)&&(pushState({redo:{action:"update",id:N.id(),color:e.detail.color},undo:{action:"update",id:N.id(),color:N.data("background-color")}}),N.style("background-color",e.detail.color),N.data("background-color",e.detail.color)),R.style.backgroundColor=e.detail.color,u=e.detail.color}));var k=document.getElementById("zoom-button");zoomPalette=new n.zoomPalette(k),zoomPalette.addEventListener("pop",(function(e){})),zoomPalette.addEventListener("zoom",(function(e){var t=e.detail.zoom,o=cy.zoom();0==t?o!=cy.minZoom()&&o-.25>cy.minZoom()&&cy.zoom(o-.25):1==t?o!=cy.maxZoom()&&cy.zoom(o+.25):2==t?cy.fit():3==t&&cy.center()}));var E=document.getElementById("png-button");E.addEventListener("click",(function(e){html2canvas(document.querySelector("#cy")).then(e=>{var o=e.toDataURL(),n=o.split(";")[0].split(":")[1],i=n.split("/")[0],c={mimetype:n,title:i.charAt(0).toUpperCase()+i.slice(1)+" Shared Notes",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};t.create(c,(function(){a.log(d.get("NotesSaved")),console.log("export done.")}),o)})}));var w=document.getElementById("network-button"),B=new i.PresencePalette(w,void 0),I=!1,_=!1,L=0,C=0,T=0,P=0,z=0,S=0,F=1,D=0,A=0,j=0,U=0;function set_background_img(e){document.getElementById("cy").style.backgroundColor="#ffffff",e,document.getElementById("cy").style.backgroundImage="url('"+e+"')",document.getElementById("cy").style.backgroundRepeat="no-repeat",g&&_||(T=0,P=0);var t=new Image;t.src=e,t.onload=function(){D=this.height,A=this.width,I?(document.getElementById("cy").style.backgroundPositionX=L+"px",document.getElementById("cy").style.backgroundPositionY=C+"px",I=!1,j=-1*L,U=-1*C):(document.getElementById("cy").style.backgroundPositionX=T+"px",document.getElementById("cy").style.backgroundPositionY=P+"px",j=z,U=S),document.getElementById("cy").style.backgroundSize=F*A+"px "+F*D+"px",_=!1}}document.addEventListener("updateBackgroundListener",(function(e){g&&sendMessage({action:"updateBackgroundColor",data:document.getElementById("cy").style.backgroundColor})})),l.init=function(){l.features=[l.featureLocalJournal],s.title=d.get("titleBackgroundColor"),s.placeholder=d.get("holderSearchBackgroundColor"),l.features.push(s),l.currentFeature=0},document.getElementById("background-image-button").addEventListener("click",(function(e){l.show((function(e){e&&new t.DatastoreObject(e.objectId).loadAsText((function(e,t,o){set_background_img(o),g&&sendMessage({action:"updateBackgroundImage",data:o,x_shift:z,y_shift:S})}))}),{mimetype:"image/png"},{mimetype:"image/jpeg"})}));var Y=document.getElementById("stop-button");Y.addEventListener("click",(function(e){console.log("writing..."),saveGraph((function(e){null===e?console.log("write done."):console.log("write failed.")}))}));var N=null,M="<Your content>",R=document.getElementById("textvalue"),O=null;R.addEventListener("click",(function(e){saveAndFinishEdit()}));var createNode=function(e,t,o,n){cy.add({group:"nodes",nodes:[{data:{id:e,content:t,color:"rgb(0, 0, 0)","background-color":n},position:{x:o.x,y:o.y}}]});var i=cy.getElementById(e);return i.style({content:t,"background-color":n}),i.addClass("standard-node"),i},updateNodeText=function(e,t){if(null!=e){var o=e.data("content");void 0===t?t=e.style().content:e.data("content",t),e.style({content:t}),o!=t&&pushState({redo:{action:"update",id:e.id(),text:t},undo:{action:"update",id:e.id(),text:o}})}},isSelectedNode=function(e){return null!=e&&"dashed"==e.style()["border-style"]},selectNode=function(e){null!=e&&e.style({"border-color":"black","border-style":"dashed","border-width":"4px"})},unselectNode=function(e){null!=e&&e.style({"border-color":"darkgray","border-style":"solid","border-width":"1px"})},unselectAllNode=function(){for(var e=cy.collection("node"),t=0;t<e.length;t++)unselectNode(e[t])},showEditField=function(e){var t=e.renderedPosition(),o=cy.zoom();R.value=e.data("content"),R.style.visibility="visible",R.style.backgroundColor=e.style().backgroundColor;var n=100*o-200*o;R.style.left=t.x+n+"px",R.style.top=55+t.y+n+"px",R.style.width=190*o+"px",R.style.height=190*o+"px",R.style.resize="none",R.value==M?R.setSelectionRange(0,R.value.length):R.setSelectionRange(R.value.length,R.value.length),R.focus()},hideEditField=function(){textvalue.style.visibility="hidden"},saveAndFinishEdit=function(){null!=N&&isSelectedNode(N)&&(updateNodeText(N,R.value),hideEditField(),unselectNode(N))},newId=function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},doAction=function(e){if(void 0!==e.action)if("create"==e.action)createNode(e.id,e.text,e.position,e.color);else if("delete"==e.action){if(null==(t=cy.getElementById(e.id)))return;cy.remove(t)}else if("update"==e.action){var t;if(null==(t=cy.getElementById(e.id)))return;void 0!==e.text&&(t.data("content",e.text),t.style({content:e.text})),void 0!==e.color&&(t.data("background-color",e.color),t.style({"background-color":e.color})),void 0!==e.position&&t.position({x:e.position.x,y:e.position.y})}},initGraph=function(e){if(null!=e){cy.remove("node"),N=null;for(var t=0;t<e.length;t++)doAction(e[t]);hideEditField(),reinitState()}},getGraph=function(){for(var e=[],t=cy.elements("node"),o=0;o<t.length;o++){var n=t[o];e.push({action:"create",id:n.id(),text:n.data("content"),position:{x:n.position().x,y:n.position().y},color:n.data("background-color")})}return{background_image:document.getElementById("cy").style.backgroundImage.replace(/(url\(|\)|")/g,""),background_color:document.getElementById("cy").style.backgroundColor,commands:e,img_x:-1*j,img_y:-1*U}},saveGraph=function(t){var o=e.getDatastoreObject(),n=getGraph();o.setDataAsText(n),o.save(t)},G=[],V=0,X=document.getElementById("undo-button");X.addEventListener("click",(function(){saveAndFinishEdit(),undoState()}),!0);var Z=document.getElementById("redo-button");Z.addEventListener("click",(function(){saveAndFinishEdit(),redoState()}),!0);var reinitState=function(){G=[],V=0},pushState=function(e,t){if(V<G.length-1){for(var o=[],n=0;n<V+1;n++)o.push(G[n]);G=o}var i=G.length-1,a=e;if(i<30)G.push(a);else{for(n=0;n<i;n++)G[n]=G[n+1];G[G.length-1]=a}V=G.length-1,g&&!t&&sendMessage({action:"updateBoard",data:e}),updateStateButtons()},undoState=function(e){if(!(G.length<1||V<0)){var t=G[V--].undo;doAction(t),g&&!e&&sendMessage({action:"undoBoard"}),updateStateButtons()}},redoState=function(e){if(!(V+1>=G.length)){var t=G[++V].redo;doAction(t),g&&!e&&sendMessage({action:"redoBoard"}),updateStateButtons()}},updateStateButtons=function(){var e=G.length;X.disabled=G.length<1||V<0,Z.disabled=V+1>=e},generateXOLogoWithColor=function(e){var t='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\' [<!ENTITY stroke_color "#010101"><!ENTITY fill_color "#FFFFFF">]><svg enable-background="new 0 0 55 55" height="55px" version="1.1" viewBox="0 0 55 55" width="55px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><g display="block" id="stock-xo_1_"><path d="M33.233,35.1l10.102,10.1c0.752,0.75,1.217,1.783,1.217,2.932   c0,2.287-1.855,4.143-4.146,4.143c-1.145,0-2.178-0.463-2.932-1.211L27.372,40.961l-10.1,10.1c-0.75,0.75-1.787,1.211-2.934,1.211   c-2.284,0-4.143-1.854-4.143-4.141c0-1.146,0.465-2.184,1.212-2.934l10.104-10.102L11.409,24.995   c-0.747-0.748-1.212-1.785-1.212-2.93c0-2.289,1.854-4.146,4.146-4.146c1.143,0,2.18,0.465,2.93,1.214l10.099,10.102l10.102-10.103   c0.754-0.749,1.787-1.214,2.934-1.214c2.289,0,4.146,1.856,4.146,4.145c0,1.146-0.467,2.18-1.217,2.932L33.233,35.1z" fill="&fill_color;" stroke="&stroke_color;" stroke-width="3.5"/><circle cx="27.371" cy="10.849" fill="&fill_color;" r="8.122" stroke="&stroke_color;" stroke-width="3.5"/></g></svg>';return t=(t=t.replace("#010101",e.stroke)).replace("#FFFFFF",e.fill),"data:image/svg+xml;base64,"+btoa(t)},displayConnectedPeople=function(e){var t=document.getElementById("presence-users");e&&t&&m.listSharedActivityUsers(m.getSharedInfo().id,(function(e){p={};for(var t=0;t<e.length;t++){var o=e[t];p[o.networkId]=o}!function(){var e=document.getElementById("presence-users"),t="<hr><ul style='list-style: none; padding:0;'>";for(var o in p)t+="<li><img style='height:30px;' src='"+generateXOLogoWithColor(p[o].colorvalue)+"'>"+p[o].name+"</li>";t+="</ul>",e.innerHTML=t}()}))},shareActivity=function(){m=e.getPresenceObject((function(e,t){e?console.log("error"):(g=!0,userSettings=t.getUserInfo(),console.log("connected"),window.top.sugar.environment.sharedId||(y=!0,t.createSharedActivity("org.olpcfrance.sharednotes",(function(e){}))),t.onConnectionClosed((function(e){console.log(e),console.log("Connection closed")})),t.onSharedActivityUserChanged((function(e){onNetworkUserChanged(e)})),t.onDataReceived(onNetworkDataReceived))}))},sendMessage=function(e){try{m.sendMessage(m.getSharedInfo().id,{user:m.getUserInfo(),content:e})}catch(e){}},onNetworkDataReceived=function(e){if(m.getUserInfo().networkId!==e.user.networkId)switch(e.content.action){case"initialBoard":_=!0,initGraph(e.content.data.commands),T=z-e.content.x_shift,P=S-e.content.y_shift,""==e.content.data.background_image?_=!1:set_background_img(e.content.data.background_image);break;case"updateBoard":doAction(e.content.data.redo),pushState(e.content.data,!0);break;case"undoBoard":undoState(!0);break;case"redoBoard":redoState(!0);break;case"updateBackgroundColor":document.getElementById("cy").style.backgroundImage="",document.getElementById("cy").style.backgroundColor=e.content.data;break;case"updateBackgroundImage":_=!0,T=z-e.content.x_shift,P=S-e.content.y_shift,""==e.content.data.background_image?_=!1:set_background_img(e.content.data)}},onNetworkUserChanged=function(e){var t=e.user.name.replace("<","&lt;").replace(">","&gt;"),o="<img style='height:30px;' src='"+generateXOLogoWithColor(e.user.colorvalue)+"'>";1===e.move?(a.log(o+l10n_s.get("PlayerJoin",{user:t})),y&&sendMessage({action:"initialBoard",data:getGraph(),x_shift:z,y_shift:S})):-1===e.move&&a.log(o+l10n_s.get("PlayerLeave",{user:t})),m.listSharedActivities((function(e){for(var t=0;t<e.length;t++)e[t].id===m.getSharedInfo().id&&displayConnectedPeople(e[t].users)}))};B.addEventListener("shared",(function(){B.popDown(),shareActivity()})),window.top&&window.top.sugar&&window.top.sugar.environment&&window.top.sugar.environment.sharedId&&(shareActivity(),B.setShared(!0));var q=document.getElementById("help-button");c.setElement("activity",document.getElementById("activity-button")),c.setElement("title",document.getElementById("title")),c.setElement("network",w),c.setElement("help",q),c.setElement("shared",document.getElementById("shared-button")),c.setElement("png",E),c.setElement("zoom",k),c.setElement("color",x),c.setElement("add",h),c.setElement("remove",b),c.setElement("undo",document.getElementById("undo-button")),c.setElement("redo",document.getElementById("redo-button")),c.setElement("stop",Y),c.setElement("node",document.getElementById("canvas")),q.addEventListener("click",(function(e){c.start()})),r.getEnvironment((function(e,t){t.help&&setTimeout((function(){c.start(c.tourInit)}),500)})),window.addEventListener("localized",(function(){r.getEnvironment((function(e,t){var o="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,n=t.user?t.user.language:o;l10n_s.language.code!=n&&(l10n_s.language.code=n);var i=M;if(M=l10n_s.get("YourNewIdea"),h.title=l10n_s.get("nodetextTitle"),b.title=l10n_s.get("removeButtonTitle"),X.title=l10n_s.get("undoButtonTitle"),Z.title=l10n_s.get("redoButtonTitle"),k.title=l10n_s.get("zoomButtonTitle"),E.title=l10n_s.get("pngButtonTitle"),w.title=l10n_s.get("networkButtonTitle"),q.title=l10n_s.get("helpButtonTitle"),document.getElementById("background-image-button").title=l10n_s.get("BackgroundChangeTitle"),cy){for(var a=cy.elements("node"),c=0;c<a.length;c++){var r=a[c];r.data("content")==i&&(r.data("content",M),r.style({content:M}))}R&&R.value==i&&(R.value=M,N&&showEditField(N))}}))}),!1),cy=cytoscape({container:document.getElementById("cy"),ready:function(){cy=this;var t,o=createNode(newId(),M,{x:(t=document.getElementById("canvas")).clientWidth/2,y:t.clientHeight/2},u);pushState({redo:{action:"create",id:o.id(),text:o.data("content"),position:{x:o.position().x,y:o.position().y},color:u},undo:{action:"delete",id:o.id()}}),o.select(),selectNode(o),showEditField(o),N=o,e.getDatastoreObject().loadAsText((function(e,t,o){Array.isArray(o)&&(o={background_image:"",background_color:"#ffffff",commands:o,img_x:0,img_y:0}),initGraph(o.commands),""!=o.background_image?(I=!0,L=o.img_x,C=o.img_y,z=-1*L,S=-1*C,set_background_img(o.background_image)):""!=o.background_color&&(document.getElementById("cy").style.backgroundColor=o.background_color)}))},style:[{selector:".standard-node",css:{width:"200px",height:"200px","text-valign":"center","text-halign":"center","border-color":"darkgray","border-width":"1px","background-color":u,"text-wrap":"wrap","text-max-width":"200px","text-overflow-wrap":"anywhere","shadow-color":"black","shadow-offset-x":"4px","shadow-offset-y":"4px","shadow-opacity":"0.5",shape:"rectangle"}}]}),cy.on("tap","node",(function(){if(1==v)return pushState({redo:{action:"delete",id:this.id()},undo:{action:"create",id:this.id(),text:this.data("content"),position:{x:this.position().x,y:this.position().y},color:u}}),null!=(e=this)&&cy.remove(e),void(N==this&&(N=null));var e;isSelectedNode(this)||(null!=N&&(updateNodeText(N,R.value),unselectNode(N)),selectNode(this),showEditField(this)),N=this})),cy.on("unselect","node",(function(){saveAndFinishEdit(),unselectNode(this)})),cy.on("tap",(function(e){if(e.cyTarget===cy&&0==v){saveAndFinishEdit();var t=createNode(newId(),M,e.cyPosition,u);pushState({redo:{action:"create",id:t.id(),text:t.data("content"),position:{x:t.position().x,y:t.position().y},color:u},undo:{action:"delete",id:t.id()}}),t.select(),selectNode(t),showEditField(t),N=t}})),cy.on("drag","node",(function(e){saveAndFinishEdit(),null==O&&(O={x:this.position().x,y:this.position().y})})),cy.on("free","node",(function(e){null==O||this.position().x==O.x&&this.position().y==O.y||pushState({redo:{action:"update",id:this.id(),position:{x:this.position().x,y:this.position().y}},undo:{action:"update",id:this.id(),position:{x:O.x,y:O.y}}}),O=null})),cy.on("zoom",(function(e){F=e.cy._private.zoom,document.getElementById("cy").style.backgroundSize=F*A+"px "+F*D+"px",saveAndFinishEdit()})),cy.on("pan",(function(e){if(""!=document.getElementById("cy").style.backgroundImage){var t=T+(e.cy._private.pan.x-j),o=P+(e.cy._private.pan.y-U);document.getElementById("cy").style.backgroundPositionX=t.toString()+"px",document.getElementById("cy").style.backgroundPositionY=o.toString()+"px"}z=e.cy._private.pan.x,S=e.cy._private.pan.y,saveAndFinishEdit()}))}))}));