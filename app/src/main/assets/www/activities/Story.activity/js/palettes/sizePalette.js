define(["sugar-web/graphics/palette","text!activity/palettes/sizePalette.html"],(function(e,t){var i={SizePalette:function(i,n){e.Palette.call(this,i,n),this.getPalette().id="size-palette";var l=document.createElement("div");l.innerHTML=t,this.setContent([l]),this.gridSizeSelectedEvent=document.createEvent("CustomEvent"),this.gridSizeSelectedEvent.initCustomEvent("grid-size-selected",!0,!0,{});addEventListenerForGridSize(this,this.gridSizeSelectedEvent)}},addEventListenerForGridSize=function(e,t){let i=document.getElementById("size-buttons").children;for(var n=0;n<i.length;n++){let l=i[n].title;i[n].addEventListener("click",(function(i){e.gridSizeSelectedEvent.count=l,e.getPalette().dispatchEvent(t),e.popDown()}))}};return i.SizePalette.prototype=Object.create(e.Palette.prototype,{addEventListener:{value:function(e,t,i){return this.getPalette().addEventListener(e,t,i)},enumerable:!0,configurable:!0,writable:!0}}),i}));