define(["sugar-web/graphics/palette"],(function(e){"use strict";var t={},n=[{name:"World",image:"world.svg",code:null},{name:"Africa",image:"africa.svg",code:"af"},{name:"Asia",image:"asia.svg",code:"as"},{name:"Europe",image:"europe.svg",code:"eu"},{name:"The Americas",image:"americas.svg",code:"am"}];t.RegionPalette=function(t,i){e.Palette.call(this,t,i),this.getPalette().id="regionpalette",this.sharedEvent=document.createEvent("CustomEvent"),this.sharedEvent.initCustomEvent("region",!0,!0,{}),this.buttons=[];let o=document.createElement("div");for(let e=0;e<n.length;e++){var a=n[e],r=document.createElement("div");r.value=a,r.onmouseover=function(){"rgb(0, 0, 0)"==this.style.background?this.style.background="rgb(204, 204, 204)":this.style.background="rgb(172, 172, 172)"},r.onmouseout=function(){"rgb(204, 204, 204)"==this.style.background?this.style.background="rgb(0, 0, 0)":this.style.background="rgb(127, 127, 127)"},r.style.borderRadius="0",r.style.width="100%",r.style.background="rgb(0, 0, 0)",0!=e&&(r.style.marginTop="3px"),r.innerHTML="<img style='vertical-align: middle; margin:3px 10px 3px 3px; width: 80px;' src='icons/"+a.image+"'><div style='display:inline-block; margin-right: 5px;' id='pregion"+e+"'>"+a.name+"</div>",o.appendChild(r),this.buttons.push(r)}this.setContent([o]);let s=this;function popDownOnButtonClick(e){console.log(e),s.popDown()}s.getPalette().firstChild.style.backgroundColor="transparent",s.getPalette().firstChild.style.backgroundImage="";for(let e=0;e<this.buttons.length;e++){let t=this.buttons[e];!function(e,t){e.addEventListener("click",(function(){s.sharedEvent.detail.value=t.code,s.getPalette().dispatchEvent(s.sharedEvent),s.popDown()}))}(t,n[e]),t.addEventListener("region",popDownOnButtonClick)}t.addEventListener("click",(function(e){let t=app.$refs.api.getRegions();for(let e=0;e<t.length;e++){let i=t[e];for(let e=0;e<n.length;e++)if(n[e].name==i.originRegionName){document.getElementById("pregion"+e).innerHTML=i.region;break}}document.getElementById("pregion0").innerHTML=app.$refs.api.getL10n("THE_WORLD");for(let e=0;e<n.length;e++)n[e].code==app.currentRegion?s.buttons[e].style.background="rgb(127, 127, 127)":s.buttons[e].style.background="rgb(0, 0, 0)"}))};return t.RegionPalette.prototype=Object.create(e.Palette.prototype,{addEventListener:{value:function(e,t,n){return this.getPalette().addEventListener(e,t,n)},enumerable:!0,configurable:!0,writable:!0}}),t}));