/*! Sugarizer 2020-03-14 */
function uint6ToB64(a){return a<26?a+65:a<52?a+71:a<62?a-4:62===a?43:63===a?47:65}Util={};var app;Util.context={filter:{category:"",text:"",favorite:!1},libraries:null,library:null,favorites:{},readtimes:{},currentindex:0},Util.saveContext=function(){if(!Util.onSugar()&&app&&app.activity){var a=app.activity.getDatastoreObject(),b=JSON.stringify(Util.context);a.setDataAsText(b),a.save(function(){})}},Util.loadContext=function(a,b){Util.onSugar()?(Util.context=b,app.loadDatabase(),app.hideLibraries()):requirejs(["sugar-web/env"],function(b){b.getEnvironment(function(b,c){if(c.objectId){app.activity.getDatastoreObject().loadAsText(function(b,c,d){var e=JSON.parse(d);e?(Util.context=e,app.loadDatabase()):app.loadLibraries(),a()})}else app.loadLibraries()})})},Util.setFilter=function(a){void 0!==a.favorite&&(Util.context.filter.favorite=a.favorite),void 0!==a.category&&(Util.context.filter.category=a.category),void 0!==a.text&&(Util.context.filter.text=a.text),app.filterChanged()},Util.getFilter=function(){return Util.context.filter},Util.getCollection=function(){for(var a=Util.database,b=[],c=0;c<a.length;c++)Util.context.filter.favorite&&!Util.getFavorite(a[c].id)||Util.context.filter.category.length>0&&a[c].category!=Util.context.filter.category||Util.context.filter.text.length>0&&-1==a[c].title.toLowerCase().indexOf(Util.context.filter.text.toLowerCase())||b.push(a[c]);return b},Util.setFavorite=function(a,b){Util.context.favorites[a]=b||void 0},Util.getFavorite=function(a){return Util.context.favorites[a]},Util.setReadTime=function(a,b){Util.context.readtimes[a]=b||void 0},Util.getReadTime=function(a){return Util.context.readtimes[a]},Util.database=[],Util.categories=[],Util.loadLibraries=function(a,b){Util.getLanguage(function(c){var d=new enyo.Ajax({url:constant.librariesUrl+"?lang="+c,method:"GET",handleAs:"json"});d.response(function(b,c){Util.context.libraries=c,a()}),d.error(b),d.go()})},Util.loadDatabase=function(a,b){null!=Util.context.library&&Util.getLanguage(function(c){var d=Util.context.library.database.replace(new RegExp("%language%","g"),c);"https:"==document.location.protocol&&(d=d.replace("http://","https://"));var e=new enyo.Ajax({url:d,method:"GET",handleAs:"json"});e.response(function(b,c){Util.database=c,Util.categories=[];for(var d=0;d<c.length;d++){var e=c[d].category;if(void 0!==e){for(var f=!1,g=0;!f&&g<Util.categories.length;g++)e==Util.categories[g].id&&(f=!0);f||Util.categories.push({id:e,title:e})}}app.getFilter().setCategories(Util.categories),a(c)}),e.error(b),e.go()})},Util.getDatabase=function(){return Util.database},Util.getVideos=function(){return Util.context.library.videos},Util.getImages=function(){return Util.context.library.images},Util.setIndex=function(a){Util.context.currentindex=a},Util.getIndex=function(){return Util.context.currentindex},Util.setLibrary=function(a){Util.context.library=a},Util.getLibrary=function(){return Util.context.library},Util.addLibrary=function(a){Util.context.libraries.push(a)},Util.removeLibrary=function(a){if(Util.context.library!=a&&1!=Util.context.libraries.length){for(var b=[],c=0;c<Util.context.libraries.length;c++)Util.context.libraries[c]!=a&&b.push(Util.context.libraries[c]);Util.context.libraries=b}},Util.onSugar=function(){return function(a){var b=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search);return b&&decodeURIComponent(b[1].replace(/\+/g," "))}("onsugar")},Util.getLanguage=function(a){if(Util.onSugar())return void a(navigator.language);"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.storage.local.get("sugar_settings",function(b){a(JSON.parse(b.sugar_settings).language)}):a(JSON.parse(localStorage.sugar_settings).language)},Util.toBase64=function(a){for(var b,c=(3-a.length%3)%3,d="",e=a.length,f=0,g=0;g<e;g++)b=g%3,f|=a[g]<<(16>>>b&24),2!==b&&a.length-g!=1||(d+=String.fromCharCode(uint6ToB64(f>>>18&63),uint6ToB64(f>>>12&63),uint6ToB64(f>>>6&63),uint6ToB64(63&f)),f=0);return 0===c?d:d.substring(0,d.length-c)+(1===c?"=":"==")};