define([],(function(){function changeColors(t,e,n){return t=(t=t.replace(/<!ENTITY fill_color "(.*?)">/g,'<!ENTITY fill_color "'+e+'">')).replace(/<!ENTITY stroke_color "(.*?)">/g,'<!ENTITY stroke_color "'+n+'">')}return{initGui:function initGui(){PaintApp.elements.stampsButton=document.getElementById("stamps-button"),PaintApp.paletteModesButtons.push(PaintApp.elements.stampsButton),PaintApp.elements.stampsButton.addEventListener("click",(function(){PaintApp.paletteRemoveActiveClass(),PaintApp.addActiveClassToElement(PaintApp.elements.stampsButton),PaintApp.switchMode("Stamp")}));var t=new PaintApp.palettes.stampPalette.StampPalette(PaintApp.elements.stampsButton,void 0);t.addEventListener("stampChange",(function onStampChange(t){PaintApp.data.stamp=t.detail.stamp,PaintApp.data.stampBase=t.detail.stampBase,t.detail.proportionnal&&"true"===t.detail.proportionnal?PaintApp.data.stampProportionnal=!0:PaintApp.data.stampProportionnal=!1})),t.getPalette().querySelector(".palette-invoker"),t.setStamp(0)},changeColors:changeColors,defaultSize:80,onMouseDown:function(t){return function(){PaintApp.modes.Stamp.releasedFinger=!1,PaintApp.handleCurrentFloatingElement();var e=PaintApp.modes.Stamp.defaultSize,n=PaintApp.modes.Stamp.defaultSize,a=t.point.x-e/2+"px",p=t.point.y+55-n/2+"px",i=window.location.href.split("/");i.pop(),i=i.join("/")+"/"+PaintApp.data.stamp;PaintApp.elements.canvas.getContext("2d"),t.point;var l=new XMLHttpRequest;l.open("GET",i,!0),l.onload=function(t){if(200===l.status||0===l.status){var i=l.responseText;i=changeColors(i,PaintApp.data.color.fill,PaintApp.data.color.stroke);var o=document.createElement("img");if(o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="contain",o.src="data:image/svg+xml;base64,"+btoa(i),o.style.width=e+"px",o.style.height=n+"px",o.style.position="absolute",o.style.left=a,o.style.padding="0px",o.style.border="5px dotted #500",o.style.resize="both",o.style.top=p,document.body.appendChild(o),PaintApp.data.currentElement={type:"stamp",element:o,proportionnal:PaintApp.data.stampProportionnal,startPoint:{x:parseInt(o.style.left)+o.getBoundingClientRect().width/2,y:parseInt(o.style.top)+o.getBoundingClientRect().height/2}},PaintApp.modes.Stamp.releasedFinger){if(PaintApp.elements.canvas.getContext("2d").drawImage(PaintApp.data.currentElement.element,5+PaintApp.data.currentElement.element.getBoundingClientRect().left,PaintApp.data.currentElement.element.getBoundingClientRect().top-55+5),PaintApp.data.isShared){var r={stampBase:PaintApp.data.stampBase,color:{fill:PaintApp.data.color.fill,stroke:PaintApp.data.color.stroke},left:PaintApp.data.currentElement.element.getBoundingClientRect().left,top:PaintApp.data.currentElement.element.getBoundingClientRect().top-55+5,width:PaintApp.data.currentElement.element.getBoundingClientRect().width,height:PaintApp.data.currentElement.element.getBoundingClientRect().height};PaintApp.collaboration.sendMessage({action:"drawStamp",data:r})}PaintApp.data.currentElement.element.parentElement.removeChild(PaintApp.data.currentElement.element),PaintApp.data.currentElement=void 0,PaintApp.saveCanvas()}}},l.send(null)}()},onMouseDrag:function(t){if(PaintApp.data.currentElement){var e=Math.abs(t.point.x-PaintApp.data.currentElement.startPoint.x),n=Math.abs(t.point.y-PaintApp.data.currentElement.startPoint.y+55);distance=e>n?e:n,PaintApp.data.stampProportionnal?(PaintApp.data.currentElement.element.style.width=PaintApp.modes.Stamp.defaultSize+distance+"px",PaintApp.data.currentElement.element.style.height=PaintApp.modes.Stamp.defaultSize+distance+"px"):(PaintApp.data.currentElement.element.style.width=PaintApp.modes.Stamp.defaultSize+e+"px",PaintApp.data.currentElement.element.style.height=PaintApp.modes.Stamp.defaultSize+n+"px"),PaintApp.data.currentElement.element.style.left=PaintApp.data.currentElement.startPoint.x-PaintApp.data.currentElement.element.getBoundingClientRect().width/2+"px",PaintApp.data.currentElement.element.style.top=PaintApp.data.currentElement.startPoint.y-PaintApp.data.currentElement.element.getBoundingClientRect().height/2+"px"}},onMouseUp:function(t){if(PaintApp.modes.Stamp.releasedFinger=!0,PaintApp.data.currentElement){if(PaintApp.elements.canvas.getContext("2d").drawImage(PaintApp.data.currentElement.element,PaintApp.data.currentElement.element.getBoundingClientRect().left,PaintApp.data.currentElement.element.getBoundingClientRect().top-55,PaintApp.data.currentElement.element.getBoundingClientRect().width,PaintApp.data.currentElement.element.getBoundingClientRect().height),PaintApp.data.isShared){var e={stampBase:PaintApp.data.stampBase,color:{fill:PaintApp.data.color.fill,stroke:PaintApp.data.color.stroke},left:PaintApp.data.currentElement.element.getBoundingClientRect().left,top:PaintApp.data.currentElement.element.getBoundingClientRect().top-55,width:PaintApp.data.currentElement.element.getBoundingClientRect().width,height:PaintApp.data.currentElement.element.getBoundingClientRect().height};PaintApp.collaboration.sendMessage({action:"drawStamp",data:e})}PaintApp.data.currentElement.element.parentElement.removeChild(PaintApp.data.currentElement.element),PaintApp.data.currentElement=void 0,PaintApp.saveCanvas()}}}}));