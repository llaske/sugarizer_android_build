/*! Sugarizer 2020-03-14 */
define(["sugar-web/graphics/palette"],function(a){"use strict";var b={};b.CustomPalette=function(b,c,d,e){function f(a){var b=Math.floor(Number(a));return String(b)===a&&b>0}console.log(b),console.log(c);var g=b;a.Palette.call(this,c,d);var h=document.createElement("div"),i=document.createElement("label");i.innerHTML="Rods:",i.setAttribute("for","rods");var j=document.createElement("INPUT");j.setAttribute("type","number"),j.setAttribute("min","1"),j.setAttribute("style","width:40px;margin:5px;"),j.setAttribute("id","rods"),j.value=g.customarr[0];var k=document.createElement("label");k.innerHTML="Top:",k.setAttribute("for","top");var l=document.createElement("INPUT");l.setAttribute("type","number"),l.setAttribute("min","1"),l.setAttribute("style","width:40px;margin:5px;"),l.setAttribute("id","top"),l.value=g.customarr[1];var m=document.createElement("label");m.innerHTML="Bottom:",m.setAttribute("for","bottom");var n=document.createElement("INPUT");n.setAttribute("type","number"),n.setAttribute("min","1"),n.setAttribute("style","width:40px;margin:5px;"),n.setAttribute("id","bottom"),n.value=g.customarr[2];var o=document.createElement("label");o.innerHTML="Factor:",o.setAttribute("for","factor");var p=document.createElement("INPUT");p.setAttribute("type","number"),p.setAttribute("min","1"),p.setAttribute("style","width:40px;margin:5px;"),p.setAttribute("id","factor"),p.value=g.customarr[3];var q=document.createElement("label");q.innerHTML="Base:",q.setAttribute("for","base");var r=document.createElement("INPUT");r.setAttribute("type","number"),r.setAttribute("min","1"),r.setAttribute("style","width:40px;margin:5px;"),r.setAttribute("id","base"),r.value=g.customarr[4];var s=document.createElement("button");s.className="toolbutton",s.setAttribute("id","new-button"),s.setAttribute("title","Create"),s.onclick=function(){t.setAbacus()},this.setAbacus=function(){f(j.value)&&(t.popDown(),g.updateCustom(parseInt(j.value),parseInt(l.value),parseInt(n.value),parseInt(p.value),parseInt(r.value)),g.initAbacus(10))},h.appendChild(i),h.appendChild(j),h.appendChild(k),h.appendChild(l),h.appendChild(m),h.appendChild(n),h.appendChild(o),h.appendChild(p),h.appendChild(q),h.appendChild(r),h.appendChild(s),this.setContent([h]);var t=this};var c=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return b.CustomPalette.prototype=Object.create(a.Palette.prototype,{addEventListener:{value:c,enumerable:!0,configurable:!0,writable:!0}}),b.CustomPalette.prototype.setShared=function(a){this.setShared(a)},b});