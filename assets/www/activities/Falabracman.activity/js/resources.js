/*! Sugarizer 2020-03-14 */
function Resources(){this.resourceCache={},this.loading=[],this.readyCallbacks=[],this.load=function(a){var b=this;a instanceof Array?a.forEach(function(a){b.loadIn(a)}):b.loadIn(a)},this.loadIn=function(a){var b=this;if(this.resourceCache[a])return this.resourceCache[a];var c=new Image;c.onload=function(){b.resourceCache[a]=c,b.isReady()&&b.readyCallbacks.forEach(function(a){a()})},this.resourceCache[a]=!1,c.src=a},this.get=function(a){return this.resourceCache[a]},this.isReady=function(){var a=!0;for(var b in this.resourceCache)this.resourceCache.hasOwnProperty(b)&&!this.resourceCache[b]&&(a=!1);return a},this.onReady=function(a){this.readyCallbacks.push(a)}}define(function(){return Resources});