define(["picoModal","sugar-web/datastore","sugar-web/graphics/icon","mustache","sugar-web/env","sugar-web/graphics/radiobuttonsgroup"],(function(e,t,a,n,i,r){var o={},s=null,l=[];i.getEnvironment((function(e,t){s=t.user;for(var a=0;s.activities&&a<s.activities.length;a++){var n=s.activities[a];l[n.id]=n}})),o.featureLocalJournal={};var c=o.featureLocalJournal;c.id="journal-button",c.title="$titleJournal",c.placeholder="$holderSearchJournal",c.icon="lib/sugar-web/graphics/icons/actions/activity-journal.svg",c.beforeActivate=function(){c.isFavorite=!1,document.getElementById("favorite-button").style.backgroundImage="url(lib/sugar-web/graphics/icons/emblems/favorite.svg)",journalFill.apply(null,c.filters)},c.beforeUnactivate=function(){},c.onFavorite=function(){var e=document.getElementById("favorite-button");c.isFavorite?e.style.backgroundImage="url(lib/sugar-web/graphics/icons/emblems/favorite.svg)":a.colorize(e,s.colorvalue,(function(){})),c.isFavorite=!c.isFavorite,journalFill.apply(null,c.filters)},c.onScroll=function(){},c.onSearch=function(){journalFill.apply(null,c.filters)},c.onCancelSearch=function(){journalFill.apply(null,c.filters)};var u,d,m={};function journalFill(e,a,i,r){var o=[];e&&o.push(e),a&&o.push(a),i&&o.push(i),r&&o.push(r);for(var s=t.find(),m=[],g=0;g<s.length;g++){var f=s[g],p=!0;c.isFavorite&&(p=p&&f.metadata.keep);var h=document.getElementById("search-text").value;h&&h.length>0&&(p=p&&f.metadata.title&&-1!=f.metadata.title.indexOf(h)),p&&m.push(f)}var b=o.length,v=m;if(b>0){v=[];for(g=0;g<m.length;g++){f=m[g],p=!1;for(var y=0;y<b;y++)p=p||journalFilterMatch(f,o[y]);p&&v.push(f)}}for(s={entries:v.sort((function(e,t){return parseInt(t.metadata.timestamp)-parseInt(e.metadata.timestamp)}))},g=0;g<s.entries.length;g++){f=s.entries[g];var x=l[f.metadata.activity];f.imageUrl="../../"+x.directory+"/"+x.icon,f.index=g,f.ago=timestampToElapsedString(f.metadata.creation_time)}var E=n.render("\t\t\t{{#entries}}\t\t\t<div id='entry_{{index}}' style='height:60px'>\t\t\t\t<div id='eicon_{{index}}' class='toolbutton' style='background-image:url({{imageUrl}});background-size:40px 40px;width:40px;height:40px;display:inline-block;margin-left:20px;margin-top:5px;'></div>\t\t\t\t<div id='etext_{{index}}' style='color:black;display:inline-block;vertical-align:middle;margin-left:30px;height:60px;margin-top:10px;font-weight:bold;font-size:14px;'>{{metadata.title}}</div>\t\t\t\t<div id='edate_{{index}}' style='color:black;vertical-align:baseline;text-align:right;float:right;height:45px;padding-top:15px;margin-right:10px;clear:right;font-weight:normal;font-size:14px;'>{{ago}}</div>\t\t\t</div>\t\t\t{{/entries}}\t\t",s);document.getElementById("journal-container").innerHTML=E;for(g=0;g<s.entries.length;g++){(f=document.getElementById("entry_"+g)).addEventListener("click",(function(e){var t=e.target.id;t=t.substr(t.indexOf("_")+1),document.getElementById("entry_"+t).style.backgroundColor="#808080",delete(d=s.entries[t]).ago,delete d.index,delete d.imageUrl,window.setTimeout((function(){u.close(d)}),200)}))}document.getElementById("journal-empty").style.visibility=0!=s.entries.length?"hidden":"visible"}function journalEntryMatch(e,t,a){var n=e[t];if(!n)return!1;var i=a[0];return"%"==i?-1!=n.indexOf(a.substr(1)):">"==i?parseInt(n)>parseInt(a.substr(1)):"<"==i?parseInt(n)<parseInt(a.substr(1)):n==a}function journalFilterMatch(e,t){for(var a=e.metadata,n=Object.keys(t),i=!0,r=0;r<n.length;r++){var o=n[r],s=t[o];if(s instanceof Array){for(var l=!1,c=0;c<s.length;c++)l=l||journalEntryMatch(a,o,s[c]);i=i&&l}else i=i&&journalEntryMatch(a,o,s)}return i}function abecedariumFill(){var e=m.database.content,t=document.getElementById("search-text").value.toLowerCase();if(t.length){e=[];for(var a=0;a<m.database.content.length;a++)-1!=m.database.content[a].text.toLowerCase().indexOf(t)&&e.push(m.database.content[a])}m.results=e,m.resultCount=30,abecedariumDisplay(e,m.resultCount)}function abecedariumDisplay(e,t){var a={items:e.slice(0,t)},i=n.render("\t\t\t{{#items}}\t\t\t<div id='entry_{{i}}' style='height:60px'>\t\t\t\t<div id='eicon_{{i}}' class='toolbutton' style='background-image:url(../../activities/MediaViewer.activity/activity/activity-icon.svg);background-size:40px 40px;width:40px;height:40px;display:inline-block;margin-left:20px;margin-top:5px;'></div>\t\t\t\t<div id='etext_{{i}}' style='color:black;display:inline-block;vertical-align:middle;margin-left:30px;height:60px;margin-top:10px;font-weight:bold;font-size:14px;'>{{text}}</div>\t\t\t</div>\t\t\t{{/items}}\t\t",a);document.getElementById("journal-empty").style.visibility=0!=e.length?"hidden":"visible",document.getElementById("journal-container").innerHTML=i;for(var r=Math.min(t,e.length),o=0;o<r;o++){document.getElementById("entry_"+e[o].i).addEventListener("click",(function(e){var t=e.target.id;t=t.substr(t.indexOf("_")+1),document.getElementById("entry_"+t).style.backgroundColor="#808080",abecedariumCreateEntry(m.database.content[t],(function(){u.close(d)}))})),"image/png"==m.mimetype&&(document.getElementById("eicon_"+e[o].i).style.backgroundImage="url("+(m.database.ping?m.baseURL:m.database.url)+"images/database/"+e[o].code+".png)")}}function abecedariumCreateEntry(e,a){var n=m.database.ping?m.baseURL:m.database.url,i=m.mimetype,r=new XMLHttpRequest;r.open("GET",n+m.filelocation+e.code+m.fileformat,!0),r.setRequestHeader("Content-type",i),r.responseType="arraybuffer";r.onload=function(){if(200==r.status||0==r.status){var n=new Uint8Array(this.response),o="data:"+i+";base64,"+function toBase64(e){for(var t,a=(3-e.length%3)%3,n="",i=e.length,r=0,o=0;o<i;o++)t=o%3,r|=e[o]<<(16>>>t&24),2!==t&&e.length-o!=1||(n+=String.fromCharCode(uint6ToB64(r>>>18&63),uint6ToB64(r>>>12&63),uint6ToB64(r>>>6&63),uint6ToB64(63&r)),r=0);return 0===a?n:n.substring(0,n.length-a)+(1===a?"=":"==")}(n),s={mimetype:i,title:e.text+m.fileformat,activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};t.create(s,(function(t,n){console.log("Entry '"+e.text+"' saved in journal."),d={metadata:s,objectId:n},a()}),o)}else console.log("Error loading entry '"+e.code+"'."),a()},r.onerror=function(){console.log("Error loading entry '"+e.code+"'."),a()},r.send()}m.id="abecedarium-button",m.title="$titleAbecedarium",m.placeholder="$holderSearchAbecedarium",m.icon="lib/sugar-web/graphics/icons/actions/activity-abecedarium.svg",m.beforeActivate=function(){document.getElementById("favorite-button").style.visibility="hidden",function abecedariumInit(e){m.database={},document.getElementById("journal-empty").style.visibility="visible",m.baseURL=document.location.href.substr(0,document.location.href.indexOf("/activities/"))+"/activities/Abecedarium.activity/",m.lang=-1!=["en","es","fr"].indexOf(s.language)?s.language:"en",m.filelocation=m.filelocation.replace("{{lang}}",m.lang);var loadDatabase=function(e,t,a){var n=new XMLHttpRequest,i=m.baseURL+e;n.onload=function(){"ping"==t?m.database[t]=0==this.status||this.status>=200&&this.status<300:(0==this.status||this.status>=200&&this.status<300)&&(m.database[t]=JSON.parse(this.responseText)),a()},n.onerror=function(){"ping"==t&&(m.database[t]=!1,a())},n.open("GET",i),n.send()};loadDatabase("database/db_url.json","url",(function(){loadDatabase("database/db_meta.json","meta",(function(){loadDatabase("database/db_"+m.lang+".json","words",(function(){loadDatabase("images/database/_ping.png?"+(new Date).getTime(),"ping",(function(){for(var t=m.database.meta.length,a=[],n=0;n<t;n++)m.database.meta[n][m.lang]&&a.push({code:m.database.meta[n].code,text:m.database.words[m.database.meta[n].text]});a.sort((function(e,t){return e.text.localeCompare(t.text,"en",{sensitivity:"base"})}));var i=[];for(n=0;n<a.length;n++)a[n].i=i.length,i.push(a[n]);m.database.content=i,delete m.database.meta,delete m.database.words,e()}))}))}))}))}(abecedariumFill)},m.beforeUnactivate=function(){document.getElementById("favorite-button").style.visibility="visible"},m.onFavorite=function(){},m.onScroll=function(){var e=document.getElementById("journal-container");e.scrollTop/(e.scrollHeight-e.clientHeight)>.9&&(m.resultCount+=30,abecedariumDisplay(m.results,m.resultCount))},m.onSearch=function(){abecedariumFill()},m.onCancelSearch=function(){abecedariumFill()},o.features=[],o.currentFeature=-1,o.init=function(){o.features=[c],o.currentFeature=0},o.show=function(t,n,i,l,c){d=null,o.init();for(var g=[n,i,l,c],f=0;f<g.length;f++)if(g[f]){if("image/png"==g[f].mimetype){m.fileformat=".png",m.mimetype="image/png",m.filelocation="images/database/",o.features.push(m);break}if("audio/mpeg"==g[f].mimetype){m.fileformat=".mp3",m.mimetype="audio/mpeg",m.filelocation="audio/{{lang}}/database/",o.features.push(m);break}}var p="<div id='pictotoolbar' class='toolbar' style='padding: 0'>";for(f=0;f<o.features.length;f++)p+="<button class='toolbutton"+(0==f?" active":"")+"' id='"+o.features[f].id+"' title='"+o.features[f].title+"' style='background-image: url("+o.features[f].icon+")'></button>";p+="<button class='toolbutton pull-right' id='close-button' title='$titleClose' style='background-image: url(lib/sugar-web/graphics/icons/actions/dialog-cancel.svg)'></button>",u=e({content:doLocalize((p+="<div style='position: absolute; display: inline-block; margin-left: 10px; top: 20px; height:55px'>$titleChoose</div></div>")+"\t\t\t\t<div class='toolbar' style='border-top-style: solid; border-color: #c0c0c0; border-width: 1px'>\t\t\t\t\t<span class='icon-input' style='vertical-align:top;'>\t\t\t\t\t<input id='search-text' type='text' style='width: 200px; font-size: 10pt'/>\t\t\t\t\t<button id='cancel-search' class='cancel right'></button>\t\t\t\t\t</span>\t\t\t\t\t<button class='toolbutton' id='favorite-button' title='$titleFavorite' style='background-image: url(lib/sugar-web/graphics/icons/emblems/favorite.svg)'></button>\t\t\t\t</div>\t\t\t\t<div id='journal-empty' style='position:absolute;width:100%;top:50%;left:50%'>\t\t\t\t\t<div style='width:60px;height:60px;background-repeat: no-repeat;background-image: url(lib/sugar-web/graphics/icons/actions/activity-journal.svg)'></div>\t\t\t\t\t<div style='text-align:left!important;margin-left:-30px;color:#808080;text-align:center;font-size:14px;'>$noMatchingEntries</div>\t\t\t\t</div>\t\t\t\t<div id='journal-container' style='width: 100%; overflow:auto'></div>"),closeButton:!1,modalStyles:{backgroundColor:"white",height:"400px",width:"600px",maxWidth:"90%"}}).afterShow((function(e){var t=s.colorvalue;a.colorize(document.getElementById(o.features[o.currentFeature].id),t,(function(){}));for(var u=[],m=0;m<o.features.length;m++){var g=document.getElementById(o.features[m].id);u.push(g),g.addEventListener("click",(function(e){for(var r=-1,s=0;s<o.features.length;s++)if(o.features[s].id==e.srcElement.id){r=s;break}r!=o.currentFeature&&(o.features[o.currentFeature].beforeUnactivate(),document.getElementById(o.features[o.currentFeature].id).style.backgroundImage="url("+o.features[o.currentFeature].icon+")",document.getElementById("journal-container").innerHTML="",document.getElementById("search-text").value="",o.currentFeature=r,o.features[o.currentFeature].filters=[n,i,l,c],o.features[o.currentFeature].beforeActivate(),a.colorize(document.getElementById(o.features[o.currentFeature].id),t,(function(){})),document.getElementById("search-text").placeholder=doLocalize(o.features[o.currentFeature].placeholder))}))}new r.RadioButtonsGroup(u);var f=document.getElementById("pictotoolbar").parentNode.offsetHeight-110;document.getElementById("journal-container").style.height=f+"px",document.getElementById("journal-container").addEventListener("scroll",(function(){o.features[o.currentFeature].onScroll()})),document.getElementById("favorite-button").addEventListener("click",(function(){o.features[o.currentFeature].onFavorite()})),document.getElementById("search-text").addEventListener("keyup",(function(){o.features[o.currentFeature].onSearch()})),document.getElementById("cancel-search").addEventListener("click",(function(){document.getElementById("search-text").value="",o.features[o.currentFeature].onCancelSearch()})),document.getElementById("close-button").addEventListener("click",(function(){d=null,e.close()})),document.getElementById("search-text").placeholder=doLocalize(o.features[o.currentFeature].placeholder),o.features[o.currentFeature].filters=[n,i,l,c],o.features[o.currentFeature].beforeActivate()})).afterClose((function(e){e.destroy(),t&&t(d)})).show()};var g={titleJournal:{en:"Journal",fr:"Journal",es:"Diario",pt:"Diário"},titleAbecedarium:{en:"Abecedarium",fr:"Abecedarium",es:"Abecedarium",pt:"Abecedarium"},titleClose:{en:"Cancel",fr:"Annuler",es:"Cancelar",pt:"Cancelar"},titleChoose:{en:"Choose an object",fr:"Choisir un objet",es:"Elige un objeto",pt:"Escolher um objeto"},holderSearchJournal:{en:"Search in Journal",fr:"Recherche dans le journal",es:"Buscar en el diario",pt:"Pesquisar no diário"},holderSearchAbecedarium:{en:"Search in Abecedarium",fr:"Recherche dans Abecedarium",es:"Buscar en Abecedarium",pt:"Pesquisar no Abecedarium"},noMatchingEntries:{en:"No matching entries",fr:"Aucune entrée correspondante",es:"No hay actividades coincidentes",pt:"Sem atividades correspondentes"},SecondsAgo:{en:"Seconds ago",fr:"A l'instant",es:"Segundos atrás",pt:"Segundos atrás"},Ago:{en:"{{time}} ago",fr:"il y a {{time}}",es:"{{time}} atrás",pt:"{{time}} atrás"},Minutes_one:{en:"minute",fr:"minute",es:"minuto",pt:"minuto"},Minutes_other:{en:"minutes",fr:"minutes",es:"minutos",pt:"minutos"},Hours_one:{en:"hour",fr:"heure",es:"hora",pt:"hora"},Hours_other:{en:"hours",fr:"heures",es:"horas",pt:"horas"},Days_one:{en:"day",fr:"jour",es:"día",pt:"dia"},Days_other:{en:"days",fr:"jours",es:"días",pt:"dias"},Weeks_one:{en:"week",fr:"semaine",es:"semana",pt:"semana"},Weeks_other:{en:"weeks",fr:"semaines",es:"semanas",pt:"semanas"},Months_one:{en:"month",fr:"mois",es:"mes",pt:"mês"},Months_other:{en:"months",fr:"mois",es:"meses",pt:"meses"},Years_one:{en:"year",fr:"année",es:"año",pt:"ano"},Years_other:{en:"years",fr:"années",es:"años",pt:"anos"}};function doLocalize(e,t){var a=-1!=["en","fr","es","pt"].indexOf(s.language)?s.language:"en",n=e,i=n.match(/\$\w+/g);for(var r in i){var o=i[r].match(/\w+/)[0];g[o]&&(n=n.replace(i[r],g[o][a]))}var l=n.match(/{{\s*[\w\.]+\s*}}/g);for(var r in l){var c=l[r].match(/[\w\.]+/)[0];n=n.replace(l[r],t[c])}return n}function timestampToElapsedString(e){for(var t=[{name:"Years",factor:30758400},{name:"Months",factor:2592e3},{name:"Weeks",factor:604800},{name:"Days",factor:86400},{name:"Hours",factor:3600},{name:"Minutes",factor:60}],a=0,n="",i=new Date(e).getTime(),r=((new Date).getTime()-i)/1e3,o=0;o<t.length;o++){var s=t[o].factor,l=Math.floor(r/s);if(l>0&&(a>0&&(n+=","),n+=" "+l+" "+doLocalize(1==l?"$"+t[o].name+"_one":"$"+t[o].name+"_other"),r-=l*s),""!=n&&(a+=1),1==a)break}return 0==a?doLocalize("$SecondsAgo"):doLocalize("$Ago",{time:n})}function uint6ToB64(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}return o.close=function(e){d=e,u.close(d)},o}));