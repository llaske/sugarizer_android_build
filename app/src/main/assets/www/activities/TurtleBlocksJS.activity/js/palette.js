requirejs(["activity/utils"]);const PROTOBLOCKSCALE=1,PALETTELEFTMARGIN=10;function maxPaletteHeight(t,e){var i=windowHeight()*canvasPixelRatio()/e-2*t;return i-i%STANDARDBLOCKHEIGHT+STANDARDBLOCKHEIGHT/2}function paletteBlockButtonPush(t,e,i){return t.makeBlock(e,i)}function Palettes(){return this.canvas=null,this.blocks=null,this.refreshCanvas=null,this.stage=null,this.cellSize=null,this.scrollDiff=0,this.originalSize=55,this.trashcan=null,this.initial_x=55,this.initial_y=55,this.firstTime=!0,this.background=null,this.upIndicator=null,this.upIndicatorStatus=!1,this.downIndicator=null,this.downIndicatorStatus=!0,this.circles={},this.palette_text=new createjs.Text("","20px Arial","#ff7700"),this.mouseOver=!1,this.activePalette=null,this.visible=!0,this.scale=1,this.mobile=!1,this.current=DEFAULTPALETTE,this.x=null,this.y=null,this.container=null,sugarizerCompatibility.isInsideSugarizer()?storage=sugarizerCompatibility.data:storage=localStorage,this.dict={},this.buttons={},this.init=function(){this.halfCellSize=Math.floor(this.cellSize/2),this.x=0,this.y=this.cellSize,this.container=new createjs.Container,this.container.snapToPixelEnabled=!0,this.stage.addChild(this.container)},this.setCanvas=function(t){return this.canvas=t,this},this.setStage=function(t){return this.stage=t,this},this.setRefreshCanvas=function(t){return this.refreshCanvas=t,this},this.setTrashcan=function(t){return this.trashcan=t,this},this.setSize=function(t){return this.cellSize=t,this},this.setMobile=function(t){return this.mobile=t,t&&this._hideMenus(),this},this.setScale=function(t){for(var e in this.scale=t,this._updateButtonMasks(),this.dict)this.dict[e]._resizeEvent();return null!=this.downIndicator&&(this.downIndicator.y=windowHeight()/t-27),this},this.setMacroDictionary=function(t){return this.macroDict=t,this},this.menuScrollEvent=function(t,e){var i=Object.keys(this.buttons),s=t*e;if(this.buttons[i[0]].y+s>this.cellSize&&t>0)return this.upIndicator.visible=!1,this.upIndicatorStatus=this.upIndicator.visible,void this.refreshCanvas();if(this.upIndicatorStatus=this.upIndicator.visible,this.upIndicator.visible=!0,this.buttons[last(i)].y+s<windowHeight()/this.scale-this.cellSize&&t<0)return this.downIndicator.visible=!1,this.downIndicatorStatus=this.downIndicator.visible,void this.refreshCanvas();for(var a in this.downIndicator.visible=!0,this.downIndicatorStatus=this.downIndicator.visible,this.scrollDiff+=s,this.buttons)this.buttons[a].y+=s,this.buttons[a].visible=!0;this._updateButtonMasks(),this.refreshCanvas()},this._updateButtonMasks=function(){for(var t in this.buttons){var e=new createjs.Shape;e.graphics.r(0,0,this.cellSize,windowHeight()/this.scale),e.x=0,e.y=this.cellSize/2,this.buttons[t].mask=e}},this.hidePaletteIconCircles=function(){sugarizerCompatibility.isInsideSugarizer()||hidePaletteNameDisplay(palette_text,this.stage),hideButtonHighlight(this.circles,this.stage)},this.makePalettes=function(t){if(this.firstTime){var e=new createjs.Shape;e.graphics.f("#a2c5d8").r(0,0,55,windowHeight()).ef(),e.width=55,e.height=windowHeight(),this.stage.addChild(e),this.background=e}null==this.upIndicator&&this.firstTime&&makePaletteBitmap(this,UPICON.replace("#000000","#FFFFFF"),"up",(function __processUpIcon(t,e,i,s){i.scaleX=i.scaleY=i.scale=.4,t.stage.addChild(i),i.x=55,i.y=55,i.visible=!1,t.upIndicator=i,t.upIndicator.on("click",(function(e){t.menuScrollEvent(1,40),t.hidePaletteIconCircles()}))}),null),null==this.downbIndicator&&this.firstTime&&makePaletteBitmap(this,DOWNICON.replace("#000000","#FFFFFF"),"down",(function __processDownIcon(t,e,i,s){i.scaleX=i.scaleY=i.scale=.4,t.stage.addChild(i),i.x=55,i.y=windowHeight()/t.scale-27,i.visible=!0,t.downIndicator=i,t.downIndicator.on("click",(function(e){t.menuScrollEvent(-1,40),t.hidePaletteIconCircles()}))}),null),this.firstTime=!1;var i=this;function __processButtonIcon(t,e,s,a){i.buttons[e].addChild(s),i.cellSize!=i.originalSize&&(s.scaleX=i.cellSize/i.originalSize,s.scaleY=i.cellSize/i.originalSize);var n=new createjs.Shape;n.graphics.beginFill("#FFF").drawEllipse(-i.halfCellSize,-i.halfCellSize,i.cellSize,i.cellSize),n.x=i.halfCellSize,n.y=i.halfCellSize,i.buttons[e].hitArea=n,i.buttons[e].visible=!1,i.dict[e].makeMenu(!0),i.dict[e]._moveMenu(i.cellSize,i.cellSize),i.dict[e]._updateMenu(!1),i._loadPaletteButtonHandler(e)}for(var s in this.dict)s in this.buttons?this.dict[s]._updateMenu(t):(this.buttons[s]=new createjs.Container,this.buttons[s].snapToPixelEnabled=!0,this.stage.addChild(this.buttons[s]),this.buttons[s].x=this.x,this.buttons[s].y=this.y+this.scrollDiff,this.y+=this.cellSize,makePaletteBitmap(this,PALETTEICONS[s],s,__processButtonIcon,null))},this.showPalette=function(t){if(!this.mobile)for(var e in this.dict)this.dict[e]===this.dict[t]?(this.dict[t]._resetLayout(),this.dict[t].showMenu(!0),this.dict[t]._showMenuItems(!0)):this.dict[e].visible&&(this.dict[e].hideMenu(!0),this.dict[e]._hideMenuItems(!1))},this._showMenus=function(){if(!this.mobile){for(var t in this.buttons)this.buttons[t].visible=!0;null!=this.background&&(this.background.visible=!0),this.upIndicatorStatus&&(this.upIndicator.visible=!0),this.downIndicatorStatus&&null!=this.downIndicator&&(this.downIndicator.visible=!0),this.refreshCanvas()}},this._hideMenus=function(){for(var t in this.buttons)this.buttons[t].visible=!1;for(var t in this.dict)this.dict[t].hideMenu(!0);null!=this.upIndicator&&(this.upIndicator.visible=!1,this.downIndicator.visible=!1,this.background.visible=!1),this.refreshCanvas()},this.getInfo=function(){for(var t in this.dict)console.log(this.dict[t].getInfo())},this.updatePalettes=function(t){if(null!=t){this.makePalettes(!1);var e=this;setTimeout((function(){e.dict[t]._resetLayout(),e.dict[t].showMenu(),e.dict[t]._showMenuItems(),e.refreshCanvas()}),100)}else this.makePalettes(!0),this.refreshCanvas();if(this.mobile){var i=this;setTimeout((function(){for(var t in i.hide(),i.dict)i.dict[t].visible&&(i.dict[t].hideMenu(!0),i.dict[t]._hideMenuItems(!0))}),500)}},this.hide=function(){this._hideMenus(),this.visible=!1},this.show=function(){this.mobile?(this._hideMenus(),this.visible=!1):(this._showMenus(),this.visible=!0)},this.setBlocks=function(t){return this.blocks=t,this},this.add=function(t){return this.dict[t]=new Palette(this,t),this},this.remove=function(t){if(t in this.buttons){this.buttons[t].removeAllChildren();for(var e=Object.keys(this.dict),i=e.indexOf(t)+1;i<e.length;i++)this.buttons[e[i]].y-=this.cellSize;delete this.buttons[t],delete this.dict[t],this.y-=this.cellSize,this.makePalettes(!0)}else console.log("Palette.remove: Cannot find palette "+t)},this.bringToTop=function(){for(var t in this.dict)for(var e in this.stage.removeChild(this.dict[t].menuContainer),this.stage.addChild(this.dict[t].menuContainer),this.dict[t].protoContainers)this.stage.removeChild(this.dict[t].protoContainers[e]),this.stage.addChild(this.dict[t].protoContainers[e]);this.refreshCanvas()},this.findPalette=function(t,e){for(var i in this.dict){var s=this.dict[i].menuContainer.x,a=this.dict[i].menuContainer.y,n=Math.min(maxPaletteHeight(this.cellSize,this.scale),this.dict[i].y);if(this.dict[i].menuContainer.visible&&s<t&&t<s+MENUWIDTH&&a<e&&e<a+n)return this.dict[i]}return null},this._loadPaletteButtonHandler=function(t){var e=this,i=!1,s=!1,a=this;this.buttons[t].on("mousedown",(function(i){s=!0;var a=i.stageY;e.buttons[t].on("pressmove",(function(t){if(s){var i=t.stageY-a;e.menuScrollEvent(i,10),a=t.stageY}})),e.buttons[t].on("pressup",(function(t){s=!1}),null,!0)})),this.buttons[t].on("mouseover",(function(i){e.mouseOver=!0;var s=e.cellSize/2;a.circles=showButtonHighlight(e.buttons[t].x+s,e.buttons[t].y+s,s,i,e.scale,e.stage),sugarizerCompatibility.isInsideSugarizer()||(palette_text=new createjs.Text(_(t),"20px Arial","black"),palette_text.x=e.buttons[t].x+2.2*s,palette_text.y=e.buttons[t].y+5*s/8,e.stage.addChild(palette_text))})),this.buttons[t].on("pressup",(function(t){e.mouseOver=!1,sugarizerCompatibility.isInsideSugarizer()||hidePaletteNameDisplay(palette_text,e.stage),hideButtonHighlight(a.circles,e.stage)})),this.buttons[t].on("mouseout",(function(t){e.mouseOver=!1,sugarizerCompatibility.isInsideSugarizer()||hidePaletteNameDisplay(palette_text,e.stage),hideButtonHighlight(a.circles,e.stage)})),this.buttons[t].on("click",(function(s){i||(i=!0,setTimeout((function(){i=!1}),500),e.dict[t]._moveMenu(e.initial_x,e.initial_y),e.showPalette(t),e.refreshCanvas())}))},this.removeActionPrototype=function(t){for(var e=!1,i=0;i<this.dict.action.protoList.length;i++){var s=this.dict.action.protoList[i];if(-1!==["nameddo","namedcalc","nameddoArg","namedcalcArg"].indexOf(s.name)&&s.defaults[0]===t){this.dict.action.remove(s,t),this.blocks.protoBlockDict["myDo_"+t]?delete this.blocks.protoBlockDict["myDo_"+t]:this.blocks.protoBlockDict["myCalc_"+t]?delete this.blocks.protoBlockDict["myCalc_"+t]:this.blocks.protoBlockDict["myDoArg_"+t]?delete this.blocks.protoBlockDict["myDoArg_"+t]:this.blocks.protoBlockDict["myCalcArg_"+t]&&delete this.blocks.protoBlockDict["myCalcArg_"+t],this.dict.action.y=0,e=!0;break}}e&&(this.hide(),this.updatePalettes("action"),this.mobile?this.hide():this.show())},this}function PaletteModel(t,e,i){this.palette=t,this.palettes=e,this.name=i,this.blocks=[],this.update=function(){for(var t in this.blocks=[],this.palette.protoList){var e=this.palette.protoList[t];if(!e.hidden){var i=e.name,s=i;switch(i){case"storein":s="store in "+e.defaults[0];var a=e.defaults[0];break;case"box":s=e.defaults[0];a=e.defaults[0];break;case"namedbox":if(void 0===e.defaults[0]){s="namedbox";a=_("box")}else{s=e.defaults[0];a=e.defaults[0]}break;case"namedarg":if(void 0===e.defaults[0]){s="namedarg";a="1"}else{s=e.defaults[0];a=e.defaults[0]}break;case"nameddo":if(void 0===e.defaults[0]){s="nameddo";a=_("action")}else{s=e.defaults[0];a=e.defaults[0]}break;case"nameddoArg":if(void 0===e.defaults[0]){s="nameddoArg";a=_("action")}else{s=e.defaults[0];a=e.defaults[0]}break;case"namedcalc":if(void 0===e.defaults[0]){s="namedcalc";a=_("action")}else{s=e.defaults[0];a=e.defaults[0]}break;case"namedcalcArg":if(void 0===e.defaults[0]){s="namedcalcArg";a=_("action")}else{s=e.defaults[0];a=e.defaults[0]}}var n=this.palettes.blocks.protoBlockDict[i];if(null!=n){var o="";switch(n.name){case"text":o=_("text");break;case"solfege":o=i18nSolfege("sol");break;case"eastindiansolfege":o="sargam";break;case"notename":o="G";break;case"number":o=NUMBERBLOCKDEFAULT.toString();break;case"less":case"greater":case"equal":o=n.staticLabels[0];break;case"namedarg":o="arg "+a;break;default:i!=s?o="storein"===i&&e.defaults[0]===_("box")?_("store in"):e.defaults[0]:n.staticLabels.length>0?""===(o=n.staticLabels[0])&&(o="loadFile"===i?_("open file"):i):o=i}switch(-1!=["do","nameddo","namedbox","namedcalc","doArg","calcArg","nameddoArg","namedcalcArg"].indexOf(n.name)&&null!=o&&o.length>8&&(o=o.substr(0,7)+"..."),n.image&&(o=""),n.name){case"namedbox":case"namedarg":(h=new SVG).init(),h.setScale(n.scale),h.setExpand(60,0,0,0),h.setOutie(!0);var l=h.basicBox(),r=h.docks;break;case"nameddo":var h;(h=new SVG).init(),h.setScale(n.scale),h.setExpand(30,0,0,0);l=h.basicBlock(),r=h.docks;break;default:var c=n.generator();l=c[0],r=c[1]}l=n.disabled?l.replace(/fill_color/g,DISABLEDFILLCOLOR).replace(/stroke_color/g,DISABLEDSTROKECOLOR).replace("block_label",o):l.replace(/fill_color/g,PALETTEFILLCOLORS[n.palette.name]).replace(/stroke_color/g,PALETTESTROKECOLORS[n.palette.name]).replace("block_label",o);for(var u=0;u<=n.args;u++)l=l.replace("arg_label_"+u,n.staticLabels[u]||"");this.blocks.push({blk:t,name:i,modname:s,height:STANDARDBLOCKHEIGHT,label:o,artwork:l,artwork64:"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(l))),docks:r,image:e.image,scale:e.scale,palettename:this.palette.name})}else console.log("Could not find block "+i)}}}}function PopdownPalette(t){for(var e in this.palettes=t,this.models={},this.palettes.dict)this.models[e]=new PaletteModel(this.palettes.dict[e],this.palettes,e);this.update=function(){var t='<div class="back"><h2>'+_("back")+"</h2></div>";for(var e in this.models){t+='<div class="palette">';var i=PALETTEICONS[e].replace(/#f{3,6}/gi,PALETTEFILLCOLORS[e]);t+=format('<h2 data-name="{n}">                                 {i}<span>{n}</span>                                 <img class="hide-button" src="header-icons/hide.svg"                                      alt="{'+_("hide")+'}"                                      title="{'+_("hide")+'}" />                                 <img class="show-button" src="header-icons/show.svg"                                      alt="{'+_("show")+'}"                                      title="{'+_("show")+'}" />                                 <img class="popout-button" src="header-icons/popout.svg"                                      alt="{'+_("popout")+'}"                                      title="{'+_("popout")+'}" />                             </h2>',{i:i,n:toTitleCase(_(e))}),t+="<ul>",this.models[e].update();var s=this.models[e].blocks;for(var a in BUILTINPALETTES.indexOf(e)>-1&&s.reverse(),s)t+=format('<li title="{label}"                                     data-blk="{blk}"                                     data-palettename="{palettename}"                                     data-modname="{modname}">                                     <img src="{artwork64}" alt="{label}" />                                 </li>',s[a]);t+="</div>"}document.querySelector("#popdown-palette").innerHTML=t;var n=this;document.querySelector("#popdown-palette .back").addEventListener("click",(function(){n.popup()}));var o=document.querySelectorAll("#popdown-palette > .palette");Array.prototype.forEach.call(o,(function(t){t.querySelector("h2").addEventListener("click",(function(){t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")})),t.querySelector(".popout-button").addEventListener("click",(function(){n.popup(),n.palettes.showPalette(t.querySelector("h2").dataset.name)}))}));o=document.querySelectorAll("#popdown-palette li");Array.prototype.forEach.call(o,(function(t){t.addEventListener("click",(function(e){n.popup();var i=n.palettes.dict[t.dataset.palettename];i.protoContainers[t.dataset.modname],i._makeBlockFromPalette(i.protoList[t.dataset.blk],t.dataset.modname,(function(t){for(var i in n.palettes.blocks.findDragGroup(t),n.palettes.blocks.dragGroup)n.palettes.blocks.moveBlockRelative(n.palettes.blocks.dragGroup[i],Math.round(e.clientX/n.palettes.scale)-n.palettes.blocks.stage.x,Math.round(e.clientY/n.palettes.scale)-n.palettes.blocks.stage.y);n.palettes.blocks.blockMoved(t)}))}))}))},this.popdown=function(){this.update(),document.querySelector("#popdown-palette").classList.add("show")},this.popup=function(){document.querySelector("#popdown-palette").classList.remove("show")}}function Palette(t,e){return this.palettes=t,this.name=e,this.model=new PaletteModel(this,t,e),this.visible=!1,this.menuContainer=null,this.protoList=[],this.protoContainers={},this.background=null,this.scrollDiff=0,this.y=0,this.size=0,this.columns=0,this.draggingProtoBlock=!1,this.mouseHandled=!1,this.upButton=null,this.downButton=null,this.fadedUpButton=null,this.fadedDownButton=null,this.count=0,this.makeMenu=function(t){function __processButtonIcon(t,e,i,s){i.scaleX=i.scaleY=i.scale=.8,t.menuContainer.addChild(i),t.palettes.container.addChild(t.menuContainer)}function __processCloseIcon(t,i,s,a){s.scaleX=s.scaleY=s.scale=.7,t.menuContainer.addChild(s),s.x=e-STANDARDBLOCKHEIGHT,s.y=0;var n=new createjs.Shape;n.graphics.beginFill("#FFF").drawEllipse(-e/2,-STANDARDBLOCKHEIGHT/2,e,STANDARDBLOCKHEIGHT),n.x=e/2,n.y=STANDARDBLOCKHEIGHT/2,t.menuContainer.hitArea=n,t.menuContainer.visible=!1,t.mouseHandled||(t._loadPaletteMenuHandler(),t.mouseHandled=!0)}function __processUpIcon(t,i,s,a){s.scaleX=s.scaleY=s.scale=.7,t.palettes.stage.addChild(s),s.x=t.menuContainer.x+e,s.y=t.menuContainer.y+STANDARDBLOCKHEIGHT,__calculateHitArea(s);new createjs.Shape;s.visible=!1,t.upButton=s,t.upButton.on("click",(function(e){t.scrollEvent(STANDARDBLOCKHEIGHT,10)}))}function __processDownIcon(t,i,s,a){s.scaleX=s.scaleY=s.scale=.7,t.palettes.stage.addChild(s),s.x=t.menuContainer.x+e,s.y=t._getDownButtonY()-STANDARDBLOCKHEIGHT,__calculateHitArea(s),t.downButton=s,t.downButton.on("click",(function(e){t.scrollEvent(-STANDARDBLOCKHEIGHT,10)}))}function __makeFadedDownIcon(t,i,s,a){s.scaleX=s.scaleY=s.scale=.7,t.palettes.stage.addChild(s),s.x=t.menuContainer.x+e,s.y=t._getDownButtonY(),__calculateHitArea(s),t.fadedDownButton=s}function __makeFadedUpIcon(t,i,s,a){s.scaleX=s.scaleY=s.scale=.7,t.palettes.stage.addChild(s),s.x=t.menuContainer.x+e,s.y=t.menuContainer.y+STANDARDBLOCKHEIGHT,__calculateHitArea(s),t.fadedUpButton=s}function __calculateHitArea(t){var e=new createjs.Shape;e.graphics.beginFill("#FFF").drawRect(0,0,STANDARDBLOCKHEIGHT,STANDARDBLOCKHEIGHT),e.x=0,e.y=0,t.hitArea=e,t.visible=!1}if(null==this.menuContainer&&(this.menuContainer=new createjs.Container,this.menuContainer.snapToPixelEnabled=!0),t){var e=MENUWIDTH+this._getOverflowWidth();this.menuContainer.removeAllChildren(),makePaletteBitmap(this,PALETTEHEADER.replace("fill_color","#282828").replace("palette_label",toTitleCase(_(this.name))).replace(/header_width/g,e),this.name,(function __processHeader(t,e,i,s){t.menuContainer.addChild(i),makePaletteBitmap(t,DOWNICON,e,__processDownIcon,null),makePaletteBitmap(t,FADEDDOWNICON,e,__makeFadedDownIcon,null),makePaletteBitmap(t,FADEDUPICON,e,__makeFadedUpIcon,null),makePaletteBitmap(t,UPICON,e,__processUpIcon,null),makePaletteBitmap(t,CLOSEICON,e,__processCloseIcon,null),makePaletteBitmap(t,PALETTEICONS[e],e,__processButtonIcon,null)}),null)}},this._getDownButtonY=function(){return maxPaletteHeight(this.palettes.cellSize,this.palettes.scale)+STANDARDBLOCKHEIGHT/2},this._resizeEvent=function(){this.hide(),this._updateBackground(),this._updateBlockMasks(),null!==this.downButton&&(this.downButton.y=this._getDownButtonY(),this.fadedDownButton.y=this.downButton.y)},this._updateBlockMasks=function(){var t=Math.min(maxPaletteHeight(this.palettes.cellSize,this.palettes.scale),this.y),e=MENUWIDTH+this._getOverflowWidth();for(var i in this.protoContainers){var s=new createjs.Shape;s.graphics.r(0,0,e,t),s.x=this.background.x,s.y=this.background.y,this.protoContainers[i].mask=s}},this._getOverflowWidth=function(){var t=0;for(var e in this.protoList)t=Math.max(t,this.protoList[e].textWidth);return t>100?t-30:0},this._updateBackground=function(){if(null!=this.menuContainer){null!==this.background?this.background.removeAllChildren():(this.background=new createjs.Container,this.background.snapToPixelEnabled=!0,this.background.visible=!1,this.palettes.stage.addChild(this.background),this._setupBackgroundEvents());var t=maxPaletteHeight(this.palettes.cellSize,this.palettes.scale),e=new createjs.Shape;e.graphics.f("#949494").r(0,0,MENUWIDTH+this._getOverflowWidth(),t).ef(),e.width=MENUWIDTH+this._getOverflowWidth(),e.height=t,this.background.addChild(e),this.background.x=this.menuContainer.x,this.background.y=this.menuContainer.y+STANDARDBLOCKHEIGHT}},this._resetLayout=function(){if(null!=this.menuContainer){for(var t in this.protoContainers)this.protoContainers[t].y-=this.scrollDiff;this.y=this.menuContainer.y+STANDARDBLOCKHEIGHT;var e=[];for(var t in this.protoContainers)e.push(this.protoContainers[t]);for(var i=e.length,s=0;s<i;s++){(t=e.pop()).x=this.menuContainer.x,t.y=this.y;var a=t.getBounds();this.y+=null!=a?a.height-.1*STANDARDBLOCKHEIGHT:.9*STANDARDBLOCKHEIGHT}for(var t in this.protoContainers)this.protoContainers[t].y+=this.scrollDiff}else console.log("menuContainer is null")},this._updateMenu=function(t){function __calculateBounds(t,e,i,s){var a=t.protoContainers[i].getBounds();t.protoContainers[i].cache(a.x,a.y,Math.ceil(a.width),Math.ceil(a.height));var n=new createjs.Shape;n.graphics.beginFill("#FFF").drawRect(0,0,Math.ceil(a.width),Math.ceil(.75*a.height)),t.protoContainers[i].hitArea=n,t._loadPaletteMenuItemHandler(s,i),t.palettes.refreshCanvas()}function __processBitmap(t,e,i,s){var a=s[0],n=(s[1],s[2]);if(null!=t.protoContainers[e])if(t.protoContainers[e].addChild(i),i.x=10,i.y=0,i.scaleX=1,i.scaleY=1,i.scale=1,a.image){var o=new Image;o.onload=function(){var i=new createjs.Bitmap(o);o.width>o.height?i.scaleX=i.scaleY=i.scale=MEDIASAFEAREA[2]/o.width*(a.scale/2):i.scaleX=i.scaleY=i.scale=MEDIASAFEAREA[3]/o.height*(a.scale/2),t.protoContainers[e].addChild(i),i.x=MEDIASAFEAREA[0]*(a.scale/2),i.y=MEDIASAFEAREA[1]*(a.scale/2),__calculateBounds(t,0,e,n)},o.src=a.image}else __calculateBounds(t,0,e,n);else console.log("no protoContainer for "+e)}function __processFiller(t,e,i,s){var a=s[0];makePaletteBitmap(t,a.artwork,a.modname,__processBitmap,s)}null==this.menuContainer?this.makeMenu(!0):(t||this.palettes.mobile)&&this.hide(),this.y=0,this.model.update();var i=this.model.blocks;for(var s in-1==BUILTINPALETTES.indexOf(e)&&i.reverse(),i){var a=i[s];this.protoContainers[a.modname]?(this.protoContainers[a.modname].x=this.menuContainer.x,this.protoContainers[a.modname].y=this.menuContainer.y+this.y+this.scrollDiff+STANDARDBLOCKHEIGHT,this.y+=Math.ceil(1*a.height)):(this.protoContainers[a.modname]=new createjs.Container,this.protoContainers[a.modname].snapToPixelEnabled=!0,this.protoContainers[a.modname].x=this.menuContainer.x,this.protoContainers[a.modname].y=this.menuContainer.y+this.y+this.scrollDiff+STANDARDBLOCKHEIGHT,this.palettes.stage.addChild(this.protoContainers[a.modname]),this.protoContainers[a.modname].visible=!1,this.size+=Math.ceil(1*a.height),this.y+=Math.ceil(1*a.height),this._updateBackground(),makePaletteBitmap(this,PALETTEFILLER.replace(/filler_height/g,a.height.toString()),a.modname,__processFiller,[a,s,this.protoList[s]]))}this.makeMenu(!1),this.palettes.mobile&&this.hide()},this._moveMenu=function(t,e){if(null!=this.menuContainer){var i=t-this.menuContainer.x,s=e-this.menuContainer.y;this.menuContainer.x=t,this.menuContainer.y=e,this._moveMenuItemsRelative(i,s)}},this._moveMenuRelative=function(t,e){this.menuContainer.x+=t,this.menuContainer.y+=e,this._moveMenuItemsRelative(t,e)},this.hide=function(){this.hideMenu()},this.show=function(){for(var t in this.palettes.mobile?this.hideMenu():this.showMenu(),this.protoContainers)this.protoContainers[t].visible=!0;this._updateBlockMasks(),null!==this.background&&(this.background.visible=!0)},this.hideMenu=function(){null!=this.menuContainer&&(this.menuContainer.visible=!1,this._hideMenuItems(!0)),this._moveMenu(this.palettes.cellSize,this.palettes.cellSize)},this.showMenu=function(){this.palettes.mobile?this.menuContainer.visible=!1:this.menuContainer.visible=!0},this._hideMenuItems=function(t){for(var e in this.protoContainers)this.protoContainers[e].visible=!1;null!==this.background&&(this.background.visible=!1),null!=this.fadedDownButton&&(this.upButton.visible=!1,this.downButton.visible=!1,this.fadedUpButton.visible=!1,this.fadedDownButton.visible=!1),this.visible=!1},this._showMenuItems=function(t){for(var e in 0===this.scrollDiff&&(this.count=0),this.protoContainers)this.protoContainers[e].visible=!0;this._updateBlockMasks(),null!==this.background&&(this.background.visible=!0),this.scrollEvent(0,10),this.visible=!0},this._moveMenuItems=function(t,e){for(var i in this.protoContainers)this.protoContainers[i].x=t,this.protoContainers[i].y=e;null!==this.background&&(this.background.x=t,this.background.y=e)},this._moveMenuItemsRelative=function(t,e){for(var i in this.protoContainers)this.protoContainers[i].x+=t,this.protoContainers[i].y+=e;null!==this.background&&(this.background.x+=t,this.background.y+=e),null!==this.fadedDownButton&&(this.upButton.x+=t,this.upButton.y+=e,this.downButton.x+=t,this.downButton.y+=e,this.fadedUpButton.x+=t,this.fadedUpButton.y+=e,this.fadedDownButton.x+=t,this.fadedDownButton.y+=e)},this.scrollEvent=function(t,e){var i=t*e,s=Math.min(maxPaletteHeight(this.palettes.cellSize,this.palettes.scale),this.y);if(this.y<maxPaletteHeight(this.palettes.cellSize,this.palettes.scale))return this.upButton.visible=!1,this.downButton.visible=!1,this.fadedUpButton.visible=!1,void(this.fadedDownButton.visible=!1);if(this.scrollDiff+i>0&&t>0){if(0===(n=-this.scrollDiff))return this.downButton.visible=!0,this.upButton.visible=!1,this.fadedUpButton.visible=!0,void(this.fadedDownButton.visible=!1);for(var a in this.scrollDiff+=n,this.fadedDownButton.visible=!1,this.downButton.visible=!0,this.protoContainers)this.protoContainers[a].y+=n,this.protoContainers[a].visible=!0,0===this.scrollDiff&&(this.downButton.visible=!0,this.upButton.visible=!1,this.fadedUpButton.visible=!0,this.fadedDownButton.visible=!1)}else if(this.y+this.scrollDiff+i<s&&t<0){var n;if(0===(n=-this.y+s-this.scrollDiff))return this.upButton.visible=!0,this.downButton.visible=!1,this.fadedDownButton.visible=!0,void(this.fadedUpButton.visible=!1);for(var a in this.scrollDiff+=-this.y+s-this.scrollDiff,this.fadedUpButton.visible=!1,this.upButton.visible=!0,this.protoContainers)this.protoContainers[a].y+=n,this.protoContainers[a].visible=!0;-this.y+s-this.scrollDiff==0&&(this.upButton.visible=!0,this.downButton.visible=!1,this.fadedDownButton.visible=!0,this.fadedUpButton.visible=!1)}else if(0===this.count)this.fadedUpButton.visible=!0,this.fadedDownButton.visible=!1,this.upButton.visible=!1,this.downButton.visible=!0;else for(var a in this.scrollDiff+=i,this.fadedUpButton.visible=!1,this.fadedDownButton.visible=!1,this.upButton.visible=!0,this.downButton.visible=!0,this.protoContainers)this.protoContainers[a].y+=i,this.protoContainers[a].visible=!0;this._updateBlockMasks();var o=this.palettes.stage;o.setChildIndex(this.menuContainer,o.getNumChildren()-1),this.palettes.refreshCanvas(),this.count+=1},this.getInfo=function(){var t=this.name+" palette:";for(var e in this.protoList)t+=" "+this.protoList[e].name;return t},this.remove=function(t,e){-1!==(i=this.protoList.indexOf(t))&&this.protoList.splice(i,1);for(var i=0;i<this.model.blocks.length;i++)if(-1!==["nameddo","nameddoArg","namedcalc","namedcalcArg"].indexOf(this.model.blocks[i].blkname)&&this.model.blocks[i].modname===e){this.model.blocks.splice(i,1);break}this.palettes.stage.removeChild(this.protoContainers[e]),delete this.protoContainers[e]},this.add=function(t,e){return-1===this.protoList.indexOf(t)&&(void 0===e?this.protoList.push(t):this.protoList.splice(0,0,t)),this},this._setupBackgroundEvents=function(){var t=this,e=!1;this.background.on("mouseover",(function(e){t.palettes.activePalette=t})),this.background.on("mouseout",(function(e){t.palettes.activePalette=null})),this.background.on("mousedown",(function(i){e=!0;var s=i.stageY;t.background.on("pressmove",(function(i){if(e){var a=i.stageY-s;t.scrollEvent(a,10),s=i.stageY}})),t.background.on("pressup",(function(i){t.palettes.activePalette=null,e=!1}),null,!0)}))},this._loadPaletteMenuHandler=function(){var t=this,e=!1,i=this.palettes.trashcan,s=MENUWIDTH+this._getOverflowWidth();this.menuContainer.on("click",(function(i){if(Math.round(i.stageX/t.palettes.scale)>t.menuContainer.x+s-STANDARDBLOCKHEIGHT)return t.hide(),void t.palettes.refreshCanvas();if(!e){for(var a in e=!0,setTimeout((function(){e=!1}),500),t.palettes.dict)t.name!=a&&t.palettes.dict[a].visible&&t.palettes.dict[a]._hideMenuItems(!1);t.visible?t._hideMenuItems(!1):t._showMenuItems(!1),t.palettes.refreshCanvas()}})),this.menuContainer.on("mousedown",(function(e){i.show();var s=t.menuContainer.x-Math.round(e.stageX/t.palettes.scale),a=t.menuContainer.y-Math.round(e.stageY/t.palettes.scale);t.menuContainer.on("pressup",(function(e){i.overTrashcan(e.stageX/t.palettes.scale,e.stageY/t.palettes.scale)&&i.isVisible&&(t.hide(),t.palettes.refreshCanvas(),"myblocks"===t.name?t._promptMacrosDelete():-1===BUILTINPALETTES.indexOf(t.name)&&t._promptPaletteDelete()),i.hide()})),t.menuContainer.on("mouseout",(function(e){i.overTrashcan(e.stageX/t.palettes.scale,e.stageY/t.palettes.scale)&&i.isVisible&&(t.hide(),t.palettes.refreshCanvas()),i.hide()})),t.menuContainer.on("pressmove",(function(e){var n=t.menuContainer.x,o=t.menuContainer.y;t.menuContainer.x=Math.round(e.stageX/t.palettes.scale)+s,t.menuContainer.y=Math.round(e.stageY/t.palettes.scale)+a,t.palettes.refreshCanvas();var l=t.menuContainer.x-n,r=t.menuContainer.y-o;t.palettes.initial_x=t.menuContainer.x,t.palettes.initial_y=t.menuContainer.y,i.overTrashcan(e.stageX/t.palettes.scale,e.stageY/t.palettes.scale)?i.startHighlightAnimation():i.stopHighlightAnimation(),t._hideMenuItems(!1),t._moveMenuItemsRelative(l,r)}))}))},this._loadPaletteMenuItemHandler=function(t,e){var i=this,s=!1,a=!1,n=!1,o=this.protoContainers[e].x,l=this.protoContainers[e].y;this.protoContainers[e].on("mouseover",(function(t){i.palettes.activePalette=i})),this.protoContainers[e].on("mousedown",(function(t){var s=i.palettes.stage;s.setChildIndex(i.protoContainers[e],s.getNumChildren()-1);var r=Math.min(maxPaletteHeight(i.palettes.cellSize,i.palettes.scale),i.palettes.y);t.stageY,i.palettes.scale,i.menuContainer.y,STANDARDBLOCKHEIGHT;i.protoContainers[e].mask=null,n=!1,a=!0,o=i.protoContainers[e].x,l=i.protoContainers[e].y-i.scrollDiff;var h=t.stageX,c=t.stageY,u=t.stageY;if(!i.draggingProtoBlock){var d=window.hasMouse?MODEDRAG:MODEUNSURE;i.protoContainers[e].on("pressmove",(function(t){if(d===MODEDRAG)return n=!0,i.draggingProtoBlock=!0,i.protoContainers[e].x=Math.round(t.stageX/i.palettes.scale)-10,i.protoContainers[e].y=Math.round(t.stageY/i.palettes.scale),void i.palettes.refreshCanvas();if(d===MODESCROLL){var s=t.stageY-u;return i.scrollEvent(s,10),void(u=t.stageY)}var a=Math.abs(t.stageX-h),o=Math.abs(t.stageY-c);s=Math.sqrt(a*a+o*o);d===MODEUNSURE&&s>DECIDEDISTANCE&&(d=o>a?MODESCROLL:MODEDRAG)}))}})),this.protoContainers[e].on("mouseout",(function(t){i.palettes.activePalette=null,a&&n&&(i._restoreProtoblock(e,o,l+i.scrollDiff),a=!1,n=!1)})),this.protoContainers[e].on("pressup",(function(a){i.palettes.activePalette=null,s||(s=!0,setTimeout((function(){s=!1}),1e3),i._makeBlockFromProtoblock(t,n,e,a,o,l))}))},this._restoreProtoblock=function(t,e,i){this.protoContainers[t].x=e,this.protoContainers[t].y=i,this._resetLayout()},this._promptPaletteDelete=function(){var t='Do you want to remove all "%s" blocks from your project?'.replace("%s",this.name);if(confirm(t)){this.palettes.remove(this.name),delete pluginObjs.PALETTEHIGHLIGHTCOLORS[this.name],delete pluginObjs.PALETTESTROKECOLORS[this.name],delete pluginObjs.PALETTEFILLCOLORS[this.name],delete pluginObjs.PALETTEPLUGINS[this.name],"GLOBALS"in pluginObjs&&delete pluginObjs.GLOBALS[this.name],"IMAGES"in pluginObjs&&delete pluginObjs.IMAGES[this.name],"ONLOAD"in pluginObjs&&delete pluginObjs.ONLOAD[this.name],"ONSTART"in pluginObjs&&delete pluginObjs.ONSTART[this.name],"ONSTOP"in pluginObjs&&delete pluginObjs.ONSTOP[this.name];for(var e=0;e<this.protoList.length;e++){var i=this.protoList[e].name;delete pluginObjs.FLOWPLUGINS[i],delete pluginObjs.ARGPLUGINS[i],delete pluginObjs.BLOCKPLUGINS[i]}storage.plugins=preparePluginExports({}),sugarizerCompatibility.isInsideSugarizer()&&sugarizerCompatibility.saveLocally()}},this._promptMacrosDelete=function(){if(confirm("Do you want to remove all the stacks from your custom palette?")){for(var t=0;t<this.protoList.length;t++){var e=this.protoList[t].name;delete this.protoContainers[e],this.protoList.splice(t,1)}this.palettes.updatePalettes("myblocks"),storage.macros=prepareMacroExports(null,null,{}),sugarizerCompatibility.isInsideSugarizer()&&sugarizerCompatibility.saveLocally()}},this._makeBlockFromPalette=function(t,e,i){if(null!=t){switch(t.name){case"do":e="do "+t.defaults[0];var s=t.name,a=t.defaults[0];break;case"storein":e="store in "+t.defaults[0];s=t.name,a=t.defaults[0];break;case"box":e=t.defaults[0];s=t.name,a=t.defaults[0];break;case"namedbox":if(void 0===t.defaults[0]){e="namedbox";a=_("box")}else{e=t.defaults[0];a=t.defaults[0]}s=t.name;break;case"namedarg":if(void 0===t.defaults[0]){e="namedarg";a="1"}else{e=t.defaults[0];a=t.defaults[0]}s=t.name;break;case"nameddo":if(void 0===t.defaults[0]){e="nameddo";a=_("action")}else{e=t.defaults[0];a=t.defaults[0]}s=t.name;break;case"nameddoArg":if(void 0===t.defaults[0]){e="nameddoArg";a=_("action")}else{e=t.defaults[0];a=t.defaults[0]}s=t.name;break;case"namedcalc":if(void 0===t.defaults[0]){e="namedcalc";a=_("action")}else{e=t.defaults[0];a=t.defaults[0]}s=t.name;break;case"namedcalcArg":if(void 0===t.defaults[0]){e="namedcalcArg";a=_("action")}else{e=t.defaults[0];a=t.defaults[0]}s=t.name;break;default:s=e,a="__NOARG__"}if("namedbox"!==t.name&&blockIsMacro(e))moved=!0,saveX=this.protoContainers[e].x,saveY=this.protoContainers[e].y,this._makeBlockFromProtoblock(t,moved,e,null,saveX,saveY);else i(paletteBlockButtonPush(this.palettes.blocks,s,a))}else console.log("null protoblk?")},this.cleanup=function(){this._resetLayout(),this._updateBlockMasks(),this.palettes.refreshCanvas()},this._makeBlockFromProtoblock=function(t,e,i,s,a,n){var o=this;if(e){e=!1,this.draggingProtoBlock=!1;var l=getMacroExpansion(i,this.protoContainers[i].x-this.palettes.blocks.stage.x,this.protoContainers[i].y-this.palettes.blocks.stage.y);if(null!=l){this.palettes.blocks.loadNewBlocks(l);var r=this.palettes.blocks.blockList.length-1,h=this.palettes.blocks.findTopBlock(r)}else if("myblocks"===this.name){for(var c=i.replace("macro_",""),u=[],d=0;d<this.palettes.macroDict[c].length;d++){var p=this.palettes.macroDict[c][d][1],m=[];m="string"==typeof p?p:"string"==typeof p[1]?"number"===p[0]?[p[0],Number(p[1])]:[p[0],p[1]]:"number"==typeof p[1]?"number"===p[0]?[p[0],p[1]]:[p[0],p[1].toString()]:"number"===p[0]?[p[0],Number(p[1].value)]:[p[0],{value:p[1].value}];var f=[this.palettes.macroDict[c][d][0],m,this.palettes.macroDict[c][d][2],this.palettes.macroDict[c][d][3],this.palettes.macroDict[c][d][4]];u.push(f)}u[0][2]=this.protoContainers[i].x-this.palettes.blocks.stage.x,u[0][3]=this.protoContainers[i].y-this.palettes.blocks.stage.y,this.palettes.blocks.loadNewBlocks(u);r=this.palettes.blocks.blockList.length-1,h=this.palettes.blocks.findTopBlock(r);setTimeout((function(){this.palettes.blocks.blockList[h].collapseToggle()}),500)}else f=this._makeBlockFromPalette(t,i,(function __myCallback(t){for(var e in o.palettes.blocks.findDragGroup(t),o.palettes.blocks.dragGroup)o.palettes.blocks.moveBlockRelative(o.palettes.blocks.dragGroup[e],Math.round(s.stageX/o.palettes.scale)-o.palettes.blocks.stage.x,Math.round(s.stageY/o.palettes.scale)-o.palettes.blocks.stage.y);o.palettes.blocks.blockMoved(t),o.palettes.blocks.checkBounds()}),f);this.cleanup()}},this}function initPalettes(t){for(var e=0;e<BUILTINPALETTES.length;e++)t.add(BUILTINPALETTES[e]);t.makePalettes(!0),setTimeout((function(){t.show(),t.bringToTop()}),6e3)}const MODEUNSURE=0,MODEDRAG=1,MODESCROLL=2,DECIDEDISTANCE=20;function makePaletteBitmap(t,e,i,s,a){var n=new Image;n.onload=function(){var e=new createjs.Bitmap(n);s(t,i,e,a)},n.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(e)))}