/*! Sugarizer 2020-03-14 */
define(["sugar-web/activity/activity","sugar-web/datastore","notepalette","zoompalette","sugar-web/graphics/presencepalette","humane","tutorial","sugar-web/env"],function(a,b,c,d,e,f,g,h){var i="#FFF29F",j=!1,k=!1,l=null,m={};requirejs(["domReady!"],function(n){a.setup();var o=0,p=document.getElementById("nodetext-button"),q=document.getElementById("delete-button"),r=function(a){o=a,p.classList.remove("active"),q.classList.remove("active"),L(),0==a?p.classList.add("active"):1==a&&q.classList.add("active"),null!=y&&(H(),y=null)};p.addEventListener("click",function(){r(0)},!0),q.addEventListener("click",function(){r(1)},!0);var s=document.getElementById("color-button");colorPalette=new c.NotePalette(s),colorPalette.setColor("rgb(255, 242, 159)"),colorPalette.addEventListener("colorChange",function(a){E(y)&&(Z({redo:{action:"update",id:y.id(),color:a.detail.color},undo:{action:"update",id:y.id(),color:y.data("background-color")}}),y.style("background-color",a.detail.color),y.data("background-color",a.detail.color)),A.style.backgroundColor=a.detail.color,i=a.detail.color});var t=document.getElementById("zoom-button");zoomPalette=new d.zoomPalette(t),zoomPalette.addEventListener("pop",function(a){}),zoomPalette.addEventListener("zoom",function(a){var b=a.detail.zoom,c=cy.zoom(),d=.25;0==b?c!=cy.minZoom()&&c-d>cy.minZoom()&&cy.zoom(c-d):1==b?c!=cy.maxZoom()&&cy.zoom(c+d):2==b?cy.fit():3==b&&cy.center()});var u=document.getElementById("png-button");u.addEventListener("click",function(a){var c=cy.png(),d=c.split(";")[0].split(":")[1],e=d.split("/")[0],f={mimetype:d,title:e.charAt(0).toUpperCase()+e.slice(1)+" Shared Notes",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};b.create(f,function(){console.log("export done.")},c)});var v=document.getElementById("network-button"),w=new e.PresencePalette(v,void 0),x=document.getElementById("stop-button");x.addEventListener("click",function(a){console.log("writing..."),S(function(a){null===a?console.log("write done."):console.log("write failed.")})});var y=null,z="<Your content>",A=document.getElementById("textvalue"),B=null;A.addEventListener("click",function(a){L()});var C=function(a,b,c,d){cy.add({group:"nodes",nodes:[{data:{id:a,content:b,color:"rgb(0, 0, 0)","background-color":d},position:{x:c.x,y:c.y}}]});var e=cy.getElementById(a);return e.style({content:b,"background-color":d}),e.addClass("standard-node"),e},D=function(a,b){if(null!=a){var c=a.data("content");void 0===b?b=a.style().content:a.data("content",b),a.style({content:b}),c!=b&&Z({redo:{action:"update",id:a.id(),text:b},undo:{action:"update",id:a.id(),text:c}})}},E=function(a){return null!=a&&"dashed"==a.style()["border-style"]},F=function(a){null!=a&&a.style({"border-color":"black","border-style":"dashed","border-width":"4px"})},G=function(a){null!=a&&a.style({"border-color":"darkgray","border-style":"solid","border-width":"1px"})},H=function(){for(var a=cy.collection("node"),b=0;b<a.length;b++)G(a[b])},I=function(a){null!=a&&cy.remove(a)},J=function(a){var b=a.renderedPosition(),c=cy.zoom();A.value=a.data("content"),A.style.visibility="visible",A.style.backgroundColor=a.style().backgroundColor;var d=100*c-200*c;A.style.left=b.x+d+"px",A.style.top=55+b.y+d+"px",A.style.width=190*c+"px",A.style.height=190*c+"px",A.value==z?A.setSelectionRange(0,A.value.length):A.setSelectionRange(A.value.length,A.value.length),A.focus()},K=function(){textvalue.style.visibility="hidden"},L=function(){null!=y&&E(y)&&(D(y,A.value),K(),G(y))},M=function(){var a=document.getElementById("canvas");return{x:a.clientWidth/2,y:a.clientHeight/2}},N=function(){for(var a=[],b="0123456789abcdef",c=0;c<36;c++)a[c]=b.substr(Math.floor(16*Math.random()),1);return a[14]="4",a[19]=b.substr(3&a[19]|8,1),a[8]=a[13]=a[18]=a[23]="-",a.join("")},O=function(a){if(void 0!==a.action)if("create"==a.action)C(a.id,a.text,a.position,a.color);else if("delete"==a.action){var b=cy.getElementById(a.id);if(null==b)return;cy.remove(b)}else if("update"==a.action){var b=cy.getElementById(a.id);if(null==b)return;void 0!==a.text&&(b.data("content",a.text),b.style({content:a.text})),void 0!==a.color&&(b.data("background-color",a.color),b.style({"background-color":a.color})),void 0!==a.position&&b.position({x:a.position.x,y:a.position.y})}},P=function(a){if(null!=a){cy.remove("node"),y=null;for(var b=0;b<a.length;b++)O(a[b]);K(),Y()}},Q=function(){a.getDatastoreObject().loadAsText(function(a,b,c){P(c)})},R=function(){for(var a=[],b=cy.elements("node"),c=0;c<b.length;c++){var d=b[c];a.push({action:"create",id:d.id(),text:d.data("content"),position:{x:d.position().x,y:d.position().y},color:d.data("background-color")})}return a},S=function(b){var c=a.getDatastoreObject(),d=R();c.setDataAsText(d),c.save(b)},T=[],U=0,V=30,W=document.getElementById("undo-button");W.addEventListener("click",function(){L(),$()},!0);var X=document.getElementById("redo-button");X.addEventListener("click",function(){L(),_()},!0);var Y=function(){T=[],U=0},Z=function(a,b){if(U<T.length-1){for(var c=[],d=0;d<U+1;d++)c.push(T[d]);T=c}var e=T.length-1,f=a;if(e<V)T.push(f);else{for(var d=0;d<e;d++)T[d]=T[d+1];T[T.length-1]=f}U=T.length-1,j&&!b&&fa({action:"updateBoard",data:a}),aa()},$=function(a){if(!(T.length<1||U<0)){var b=T[U--].undo;O(b),j&&!a&&fa({action:"undoBoard"}),aa()}},_=function(a){if(!(U+1>=T.length)){var b=T[++U].redo;O(b),j&&!a&&fa({action:"redoBoard"}),aa()}},aa=function(){var a=T.length;W.disabled=T.length<1||U<0,X.disabled=U+1>=a},ba=function(a){var b='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\' [<!ENTITY stroke_color "#010101"><!ENTITY fill_color "#FFFFFF">]><svg enable-background="new 0 0 55 55" height="55px" version="1.1" viewBox="0 0 55 55" width="55px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><g display="block" id="stock-xo_1_"><path d="M33.233,35.1l10.102,10.1c0.752,0.75,1.217,1.783,1.217,2.932   c0,2.287-1.855,4.143-4.146,4.143c-1.145,0-2.178-0.463-2.932-1.211L27.372,40.961l-10.1,10.1c-0.75,0.75-1.787,1.211-2.934,1.211   c-2.284,0-4.143-1.854-4.143-4.141c0-1.146,0.465-2.184,1.212-2.934l10.104-10.102L11.409,24.995   c-0.747-0.748-1.212-1.785-1.212-2.93c0-2.289,1.854-4.146,4.146-4.146c1.143,0,2.18,0.465,2.93,1.214l10.099,10.102l10.102-10.103   c0.754-0.749,1.787-1.214,2.934-1.214c2.289,0,4.146,1.856,4.146,4.145c0,1.146-0.467,2.18-1.217,2.932L33.233,35.1z" fill="&fill_color;" stroke="&stroke_color;" stroke-width="3.5"/><circle cx="27.371" cy="10.849" fill="&fill_color;" r="8.122" stroke="&stroke_color;" stroke-width="3.5"/></g></svg>';return b=b.replace("#010101",a.stroke),b=b.replace("#FFFFFF",a.fill),"data:image/svg+xml;base64,"+btoa(b)},ca=function(){var a=document.getElementById("presence-users"),b="<hr><ul style='list-style: none; padding:0;'>";for(var c in m)b+="<li><img style='height:30px;' src='"+ba(m[c].colorvalue)+"'>"+m[c].name+"</li>";b+="</ul>",a.innerHTML=b},da=function(a){var b=document.getElementById("presence-users");a&&b&&l.listSharedActivityUsers(l.getSharedInfo().id,function(a){m={};for(var b=0;b<a.length;b++){var c=a[b];m[c.networkId]=c}ca()})},ea=function(){l=a.getPresenceObject(function(a,b){if(a)return void console.log("error");j=!0,userSettings=b.getUserInfo(),console.log("connected"),window.top.sugar.environment.sharedId||(k=!0,b.createSharedActivity("org.olpcfrance.sharednotes",function(a){})),b.onConnectionClosed(function(a){console.log(a),console.log("Connection closed")}),b.onSharedActivityUserChanged(function(a){ha(a)}),b.onDataReceived(ga)})},fa=function(a){try{l.sendMessage(l.getSharedInfo().id,{user:l.getUserInfo(),content:a})}catch(a){}},ga=function(a){if(l.getUserInfo().networkId!==a.user.networkId)switch(a.content.action){case"initialBoard":P(a.content.data);break;case"updateBoard":O(a.content.data.redo),Z(a.content.data,!0);break;case"undoBoard":$(!0);break;case"redoBoard":_(!0)}},ha=function(a){var b=a.user.name.replace("<","&lt;").replace(">","&gt;"),c="<img style='height:30px;' src='"+ba(a.user.colorvalue)+"'>";1===a.move?(f.log(c+l10n_s.get("PlayerJoin",{user:b})),k&&fa({action:"initialBoard",data:R()})):-1===a.move&&f.log(c+l10n_s.get("PlayerLeave",{user:b})),l.listSharedActivities(function(a){for(var b=0;b<a.length;b++)a[b].id===l.getSharedInfo().id&&da(a[b].users)})};w.addEventListener("shared",function(){w.popDown(),ea()}),window.top&&window.top.sugar&&window.top.sugar.environment&&window.top.sugar.environment.sharedId&&(ea(),w.setShared(!0));var ia=document.getElementById("help-button");g.setElement("activity",document.getElementById("activity-button")),g.setElement("title",document.getElementById("title")),g.setElement("network",v),g.setElement("help",ia),g.setElement("shared",document.getElementById("shared-button")),g.setElement("png",u),g.setElement("zoom",t),g.setElement("color",s),g.setElement("add",p),g.setElement("remove",q),g.setElement("undo",document.getElementById("undo-button")),g.setElement("redo",document.getElementById("redo-button")),g.setElement("stop",x),g.setElement("node",document.getElementById("canvas")),ia.addEventListener("click",function(a){g.start()}),h.getEnvironment(function(a,b){b.help&&setTimeout(function(){g.start(g.tourInit)},500)}),window.addEventListener("localized",function(){h.getEnvironment(function(a,b){var c="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,d=b.user?b.user.language:c;l10n_s.language.code!=d&&(l10n_s.language.code=d);var e=z;if(z=l10n_s.get("YourNewIdea"),p.title=l10n_s.get("nodetextTitle"),q.title=l10n_s.get("removeButtonTitle"),W.title=l10n_s.get("undoButtonTitle"),X.title=l10n_s.get("redoButtonTitle"),t.title=l10n_s.get("zoomButtonTitle"),u.title=l10n_s.get("pngButtonTitle"),v.title=l10n_s.get("networkButtonTitle"),ia.title=l10n_s.get("helpButtonTitle"),cy){for(var f=cy.elements("node"),g=0;g<f.length;g++){var h=f[g];h.data("content")==e&&(h.data("content",z),h.style({content:z}))}A&&A.value==e&&(A.value=z,y&&J(y))}})},!1),cy=cytoscape({container:document.getElementById("cy"),ready:function(){cy=this;var a=C(N(),z,M(),i);Z({redo:{action:"create",id:a.id(),text:a.data("content"),position:{x:a.position().x,y:a.position().y},color:i},undo:{action:"delete",id:a.id()}}),a.select(),F(a),J(a),y=a,Q()},style:[{selector:".standard-node",css:{width:"200px",height:"200px","text-valign":"center","text-halign":"center","border-color":"darkgray","border-width":"1px","background-color":i,"text-wrap":"wrap","text-max-width":"200px","text-overflow-wrap":"anywhere","shadow-color":"black","shadow-offset-x":"4px","shadow-offset-y":"4px","shadow-opacity":"0.5",shape:"rectangle"}}]}),cy.on("tap","node",function(){if(1==o)return Z({redo:{action:"delete",id:this.id()},undo:{action:"create",id:this.id(),text:this.data("content"),position:{x:this.position().x,y:this.position().y},color:i}}),I(this),void(y==this&&(y=null));E(this)||(null!=y&&(D(y,A.value),G(y)),F(this),J(this)),y=this}),cy.on("unselect","node",function(){L(),G(this)}),cy.on("tap",function(a){if(a.target===cy&&0==o){L();var b=C(N(),z,a.position,i);Z({redo:{action:"create",id:b.id(),text:b.data("content"),position:{x:b.position().x,y:b.position().y},color:i},undo:{action:"delete",id:b.id()}}),b.select(),F(b),J(b),y=b}}),cy.on("drag","node",function(a){L(),null==B&&(B={x:this.position().x,y:this.position().y})}),cy.on("free","node",function(a){null==B||this.position().x==B.x&&this.position().y==B.y||Z({redo:{action:"update",id:this.id(),position:{x:this.position().x,y:this.position().y}},undo:{action:"update",id:this.id(),position:{x:B.x,y:B.y}}}),B=null}),cy.on("zoom",function(){L()}),cy.on("pan",function(){L()})})});