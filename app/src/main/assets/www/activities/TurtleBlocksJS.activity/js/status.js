function StatusMatrix(){docById("statusDiv").style.visibility="hidden",this.init=function(t){this._logo=t;var e=window.innerWidth;this._cellScale=e/1200;var l=this._cellScale,s=docById("myCanvas"),i=docById("statusDiv");i.style.visibility="visible",i.setAttribute("draggable","true"),i.style.left="200px",i.style.top="150px";var o=docById("statusButtonsDiv");o.style.display="inline",o.style.visibility="visible",o.style.width=128,o.innerHTML='<table cellpadding="0px" id="statusButtonTable"></table>';var a=(u=docById("statusButtonTable").createTHead()).insertRow(0),n=this;(M=this._addButton(a,"close-button.svg",32,_("close"))).onclick=function(){h.style.visibility="hidden",o.style.visibility="hidden",i.style.visibility="hidden"};var r=this._addButton(a,"grab.svg",32,_("drag"));r.style.cursor="move",this._dx=r.getBoundingClientRect().left-i.getBoundingClientRect().left,this._dy=r.getBoundingClientRect().top-i.getBoundingClientRect().top,this._dragging=!1,this._target=!1,this._dragCellHTML=r.innerHTML,r.onmouseover=function(t){r.innerHTML=""},r.onmouseout=function(t){n._dragging||(r.innerHTML=n._dragCellHTML)},s.ondragover=function(t){t.preventDefault()},s.ondrop=function(t){if(n._dragging){n._dragging=!1;var e=t.clientX-n._dx;i.style.left=e+"px";var l=t.clientY-n._dy;i.style.top=l+"px",r.innerHTML=n._dragCellHTML}},i.ondragover=function(t){t.preventDefault()},i.ondrop=function(t){if(n._dragging){n._dragging=!1;var e=t.clientX-n._dx;i.style.left=e+"px";var l=t.clientY-n._dy;i.style.top=l+"px",r.innerHTML=n._dragCellHTML}},i.onmousedown=function(t){n._dragging=!0,n._target=t.target},i.ondragstart=function(t){r.contains(n._target)?t.dataTransfer.setData("text/plain",""):t.preventDefault()};var h=docById("statusTableDiv");h.style.display="inline",h.style.visibility="visible",h.style.border="0px",h.innerHTML='<div id="statusOuterDiv"><div id="statusInnerDiv"><table cellpadding="0px" id="statusTable"></table></div></div>';var d=Math.max(Math.floor(.5*window.innerHeight/100),8),c=docById("statusOuterDiv");if(this._logo.turtles.turtleList.length>d){c.style.height=this._cellScale*MATRIXSOLFEHEIGHT*(d+2)+"px";e=Math.max(Math.min(window.innerWidth,620*this._cellScale),128);c.style.width=e+"px"}else{this._logo.statusFields.length>4?c.style.height=this._cellScale*(MATRIXBUTTONHEIGHT2+(2+MATRIXSOLFEHEIGHT)*this._logo.turtles.turtleList.length)+30+"px":c.style.height=this._cellScale*(MATRIXBUTTONHEIGHT2+(2+MATRIXSOLFEHEIGHT)*this._logo.turtles.turtleList.length)+"px";e=Math.max(Math.min(window.innerWidth,620*this._cellScale-20),128);c.style.width=e+"px"}e=Math.max(Math.min(window.innerWidth,540.5*this._cellScale),75);var g=docById("statusInnerDiv");g.style.width=e+"px",g.style.marginLeft=53*this._cellScale+"px";var u;a=(u=docById("statusTable").createTHead()).insertRow(),l=Math.floor(24*this._cellScale);(M=a.insertCell()).style.backgroundColor=MATRIXBUTTONCOLOR,M.className="headcol",M.style.height=Math.floor(MATRIXBUTTONHEIGHT*this._cellScale)+"px",M.style.width=53*this._cellScale+"px",M.innerHTML="&nbsp;";for(var T=0;T<this._logo.statusFields.length;T++){switch((M=a.insertCell(T+1)).style.fontSize=Math.floor(100*this._cellScale)+"%",this._logo.statusFields[T][1]){case"plus":case"minus":case"neg":case"divide":case"power":case"multiply":case"sqrt":case"int":case"mod":var b="";break;case"namedbox":b=this._logo.blocks.blockList[this._logo.statusFields[T][0]].privateData;break;default:b=this._logo.blocks.blockList[this._logo.statusFields[T][0]].protoblock.staticLabels[0]}M.innerHTML="&nbsp;<b>"+b+"</b>&nbsp;",M.style.height=Math.floor(MATRIXBUTTONHEIGHT*this._cellScale)+"px",M.style.backgroundColor=MATRIXBUTTONCOLOR}_THIS_IS_MUSIC_BLOCKS_&&((M=a.insertCell()).style.fontSize=Math.floor(100*this._cellScale)+"%",M.innerHTML="&nbsp;<b>"+_("note")+"</b>&nbsp;",M.style.height=Math.floor(MATRIXBUTTONHEIGHT*this._cellScale)+"px",M.style.backgroundColor=MATRIXBUTTONCOLOR);for(var y=0;y<this._logo.turtles.turtleList.length;y++)if(!this._logo.turtles.turtleList[y].trash){if((M=(a=u.insertRow()).insertCell()).style.backgroundColor=MATRIXLABELCOLOR,_THIS_IS_MUSIC_BLOCKS_?M.innerHTML='&nbsp;&nbsp;<img src="images/mouse.svg" title="'+this._logo.turtles.turtleList[y].name+'" alt="'+this._logo.turtles.turtleList[y].name+'" height="'+l+'" width="'+l+'">&nbsp;&nbsp;':M.innerHTML='&nbsp;&nbsp;<img src="header-icons/turtle-button.svg" title="'+this._logo.turtles.turtleList[y].name+'" alt="'+this._logo.turtles.turtleList[y].name+'" height="'+l+'" width="'+l+'">&nbsp;&nbsp;',M.style.width=53*this._cellScale+"px",M.style.height=Math.floor(MATRIXSOLFEHEIGHT*this._cellScale)+"px",M.className="headcol",_THIS_IS_MUSIC_BLOCKS_)for(T=0;T<this._logo.statusFields.length+1;T++){(M=a.insertCell()).style.backgroundColor=MATRIXRHYTHMCELLCOLOR,M.style.fontSize=Math.floor(100*this._cellScale)+"%",M.innerHTML="",M.style.height=Math.floor(MATRIXSOLFEHEIGHT*this._cellScale)+"px"}else for(T=0;T<this._logo.statusFields.length;T++){var M;(M=a.insertCell()).style.backgroundColor=MATRIXRHYTHMCELLCOLOR,M.style.fontSize=Math.floor(100*this._cellScale)+"%",M.innerHTML="",M.style.height=Math.floor(MATRIXSOLFEHEIGHT*this._cellScale)+"px"}1}},this.updateAll=function(){var t=docById("statusTable");this._logo.updatingStatusMatrix=!0;for(var e=0,l=0;l<this._logo.turtles.turtleList.length;l++)if(!this._logo.turtles.turtleList[l].trash){for(var s=0;s<this._logo.statusFields.length;s++){var i=this._logo.inStatusMatrix;switch(this._logo.inStatusMatrix=!1,this._logo.parseArg(this._logo,l,this._logo.statusFields[s][0]),this._logo.blocks.blockList[this._logo.statusFields[s][0]].name){case"x":case"y":case"heading":var o=this._logo.blocks.blockList[this._logo.statusFields[s][0]].value.toFixed(2);break;case"elapsednotes":o=mixedNumber(this._logo.blocks.blockList[this._logo.statusFields[s][0]].value);break;case"namedbox":var a=this._logo.blocks.blockList[this._logo.statusFields[s][0]].privateData;if(a in this._logo.boxes)o=this._logo.boxes[a];else o="";break;default:o=this._logo.blocks.blockList[this._logo.statusFields[s][0]].value}var n=o;this._logo.inStatusMatrix=i,null!=(r=t.rows[e+1].cells[s+1])&&(r.innerHTML=n)}if(_THIS_IS_MUSIC_BLOCKS_){var r,h="";o="";if(null!=this._logo.noteStatus[l]){for(var d=this._logo.noteStatus[l][0],c=0;c<d.length;c++)h+=d[c],"number"==typeof d[c]?h+="Hz ":h+=" ";o=this._logo.noteStatus[l][1];var g=rationalToFraction(o);h+=g[1]+"/"+g[0]}null!=(r=t.rows[e+1].cells[s+1])&&(r.innerHTML=h.replace(/#/g,"♯").replace(/b/,"♭"))}e+=1}this._logo.updatingStatusMatrix=!1},this._addButton=function(t,e,l,s){var i=t.insertCell(-1);return i.innerHTML='&nbsp;&nbsp;<img src="header-icons/'+e+'" title="'+s+'" alt="'+s+'" height="'+l+'" width="'+l+'" vertical-align="middle" align-content="center">&nbsp;&nbsp;',i.style.width="53px",i.style.minWidth=i.style.width,i.style.maxWidth=i.style.width,i.style.height=i.style.width,i.style.minHeight=i.style.height,i.style.maxHeight=i.style.height,i.style.backgroundColor=MATRIXBUTTONCOLOR,i.onmouseover=function(){this.style.backgroundColor=MATRIXBUTTONCOLORHOVER},i.onmouseout=function(){this.style.backgroundColor=MATRIXBUTTONCOLOR},i}}