define([],(function(){return{dataImage:void 0,initGui:function initGui(){PaintApp.elements.pasteButton=document.getElementById("paste-button"),PaintApp.paletteModesButtons.push(PaintApp.elements.pasteButton),PaintApp.elements.pasteButton.addEventListener("click",(function(){PaintApp.paletteRemoveActiveClass(),PaintApp.addActiveClassToElement(PaintApp.elements.pasteButton),PaintApp.switchMode("Paste")}))},onMouseDown:function(e){return function(){if(PaintApp.data.currentElement&&(PaintApp.data.currentElement.element.parentElement.removeChild(PaintApp.data.currentElement.element),PaintApp.data.currentElement=void 0),PaintApp.modes.Paste.dataImage){PaintApp.modes.Paste.releasedFinger=!1,PaintApp.handleCurrentFloatingElement();var t=e.point.x-PaintApp.modes.Paste.dataImage.width/2+"px",n=e.point.y+55-PaintApp.modes.Paste.dataImage.height/2+"px",a=(PaintApp.elements.canvas.getContext("2d"),e.point,document.createElement("img"));if(a.src=PaintApp.modes.Paste.dataImage.data,a.style.width=PaintApp.modes.Paste.dataImage.width+"px",a.style.height=PaintApp.modes.Paste.dataImage.height+"px",a.style.position="absolute",a.style.left=t,a.style.padding="0px",a.style.border="5px dotted #500",a.style.top=n,document.body.appendChild(a),PaintApp.data.currentElement={type:"paste",element:a,startPoint:{x:parseInt(a.style.left)+a.getBoundingClientRect().width/2,y:parseInt(a.style.top)+a.getBoundingClientRect().height/2}},PaintApp.modes.Paste.releasedFinger){if(PaintApp.elements.canvas.getContext("2d").drawImage(PaintApp.data.currentElement.element,5+PaintApp.data.currentElement.element.getBoundingClientRect().left,PaintApp.data.currentElement.element.getBoundingClientRect().top-55+5),PaintApp.data.isShared){var i={src:PaintApp.collaboration.compress(PaintApp.data.currentElement.element.src),left:PaintApp.data.currentElement.element.getBoundingClientRect().left,top:PaintApp.data.currentElement.element.getBoundingClientRect().top-55+5,width:PaintApp.data.currentElement.element.getBoundingClientRect().width,height:PaintApp.data.currentElement.element.getBoundingClientRect().height};PaintApp.collaboration.sendMessage({action:"drawImage",data:i})}PaintApp.data.currentElement.element.parentElement.removeChild(PaintApp.data.currentElement.element),PaintApp.data.currentElement=void 0,PaintApp.saveCanvas()}}}()},onMouseDrag:function(e){if(PaintApp.data.currentElement){var t=e.point.x-PaintApp.modes.Paste.dataImage.width/2+"px",n=e.point.y+55-PaintApp.modes.Paste.dataImage.height/2+"px";PaintApp.data.currentElement.element.style.left=t,PaintApp.data.currentElement.element.style.top=n}},onMouseUp:function(e){if(PaintApp.modes.Paste.releasedFinger=!0,PaintApp.data.currentElement){if(PaintApp.elements.canvas.getContext("2d").drawImage(PaintApp.data.currentElement.element,PaintApp.data.currentElement.element.getBoundingClientRect().left,PaintApp.data.currentElement.element.getBoundingClientRect().top-55,PaintApp.data.currentElement.element.getBoundingClientRect().width,PaintApp.data.currentElement.element.getBoundingClientRect().height),PaintApp.data.isShared){var t={src:PaintApp.data.currentElement.element.src,left:PaintApp.data.currentElement.element.getBoundingClientRect().left,top:PaintApp.data.currentElement.element.getBoundingClientRect().top-55,width:PaintApp.data.currentElement.element.getBoundingClientRect().width,height:PaintApp.data.currentElement.element.getBoundingClientRect().height};PaintApp.collaboration.sendMessage({action:"drawImage",data:t})}PaintApp.data.currentElement.element.parentElement.removeChild(PaintApp.data.currentElement.element),PaintApp.data.currentElement=void 0,PaintApp.saveCanvas()}}}}));