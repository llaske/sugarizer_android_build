/*! Sugarizer 2020-03-14 */
define(["sugar-web/graphics/palette","mustache"],function(a,b){var c={};c.zoomPalette=function(c,d){function e(a){i.popDown()}a.Palette.call(this,c,d),this.getPalette().id="zoompalette",this.zoomEvent=document.createEvent("CustomEvent"),this.zoomEvent.initCustomEvent("zoom",!0,!0,{zoom:3}),this.popEvent=document.createEvent("CustomEvent"),this.popEvent.initCustomEvent("pop",!0,!0,{}),this.template='{{#rows}}{{#.}}<button class="toolbutton zoombuttons" style="height:55px; width:55px; background-image: url({{ icon }}); "></button></td>{{/.}}{{/rows}}';var f=[[{icon:"icons/zoom-out.svg"},{icon:"icons/zoom-in.svg"},{icon:"icons/zoom-to-width.svg"},{icon:"icons/zoom-original.svg"}]],g=document.createElement("div");g.innerHTML=b.render(this.template,{rows:f}),this.setContent([g]);var h=g.querySelectorAll("button"),i=this;c.addEventListener("click",function(a){i.getPalette().dispatchEvent(i.popEvent)});for(var j=0;j<h.length;j++)h[j].addEventListener("click",function(a){for(var b=0;b<h.length&&this!=h[b];b++);i.zoomEvent.detail.zoom=b,i.getPalette().dispatchEvent(i.zoomEvent),i.popDown()});e({target:h[0]})};var d=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return c.zoomPalette.prototype=Object.create(a.Palette.prototype,{addEventListener:{value:d,enumerable:!0,configurable:!0,writable:!0}}),c});