define(["sugar-web/graphics/palette","mustache"],(function(t,e){var n={Fontpalette:function(n,i){t.Palette.call(this,n,i),this.getPalette().id="fontpalette",this.fontChangeEvent=document.createEvent("CustomEvent"),this.fontChangeEvent.initCustomEvent("fontChange",!0,!0,{family:"Arial"}),this.template='<center style="padding-top:6px ; "><table><tbody>{{#rows}}<tr>{{#.}}<td><button lineHeight="{{lineHeight}}" title="{{fontFamily}}" style="height:55px; width:55px; background-size:40px !important;  background: #fff url({{ icon }}) no-repeat center; "></button></td>{{/.}}</tr>{{/rows}}</tbody></table></center><br/>';var o=document.createElement("div");o.innerHTML=e.render(this.template,{rows:[[{icon:"icons/font-arial.svg",lineHeight:"0.7",fontFamily:"Arial"},{icon:"icons/font-comic-sans.svg",lineHeight:"0.8",fontFamily:"Comic Sans MS"},{icon:"icons/font-verdana.svg",lineHeight:"0.8",fontFamily:"Verdana"},{icon:"icons/font-times.svg",lineHeight:"0.8",fontFamily:"Times New Roman"}],[{icon:"icons/font-courier.svg",lineHeight:"0.8",fontFamily:"Courier New"},{icon:"icons/font-lucida.svg",lineHeight:"0.8",fontFamily:"Lucida Console"},{icon:"icons/font-impact.svg",lineHeight:"0.8",fontFamily:"Impact"},{icon:"icons/font-georgia.svg",lineHeight:"0.8",fontFamily:"Georgia"}]]}),this.setContent([o]);var a=o.querySelectorAll("button"),l=this;for(var r=0;r<a.length;r++)a[r].addEventListener("click",(function(t){l.fontChangeEvent.detail.family=t.target.title,l.getPalette().dispatchEvent(l.fontChangeEvent),l.popDown()}));!function popDownOnButtonClick(t){l.popDown()}(a[0])}};return n.Fontpalette.prototype=Object.create(t.Palette.prototype,{setFont:{value:function(t){for(var e=this.getPalette().querySelectorAll("button"),n=0;n<e.length;n++)t==e[n].title?e[n].style.border="1px solid #f00":e[n].style.border="0px solid #000"},enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:function(t,e,n){return this.getPalette().addEventListener(t,e,n)},enumerable:!0,configurable:!0,writable:!0}}),n}));