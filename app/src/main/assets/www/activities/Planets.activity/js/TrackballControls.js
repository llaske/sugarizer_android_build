THREE.TrackballControls=function(e,t){void 0===t&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');var o=this,n=-1,a=0,c=1,s=2,i=3,r=4;this.object=e,this.domElement=t,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.ZOOM,RIGHT:THREE.MOUSE.PAN},this.target=new THREE.Vector3;var p=new THREE.Vector3,m=1,u=n,d=n,h=new THREE.Vector3,l=new THREE.Vector2,E=new THREE.Vector2,g=new THREE.Vector3,y=0,v=new THREE.Vector2,b=new THREE.Vector2,w=0,f=0,j=new THREE.Vector2,T=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;var R={type:"change"},k={type:"start"},H={type:"end"};this.handleResize=function(){var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height};var L,C,V,D,z,Y,x,M,P,S,X,O=(L=new THREE.Vector2,function getMouseOnScreen(e,t){return L.set((e-o.screen.left)/o.screen.width,(t-o.screen.top)/o.screen.height),L}),A=function(){var e=new THREE.Vector2;return function getMouseOnCircle(t,n){return e.set((t-.5*o.screen.width-o.screen.left)/(.5*o.screen.width),(o.screen.height+2*(o.screen.top-n))/o.screen.width),e}}();function keydown(e){!1!==o.enabled&&(window.removeEventListener("keydown",keydown),d===n&&(e.keyCode!==o.keys[a]||o.noRotate?e.keyCode!==o.keys[c]||o.noZoom?e.keyCode!==o.keys[s]||o.noPan||(d=s):d=c:d=a))}function keyup(){!1!==o.enabled&&(d=n,window.addEventListener("keydown",keydown,!1))}function mousedown(e){if(!1!==o.enabled){if(e.preventDefault(),e.stopPropagation(),u===n)switch(e.button){case o.mouseButtons.LEFT:u=a;break;case o.mouseButtons.MIDDLE:u=c;break;case o.mouseButtons.RIGHT:u=s;break;default:u=n}var t=d!==n?d:u;t!==a||o.noRotate?t!==c||o.noZoom?t!==s||o.noPan||(j.copy(O(e.pageX,e.pageY)),T.copy(j)):(v.copy(O(e.pageX,e.pageY)),b.copy(v)):(E.copy(A(e.pageX,e.pageY)),l.copy(E)),document.addEventListener("mousemove",mousemove,!1),document.addEventListener("mouseup",mouseup,!1),o.dispatchEvent(k)}}function mousemove(e){if(!1!==o.enabled){e.preventDefault(),e.stopPropagation();var t=d!==n?d:u;t!==a||o.noRotate?t!==c||o.noZoom?t!==s||o.noPan||T.copy(O(e.pageX,e.pageY)):b.copy(O(e.pageX,e.pageY)):(l.copy(E),E.copy(A(e.pageX,e.pageY)))}}function mouseup(e){!1!==o.enabled&&(e.preventDefault(),e.stopPropagation(),u=n,document.removeEventListener("mousemove",mousemove),document.removeEventListener("mouseup",mouseup),o.dispatchEvent(H))}function mousewheel(e){if(!1!==o.enabled&&!0!==o.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:v.y-=.025*e.deltaY;break;case 1:v.y-=.01*e.deltaY;break;default:v.y-=25e-5*e.deltaY}o.dispatchEvent(k),o.dispatchEvent(H)}}function touchstart(e){if(!1!==o.enabled){switch(e.preventDefault(),e.touches.length){case 1:u=i,E.copy(A(e.touches[0].pageX,e.touches[0].pageY)),l.copy(E);break;default:u=r;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;f=w=Math.sqrt(t*t+n*n);var a=(e.touches[0].pageX+e.touches[1].pageX)/2,c=(e.touches[0].pageY+e.touches[1].pageY)/2;j.copy(O(a,c)),T.copy(j)}o.dispatchEvent(k)}}function touchmove(e){if(!1!==o.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:l.copy(E),E.copy(A(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;f=Math.sqrt(t*t+n*n);var a=(e.touches[0].pageX+e.touches[1].pageX)/2,c=(e.touches[0].pageY+e.touches[1].pageY)/2;T.copy(O(a,c))}}function touchend(e){if(!1!==o.enabled){switch(e.touches.length){case 0:u=n;break;case 1:u=i,E.copy(A(e.touches[0].pageX,e.touches[0].pageY)),l.copy(E)}o.dispatchEvent(H)}}function contextmenu(e){!1!==o.enabled&&e.preventDefault()}this.rotateCamera=(V=new THREE.Vector3,D=new THREE.Quaternion,z=new THREE.Vector3,Y=new THREE.Vector3,x=new THREE.Vector3,M=new THREE.Vector3,function rotateCamera(){M.set(E.x-l.x,E.y-l.y,0),(C=M.length())?(h.copy(o.object.position).sub(o.target),z.copy(h).normalize(),Y.copy(o.object.up).normalize(),x.crossVectors(Y,z).normalize(),Y.setLength(E.y-l.y),x.setLength(E.x-l.x),M.copy(Y.add(x)),V.crossVectors(M,h).normalize(),C*=o.rotateSpeed,D.setFromAxisAngle(V,C),h.applyQuaternion(D),o.object.up.applyQuaternion(D),g.copy(V),y=C):!o.staticMoving&&y&&(y*=Math.sqrt(1-o.dynamicDampingFactor),h.copy(o.object.position).sub(o.target),D.setFromAxisAngle(g,y),h.applyQuaternion(D),o.object.up.applyQuaternion(D)),l.copy(E)}),this.zoomCamera=function(){var e;u===r?(e=w/f,w=f,o.object.isPerspectiveCamera?h.multiplyScalar(e):o.object.isOrthographicCamera?(o.object.zoom*=e,o.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(1!==(e=1+(b.y-v.y)*o.zoomSpeed)&&e>0&&(o.object.isPerspectiveCamera?h.multiplyScalar(e):o.object.isOrthographicCamera?(o.object.zoom/=e,o.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),o.staticMoving?v.copy(b):v.y+=(b.y-v.y)*this.dynamicDampingFactor)},this.panCamera=(P=new THREE.Vector2,S=new THREE.Vector3,X=new THREE.Vector3,function panCamera(){if(P.copy(T).sub(j),P.lengthSq()){if(o.object.isOrthographicCamera){var e=(o.object.right-o.object.left)/o.object.zoom/o.domElement.clientWidth,t=(o.object.top-o.object.bottom)/o.object.zoom/o.domElement.clientWidth;P.x*=e,P.y*=t}P.multiplyScalar(h.length()*o.panSpeed),X.copy(h).cross(o.object.up).setLength(P.x),X.add(S.copy(o.object.up).setLength(P.y)),o.object.position.add(X),o.target.add(X),o.staticMoving?j.copy(T):j.add(P.subVectors(T,j).multiplyScalar(o.dynamicDampingFactor))}}),this.checkDistances=function(){o.noZoom&&o.noPan||(h.lengthSq()>o.maxDistance*o.maxDistance&&(o.object.position.addVectors(o.target,h.setLength(o.maxDistance)),v.copy(b)),h.lengthSq()<o.minDistance*o.minDistance&&(o.object.position.addVectors(o.target,h.setLength(o.minDistance)),v.copy(b)))},this.update=function(){h.subVectors(o.object.position,o.target),o.noRotate||o.rotateCamera(),o.noZoom||o.zoomCamera(),o.noPan||o.panCamera(),o.object.position.addVectors(o.target,h),o.object.isPerspectiveCamera?(o.checkDistances(),o.object.lookAt(o.target),p.distanceToSquared(o.object.position)>1e-6&&(o.dispatchEvent(R),p.copy(o.object.position))):o.object.isOrthographicCamera?(o.object.lookAt(o.target),(p.distanceToSquared(o.object.position)>1e-6||m!==o.object.zoom)&&(o.dispatchEvent(R),p.copy(o.object.position),m=o.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){u=n,d=n,o.target.copy(o.target0),o.object.position.copy(o.position0),o.object.up.copy(o.up0),o.object.zoom=o.zoom0,o.object.updateProjectionMatrix(),h.subVectors(o.object.position,o.target),o.object.lookAt(o.target),o.dispatchEvent(R),p.copy(o.object.position),m=o.object.zoom},this.dispose=function(){this.domElement.removeEventListener("contextmenu",contextmenu,!1),this.domElement.removeEventListener("mousedown",mousedown,!1),this.domElement.removeEventListener("wheel",mousewheel,!1),this.domElement.removeEventListener("touchstart",touchstart,!1),this.domElement.removeEventListener("touchend",touchend,!1),this.domElement.removeEventListener("touchmove",touchmove,!1),document.removeEventListener("mousemove",mousemove,!1),document.removeEventListener("mouseup",mouseup,!1),window.removeEventListener("keydown",keydown,!1),window.removeEventListener("keyup",keyup,!1)},this.domElement.addEventListener("contextmenu",contextmenu,!1),this.domElement.addEventListener("mousedown",mousedown,!1),this.domElement.addEventListener("wheel",mousewheel,!1),this.domElement.addEventListener("touchstart",touchstart,!1),this.domElement.addEventListener("touchend",touchend,!1),this.domElement.addEventListener("touchmove",touchmove,!1),window.addEventListener("keydown",keydown,!1),window.addEventListener("keyup",keyup,!1),this.handleResize(),this.update()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.TrackballControls.prototype.constructor=THREE.TrackballControls;