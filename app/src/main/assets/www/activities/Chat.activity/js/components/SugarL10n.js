const SugarLocalization={template:"<div/>",data:function(){return{l10n:null,code:null,dictionary:null,units:[{name:"Years",factor:30758400},{name:"Months",factor:2592e3},{name:"Weeks",factor:604800},{name:"Days",factor:86400},{name:"Hours",factor:3600},{name:"Minutes",factor:60}]}},created:function(){const e=this;requirejs(["sugar-web/env"],(function(t){t.getEnvironment(((t,n)=>{const a="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,i=n.user?n.user.language:a;e.loadLanguageFile(i)}))}))},methods:{emitLocalized(){const e=new CustomEvent("localized",{detail:{l10n:this}});window.dispatchEvent(e)},loadLanguageFile:function(e){const t=this;requirejs(["lib/i18next.min.js","lib/axios.min.js"],(function(n,a){a.get(`./locales/${e}.json`).then((a=>{n.init({lng:e,fallbackLng:"en",resources:{[e]:{translation:a.data}}},(()=>{t.l10n=n,t.code=n.language,t.dictionary=n.getResourceBundle(n.language,"translation"),t.emitLocalized()}))})).catch((e=>{t.loadLanguageFile("en"),console.log(e)}))}))},get:function(e,t){let n="";if(n=this.dictionary&&this.dictionary[e]||e,t){let e=n.match(/{{\s*[\w\.]+\s*}}/g);for(let a in e){let i=e[a].match(/[\w\.]+/)[0];t[i]&&(n=n.replace(e[a],t[i]))}}return n},localize:function(e){const t=this;Object.keys(e).forEach(((n,a)=>{e[n]=t.get(n.substr(6))}))},localizeTimestamp:function(e){const t=0;let n="",a=(Date.now()-e)/1e3;for(let e=0;e<this.units.length;e++){let i=this.units[e].factor,o=Math.floor(a/i);if(o>0&&(t>0&&(n+=","),n+=" "+o+" "+(1==o?this.get(this.units[e].name+"_one"):this.get(this.units[e].name+"_other")),a-=o*i),""!=n&&(t+=1),2==t)break}return 0==t?this.get("SecondsAgo"):this.get("Ago",{time:n})}}};