Vue.component("sugar-device",{template:'<div style="display: none">{{ watchId }}</div>',data:function(){return{readyToWatch:!1,frequency:null}},created:function(){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","../../cordova.js"),document.head.appendChild(e)},mounted:function(){var e=this,t=navigator.userAgent.toLowerCase();-1==t.indexOf("android")&&-1==t.indexOf("iphone")&&-1==t.indexOf("ipad")&&-1==t.indexOf("ipod")&&-1==t.indexOf("mozilla/5.0 (mobile")||document.addEventListener("deviceready",(function(){e.readyToWatch=!0}),!1)},computed:{watchId:function(){return this.readyToWatch&&this.frequency?navigator.accelerometer.watchAcceleration(this.accelerationCallback,null,{frequency:this.frequency}):null}},methods:{watchAcceleration:function(e){var t=this,a=new Accelerometer({frequency:e});a?(a.addEventListener("reading",(function(){t.accelerationCallback(a)})),a.start()):this.frequency=e},accelerationCallback:function(e){this.$emit("acceleration-callback",e)},getLocation:function(){return new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e):e(null,{code:1})})},vibrate:function(e){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&navigator.vibrate(e)}},beforeDestroy:function(){navigator.accelerometer.clearWatch(this.watchId)}});