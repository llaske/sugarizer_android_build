/*! Sugarizer 2020-03-14 */
define(function(){"use strict";function a(a){var b=a.currentStyle||window.getComputedStyle(a,""),c=-2*b.marginLeft.slice(0,-2),d=-1*b.marginTop.slice(0,-2),e=a.getBoundingClientRect();return c+=e.left,d+=e.top,{top:d,left:c,width:e.width,height:e.height}}var b=[],c={};return c.Palette=function(c,d){function e(b,c){var d,e;if(void 0!==b&&void 0!==c)d=b,e=c;else{var f=a(l.invoker);d=f.left,e=f.top}g.style.left=d+"px",g.style.top=e+"px"}function f(){if(void 0===g){if(g=document.createElement("div"),g.className="palette widepalette",g.style.visibility="hidden",document.body.appendChild(g),l.invoker.classList.contains("toolbutton")){var a=document.createElement("div");a.className="palette-invoker";var b=l.invoker.currentStyle||window.getComputedStyle(l.invoker,"");a.style.backgroundImage=b.backgroundImage,a.addEventListener("click",function(a){l.toggle()}),g.appendChild(a)}h=document.createElement("div"),h.className="wrapper",g.appendChild(h),void 0!==l.primaryText&&(i=document.createElement("div"),i.className="header",i.innerText=l.primaryText,h.appendChild(i)),j=document.createElement("hr"),j.className="header-separator",j.style.display="none",h.appendChild(j),k=document.createElement("div"),k.className="container",h.appendChild(k),e()}}this.invoker=c,this.invoker.classList.contains("toolbutton")&&this.invoker.classList.add("invoker"),this.primaryText=d;var g,h,i,j,k,l=this;b.push(this),c.addEventListener("click",function(a){l.invoker.classList.contains("toolbutton")||e(a.x,a.y),l.toggle()}),this.getPalette=function(){return void 0===g&&f(),g},this.setContent=function(a){void 0===g&&f(),function(){for(var a=0;a<k.children.length;a++){var b=k.children[a];k.removeChild(b)}}(),function(){for(var b=0;b<a.length;b++){var c=a[b];k.appendChild(c)}}(),a.length>0&&void 0!==this.primaryText?j.style.display="block":j.style.display="none"},this.isDown=function(){return void 0===g||"hidden"==g.style.visibility}},c.Palette.prototype.popUp=function(){for(var a=0;a<b.length;a++){var c=b[a];c!=this&&c.popDown()}this.getPalette().style.visibility="visible"},c.Palette.prototype.popDown=function(){this.getPalette().style.visibility="hidden"},c.Palette.prototype.toggle=function(){this.isDown()?this.popUp():this.popDown()},c});