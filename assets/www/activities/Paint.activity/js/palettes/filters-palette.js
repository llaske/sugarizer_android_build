/*! Sugarizer 2020-03-14 */
define(["sugar-web/graphics/palette","mustache"],function(a,b){function c(a){for(var b=a.getContext("2d"),c=b.getImageData(0,0,a.width,a.height),d=c.data,e=0,f=d.length;e<f;e+=4)d[e]=255-d[e],d[e+1]=255-d[e+1],d[e+2]=255-d[e+2];b.putImageData(c,0,0)}function d(a){for(var b=a.getContext("2d"),c=b.getImageData(0,0,a.width,a.height),d=c.data,e=0,f=d.length;e<f;e+=4){var g=.3*d[e]+.59*d[e+1]+.11*d[e+2];d[e]=g,d[e+1]=g,d[e+2]=g}b.putImageData(c,0,0)}function e(a){switch(PaintApp.saveCanvas(),a.detail.filter){case"invert":c(PaintApp.elements.canvas);break;case"grayscale":d(PaintApp.elements.canvas)}if(PaintApp.saveCanvas(),PaintApp.data.isShared)try{PaintApp.collaboration.sendMessage({action:"toDataURL",data:{width:PaintApp.elements.canvas.width/window.devicePixelRatio,height:PaintApp.elements.canvas.height/window.devicePixelRatio,src:PaintApp.collaboration.compress(PaintApp.elements.canvas.toDataURL())}})}catch(a){}}function f(){var a=document.getElementById("filters-button");new PaintApp.palettes.filtersPalette.FiltersPalette(a,void 0).addEventListener("filtersChange",e)}var g={};g.initGui=f,g.FiltersPalette=function(c,d){function e(a){h.filtersChangeEvent.detail.filter=a.target.value,h.getPalette().dispatchEvent(h.filtersChangeEvent),h.popDown()}a.Palette.call(this,c,d),this.filtersChangeEvent=document.createEvent("CustomEvent"),this.filtersChangeEvent.initCustomEvent("filtersChange",!0,!0,{filters:"icons/size-1.svg"}),this.template='<tbody>{{#rows}}<tr>{{#.}}<td><button value="{{value}}" style="height:55px; width:55px; background-image: url({{ filters }}); background-repeat: no-repeat; background-position: center; "></button></td>{{/.}}</tr>{{/rows}}</tbody>';var f=document.createElement("table");f.className="filterss";var g={rows:[[{filters:"icons/effect-grayscale.svg",value:"grayscale"},{filters:"icons/invert-colors.svg",value:"invert"}]]};f.innerHTML=b.render(this.template,g),this.setContent([f]),this.buttons=f.querySelectorAll("button");for(var h=this,i=0;i<this.buttons.length;i++)this.buttons[i].addEventListener("click",e)};var h=function(a){var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0),this.buttons[a].dispatchEvent(b)},i=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return g.FiltersPalette.prototype=Object.create(a.Palette.prototype,{setfilters:{value:h,enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:i,enumerable:!0,configurable:!0,writable:!0}}),g});