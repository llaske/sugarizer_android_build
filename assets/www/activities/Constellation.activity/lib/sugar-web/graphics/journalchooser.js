/*! Sugarizer 2020-03-14 */
define(["picoModal","sugar-web/datastore","sugar-web/graphics/icon","mustache","sugar-web/env","sugar-web/graphics/radiobuttonsgroup"],function(a,b,c,d,e,f){function g(a,c,e,f){var g=[];a&&g.push(a),c&&g.push(c),e&&g.push(e),f&&g.push(f);for(var h=b.find(),j=[],k=0;k<h.length;k++){var l=h[k],m=!0;u.isFavorite&&(m=m&&l.metadata.keep);var n=document.getElementById("search-text").value;n&&n.length>0&&(m=m&&l.metadata.title&&-1!=l.metadata.title.indexOf(n)),m&&j.push(l)}var p=g.length,q=j;if(p>0){q=[];for(var k=0;k<j.length;k++){for(var l=j[k],m=!1,r=0;r<p;r++)m=m||i(l,g[r]);m&&q.push(l)}}for(var h={entries:q.sort(function(a,b){return parseInt(b.metadata.timestamp)-parseInt(a.metadata.timestamp)})},k=0;k<h.entries.length;k++){var l=h.entries[k],s=t[l.metadata.activity];l.imageUrl="../../"+s.directory+"/"+s.icon,l.index=k,l.ago=o(l.metadata.creation_time)}var v="\t\t\t{{#entries}}\t\t\t<div id='entry_{{index}}' style='height:60px'>\t\t\t\t<div id='eicon_{{index}}' class='toolbutton' style='background-image:url({{imageUrl}});background-size:40px 40px;width:40px;height:40px;display:inline-block;margin-left:20px;margin-top:5px;'></div>\t\t\t\t<div id='etext_{{index}}' style='color:black;display:inline-block;vertical-align:middle;margin-left:30px;height:60px;margin-top:10px;font-weight:bold;font-size:14px;'>{{metadata.title}}</div>\t\t\t\t<div id='edate_{{index}}' style='color:black;vertical-align:baseline;text-align:right;float:right;height:45px;padding-top:15px;margin-right:10px;clear:right;font-weight:normal;font-size:14px;'>{{ago}}</div>\t\t\t</div>\t\t\t{{/entries}}\t\t",w=d.render(v,h);document.getElementById("journal-container").innerHTML=w;for(var k=0;k<h.entries.length;k++){var l=document.getElementById("entry_"+k);l.addEventListener("click",function(a){var b=a.target.id;b=b.substr(b.indexOf("_")+1),document.getElementById("entry_"+b).style.backgroundColor="#808080",z=h.entries[b],delete z.ago,delete z.index,delete z.imageUrl,window.setTimeout(function(){y.close(z)},200)})}document.getElementById("journal-empty").style.visibility=0!=h.entries.length?"hidden":"visible"}function h(a,b,c){var d=a[b];if(!d)return!1;var e=c[0];return"%"==e?-1!=d.indexOf(c.substr(1)):">"==e?parseInt(d)>parseInt(c.substr(1)):"<"==e?parseInt(d)<parseInt(c.substr(1)):d==c}function i(a,b){for(var c=a.metadata,d=Object.keys(b),e=!0,f=0;f<d.length;f++){var g=d[f],i=b[g];if(i instanceof Array){for(var j=!1,k=0;k<i.length;k++)j=j||h(c,g,i[k]);e=e&&j}else e=e&&h(c,g,i)}return e}function j(a){v.database={},document.getElementById("journal-empty").style.visibility="visible",v.baseURL=document.location.href.substr(0,document.location.href.indexOf("/activities/"))+"/activities/Abecedarium.activity/",v.lang=-1!=["en","es","fr"].indexOf(s.language)?s.language:"en",v.filelocation=v.filelocation.replace("{{lang}}",v.lang);var b=function(a,b,c){var d=new XMLHttpRequest,e=v.baseURL+a;d.onload=function(){"ping"==b?v.database[b]=0==this.status||this.status>=200&&this.status<300:(0==this.status||this.status>=200&&this.status<300)&&(v.database[b]=JSON.parse(this.responseText)),c()},d.open("GET",e),d.send()};b("database/db_url.json","url",function(){b("database/db_meta.json","meta",function(){b("database/db_"+v.lang+".json","words",function(){b("images/database/_ping.png?"+(new Date).getTime(),"ping",function(){for(var b=v.database.meta.length,c=[],d=0;d<b;d++)v.database.meta[d][v.lang]&&c.push({code:v.database.meta[d].code,text:v.database.words[v.database.meta[d].text]});c.sort(function(a,b){return a.text.localeCompare(b.text,"en",{sensitivity:"base"})});for(var e=[],d=0;d<c.length;d++)c[d].i=e.length,e.push(c[d]);v.database.content=e,delete v.database.meta,delete v.database.words,a()})})})})}function k(){var a=v.database.content,b=document.getElementById("search-text").value.toLowerCase();if(b.length){a=[];for(var c=0;c<v.database.content.length;c++)-1!=v.database.content[c].text.toLowerCase().indexOf(b)&&a.push(v.database.content[c])}v.results=a,v.resultCount=30,l(a,v.resultCount)}function l(a,b){var c="\t\t\t{{#items}}\t\t\t<div id='entry_{{i}}' style='height:60px'>\t\t\t\t<div id='eicon_{{i}}' class='toolbutton' style='background-image:url(../../activities/MediaViewer.activity/activity/activity-icon.svg);background-size:40px 40px;width:40px;height:40px;display:inline-block;margin-left:20px;margin-top:5px;'></div>\t\t\t\t<div id='etext_{{i}}' style='color:black;display:inline-block;vertical-align:middle;margin-left:30px;height:60px;margin-top:10px;font-weight:bold;font-size:14px;'>{{text}}</div>\t\t\t</div>\t\t\t{{/items}}\t\t",e={items:a.slice(0,b)},f=d.render(c,e);document.getElementById("journal-empty").style.visibility=0!=a.length?"hidden":"visible",document.getElementById("journal-container").innerHTML=f;for(var g=Math.min(b,a.length),h=0;h<g;h++){document.getElementById("entry_"+a[h].i).addEventListener("click",function(a){var b=a.target.id;b=b.substr(b.indexOf("_")+1),document.getElementById("entry_"+b).style.backgroundColor="#808080",m(v.database.content[b],function(){y.close(z)})}),"image/png"==v.mimetype&&(document.getElementById("eicon_"+a[h].i).style.backgroundImage="url("+(v.database.ping?v.baseURL:v.database.url)+"images/database/"+a[h].code+".png)")}}function m(a,c){var d=v.database.ping?v.baseURL:v.database.url,e=v.mimetype,f=new XMLHttpRequest;f.open("GET",d+v.filelocation+a.code+v.fileformat,!0),f.setRequestHeader("Content-type",e),f.responseType="arraybuffer";f.onload=function(){if(200==f.status||0==f.status){var d=new Uint8Array(this.response),g="data:"+e+";base64,"+q(d),h={mimetype:e,title:a.text+v.fileformat,activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};b.create(h,function(b,d){console.log("Entry '"+a.text+"' saved in journal."),z={metadata:h,objectId:d},c()},g)}else console.log("Error loading entry '"+a.code+"'."),c()},f.onerror=function(){console.log("Error loading entry '"+a.code+"'."),c()},f.send()}function n(a,b){var c=-1!=["en","fr","es","pt"].indexOf(s.language)?s.language:"en",d=a;for(var e in A)d=d.replace("$"+e,A[e][c]);for(var f in b)d=d.replace("{{"+f+"}}",b[f]);return d}function o(a){for(var b=[{name:"Years",factor:30758400},{name:"Months",factor:2592e3},{name:"Weeks",factor:604800},{name:"Days",factor:86400},{name:"Hours",factor:3600},{name:"Minutes",factor:60}],c=1,d=0,e="",f=new Date(a).getTime(),g=((new Date).getTime()-f)/1e3,h=0;h<b.length;h++){var i=b[h].factor,j=Math.floor(g/i);if(j>0&&(d>0&&(e+=","),e+=" "+j+" "+n(1==j?"$"+b[h].name+"_one":"$"+b[h].name+"_other"),g-=j*i),""!=e&&(d+=1),d==c)break}return 0==d?n("$SecondsAgo"):n("$Ago",{time:e})}function p(a){return a<26?a+65:a<52?a+71:a<62?a-4:62===a?43:63===a?47:65}function q(a){for(var b,c=(3-a.length%3)%3,d="",e=a.length,f=0,g=0;g<e;g++)b=g%3,f|=a[g]<<(16>>>b&24),2!==b&&a.length-g!=1||(d+=String.fromCharCode(p(f>>>18&63),p(f>>>12&63),p(f>>>6&63),p(63&f)),f=0);return 0===c?d:d.substring(0,d.length-c)+(1===c?"=":"==")}var r={},s=null,t=[];e.getEnvironment(function(a,b){s=b.user;for(var c=0;s.activities&&c<s.activities.length;c++){var d=s.activities[c];t[d.id]=d}});var u={};u.id="journal-button",u.title="$titleJournal",u.placeholder="$holderSearchJournal",u.icon="lib/sugar-web/graphics/icons/actions/activity-journal.svg",u.beforeActivate=function(){u.isFavorite=!1,document.getElementById("favorite-button").style.backgroundImage="url(lib/sugar-web/graphics/icons/emblems/favorite.svg)",g.apply(null,u.filters)},u.beforeUnactivate=function(){},u.onFavorite=function(){var a=document.getElementById("favorite-button");u.isFavorite?a.style.backgroundImage="url(lib/sugar-web/graphics/icons/emblems/favorite.svg)":c.colorize(a,s.colorvalue,function(){}),u.isFavorite=!u.isFavorite,g.apply(null,u.filters)},u.onScroll=function(){},u.onSearch=function(){g.apply(null,u.filters)},u.onCancelSearch=function(){g.apply(null,u.filters)};var v={};v.id="abecedarium-button",v.title="$titleAbecedarium",v.placeholder="$holderSearchAbecedarium",v.icon="lib/sugar-web/graphics/icons/actions/activity-abecedarium.svg",v.beforeActivate=function(){document.getElementById("favorite-button").style.visibility="hidden",j(k)},v.beforeUnactivate=function(){document.getElementById("favorite-button").style.visibility="visible"},v.onFavorite=function(){},v.onScroll=function(){var a=document.getElementById("journal-container");a.scrollTop/(a.scrollHeight-a.clientHeight)>.9&&(v.resultCount+=30,l(v.results,v.resultCount))},v.onSearch=function(){k()},v.onCancelSearch=function(){k()};var w=[],x=-1;r.init=function(){w=[u],x=0};var y,z;r.show=function(b,d,e,g,h){z=null,r.init();for(var i="image/png",j="audio/mpeg",k=[d,e,g,h],l=0;l<k.length;l++)if(k[l]){if(k[l].mimetype==i){v.fileformat=".png",v.mimetype=i,v.filelocation="images/database/",w.push(v);break}if(k[l].mimetype==j){v.fileformat=".mp3",v.mimetype=j,v.filelocation="audio/{{lang}}/database/",w.push(v);break}}for(var m="<div id='pictotoolbar' class='toolbar' style='padding: 0'>",l=0;l<w.length;l++)m+="<button class='toolbutton"+(0==l?" active":"")+"' id='"+w[l].id+"' title='"+w[l].title+"' style='background-image: url("+w[l].icon+")'></button>";m+="<button class='toolbutton pull-right' id='close-button' title='$titleClose' style='background-image: url(lib/sugar-web/graphics/icons/actions/dialog-cancel.svg)'></button>",m+="<div style='position: absolute; display: inline-block; margin-left: 10px; top: 20px; height:55px'>$titleChoose</div></div>",y=a({content:n(m+"\t\t\t\t<div class='toolbar' style='border-top-style: solid; border-color: #c0c0c0; border-width: 1px'>\t\t\t\t\t<span class='icon-input' style='vertical-align:top;'>\t\t\t\t\t<input id='search-text' type='text' style='width: 200px; font-size: 10pt'/>\t\t\t\t\t<button id='cancel-search' class='cancel right'></button>\t\t\t\t\t</span>\t\t\t\t\t<button class='toolbutton' id='favorite-button' title='$titleFavorite' style='background-image: url(lib/sugar-web/graphics/icons/emblems/favorite.svg)'></button>\t\t\t\t</div>\t\t\t\t<div id='journal-empty' style='position:absolute;width:100%;top:50%;left:50%'>\t\t\t\t\t<div style='width:60px;height:60px;background-repeat: no-repeat;background-image: url(lib/sugar-web/graphics/icons/actions/activity-journal.svg)'></div>\t\t\t\t\t<div style='text-align:left!important;margin-left:-30px;color:#808080;text-align:center;font-size:14px;'>$noMatchingEntries</div>\t\t\t\t</div>\t\t\t\t<div id='journal-container' style='width: 100%; overflow:auto'></div>"),closeButton:!1,modalStyles:{backgroundColor:"white",height:"400px",width:"600px",maxWidth:"90%"}}).afterShow(function(a){var b=s.colorvalue;c.colorize(document.getElementById(w[x].id),b,function(){});for(var i=[],j=0;j<w.length;j++){var k=document.getElementById(w[j].id);i.push(k),k.addEventListener("click",function(a){for(var f=-1,i=0;i<w.length;i++)if(w[i].id==a.srcElement.id){f=i;break}f!=x&&(w[x].beforeUnactivate(),document.getElementById(w[x].id).style.backgroundImage="url("+w[x].icon+")",document.getElementById("journal-container").innerHTML="",document.getElementById("search-text").value="",x=f,w[x].filters=[d,e,g,h],w[x].beforeActivate(),c.colorize(document.getElementById(w[x].id),b,function(){}),document.getElementById("search-text").placeholder=n(w[x].placeholder))})}new f.RadioButtonsGroup(i);var l=document.getElementById("pictotoolbar").parentNode.offsetHeight-110;document.getElementById("journal-container").style.height=l+"px",document.getElementById("journal-container").addEventListener("scroll",function(){w[x].onScroll()}),document.getElementById("favorite-button").addEventListener("click",function(){w[x].onFavorite()}),document.getElementById("search-text").addEventListener("keyup",function(){w[x].onSearch()}),document.getElementById("cancel-search").addEventListener("click",function(){document.getElementById("search-text").value="",w[x].onCancelSearch()}),document.getElementById("close-button").addEventListener("click",function(){z=null,a.close()}),document.getElementById("search-text").placeholder=n(w[x].placeholder),w[x].filters=[d,e,g,h],w[x].beforeActivate()}).afterClose(function(a){a.destroy(),b&&b(z)}).show()};var A={titleJournal:{en:"Journal",fr:"Journal",es:"Diario",pt:"Diário"},titleAbecedarium:{en:"Abecedarium",fr:"Abecedarium",es:"Abecedarium",pt:"Abecedarium"},titleClose:{en:"Cancel",fr:"Annuler",es:"Cancelar",pt:"Cancelar"},titleChoose:{en:"Choose an object",fr:"Choisir un objet",es:"Elige un objeto",pt:"Escolher um objeto"},holderSearchJournal:{en:"Search in Journal",fr:"Recherche dans le journal",es:"Buscar en el diario",pt:"Pesquisar no diário"},holderSearchAbecedarium:{en:"Search in Abecedarium",fr:"Recherche dans Abecedarium",es:"Buscar en Abecedarium",pt:"Pesquisar no Abecedarium"},noMatchingEntries:{en:"No matching entries",fr:"Aucune entrée correspondante",es:"No hay actividades coincidentes",pt:"Sem atividades correspondentes"},SecondsAgo:{en:"Seconds ago",fr:"A l'instant",es:"Segundos atrás",pt:"Segundos atrás"},Ago:{en:"{{time}} ago",fr:"il y a {{time}}",es:"{{time}} atrás",pt:"{{time}} atrás"},Minutes_one:{en:"minute",fr:"minute",es:"minuto",pt:"minuto"},Minutes_other:{en:"minutes",fr:"minutes",es:"minutos",pt:"minutos"},Hours_one:{en:"hour",fr:"heure",es:"hora",pt:"hora"},Hours_other:{en:"hours",fr:"heures",es:"horas",pt:"horas"},Days_one:{en:"day",fr:"jour",es:"día",pt:"dia"},Days_other:{en:"days",fr:"jours",es:"días",pt:"dias"},Weeks_one:{en:"week",fr:"semaine",es:"semana",pt:"semana"},Weeks_other:{en:"weeks",fr:"semaines",es:"semanas",pt:"semanas"},Months_one:{en:"month",fr:"mois",es:"mes",pt:"mês"},Months_other:{en:"months",fr:"mois",es:"meses",pt:"meses"},Years_one:{en:"year",fr:"année",es:"año",pt:"ano"},Years_other:{en:"years",fr:"années",es:"años",pt:"anos"}};return r});