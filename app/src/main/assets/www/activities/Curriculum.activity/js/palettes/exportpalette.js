define(["sugar-web/graphics/palette","text!activity/palettes/exportpalette.html"],(function(t,e){var n={ExportPalette:function(n,a){t.Palette.call(this,n,a);var r=document.createElement("div");r.innerHTML=e,this.setContent([r]),this.uploadItemEvent=document.createEvent("CustomEvent"),this.uploadItemEvent.initCustomEvent("format-selected",!0,!0,{format:null});var o=this,i=document.getElementById("export-formats").children;for(var l of i)l.addEventListener("click",onClick);function onClick(t){o.uploadItemEvent.format=t.currentTarget.getAttribute("format"),o.getPalette().dispatchEvent(o.uploadItemEvent),o.popDown()}}};return n.ExportPalette.prototype=Object.create(t.Palette.prototype,{addEventListener:{value:function(t,e,n){return this.getPalette().addEventListener(t,e,n)},enumerable:!0,configurable:!0,writable:!0}}),n}));