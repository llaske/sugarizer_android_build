/*! Sugarizer 2020-03-14 */
!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s="./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js")}({"./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js":function(a,b,c){(function(a){function b(a,b){return f(a)||e(a,b)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}function f(a){if(Array.isArray(a))return a}function g(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function h(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function i(a,b,c){return b&&h(a.prototype,b),c&&h(a,c),a}var j=c("./node_modules/scratch-vm/src/extension-support/argument-type.js"),k=c("./node_modules/scratch-vm/src/extension-support/block-type.js"),l=c("./node_modules/scratch-vm/src/dispatch/worker-dispatch.js"),m=c("./node_modules/scratch-vm/src/extension-support/target-type.js"),n=function(){function a(){var c=this;g(this,a),this.nextExtensionId=0,this.initialRegistrations=[],l.waitForConnection.then(function(){l.call("extensions","allocateWorker").then(function(a){var d=b(a,2),e=d[0],f=d[1];c.workerId=e;try{importScripts(f);var g=c.initialRegistrations;c.initialRegistrations=null,Promise.all(g).then(function(){return l.call("extensions","onWorkerInit",e)})}catch(a){l.call("extensions","onWorkerInit",e,a)}})}),this.extensions=[]}return i(a,[{key:"register",value:function(a){var b=this.nextExtensionId++;this.extensions.push(a);var c="extension.".concat(this.workerId,".").concat(b),d=l.setService(c,a).then(function(){return l.call("extensions","registerExtensionService",c)});return this.initialRegistrations&&this.initialRegistrations.push(d),d}}]),a}();a.Scratch=a.Scratch||{},a.Scratch.ArgumentType=j,a.Scratch.BlockType=k,a.Scratch.TargetType=m;var o=new n;a.Scratch.extensions={register:o.register.bind(o)}}).call(this,c("./node_modules/webpack/buildin/global.js"))},"./node_modules/microee/index.js":function(a,b){function c(){this._events={}}c.prototype={on:function(a,b){this._events||(this._events={});var c=this._events;return(c[a]||(c[a]=[])).push(b),this},removeListener:function(a,b){var c,d=this._events[a]||[];for(c=d.length-1;c>=0&&d[c];c--)d[c]!==b&&d[c].cb!==b||d.splice(c,1)},removeAllListeners:function(a){a?this._events[a]&&(this._events[a]=[]):this._events={}},listeners:function(a){return this._events?this._events[a]||[]:[]},emit:function(a){this._events||(this._events={});var b,c=Array.prototype.slice.call(arguments,1),d=this._events[a]||[];for(b=d.length-1;b>=0&&d[b];b--)d[b].apply(this,c);return this},when:function(a,b){return this.once(a,b,!0)},once:function(a,b,c){function d(){c||this.removeListener(a,d),b.apply(this,arguments)&&c&&this.removeListener(a,d)}return b?(d.cb=b,this.on(a,d),this):this}},c.mixin=function(a){var b,d=c.prototype;for(b in d)d.hasOwnProperty(b)&&(a.prototype[b]=d[b])},a.exports=c},"./node_modules/minilog/lib/common/filter.js":function(a,b,c){function d(){this.enabled=!0,this.defaultResult=!0,this.clear()}function e(a,b){return a.n.test?a.n.test(b):a.n==b}var f=c("./node_modules/minilog/lib/common/transform.js"),g={debug:1,info:2,warn:3,error:4};f.mixin(d),d.prototype.allow=function(a,b){return this._white.push({n:a,l:g[b]}),this},d.prototype.deny=function(a,b){return this._black.push({n:a,l:g[b]}),this},d.prototype.clear=function(){return this._white=[],this._black=[],this},d.prototype.test=function(a,b){var c,d=Math.max(this._white.length,this._black.length);for(c=0;c<d;c++){if(this._white[c]&&e(this._white[c],a)&&g[b]>=this._white[c].l)return!0;if(this._black[c]&&e(this._black[c],a)&&g[b]<=this._black[c].l)return!1}return this.defaultResult},d.prototype.write=function(a,b,c){if(!this.enabled||this.test(a,b))return this.emit("item",a,b,c)},a.exports=d},"./node_modules/minilog/lib/common/minilog.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/transform.js"),e=c("./node_modules/minilog/lib/common/filter.js"),f=new d,g=Array.prototype.slice;b=a.exports=function(a){var c=function(){return f.write(a,void 0,g.call(arguments)),c};return c.debug=function(){return f.write(a,"debug",g.call(arguments)),c},c.info=function(){return f.write(a,"info",g.call(arguments)),c},c.warn=function(){return f.write(a,"warn",g.call(arguments)),c},c.error=function(){return f.write(a,"error",g.call(arguments)),c},c.log=c.debug,c.suggest=b.suggest,c.format=f.format,c},b.defaultBackend=b.defaultFormatter=null,b.pipe=function(a){return f.pipe(a)},b.end=b.unpipe=b.disable=function(a){return f.unpipe(a)},b.Transform=d,b.Filter=e,b.suggest=new e,b.enable=function(){return b.defaultFormatter?f.pipe(b.suggest).pipe(b.defaultFormatter).pipe(b.defaultBackend):f.pipe(b.suggest).pipe(b.defaultBackend)}},"./node_modules/minilog/lib/common/transform.js":function(a,b,c){function d(){}c("./node_modules/microee/index.js").mixin(d),d.prototype.write=function(a,b,c){this.emit("item",a,b,c)},d.prototype.end=function(){this.emit("end"),this.removeAllListeners()},d.prototype.pipe=function(a){function b(){a.write.apply(a,Array.prototype.slice.call(arguments))}function c(){!a._isStdio&&a.end()}var d=this;return d.emit("unpipe",a),a.emit("pipe",d),d.on("item",b),d.on("end",c),d.when("unpipe",function(e){var f=e===a||void 0===e;return f&&(d.removeListener("item",b),d.removeListener("end",c),a.emit("unpipe")),f}),a},d.prototype.unpipe=function(a){return this.emit("unpipe",a),this},d.prototype.format=function(a){throw new Error(["Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:","var Minilog = require('minilog');","Minilog","  .pipe(Minilog.backends.console.formatClean)","  .pipe(Minilog.backends.console);"].join("\n"))},d.mixin=function(a){var b,c=d.prototype;for(b in c)c.hasOwnProperty(b)&&(a.prototype[b]=c[b])},a.exports=d},"./node_modules/minilog/lib/web/array.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/transform.js"),e=[],f=new d;f.write=function(a,b,c){e.push([a,b,c])},f.get=function(){return e},f.empty=function(){e=[]},a.exports=f},"./node_modules/minilog/lib/web/console.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/transform.js"),e=/\n+$/,f=new d;f.write=function(a,b,c){var d=c.length-1;if("undefined"!=typeof console&&console.log){if(console.log.apply)return console.log.apply(console,[a,b].concat(c));if(JSON&&JSON.stringify){c[d]&&"string"==typeof c[d]&&(c[d]=c[d].replace(e,""));try{for(d=0;d<c.length;d++)c[d]=JSON.stringify(c[d])}catch(a){}console.log(c.join(" "))}}},f.formatters=["color","minilog"],f.color=c("./node_modules/minilog/lib/web/formatters/color.js"),f.minilog=c("./node_modules/minilog/lib/web/formatters/minilog.js"),a.exports=f},"./node_modules/minilog/lib/web/formatters/color.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/transform.js"),e=c("./node_modules/minilog/lib/web/formatters/util.js"),f={debug:["cyan"],info:["purple"],warn:["yellow",!0],error:["red",!0]},g=new d;g.write=function(a,b,c){var d=console.log;console[b]&&console[b].apply&&(d=console[b],d.apply(console,["%c"+a+" %c"+b,e("gray"),e.apply(e,f[b])].concat(c)))},g.pipe=function(){},a.exports=g},"./node_modules/minilog/lib/web/formatters/minilog.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/transform.js"),e=c("./node_modules/minilog/lib/web/formatters/util.js"),f={debug:["gray"],info:["purple"],warn:["yellow",!0],error:["red",!0]},g=new d;g.write=function(a,b,c){var d=console.log;"debug"!=b&&console[b]&&(d=console[b]);var g=0;if("info"!=b){for(;g<c.length&&"string"==typeof c[g];g++);d.apply(console,["%c"+a+" "+c.slice(0,g).join(" "),e.apply(e,f[b])].concat(c.slice(g)))}else d.apply(console,["%c"+a,e.apply(e,f[b])].concat(c))},g.pipe=function(){},a.exports=g},"./node_modules/minilog/lib/web/formatters/util.js":function(a,b){function c(a,b){return b?"color: #fff; background: "+d[a]+";":"color: "+d[a]+";"}var d={black:"#000",red:"#c23621",green:"#25bc26",yellow:"#bbbb00",blue:"#492ee1",magenta:"#d338d3",cyan:"#33bbc8",gray:"#808080",purple:"#708"};a.exports=c},"./node_modules/minilog/lib/web/index.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/minilog.js"),e=d.enable,f=d.disable,g="undefined"!=typeof navigator&&/chrome/i.test(navigator.userAgent),h=c("./node_modules/minilog/lib/web/console.js");if(d.defaultBackend=g?h.minilog:h,"undefined"!=typeof window){try{d.enable(JSON.parse(window.localStorage.minilogSettings))}catch(a){}if(window.location&&window.location.search){var i=RegExp("[?&]minilog=([^&]*)").exec(window.location.search);i&&d.enable(decodeURIComponent(i[1]))}}d.enable=function(){e.call(d,!0);try{window.localStorage.minilogSettings=JSON.stringify(!0)}catch(a){}return this},d.disable=function(){f.call(d);try{delete window.localStorage.minilogSettings}catch(a){}return this},b=a.exports=d,b.backends={array:c("./node_modules/minilog/lib/web/array.js"),browser:d.defaultBackend,localStorage:c("./node_modules/minilog/lib/web/localstorage.js"),jQuery:c("./node_modules/minilog/lib/web/jquery_simple.js")}},"./node_modules/minilog/lib/web/jquery_simple.js":function(a,b,c){function d(a){this.url=a.url||"",this.cache=[],this.timer=null,this.interval=a.interval||3e4,this.enabled=!0,this.jQuery=window.jQuery,this.extras={}}var e=c("./node_modules/minilog/lib/common/transform.js"),f=(new Date).valueOf().toString(36);e.mixin(d),d.prototype.write=function(a,b,c){this.timer||this.init(),this.cache.push([a,b].concat(c))},d.prototype.init=function(){if(this.enabled&&this.jQuery){var a=this;this.timer=setTimeout(function(){var b,c,d=[],e=a.url;if(0==a.cache.length)return a.init();for(b=0;b<a.cache.length;b++)try{JSON.stringify(a.cache[b]),d.push(a.cache[b])}catch(a){}a.jQuery.isEmptyObject(a.extras)?(c=JSON.stringify({logs:d}),e=a.url+"?client_id="+f):c=JSON.stringify(a.jQuery.extend({logs:d},a.extras)),a.jQuery.ajax(e,{type:"POST",cache:!1,processData:!1,data:c,contentType:"application/json",timeout:1e4}).success(function(b,c,d){b.interval&&(a.interval=Math.max(1e3,b.interval))}).error(function(){a.interval=3e4}).always(function(){a.init()}),a.cache=[]},this.interval)}},d.prototype.end=function(){},d.jQueryWait=function(a){if("undefined"!=typeof window&&(window.jQuery||window.$))return a(window.jQuery||window.$);"undefined"!=typeof window&&setTimeout(function(){d.jQueryWait(a)},200)},a.exports=d},"./node_modules/minilog/lib/web/localstorage.js":function(a,b,c){var d=c("./node_modules/minilog/lib/common/transform.js"),e=!1,f=new d;f.write=function(a,b,c){if("undefined"!=typeof window&&"undefined"!=typeof JSON&&JSON.stringify&&JSON.parse)try{e||(e=window.localStorage.minilog?JSON.parse(window.localStorage.minilog):[]),e.push([(new Date).toString(),a,b,c]),window.localStorage.minilog=JSON.stringify(e)}catch(a){}},a.exports=f},"./node_modules/scratch-vm/src/dispatch/shared-dispatch.js":function(a,b,c){function d(a){return g(a)||f(a)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function g(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function h(a,b){return k(a)||j(a,b)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function m(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function n(a,b,c){return b&&m(a.prototype,b),c&&m(a,c),a}var o=c("./node_modules/scratch-vm/src/util/log.js"),p=function(){function a(){l(this,a),this.callbacks=[],this.nextResponseId=0}return n(a,[{key:"call",value:function(a,b){for(var c=arguments.length,d=new Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];return this.transferCall.apply(this,[a,b,null].concat(d))}},{key:"transferCall",value:function(a,b,c){try{var d=this._getServiceProvider(a),e=d.provider,f=d.isRemote;if(e){for(var g=arguments.length,h=new Array(g>3?g-3:0),i=3;i<g;i++)h[i-3]=arguments[i];if(f)return this._remoteTransferCall.apply(this,[e,a,b,c].concat(h));var j=e[b].apply(e,h);return Promise.resolve(j)}return Promise.reject(new Error("Service not found: ".concat(a)))}catch(a){return Promise.reject(a)}}},{key:"_isRemoteService",value:function(a){return this._getServiceProvider(a).isRemote}},{key:"_remoteCall",value:function(a,b,c){for(var d=arguments.length,e=new Array(d>3?d-3:0),f=3;f<d;f++)e[f-3]=arguments[f];return this._remoteTransferCall.apply(this,[a,b,c,null].concat(e))}},{key:"_remoteTransferCall",value:function(a,b,c,d){for(var e=this,f=arguments.length,g=new Array(f>4?f-4:0),h=4;h<f;h++)g[h-4]=arguments[h];return new Promise(function(f,h){var i=e._storeCallbacks(f,h);g.length>0&&"function"==typeof g[g.length-1].yield&&g.pop(),d?a.postMessage({service:b,method:c,responseId:i,args:g},d):a.postMessage({service:b,method:c,responseId:i,args:g})})}},{key:"_storeCallbacks",value:function(a,b){var c=this.nextResponseId++;return this.callbacks[c]=[a,b],c}},{key:"_deliverResponse",value:function(a,b){try{var c=h(this.callbacks[a],2),d=c[0],e=c[1];delete this.callbacks[a],b.error?e(b.error):d(b.result)}catch(a){o.error("Dispatch callback failed: ".concat(JSON.stringify(a)))}}},{key:"_onMessage",value:function(a,b){var c=b.data;c.args=c.args||[];var e;c.service?e="dispatch"===c.service?this._onDispatchMessage(a,c):this.call.apply(this,[c.service,c.method].concat(d(c.args))):void 0===c.responseId?o.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(b))):this._deliverResponse(c.responseId,c),e&&(void 0===c.responseId?o.error("Dispatch message missing required response ID: ".concat(JSON.stringify(b))):e.then(function(b){return a.postMessage({responseId:c.responseId,result:b})},function(b){return a.postMessage({responseId:c.responseId,error:b})}))}},{key:"_getServiceProvider",value:function(a){throw new Error("Could not get provider for ".concat(a,": _getServiceProvider not implemented"))}},{key:"_onDispatchMessage",value:function(a,b){throw new Error("Unimplemented dispatch message handler cannot handle ".concat(b.method," method"))}}]),a}();a.exports=p},"./node_modules/scratch-vm/src/dispatch/worker-dispatch.js":function(a,b,c){function d(a){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function g(a,b,c){return b&&f(a.prototype,b),c&&f(a,c),a}function h(a,b){return!b||"object"!==d(b)&&"function"!=typeof b?j(a):b}function i(a){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function j(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function k(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&l(a,b)}function l(a,b){return(l=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var m=c("./node_modules/scratch-vm/src/dispatch/shared-dispatch.js"),n=c("./node_modules/scratch-vm/src/util/log.js"),o=function(a){function b(){var a;return e(this,b),a=h(this,i(b).call(this)),a._connectionPromise=new Promise(function(b){a._onConnect=b}),a.services={},a._onMessage=a._onMessage.bind(j(a),self),"undefined"!=typeof self&&(self.onmessage=a._onMessage),a}return k(b,a),g(b,[{key:"setService",value:function(a,b){var c=this;return this.services.hasOwnProperty(a)&&n.warn("Worker dispatch replacing existing service provider for ".concat(a)),this.services[a]=b,this.waitForConnection.then(function(){return c._remoteCall(self,"dispatch","setService",a)})}},{key:"_getServiceProvider",value:function(a){var b=this.services[a];return{provider:b||self,isRemote:!b}}},{key:"_onDispatchMessage",value:function(a,b){var c;switch(b.method){case"handshake":c=this._onConnect();break;case"terminate":setTimeout(function(){return self.close()},0),c=Promise.resolve();break;default:n.error("Worker dispatch received message for unknown method: ".concat(b.method))}return c}},{key:"waitForConnection",get:function(){return this._connectionPromise}}]),b}(m);a.exports=new o},"./node_modules/scratch-vm/src/extension-support/argument-type.js":function(a,b){var c={ANGLE:"angle",BOOLEAN:"Boolean",COLOR:"color",NUMBER:"number",STRING:"string",MATRIX:"matrix",NOTE:"note"};a.exports=c},"./node_modules/scratch-vm/src/extension-support/block-type.js":function(a,b){var c={BOOLEAN:"Boolean",BUTTON:"button",COMMAND:"command",CONDITIONAL:"conditional",EVENT:"event",HAT:"hat",LOOP:"loop",REPORTER:"reporter"};a.exports=c},"./node_modules/scratch-vm/src/extension-support/target-type.js":function(a,b){var c={SPRITE:"sprite",STAGE:"stage"};a.exports=c},"./node_modules/scratch-vm/src/util/log.js":function(a,b,c){var d=c("./node_modules/minilog/lib/web/index.js");d.enable(),a.exports=d("vm")},"./node_modules/webpack/buildin/global.js":function(a,b){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(a){"object"==typeof window&&(c=window)}a.exports=c}});