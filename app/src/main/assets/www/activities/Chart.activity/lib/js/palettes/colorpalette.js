define(["sugar-web/graphics/palette","mustache"],(function(t,e){var o={};function parseColor(t){t.trim().startsWith("#")&&(t=function hexToRgb(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,o,r){return e+e+o+o+r+r}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?`rgb(${parseInt(e[1],16)},${parseInt(e[2],16)},${parseInt(e[3],16)})`:null}(t));for(var e=t.split("(")[1].split(")")[0].split(","),o=0;o<e.length;o++)e[o]=parseInt(e[o]);return e}o.initGui=function initGui(){var t=document.getElementById("colors-button-fill"),e=new PaintApp.palettes.colorPalette.ColorPalette(t,void 0),o=document.getElementById("colors-button-stroke"),r=new PaintApp.palettes.colorPalette.ColorPalette(o,void 0);e.addEventListener("color-change",(function onColorChangeFill(t){PaintApp.data.color.fill=t.detail.color})),e.getPalette().querySelector(".palette-invoker"),e.setColor(0),r.addEventListener("color-change",(function onColorChangeStroke(t){PaintApp.data.color.stroke=t.detail.color})),r.getPalette().querySelector(".palette-invoker"),r.setColor(2)},o.ColorPalette=function(o,r){this.invoker=o,t.Palette.call(this,o,r),this.getPalette().className+=" colorpalette",this.colorChangeEvent=document.createEvent("CustomEvent"),this.colorChangeEvent.initCustomEvent("color-change",!0,!0,{color:"#ed2529"}),this.template='        <style>            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {                input[type=range] {                    width:100px;                    background-color: transparent !important; /* Hides the slider so custom styles can be added */                }                }        </style>        <div style="width:370px;">          <div style="float:left; width: 190px;">              <table>                <tbody>                {{#rows}}                    <tr>                      {{#.}}                        <td>                          <button style="background-color: {{ color }}"></button>                        </td>                      {{/.}}                    </tr>                  {{/rows}}                </tbody>                </table>              </div>          <div style="float:left; width: 150px; padding-top:10px">          Red          <input class="multiplatformInputSlider" type="range"  min="0" max="255" />          <br/>          <br/>          Green          <input class="multiplatformInputSlider" type="range"  min="0" max="255" />          <br/>          <br/>          Blue          <input class="multiplatformInputSlider" type="range"  min="0" max="255" />          </div>      </div>';var l=document.createElement("div");l.className="colors";function popDownOnButtonClick(t,e,r){o.style.backgroundColor=t.target.style.backgroundColor,n.colorChangeEvent.detail.color=t.target.style.backgroundColor,n.getPalette().dispatchEvent(n.colorChangeEvent),n.getPalette().querySelector(".palette-invoker").style.backgroundColor=t.target.style.backgroundColor,null!=e&&!0!==e||n.popDown(),null!=r&&!0!==r||function updateSliders(t){colors=parseColor(t),n.inputSliders[0].value=colors[0],n.inputSliders[1].value=colors[1],n.inputSliders[2].value=colors[2]}(n.colorChangeEvent.detail.color)}l.innerHTML=e.render(this.template,{rows:[[{color:"#FF2B34"},{color:"#00EA11"},{color:"#005FE4"}],[{color:"#FF8F00"},{color:"#008009"},{color:"#00A0FF"}],[{color:"#FFFA00"},{color:"#A700FF"},{color:"#5E008C"}],[{color:"#000000"},{color:"#919496"},{color:"#ffffff"}]]}),this.setContent([l]),l.parentNode.style.backgroundColor="black",l.parentNode.parentNode.style.maxWidth="400px",l.parentNode.style.height="225px",l.parentNode.style.overflowY="auto",l.parentNode.style.overflowX="hidden",this.buttons=l.querySelectorAll("button");var n=this;n.colorsElem=l;var a=l.querySelectorAll("input[type=range]");n.inputSliders=a;for(var i=0;i<a.length;i++)a[i].onchange=function(t){popDownOnButtonClick({target:{style:{backgroundColor:"rgb("+n.inputSliders[0].value+","+n.inputSliders[1].value+","+n.inputSliders[2].value+")"}}},!1,!1)};for(i=0;i<this.buttons.length;i++)this.buttons[i].addEventListener("click",popDownOnButtonClick)};return o.ColorPalette.prototype=Object.create(t.Palette.prototype,{setColor:{value:function(t){for(var e=0;e<this.buttons.length;e++)if(this.buttons[e].style.backgroundColor==t){if(this.invoker.style.backgroundColor==t)return;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!0),this.buttons[e].dispatchEvent(o);break}var r=parseColor(t);this.inputSliders[0].value=r[0],this.inputSliders[1].value=r[1],this.inputSliders[2].value=r[2],this.getPalette().querySelector(".palette-invoker").style.backgroundColor=t,this.invoker.style.backgroundColor=t},enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:function(t,e,o){return this.getPalette().addEventListener(t,e,o)},enumerable:!0,configurable:!0,writable:!0}}),o}));