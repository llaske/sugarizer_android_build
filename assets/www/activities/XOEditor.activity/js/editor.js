/*! Sugarizer 2020-03-14 */
function Editor(a,b,c,d,e,f,g,h){void 0===h&&(h=!1),this.radius=22.5,this.scale=a.canvas.width/1200,this.cxy=[a.canvas.width/2,a.canvas.height/2],this.xy=[a.canvas.width/2+120*this.scale,a.canvas.height/2-this.radius*this.scale],this.dotsizeplus=3*this.radius*this.scale,this.dmin=0,this.dmax=a.canvas.height-this.dotsizeplus/2.2,this.zones=[],this.dots=[],this.stage=a,this.xo=null,this.width=a.canvas.width,this.height=a.canvas.height,this.env=f,this.ds=g,this.hexToRgb=function(a){var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?{r:parseInt(b[1],16),g:parseInt(b[2],16),b:parseInt(b[3],16)}:null},this.contrast=function(a,b){var c=.3*a.r+.6*a.g+.1*a.b,d=.3*b.r+.6*b.g+.1*b.b;return Math.abs(d-c)},this.hue=function(a){var b=.5*(2*a.r-a.g-a.b),c=.87*(a.g-a.b);return 180*Math.atan2(c,b)/Math.PI},this.deltahue=function(a,b){return h1=this.hue(a),h2=this.hue(b),Math.abs(h2-h1)},this.zone=function(a,b){var c;return c=b<75?0:b>150?1:2,a>48&&(c+=1),c},this.calczones=function(a){for(var c in b.colors)rgb1=this.hexToRgb(b.colors[c].stroke),rgb2=this.hexToRgb(b.colors[c].fill),dv=this.contrast(rgb1,rgb2),dh=this.deltahue(rgb1,rgb2),this.zones.push(this.zone(dv,dh))},this.nextdotposition=function(){var a=this.xy[0]-this.cxy[0],b=this.xy[1]-this.cxy[1],c=Math.sqrt(a*a+b*b),d=2*c*Math.PI,e=Math.atan2(b,a);e+=this.dotsizeplus/d*2*Math.PI,c+=this.dotsizeplus/(d/this.dotsizeplus),this.xy[0]=c*Math.cos(e)+this.cxy[0],this.xy[1]=c*Math.sin(e)+this.cxy[1],(this.xy[1]<this.dmin||this.xy[1]>this.dmax)&&this.nextdotposition()},this.saveColours=function(){var a=this.ds.localStorage.getValue("sugar_settings");if(a.colorvalue.stroke=this.xo.stroke,a.colorvalue.fill=this.xo.fill,a.color=this.xo.colnumber,this.ds.localStorage.setValue("sugar_settings",a),null!=a.networkId&&a.server&&a.token){var b=a.server.url;if(null==b)if("http"==document.location.protocol.substr(0,4)){var c=window.location.href;b=c.substring(0,c.indexOf("/activities"))}else b="http://localhost";b=b+"/api/v1/users/"+a.networkId;var d=new XMLHttpRequest;d.open("PUT",b,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.setRequestHeader("x-key",a.token.x_key),d.setRequestHeader("x-access-token",a.token.access_token),d.send("user="+encodeURI(JSON.stringify({color:{stroke:this.xo.stroke,fill:this.xo.fill}})))}},this.stop=function(){var a=[],b={};b.x=this.width,b.y=this.height,a.push(b);for(var c in this.dots)b={},b.fill=this.dots[c].innercol,b.stroke=this.dots[c].outercol,b.x=this.dots[c].circle.x,b.y=this.dots[c].circle.y,b.num=this.dots[c].number,a.push(b);var d=JSON.stringify(a);e.getDatastoreObject().setDataAsText(d),e.getDatastoreObject().save(function(a){null===a?console.log("write done."):console.log("write failed.")})},this.init=function(){1==h?this.init_getsettings(!1,[]):e.getDatastoreObject().getMetadata(this.init_canaccessdatastore.bind(this))},this.init_canaccessdatastore=function(a,b){var c=(new Date).getTime();Math.abs(c-b.creation_time)<2e3?this.init_getsettings(!1,[]):e.getDatastoreObject().loadAsText(this.init_getdatastore.bind(this))},this.init_getdatastore=function(a,b,c){null==a&&null!=c?(c=JSON.parse(c),this.init_getsettings(!0,c)):this.init_getsettings(!1,[])},this.init_getsettings=function(a,b){this.ds.localStorage.load(function(){var c=this.ds.localStorage.getValue("sugar_settings");this.init_activity(a,b,c)}.bind(this))},this.init_activity=function(c,e,f){this.dots=[],this.calczones();var g=f,h=new XOMan(d.fill,d.stroke,this,g.color);if(h.init(),this.xo=h,0==c){for(var i=0;i<4;i++)for(var j in b.colors)if(this.zones[j]==i){var k=new ColourCircle(b.colors[j].fill,b.colors[j].stroke,this.xy[0]+15,this.xy[1],a,this.xo,j);k.init(),this.dots.push(k),this.nextdotposition()}}else for(var l=this.width/e[0].x,m=this.height/e[0].y,j=1;j<e.length;j++){var k=new ColourCircle(e[j].fill,e[j].stroke,e[j].x*l,e[j].y*m,a,this.xo,e[j].num);k.init(),this.dots.push(k)}}}