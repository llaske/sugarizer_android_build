enyo.kind({name:"VideoViewer.Item",kind:enyo.Control,published:{code:"",title:"",category:"",isFavorite:!1,image:"",tojournal:!1},events:{onVideoPlayed:""},classes:"item",components:[{name:"spinner",kind:"Image",src:"images/spinner-dark.gif",classes:"spinner"},{name:"background",classes:"itemImage",kind:"Image",src:"images/notloaded.png"},{name:"itemImage",classes:"itemImage",kind:"Image",showing:!1,onload:"imageLoaded",onerror:"defaultImage",ontap:"showVideo"},{name:"itemPlay",classes:"itemPlay",kind:"Image",showing:!1,src:"icons/play.svg",ontap:"showVideo"},{name:"itemFavorite",classes:"itemFavorite",kind:"Image",src:"icons/notfavorite.svg",showing:!1,ontap:"showVideo"},{name:"itemOverlay",classes:"itemOverlay"},{name:"itemTitle",classes:"itemTitle",content:""}],create:function(){this.inherited(arguments),this.nameChanged(),this.titleChanged(),this.isFavoriteChanged(),this.tojournalChanged()},nameChanged:function(){this.image&&this.image;var e=this.replaceValues(Util.getImages());if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime){var t=new XMLHttpRequest,i=this;t.open("GET",e,!0),t.responseType="blob",t.onload=function(e){i.$.itemImage.setAttribute("src",window.URL.createObjectURL(this.response))},t.send()}else this.$.itemImage.setAttribute("src",e)},titleChanged:function(){this.$.itemTitle.setContent(this.title)},isFavoriteChanged:function(){this.$.itemFavorite.setShowing(this.isFavorite)},imageLoaded:function(){this.$.itemImage.setShowing(!0),this.$.itemPlay.setShowing(!0),this.$.spinner.setShowing(!1),this.$.background.setShowing(!1)},tojournalChanged:function(){this.tojournal?this.$.itemPlay.setSrc("icons/tojournal.svg"):this.$.itemPlay.setSrc("images/play.svg"),this.$.itemPlay.render()},defaultImage:function(){this.$.itemImage.setAttribute("src","images/notloaded.png"),this.$.itemImage.setShowing(!0),this.$.itemPlay.setShowing(!0),this.$.spinner.setShowing(!1),this.$.background.setShowing(!1)},replaceValues:function(e){var t=e;return t=(t=(t=(t=t.replace(new RegExp("%id%","g"),this.code)).replace(new RegExp("%image%","g"),this.image)).replace(new RegExp("%category%","g"),this.category)).replace(new RegExp("%title%","g"),this.title)},videoURL:function(){return this.replaceValues(Util.getVideos())+"."+constant.videoType},exportToVideo:function(){var e=this.videoURL(),t="mp4"==constant.videoType?"video/mp4":"video/webm",i=new XMLHttpRequest;i.open("GET",e,!0),i.setRequestHeader("Content-type",t),i.responseType="arraybuffer";var n=this;i.onload=function(){if(200==i.status||0==i.status){var e=new Uint8Array(this.response),s="data:"+t+";base64,"+Util.toBase64(e),a={mimetype:t,title:n.title+"."+constant.videoType,activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};app.datastore.create(a,(function(){console.log("video '"+n.title+"' saved in journal.")}),s)}},i.send()},showVideo:function(){this.tojournal&&this.exportToVideo(),this.doVideoPlayed()}});