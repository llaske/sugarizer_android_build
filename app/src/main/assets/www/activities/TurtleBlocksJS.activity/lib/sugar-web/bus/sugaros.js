define(["sugar-web/env"],(function(t){"use strict";var e=0,n={},r={},a=null,s=[];function WebSocketClient(e){this.queue=[],this.socket=null;var n=this;t.getEnvironment((function(t,e){var r=e.apiSocketPort,a=new WebSocket("ws://localhost:"+r);a.binaryType="arraybuffer",a.onopen=function(){var t=[e.activityId,e.apiSocketKey];for(a.send(JSON.stringify({method:"authenticate",id:"authenticate",params:t}));n.queue.length>0;)a.send(n.queue.shift())},a.onmessage=function(t){n.onMessage(t)},n.socket=a}))}WebSocketClient.prototype.send=function(t){this.socket&&this.socket.readyState==WebSocket.OPEN?this.socket.send(t):this.queue.push(t)},WebSocketClient.prototype.close=function(){this.socket.close()};var o={};function InputStream(){this.streamId=null,this.readCallback=null}function OutputStream(){this.streamId=null}return InputStream.prototype.open=function(t){var e=this;o.sendMessage("open_stream",[],(function(n,r){e.streamId=r[0],s[e.streamId]=e,t(n)}))},InputStream.prototype.read=function(t,e){if(this.readCallback)throw new Error("Read already in progress");this.readCallback=e;var n=new ArrayBuffer(8);new Uint8Array(n,0,1)[0]=this.streamId,new Uint32Array(n,4,1)[0]=t,o.sendBinary(n)},InputStream.prototype.gotData=function(t){var e=this.readCallback;this.readCallback=null,e(null,t)},InputStream.prototype.close=function(t){var e=this;o.sendMessage("close_stream",[this.streamId],(function onStreamClosed(n,r){t&&t(n),delete s[e.streamId]}))},OutputStream.prototype.open=function(t){var e=this;o.sendMessage("open_stream",[],(function(n,r){e.streamId=r[0],t(n)}))},OutputStream.prototype.write=function(t){var e=new ArrayBuffer(t.byteLength+1),n=new Uint8Array(e);n[0]=this.streamId,n.set(new Uint8Array(t),1),o.sendBinary(e)},OutputStream.prototype.close=function(t){o.sendMessage("close_stream",[this.streamId],t)},o.createInputStream=function(t){return new InputStream},o.createOutputStream=function(t){return new OutputStream},o.sendMessage=function(t,r,s){var o={method:t,id:e,params:r,jsonrpc:"2.0"};s&&(n[e]=s),a.send(JSON.stringify(o)),e++},o.onNotification=function(t,e){r[t]=e},o.sendBinary=function(t,e){a.send(t)},o.listen=function(t){(a=t||new WebSocketClient).onMessage=function(t){if("string"==typeof t.data){var e=JSON.parse(t.data),a=e.id;if(e.method){var o=r[e.method];void 0!==o&&o(e.params)}else if(a in n){var i=n[a];null===e.error?i(null,e.result):i(new Error(e.error),null),delete n[a]}}else{var u=new Uint8Array(t.data)[0];u in s&&s[u].gotData(t.data.slice(1))}}},o.close=function(){a.close(),a=null},o}));