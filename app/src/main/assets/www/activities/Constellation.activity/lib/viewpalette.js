define(["viewpalettetemplate","text!viewpalette.html"],(function(e,t){"use strict";var n={ActivityPalette:function(n,i){e.Palette.call(this,n),this.getPalette().id="view-palette";var o=document.createElement("div");o.innerHTML=t,this.setContent([o]),this.projectionobjects=document.getElementsByClassName("view");for(var l=this,c=0;c<this.projectionobjects.length;c++){this.projectionobjects[c].addEventListener("click",(function(){for(var e=document.getElementsByClassName("view"),t=0;t<e.length;t++)e[t].style.backgroundColor="black";this.style.backgroundColor="grey",document.getElementById("projection-view").innerHTML=this.id,l.popDown()}));var r=document.getElementById(document.getElementById("projection-view").innerHTML);null==r&&(r=document.getElementById("stereo"))}}};return n.ActivityPalette.prototype=Object.create(e.Palette.prototype,{setTitleDescription:{value:"Projection View Select:",enumerable:!0,configurable:!0,writable:!0}}),n}));