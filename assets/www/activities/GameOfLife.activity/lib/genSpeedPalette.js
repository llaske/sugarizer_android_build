/*! Sugarizer 2020-03-14 */
define(["sugar-web/graphics/palette","text!genSpeedPalette.html"],function(a,b){"use strict";var c={};return c.ActivityPalette=function(c,d){a.Palette.call(this,c);this.getPalette().id="activity-palette";var e=document.createElement("div");e.innerHTML=b,this.setContent([e]),this.speedScale=e.querySelector("#speedvalue"),this.speedScale.onclick=function(){var a=this.value/100,b=950*a*a-1900*a+1e3;d.set({generationTimeInterval:b})}},c.ActivityPalette.prototype=Object.create(a.Palette.prototype,{setTitleDescription:{value:"Speed Palette:",enumerable:!0,configurable:!0,writable:!0}}),c});