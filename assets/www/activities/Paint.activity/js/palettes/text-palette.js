/*! Sugarizer 2020-03-14 */
define(["sugar-web/graphics/palette","mustache"],function(a,b){var c={};c.TextPalette=function(c,d){function e(a){for(var b=0;b<h.length;b++)h[b].style.border="0px solid #000";a.target.style.border="1px solid #f00",PaintApp.modes.Text.fontFamily=a.target.getAttribute("fontFamily"),PaintApp.modes.Text.lineHeight=a.target.getAttribute("lineHeight"),i.popDown()}a.Palette.call(this,c,d),this.template='<input id="text-input" value="Paint" type="text" style="margin:10px;"><center><table><tbody>{{#rows}}<tr>{{#.}}<td><button lineHeight="{{lineHeight}}" fontFamily="{{fontFamily}}" style="height:55px; width:55px; background-size:40px !important;  background: #fff url({{ icon }}) no-repeat center; "></button></td>{{/.}}</tr>{{/rows}}</tbody></table></center><br/>';var f=[[{icon:"icons/text/arial.svg",lineHeight:"0.7",fontFamily:"Arial"},{icon:"icons/text/comic-sans.svg",lineHeight:"0.8",fontFamily:"Comic Sans MS"},{icon:"icons/text/verdana.svg",lineHeight:"0.8",fontFamily:"Verdana"}]],g=document.createElement("div");g.innerHTML=b.render(this.template,{rows:f}),this.setContent([g]);for(var h=g.querySelectorAll("button"),i=this,j=0;j<h.length;j++)h[j].addEventListener("click",e);e({target:h[0]})};var d=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return c.TextPalette.prototype=Object.create(a.Palette.prototype,{addEventListener:{value:d,enumerable:!0,configurable:!0,writable:!0}}),c});