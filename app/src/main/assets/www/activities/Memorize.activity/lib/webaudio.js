window.AudioContext=window.AudioContext||window.webkitAudioContext,WebAudio=function(){if(!1===WebAudio.isAvailable)throw this._addRequiredMessage(),new Error("WebAudio API is required and not available.");this._ctx=new AudioContext,this._muted=!1,this._volume=1,this._gainNode=this._ctx.createGain(),this._compressor=this._ctx.createDynamicsCompressor(),this._gainNode.connect(this._compressor),this._compressor.connect(this._ctx.destination),this._pageVisibilityCtor()},WebAudio.fn=WebAudio.prototype,WebAudio.prototype.destroy=function(){this._pageVisibilityDtor()},WebAudio.isAvailable=!!window.AudioContext,WebAudio.prototype._addRequiredMessage=function(e){e=e||document.body;var t=document.createElement("div");t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.textAlign="center",t.style.background="#eee",t.style.color="#000",t.style.padding="1em",t.style.width="475px",t.style.margin="5em auto 0",t.innerHTML=['Your browser does not seem to support <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html">WebAudio API</a>.<br />','Try with <a href="https://www.google.com/intl/en/chrome/browser/">Chrome Browser</a>.'].join("\n"),e.appendChild(t)},WebAudio.prototype.context=function(){return this._ctx},WebAudio.prototype.createSound=function(){return new WebAudio.Sound(this)},WebAudio.prototype._entryNode=function(){return this._gainNode},WebAudio.prototype.volume=function(e){return void 0===e?this._volume:(this._volume=e,!1===this._muted&&(this._gainNode.gain.value=this._volume),this)},WebAudio.prototype.mute=function(e){return void 0===e?this._muted:(this._muted=e,this._gainNode.gain.value=this._muted?0:this._volume,this)},WebAudio.prototype.toggleMute=function(){this.mute()?this.mute(!1):this.mute(!0)},WebAudio.prototype._pageVisibilityCtor=function(){this._pageVisibilityEventStr=void 0!==document.hidden?"visibilitychange":void 0!==document.mozHidden?"mozvisibilitychange":void 0!==document.msHidden?"msvisibilitychange":void 0!==document.webkitHidden?"webkitvisibilitychange":console.assert(!1,"Page Visibility API unsupported"),this._pageVisibilityDocumentStr=void 0!==document.hidden?"hidden":void 0!==document.mozHidden?"mozHidden":void 0!==document.msHidden?"msHidden":void 0!==document.webkitHidden?"webkitHidden":console.assert(!1,"Page Visibility API unsupported"),this._$pageVisibilityCallback=function(){var e=!!document[this._pageVisibilityDocumentStr];this.mute(!!e)}.bind(this),document.addEventListener(this._pageVisibilityEventStr,this._$pageVisibilityCallback,!1)},WebAudio.prototype._pageVisibilityDtor=function(){document.removeEventListener(this._pageVisibilityEventStr,this._$pageVisibilityCallback,!1)},WebAudio.NodeChainBuilder=function(e){console.assert(e instanceof AudioContext),this._context=e,this._firstNode=null,this._lastNode=null,this._nodes={}},WebAudio.NodeChainBuilder.create=function(e){return new WebAudio.NodeChainBuilder(e)},WebAudio.NodeChainBuilder.prototype.destroy=function(){},WebAudio.NodeChainBuilder.prototype.nodes=function(){return this._nodes},WebAudio.NodeChainBuilder.prototype.first=function(){return this._firstNode},WebAudio.NodeChainBuilder.prototype.last=function(){return this._lastNode},WebAudio.NodeChainBuilder.prototype._addNode=function(e,t){var o=!(!this._lastNode||!("playbackRate"in this._lastNode));for(var i in o&&(this._bufferSourceDst=e),null!==this._lastNode&&this._lastNode.connect(e),null===this._firstNode&&(this._firstNode=e),this._lastNode=e,t)e[i]=t[i];return this},WebAudio.NodeChainBuilder.prototype.cloneBufferSource=function(){console.assert(this._nodes.bufferSource,"no buffersource presents. Add one.");var e=this._nodes.bufferSource,t=this._context.createBufferSource();return t.buffer=e.buffer,t.playbackRate=e.playbackRate,t.loop=e.loop,t.connect(this._bufferSourceDst),t},WebAudio.NodeChainBuilder.prototype.bufferSource=function(e){var t=this._context.createBufferSource();return this._nodes.bufferSource=t,this._addNode(t,e)},WebAudio.NodeChainBuilder.prototype.mediaStreamSource=function(e,t){var o=this._context.createMediaStreamSource(e);return this._nodes.bufferSource=o,this._addNode(o,t)},WebAudio.NodeChainBuilder.prototype.mediaElementSource=function(e,t){console.assert(e instanceof HTMLAudioElement||e instanceof HTMLVideoElement);var o=this._context.createMediaElementSource(e);return this._nodes.bufferSource=o,this._addNode(o,t)},WebAudio.NodeChainBuilder.prototype.panner=function(e){var t=this._context.createPanner();return this._nodes.panner=t,this._addNode(t,e)},WebAudio.NodeChainBuilder.prototype.analyser=function(e){var t=this._context.createAnalyser();return this._nodes.analyser=t,this._addNode(t,e)},WebAudio.NodeChainBuilder.prototype.gainNode=function(e){var t=this._context.createGain();return this._nodes.gainNode=t,this._addNode(t,e)},WebAudio.Sound=function(e,t){this._webaudio=e,this._context=this._webaudio.context(),console.assert(this._webaudio instanceof WebAudio),void 0===t&&(t=new WebAudio.NodeChainBuilder(this._context).bufferSource().gainNode().analyser().panner()),console.assert(t instanceof WebAudio.NodeChainBuilder),this._chain=t,this._chain.last().connect(this._webaudio._entryNode()),this._source=this._chain.nodes().bufferSource,this._gainNode=this._chain.nodes().gainNode,this._analyser=this._chain.nodes().analyser,this._panner=this._chain.nodes().panner,console.assert(this._source,"no bufferSource: not yet supported"),console.assert(this._gainNode,"no gainNode: not yet supported"),console.assert(this._analyser,"no analyser: not yet supported"),console.assert(this._panner,"no panner: not yet supported")},WebAudio.Sound.create=function(e,t){return new WebAudio.Sound(e,t)},WebAudio.Sound.prototype.destroy=function(){this._chain.last().disconnect(),this._chain.destroy(),this._chain=null},WebAudio.Sound.fn=WebAudio.Sound.prototype,WebAudio.Sound.prototype.nodes=function(){return this._chain.nodes()},WebAudio.Sound.prototype.isPlayable=function(){return!!this._source.buffer},WebAudio.Sound.prototype.play=function(e){if(void 0===e&&(e=0),!1!==this.isPlayable()){var t=this._chain.cloneBufferSource();t.start(e);var o={node:t,stop:function(e){return void 0===e&&(e=0),this.node.stop(e),o}};return o}},WebAudio.Sound.prototype.volume=function(e){return void 0===e?this._gainNode.gain.value:(this._gainNode.gain.value=e,this)},WebAudio.Sound.prototype.loop=function(e){return void 0===e?this._source.loop:(this._source.loop=e,this)},WebAudio.Sound.prototype.buffer=function(e){return void 0===e?this._source.buffer:(this._source.buffer=e,this)},WebAudio.Sound.prototype.pannerCone=function(e,t,o){return this._panner.coneInnerAngle=180*e/Math.PI,this._panner.coneOuterAngle=180*t/Math.PI,this._panner.coneOuterGain=o,this},WebAudio.Sound.prototype.pannerConeInnerAngle=function(e){return void 0===e?this._panner.coneInnerAngle/180*Math.PI:(this._panner.coneInnerAngle=180*e/Math.PI,this)},WebAudio.Sound.prototype.pannerConeOuterAngle=function(e){return void 0===e?this._panner.coneOuterAngle/180*Math.PI:(this._panner.coneOuterAngle=180*e/Math.PI,this)},WebAudio.Sound.prototype.pannerConeOuterGain=function(e){return void 0===e?this._panner.coneOuterGain:(this._panner.coneOuterGain=e,this)},WebAudio.Sound.prototype.amplitude=function(e){e=void 0!==e?e:2;var t=this._analyser,o=new Uint8Array(t.frequencyBinCount);t.getByteFrequencyData(o);for(var i=0,n=0;n<e;n++)i+=o[n];return i/(256*e-1)},WebAudio.Sound.prototype.tone=function(e,t){e=void 0!==e?e:200,t=void 0!==t?t:1;for(var o=this._webaudio.context().createBuffer(1,44100*t,44100),i=o.getChannelData(0),n=0;n<i.length;n++){var r=e*(n/o.sampleRate)*Math.PI;i[n]=2*Math.sin(r)}return this.buffer(o),this},WebAudio.Sound.prototype.makeHistogram=function(e){var t=this._analyser;this._privHisto=this._privHisto||new Uint8Array(t.frequencyBinCount);var o=this._privHisto;t.getByteFrequencyData(o);return function(e,t){for(var o=Math.floor(e.length/t),i=(Math.floor(e.length/o),[]),n=0,r=0;n<e.length;r++){for(var u=0,s=0;s<o;s++,n++)u+=e[n];var d=u/o;i[r]=d}return i}(o,e)},WebAudio.Sound.prototype.load=function(e,t,o){return o=o||function(){console.warn("unable to load sound "+e)},this._loadAndDecodeSound(e,function(e){this._source.buffer=e,t&&t(this)}.bind(this),function(){o&&o(this)}.bind(this)),this},WebAudio.Sound.prototype._loadAndDecodeSound=function(e,t,o){this._context.decodeAudioData(e,(function(e){console.log("OK"),t&&t(e)}),(function(){console.log("KO"),o&&o()}))},WebAudio.Flow=function(){var e,t=[],o=setTimeout((function(){o=null,e._next()}),0);return e={destroy:function(){o&&clearTimeout(o)},par:function(o,i){return!i&&t[t.length-1]instanceof Array||t.push([]),t[t.length-1].push(o),e},seq:function(t){return e.par(t,!0)},_next:function(o,i){for(var n=[],r=[],u=t.shift()||[],s=u.length,d=1==s,a=0;a<u.length;a++)!function(t,u){t((function(t,o){n[u]=t,r[u]=o,0==--s&&e._next(d?n[0]:n,d?r[0]:r)}),o,i)}(u[a],a)}}};