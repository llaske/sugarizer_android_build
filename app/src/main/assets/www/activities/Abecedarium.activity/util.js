var app;Abcd={},Abcd.context={database:"",home:null,object:null,screen:"",lang:"fr",casevalue:0,screenContext:null},Abcd.saveContext=function(){document.getElementById("stop-button").addEventListener("click",(function(t){var e=[];e.push(null!=Abcd.context.object?Abcd.context.object.kindName:""),e.push(Abcd.context.lang),e.push(Abcd.context.casevalue),e.push(null!=Abcd.context.object?Abcd.context.object.saveContext():"");var n=Abcd.activity.getDatastoreObject(),c=JSON.stringify({context:e.join("#"),database:Abcd.context.getDatabase()});n.setDataAsText(c),n.save((function(){}))}))},Abcd.loadContext=function(t){Abcd.activity.getDatastoreObject().loadAsText((function(e,n,c){var o=JSON.parse(c);if(o){var r=o.context.split("#");Abcd.context.screen=r[0],Abcd.context.lang=r[1],Abcd.context.casevalue=r[2],Abcd.context.screenContext=r[3],Abcd.setLocale(Abcd.context.lang),t()}}))},Abcd.setLocale=function(t){var e=Abcd.getTextsFromLocal(t);__$FC_l10n_set(e),Abcd.letters=Abcd[t+"Letters"],null!=Abcd.context.object&&Abcd.context.object.setLocale()},Abcd.getTextsFromLocal=function(t){switch(t){case"fr":return Abcd.frTexts;case"es":return Abcd.esTexts;default:return Abcd.enTexts}},Abcd.getLettersFromLocal=function(t){switch(t){case"fr":return Abcd.frLetters;case"es":return Abcd.esLetters;default:return Abcd.enLetters}},Abcd.setCase=function(t){Abcd.context.casevalue=t,null!=Abcd.context.object&&Abcd.context.object.setCase()},Abcd.log=function(t){console.log(t)},Abcd.goHome=function(){if(null!=Abcd.context.home){if(null==Abcd.context.object)return;Abcd.context.screen="",Abcd.context.object=null,Abcd.context.home.renderInto(document.getElementById("body")),Abcd.context.home.playTheme()}};var x=document.getElementsByClassName("switchCase"),y=document.getElementsByClassName("switchLang");function uint6ToB64(t){return t<26?t+65:t<52?t+71:t<62?t-4:62===t?43:63===t?47:65}Abcd.hideCase=function(){var t;for(t=0;t<x.length;t++)x[t].style.visibility="hidden"},Abcd.showCase=function(){var t;for(t=0;t<x.length;t++)x[t].style.visibility="visible"},Abcd.hideLang=function(){var t;for(t=0;t<y.length;t++)y[t].style.visibility="hidden"},Abcd.showLang=function(){var t;for(t=0;t<y.length;t++)y[t].style.visibility="visible"},Abcd.changeVisibility=function(t,e){for(var n in e)e[n]?t.$[n].show():t.$[n].hide()},Abcd.randomEntryIndex=function(t,e){var n=null;if(null!=e&&"Abcd.Collection"==e.kind){var c=Abcd.collections[e.index],o=c.entries.length;n=[];for(var r=0;r<o;r++){var a=c.entries[r];1==Abcd.entries[a][Abcd.context.lang]&&n.push(a)}}else{var l=0,s=-1;for(var d in Abcd.letters){if(null!=e&&e.letter==d){s=l;break}Abcd.letters.hasOwnProperty(d)&&l++}-1==s&&(s=Math.floor(Math.random()*l));r=0;for(var d in Abcd.letters)if(r++==s){n=Abcd.letters[d];break}}var i=[];for(r=0;r<n.length;r++){var b=!1;if(void 0!==t)for(var u=0;!b&&u<t.length;u++)n[r]==t[u]&&(b=!0);b||i.push(n[r])}var A=i.length;return i[Math.floor(Math.random()*A)]},Abcd.mix=function(t){if(t.length<2)return t;for(var e=[],n=enyo.cloneArray(t);1!=n.length;){var c=Math.floor(Math.random()*n.length);e.push(n[c]),n[c]=null;for(var o=[],r=0;r<n.length;r++)null!=n[r]&&o.push(n[r]);n=o}return e.push(n[0]),e},Abcd.toBase64=function(t){for(var e,n=(3-t.length%3)%3,c="",o=t.length,r=0,a=0;a<o;a++)e=a%3,r|=t[a]<<(16>>>e&24),2!==e&&t.length-a!=1||(c+=String.fromCharCode(uint6ToB64(r>>>18&63),uint6ToB64(r>>>12&63),uint6ToB64(r>>>6&63),uint6ToB64(63&r)),r=0);return 0===n?c:c.substring(0,c.length-n)+(1===n?"=":"==")};