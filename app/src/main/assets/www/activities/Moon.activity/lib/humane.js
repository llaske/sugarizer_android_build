/**
 * humane.js
 * Humanized Messages for Notifications
 * @author Marc Harter (@wavded)
 * @example
 *   humane.log('hello world');
 * @license MIT
 * See more usage examples at: http://wavded.github.com/humane-js/
 */
define((function(t,e){var i=window,s=document,n={on:function(t,e,s){"addEventListener"in i?t.addEventListener(e,s,!1):t.attachEvent("on"+e,s)},off:function(t,e,s){"removeEventListener"in i?t.removeEventListener(e,s,!1):t.detachEvent("on"+e,s)},bind:function(t,e){return function(){t.apply(e,arguments)}},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},config:function(t,e){return null!=t?t:e},transSupport:!1,useFilter:/msie [678]/i.test(navigator.userAgent),_checkTransition:function(){var t=s.createElement("div"),e={webkit:"webkit",Moz:"",O:"o",ms:"MS"};for(var i in e)i+"Transition"in t.style&&(this.vendorPrefix=e[i],this.transSupport=!0)}};n._checkTransition();var Humane=function(t){t||(t={}),this.queue=[],this.baseCls=t.baseCls||"humane",this.addnCls=t.addnCls||"",this.timeout="timeout"in t?t.timeout:2500,this.waitForMove=t.waitForMove||!1,this.clickToClose=t.clickToClose||!1,this.timeoutAfterMove=t.timeoutAfterMove||!1,this.container=t.container;try{this._setupEl()}catch(t){n.on(i,"load",n.bind(this._setupEl,this))}};return Humane.prototype={constructor:Humane,_setupEl:function(){var t=s.createElement("div");if(t.style.display="none",!this.container){if(!s.body)throw"document.body is null";this.container=s.body}this.container.appendChild(t),this.el=t,this.removeEvent=n.bind((function(){var t=n.config(this.currentMsg.timeoutAfterMove,this.timeoutAfterMove);t?setTimeout(n.bind(this.remove,this),t):this.remove()}),this),this.transEvent=n.bind(this._afterAnimation,this),this._run()},_afterTimeout:function(){n.config(this.currentMsg.waitForMove,this.waitForMove)?this.removeEventsSet||(n.on(s.body,"mousemove",this.removeEvent),n.on(s.body,"click",this.removeEvent),n.on(s.body,"keypress",this.removeEvent),n.on(s.body,"touchstart",this.removeEvent),this.removeEventsSet=!0):this.remove()},_run:function(){if(!this._animating&&this.queue.length&&this.el){this._animating=!0,this.currentTimer&&(clearTimeout(this.currentTimer),this.currentTimer=null);var t=this.queue.shift();n.config(t.clickToClose,this.clickToClose)&&(n.on(this.el,"click",this.removeEvent),n.on(this.el,"touchstart",this.removeEvent));var e=n.config(t.timeout,this.timeout);e>0&&(this.currentTimer=setTimeout(n.bind(this._afterTimeout,this),e)),n.isArray(t.html)&&(t.html="<ul><li>"+t.html.join("<li>")+"</ul>"),this.el.innerHTML=t.html,this.currentMsg=t,this.el.className=this.baseCls,n.transSupport?(this.el.style.display="block",setTimeout(n.bind(this._showMsg,this),50)):this._showMsg()}},_setOpacity:function(t){if(n.useFilter)try{this.el.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*t}catch(t){}else this.el.style.opacity=String(t)},_showMsg:function(){var t=n.config(this.currentMsg.addnCls,this.addnCls);if(n.transSupport)this.el.className=this.baseCls+" "+t+" "+this.baseCls+"-animate";else{var e=0;this.el.className=this.baseCls+" "+t+" "+this.baseCls+"-js-animate",this._setOpacity(0),this.el.style.display="block";var i=this,s=setInterval((function(){e<1?((e+=.1)>1&&(e=1),i._setOpacity(e)):clearInterval(s)}),30)}},_hideMsg:function(){var t=n.config(this.currentMsg.addnCls,this.addnCls);if(n.transSupport)this.el.className=this.baseCls+" "+t,n.on(this.el,n.vendorPrefix?n.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent);else var e=1,i=this,s=setInterval((function(){e>0?((e-=.1)<0&&(e=0),i._setOpacity(e)):(i.el.className=i.baseCls+" "+t,clearInterval(s),i._afterAnimation())}),30)},_afterAnimation:function(){n.transSupport&&n.off(this.el,n.vendorPrefix?n.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent),this.currentMsg.cb&&this.currentMsg.cb(),this.el.style.display="none",this._animating=!1,this._run()},remove:function(t){var e="function"==typeof t?t:null;n.off(s.body,"mousemove",this.removeEvent),n.off(s.body,"click",this.removeEvent),n.off(s.body,"keypress",this.removeEvent),n.off(s.body,"touchstart",this.removeEvent),n.off(this.el,"click",this.removeEvent),n.off(this.el,"touchstart",this.removeEvent),this.removeEventsSet=!1,e&&this.currentMsg&&(this.currentMsg.cb=e),this._animating?this._hideMsg():e&&e()},log:function(t,e,i,s){var n={};if(s)for(var r in s)n[r]=s[r];if("function"==typeof e)i=e;else if(e)for(var r in e)n[r]=e[r];return n.html=t,i&&(n.cb=i),this.queue.push(n),this._run(),this},spawn:function(t){var e=this;return function(i,s,n){return e.log.call(e,i,s,n,t),e}},create:function(t){return new Humane(t)}},new Humane}));