enyo.kind({name:"Abcd.Entry",kind:"Abcd.Item",published:{index:"",imageonly:!1,textonly:!1,soundonly:!1,tojournal:0},classes:"entry",components:[{name:"spinner",kind:"Image",src:"images/spinner-light.gif",classes:"spinner"},{name:"contentBox",showing:!1,components:[{name:"itemImage",classes:"entryImage",kind:"Image",onload:"imageLoaded",onerror:"imageError"},{name:"soundIcon",kind:"Image",classes:"entrySoundIcon"},{name:"itemText",classes:"entryText"}]},{kind:"Signals",onEndOfSound:"endOfSound"}],events:{onEntrySoundEnded:""},create:function(){this.inherited(arguments),this.sound=null,this.imageonlyChanged(),this.textonlyChanged(),this.soundonlyChanged(),this.indexChanged(),this.tojournalChanged()},imageLoaded:function(){""!==this.index&&(this.$.spinner.hide(),this.$.contentBox.show())},imageError:function(){Abcd.goHome()},imageonlyChanged:function(){this.imageonly&&Abcd.changeVisibility(this,{itemImage:!0,soundIcon:!1,itemText:!1})},textonlyChanged:function(){this.textonly&&Abcd.changeVisibility(this,{itemImage:!1,soundIcon:!1,itemText:!0})},soundonlyChanged:function(){this.soundonly&&Abcd.changeVisibility(this,{itemImage:!1,soundIcon:!0,itemText:!1})},tojournalChanged:function(){this.tojournal?this.$.soundIcon.setSrc("icons/journal.svg"):this.$.soundIcon.setSrc("images/sound_off"+(this.soundonly?1:0)+".png"),this.$.soundIcon.render()},setLocale:function(){this.indexChanged(),this.inherited(arguments)},indexChanged:function(){var e=Abcd.entries[this.index],t=Abcd.context.getDatabase()+"images/database/"+e.code+".png",n=__$FC(e.text);1==Abcd.context.casevalue&&(n=n.toUpperCase()),this.soundonly&&this.$.soundIcon.addClass("entrySoundIconOnly"),e[Abcd.context.lang]?(this.sound=Abcd.context.getDatabase()+"audio/"+Abcd.context.lang+"/database/"+e.code,this.$.soundIcon.setSrc("images/sound_off"+(this.soundonly?1:0)+".png")):(this.sound=null,this.$.soundIcon.setSrc("images/sound_none"+(this.soundonly?1:0)+".png")),this.$.itemImage.setAttribute("src",t),this.$.itemText.removeClass("entryText0"),this.$.itemText.removeClass("entryText1"),this.$.itemText.removeClass("entryText2"),this.$.itemText.addClass("entryText"+Abcd.context.casevalue),this.imageonly&&this.$.itemImage.addClass("entryImageOnly"),this.$.itemText.setContent(n),this.textonly&&this.$.itemText.addClass("entryTextOnly")},exportToImage:function(){var e=Abcd.entries[this.index],t=this.$.itemImage.hasNode(),n=document.createElement("canvas"),i=n.getContext("2d");n.width=n.height=210,i.drawImage(t,0,0,n.width,n.height);var s=n.toDataURL("image/png"),o={mimetype:"image/png",title:__$FC(e.text)+".png",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};Abcd.datastore.create(o,(function(){console.log("image '"+__$FC(e.text)+"' saved in journal.")}),s)},exportToSound:function(){var e="";0==this.sound.indexOf("http")?e=this.sound+".mp3":(e=(e=window.location.href).substring(0,e.indexOf("/index.html")),e+="/"+this.sound+".mp3");var t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Content-type","audio/mpeg"),t.responseType="arraybuffer";var n=this;t.onload=function(){if(200==t.status||0==t.status){var e=Abcd.entries[n.index],i=new Uint8Array(this.response),s="data:audio/mpeg;base64,"+Abcd.toBase64(i),o={mimetype:"audio/mpeg",title:__$FC(e.text)+".mp3",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};Abcd.datastore.create(o,(function(){console.log("sound '"+__$FC(e.text)+"' saved in journal.")}),s)}},t.send()},play:function(e){if(this.tojournal)return 1==this.tojournal?this.exportToImage():this.exportToSound(),this.tojournal=0,void this.indexChanged();null!=this.sound&&(this.$.soundIcon.setSrc("images/sound_on"+(this.soundonly?1:0)+".png"),e.play(this.sound))},endOfSound:function(e,t){t.sound==this.sound&&(this.doEntrySoundEnded(),this.$.soundIcon.setSrc("images/sound_off"+(this.soundonly?1:0)+".png"))},abort:function(){void 0!==this.$.soundIcon&&this.$.soundIcon.setSrc("images/sound_off"+(this.soundonly?1:0)+".png")}});