/*! Sugarizer 2020-03-14 */
define(["widepalette","text!speechpalette.html"],function(a,b){"use strict";var c={};return c.ActivityPalette=function(c,d){a.Palette.call(this,c);this.getPalette().id="activity-palette";var e=document.createElement("div");e.innerHTML=b,this.setContent([e]),this.pitchScale=e.querySelector("#pitchvalue"),this.rateScale=e.querySelector("#ratevalue"),this.pitchScale.onclick=function(){document.getElementById("pitch").innerHTML=this.value},this.rateScale.onclick=function(){document.getElementById("rate").innerHTML=3*this.value+10}},c.ActivityPalette.prototype=Object.create(a.Palette.prototype,{setTitleDescription:{value:"Speech Palette:",enumerable:!0,configurable:!0,writable:!0}}),c});