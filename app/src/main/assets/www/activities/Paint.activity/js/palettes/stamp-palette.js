define(["sugar-web/graphics/palette","mustache"],(function(t,e){var a={};function getRows(){var t="webkit";"undefined"!=typeof InstallTrigger&&(t="gecko");for(var e=[[{stampBase:"stamps/heart-{platform}.svg",proportionnal:!0},{stampBase:"stamps/star-{platform}.svg",proportionnal:!0},{stampBase:"stamps/square-{platform}.svg",proportionnal:!1}],[{stampBase:"stamps/circle-{platform}.svg",proportionnal:!0},{stampBase:"stamps/triangle-{platform}.svg",proportionnal:!0},{stampBase:"stamps/flower-{platform}.svg",proportionnal:!0}]],a=0;a<e.length;a++)for(var n=0;n<e[a].length;n++)e[a][n].stamp=e[a][n].stampBase.replace("{platform}",t);return e}a.StampPalette=function(a,n){t.Palette.call(this,a,n),this.stampChangeEvent=document.createEvent("CustomEvent"),this.stampChangeEvent.initCustomEvent("stampChange",!0,!0,{}),this.template='<tbody>{{#rows}}<tr>{{#.}}<td><button base="{{stampBase}}" proportionnal="{{proportionnal}}" value="{{stamp}}" style="height:55px; width:55px; background-size:40px; background-image: url({{ stamp }}); background-repeat: no-repeat; background-position: center; "></button></td>{{/.}}</tr>{{/rows}}</tbody>';var r=document.createElement("table");r.className="stamps";var o={rows:getRows()};r.innerHTML=e.render(this.template,o),this.setContent([r]);var s=r.querySelectorAll("button");this.buttons=s;var p=this;function popDownOnButtonClick(t){for(var e=0;e<s.length;e++)s[e].style.border="0px solid #000";t.target.style.border="1px solid #f00",p.stampChangeEvent.detail.proportionnal=t.target.getAttribute("proportionnal"),p.stampChangeEvent.detail.stampBase=t.target.getAttribute("base"),p.stampChangeEvent.detail.stamp=t.target.value,p.getPalette().dispatchEvent(p.stampChangeEvent),p.popDown()}for(var l=0;l<s.length;l++)s[l].addEventListener("click",popDownOnButtonClick)};return a.StampPalette.prototype=Object.create(t.Palette.prototype,{setStamp:{value:function(t){var e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0),this.buttons[t].dispatchEvent(e)},enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:function(t,e,a){return this.getPalette().addEventListener(t,e,a)},enumerable:!0,configurable:!0,writable:!0}}),a}));