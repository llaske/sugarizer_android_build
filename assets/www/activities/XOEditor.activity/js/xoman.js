/*! Sugarizer 2020-03-14 */
function XOMan(a,b,c,d){this.svgwidth=null,this.svgheight=null,this.xomanpic=null,this.stroke=b,this.fill=a,this.colnumber=d,this.xoSVG=function(a,b){return this.svgwidth=240*c.scale,this.svgheight=260*c.scale,this.header()+'<g><g id="XO"><path id="Line1" d="M'+(165.5*c.scale).toFixed(1)+","+(97*c.scale).toFixed(1)+" C"+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(74.5*c.scale).toFixed(1)+","+(188*c.scale).toFixed(1)+'" stroke="'+b+'" stroke-width="'+(37*c.scale).toFixed(1)+'" stroke-linecap="round" fill="none" visibility="visible" /><path id="Line2" d="M'+(165.5*c.scale).toFixed(1)+","+(188*c.scale).toFixed(1)+" C"+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(74.5*c.scale).toFixed(1)+","+(97*c.scale).toFixed(1)+'" stroke="'+b+'" stroke-width="'+(37*c.scale).toFixed(1)+'" stroke-linecap="round" fill="none" visibility="visible" /><path id="Fill1" d="M'+(165.5*c.scale).toFixed(1)+","+(97*c.scale).toFixed(1)+" C"+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(74.5*c.scale).toFixed(1)+","+(188*c.scale).toFixed(1)+'" stroke="'+a+'" stroke-width="'+(17*c.scale).toFixed(1)+'" stroke-linecap="round" fill="none" visibility="visible" /><path id="Fill2" d="M'+(165.5*c.scale).toFixed(1)+","+(188*c.scale).toFixed(1)+" C"+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(120*c.scale).toFixed(1)+","+(140.5*c.scale).toFixed(1)+" "+(74.5*c.scale).toFixed(1)+","+(97*c.scale).toFixed(1)+'" stroke="'+a+'" stroke-width="'+(17*c.scale).toFixed(1)+'" stroke-linecap="round" fill="none" visibility="visible" /><circle id="Circle" cx="'+(120*c.scale).toFixed(1)+'" cy="'+(61.5*c.scale).toFixed(1)+'" r="'+(27.5*c.scale).toFixed(1)+'" fill="'+a+'" stroke="'+b+'" stroke-width="'+(11*c.scale).toFixed(1)+'" visibility="visible" /></g></g>\n'+this.footer()},this.header=function(){return'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+this.svgwidth.toFixed(0)+'px" height="'+this.svgheight.toFixed(0)+'px" xml:space="preserve">\n'},this.footer=function(){return"</svg>"},this.updateSVG=function(a,b,d){this.stroke=b,this.fill=a,this.colnumber=d;var e=this.xoSVG(a,b),e=window.btoa(e),f=new createjs.Bitmap("data:image/svg+xml;base64,"+e);f.x=c.stage.canvas.width/2-this.svgwidth/2,f.y=c.stage.canvas.height/2-this.svgheight/2,c.stage.removeChild(this.xomanpic),this.xomanpic=f,c.stage.addChild(this.xomanpic),c.stage.update()},this.init=function(){this.stroke=b,this.fill=a,this.colnumber=d;var e=this.xoSVG(a,b),e=window.btoa(e),f=new createjs.Bitmap("data:image/svg+xml;base64,"+e);f.x=c.stage.canvas.width/2-this.svgwidth/2,f.y=c.stage.canvas.height/2-this.svgheight/2,this.xomanpic=f,c.stage.addChild(this.xomanpic),c.stage.update()}}