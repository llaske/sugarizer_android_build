Vue.component("sugar-device",{template:'<div style="display: none">{{ watchId }}</div>',data:function(){return{readyToWatch:!1,frequency:null}},created:function(){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src","../../cordova.js"),document.head.appendChild(n)},mounted:function(){var n=this;this.isMobile()&&document.addEventListener("deviceready",(function(){n.readyToWatch=!0}),!1)},computed:{watchId:function(){return this.readyToWatch&&this.frequency?navigator.accelerometer.watchAcceleration(this.accelerationCallback,null,{frequency:this.frequency}):null}},methods:{isMobile(){var n=navigator.userAgent;return!!/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(n)},isElectron(){var n=navigator.userAgent;return!!/Electron/.test(n)},isApp:()=>"http"!=document.location.protocol.substr(0,4),isWebApp(){return!(this.isMobile()||this.isElectron()||this.isApp())},getOS(){var n=navigator.userAgent;for(var e of[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Chrome OS",r:/CrOS/},{s:"Linux",r:/(Linux|X11(?!.*CrOS))/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}])if(e.r.test(n))return e.s},watchAcceleration:function(n){var e=this,i=new Accelerometer({frequency:n});i?(i.addEventListener("reading",(function(){e.accelerationCallback(i)})),i.start()):this.frequency=n},accelerationCallback:function(n){this.$emit("acceleration-callback",n)},getLocation:function(){return new Promise((n,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(n):n(null,{code:1})})},vibrate:function(n){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&navigator.vibrate(n)}},beforeDestroy:function(){navigator.accelerometer.clearWatch(this.watchId)}});