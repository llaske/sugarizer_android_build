define(["sugar-web/graphics/journalchooser","sugar-web/datastore"],(function(e,t){var a=!1,n=!1;function onInsertImageClick(){e.show((function(e){e&&new t.DatastoreObject(e.objectId).loadAsText((function(e,t,i){var s=document.createElement("img");s.src=i,s.onload=function(){a=!0,n=!1;var e,t,i,o,c,m=PaintApp.elements.canvas.getContext("2d"),r=m.getImageData(0,0,PaintApp.elements.canvas.width,PaintApp.elements.canvas.height),p="ontouchstart"in document.documentElement;m.putImageData(r,0,0),i=65,o=130,e=s.width,t=s.height,m.drawImage(s,i-60,o-125,e+60,t+70),c=m.getImageData(0,0,PaintApp.elements.canvas.width,PaintApp.elements.canvas.height),m.stroke(),PaintApp.saveCanvas(),m.beginPath(),m.setLineDash([1,10]),m.strokeStyle="#101010",m.rect(i-65,o-130,e+70,t+80),m.stroke();var imageMousemove=function(d){(a||n)&&(m.putImageData(r,0,0),p&&(d=d.touches[0]),a?(i=d.clientX-e/2,o=d.clientY-t/2):(e=d.clientX-i,t=d.clientY-o),m.drawImage(s,i-60,o-125,e+60,t+70),c=m.getImageData(0,0,PaintApp.elements.canvas.width,PaintApp.elements.canvas.height),m.beginPath(),m.setLineDash([1,10]),m.strokeStyle="#101010",m.rect(i-65,o-130,e+70,t+80),m.stroke())},imageMouseup=function(t){if(a)a=!1,n=!0;else if(n){if(p&&(t=t.touches[0]),m.putImageData(c,0,0),m.setLineDash([1]),r=m.getImageData(0,0,PaintApp.elements.canvas.width,PaintApp.elements.canvas.height),PaintApp.saveCanvas(),m=0,a=!1,n=!1,PaintApp.data.isShared)try{PaintApp.collaboration.sendMessage({action:"toDataURL",data:{width:PaintApp.elements.canvas.width/window.devicePixelRatio,height:PaintApp.elements.canvas.height/window.devicePixelRatio,src:PaintApp.collaboration.compress(PaintApp.elements.canvas.toDataURL())}}),console.log(e)}catch(e){}p?(removeEventListener("touchmove",imageMousemove),removeEventListener("touchend",imageMouseup)):(removeEventListener("mousemove",imageMousemove),removeEventListener("mouseup",imageMouseup))}};p?(addEventListener("touchmove",imageMousemove,!1),addEventListener("touchend",imageMouseup,!1)):(addEventListener("mousemove",imageMousemove),addEventListener("mouseup",imageMouseup))}}))}),{mimetype:"image/png"},{mimetype:"image/jpeg"})}return{initGui:function initGui(){var e=document.getElementById("insertimage-button");PaintApp.elements.insertImageButton=e,e.addEventListener("click",onInsertImageClick)}}}));