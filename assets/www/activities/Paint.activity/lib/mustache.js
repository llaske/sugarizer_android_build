/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
!function(t,e){"object"==typeof exports&&exports?module.exports=e:"function"==typeof define&&define.amd?define(e):t.Mustache=e}(this,function(){var t={name:"mustache.js",version:"0.7.2",tags:["{{","}}"]};t.Scanner=Scanner,t.Context=Context,t.Writer=Writer;var e=/\s*/,n=/\s+/,r=/\S/,i=/\s*=/,a=/\s*\}/,o=/#|\^|\/|>|\{|&|=|!/;function isWhitespace(t){return!function testRe(t,e){return RegExp.prototype.test.call(t,e)}(r,t)}var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function escapeRe(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Scanner(t){this.string=t,this.tail=t,this.pos=0}function Context(t,e){this.view=t,this.parent=e,this.clearCache()}function Writer(){this.clearCache()}function escapeTags(t){return[new RegExp(escapeRe(t[0])+"\\s*"),new RegExp("\\s*"+escapeRe(t[1]))]}t.escape=function escapeHtml(t){return String(t).replace(/[&<>"'\/]/g,(function(t){return c[t]}))},Scanner.prototype.eos=function(){return""===this.tail},Scanner.prototype.scan=function(t){var e=this.tail.match(t);return e&&0===e.index?(this.tail=this.tail.substring(e[0].length),this.pos+=e[0].length,e[0]):""},Scanner.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n),this.pos+=n}return e},Context.make=function(t){return t instanceof Context?t:new Context(t)},Context.prototype.clearCache=function(){this._cache={}},Context.prototype.push=function(t){return new Context(t,this)},Context.prototype.lookup=function(t){var e=this._cache[t];if(!e){if("."===t)e=this.view;else for(var n=this;n;){if(t.indexOf(".")>0){var r=t.split("."),i=0;for(e=n.view;e&&i<r.length;)e=e[r[i++]]}else e=n.view[t];if(null!=e)break;n=n.parent}this._cache[t]=e}return"function"==typeof e&&(e=e.call(this.view)),e},Writer.prototype.clearCache=function(){this._cache={},this._partialCache={}},Writer.prototype.compile=function(e,n){var r=this._cache[e];if(!r){var i=t.parse(e,n);r=this._cache[e]=this.compileTokens(i,e)}return r},Writer.prototype.compilePartial=function(t,e,n){var r=this.compile(e,n);return this._partialCache[t]=r,r},Writer.prototype.compileTokens=function(t,e){var n=function compileTokens(t){var e={};function subRender(t,n,r){if(!e[t]){var i=compileTokens(n);e[t]=function(t,e){return i(t,e,r)}}return e[t]}return function(e,n,r){for(var i,a,o="",s=0,c=t.length;s<c;++s)switch((i=t[s])[0]){case"#":a=r.slice(i[3],i[5]),o+=e._section(i[1],n,a,subRender(s,i[4],r));break;case"^":o+=e._inverted(i[1],n,subRender(s,i[4],r));break;case">":o+=e._partial(i[1],n);break;case"&":o+=e._name(i[1],n);break;case"name":o+=e._escaped(i[1],n);break;case"text":o+=i[1]}return o}}(t),r=this;return function(t,i){if(i)if("function"==typeof i)r._loadPartial=i;else for(var a in i)r.compilePartial(a,i[a]);return n(r,Context.make(t),e)}},Writer.prototype.render=function(t,e,n){return this.compile(t)(e,n)},Writer.prototype._section=function(t,e,n,r){var i=e.lookup(t);switch(typeof i){case"object":if(s(i)){for(var a="",o=0,c=i.length;o<c;++o)a+=r(this,e.push(i[o]));return a}return i?r(this,e.push(i)):"";case"function":var p=this,u=i.call(e.view,n,(function(t){return p.render(t,e)}));return null!=u?u:"";default:if(i)return r(this,e)}return""},Writer.prototype._inverted=function(t,e,n){var r=e.lookup(t);return!r||s(r)&&0===r.length?n(this,e):""},Writer.prototype._partial=function(t,e){!(t in this._partialCache)&&this._loadPartial&&this.compilePartial(t,this._loadPartial(t));var n=this._partialCache[t];return n?n(e):""},Writer.prototype._name=function(t,e){var n=e.lookup(t);return"function"==typeof n&&(n=n.call(e.view)),null==n?"":String(n)},Writer.prototype._escaped=function(e,n){return t.escape(this._name(e,n))},t.parse=function(r,s){if(r=r||"","string"==typeof(s=s||t.tags)&&(s=s.split(n)),2!==s.length)throw new Error("Invalid tags: "+s.join(", "));var c,p,u,l,h=escapeTags(s),f=new Scanner(r),v=[],g=[],m=[],d=!1,w=!1;function stripSpace(){if(d&&!w)for(;m.length;)g.splice(m.pop(),1);else m=[];d=!1,w=!1}for(;!f.eos();){if(c=f.pos,u=f.scanUntil(h[0]))for(var y=0,k=u.length;y<k;++y)isWhitespace(l=u.charAt(y))?m.push(g.length):w=!0,g.push(["text",l,c,c+1]),c+=1,"\n"===l&&stripSpace();if(c=f.pos,!f.scan(h[0]))break;if(d=!0,p=f.scan(o)||"name",f.scan(e),"="===p)u=f.scanUntil(i),f.scan(i),f.scanUntil(h[1]);else if("{"===p){var x=new RegExp("\\s*"+escapeRe("}"+s[1]));u=f.scanUntil(x),f.scan(a),f.scanUntil(h[1]),p="&"}else u=f.scanUntil(h[1]);if(!f.scan(h[1]))throw new Error("Unclosed tag at "+f.pos);if("/"===p){if(0===v.length)throw new Error('Unopened section "'+u+'" at '+c);var _;if((_=v.pop())[1]!==u)throw new Error('Unclosed section "'+_[1]+'" at '+c)}var b=[p,u,c,f.pos];if(g.push(b),"#"===p||"^"===p)v.push(b);else if("name"===p||"{"===p||"&"===p)w=!0;else if("="===p){if(2!==(s=u.split(n)).length)throw new Error("Invalid tags at "+c+": "+s.join(", "));h=escapeTags(s)}}if(_=v.pop())throw new Error('Unclosed section "'+_[1]+'" at '+f.pos);return function nestTokens(t){for(var e,n=[],r=n,i=[],a=0,o=t.length;a<o;++a)switch((e=t[a])[0]){case"#":case"^":i.push(e),r.push(e),r=e[4]=[];break;case"/":i.pop()[5]=e[2],r=i.length>0?i[i.length-1][4]:n;break;default:r.push(e)}return n}(function squashTokens(t){for(var e,n,r=[],i=0,a=t.length;i<a;++i)"text"===(e=t[i])[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(n=e,r.push(e));return r}(g))};var p=new Writer;return t.clearCache=function(){return p.clearCache()},t.compile=function(t,e){return p.compile(t,e)},t.compilePartial=function(t,e,n){return p.compilePartial(t,e,n)},t.compileTokens=function(t,e){return p.compileTokens(t,e)},t.render=function(t,e,n){return p.render(t,e,n)},t.to_html=function(e,n,r,i){var a=t.render(e,n,r);if("function"!=typeof i)return a;i(a)},t}());