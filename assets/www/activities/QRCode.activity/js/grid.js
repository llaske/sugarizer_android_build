/*! Sugarizer 2020-03-14 */
var GridSampler={};GridSampler.checkAndNudgePoints=function(a,b){for(var c=qrcode.width,d=qrcode.height,e=!0,f=0;f<b.length&&e;f+=2){var g=Math.floor(b[f]),h=Math.floor(b[f+1]);if(g<-1||g>c||h<-1||h>d)throw"Error.checkAndNudgePoints ";e=!1,-1==g?(b[f]=0,e=!0):g==c&&(b[f]=c-1,e=!0),-1==h?(b[f+1]=0,e=!0):h==d&&(b[f+1]=d-1,e=!0)}e=!0;for(var f=b.length-2;f>=0&&e;f-=2){var g=Math.floor(b[f]),h=Math.floor(b[f+1]);if(g<-1||g>c||h<-1||h>d)throw"Error.checkAndNudgePoints ";e=!1,-1==g?(b[f]=0,e=!0):g==c&&(b[f]=c-1,e=!0),-1==h?(b[f+1]=0,e=!0):h==d&&(b[f+1]=d-1,e=!0)}},GridSampler.sampleGrid3=function(a,b,c){for(var d=new BitMatrix(b),e=new Array(b<<1),f=0;f<b;f++){for(var g=e.length,h=f+.5,i=0;i<g;i+=2)e[i]=.5+(i>>1),e[i+1]=h;c.transformPoints1(e),GridSampler.checkAndNudgePoints(a,e);try{for(var i=0;i<g;i+=2){a[Math.floor(e[i])+qrcode.width*Math.floor(e[i+1])]&&d.set_Renamed(i>>1,f)}}catch(a){throw"Error.checkAndNudgePoints"}}return d},GridSampler.sampleGridx=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=PerspectiveTransform.quadrilateralToQuadrilateral(c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);return GridSampler.sampleGrid3(a,b,s)};