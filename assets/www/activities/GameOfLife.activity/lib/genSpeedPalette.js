define(["sugar-web/graphics/palette","text!genSpeedPalette.html"],(function(e,t){"use strict";var i={ActivityPalette:function(i,a){e.Palette.call(this,i),this.getPalette().id="activity-palette";var l=document.createElement("div");l.innerHTML=t,this.setContent([l]),this.speedScale=l.querySelector("#speedvalue"),this.speedScale.oninput=function(){var e=this.value/100,t=950*e*e-1900*e+1e3;a.set({generationTimeInterval:t})}}};return i.ActivityPalette.prototype=Object.create(e.Palette.prototype,{setTitleDescription:{value:"Speed Palette:",enumerable:!0,configurable:!0,writable:!0}}),i}));