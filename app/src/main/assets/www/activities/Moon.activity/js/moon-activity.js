define(["activity/data-model","activity/draw","webL10n","sugar-web/env","sugar-web/datastore","moment-with-locales.min","humane"],(function(e,t,n,i,o,a,l){"use strict";var r,d,u,s,c=document.querySelector("#toggle-grid-button"),m=document.querySelector("#toggle-hemisphere-button"),g=document.querySelector("canvas"),p=g.getContext("2d"),f=n.get,y=!0;function updateSizes(){var e=document.querySelector("#main-toolbar").clientHeight;document.querySelector("#panel-container").style.height=window.innerHeight-e+"px";var t=document.querySelector("#panel-right").clientHeight,n=document.querySelector("#panel-right").clientWidth;r=.95*Math.min(n,t),.5*r,g.width=r,g.height=r,g.style.top=.5*(t-g.height)+"px",g.style.left=.5*(n-g.width)+"px"}function updateView(){clearTimeout(d),updateInfo(),t.setImageSize(r),t.moon(),s?(p.save(),p.rotate(Math.PI),p.drawImage(g,-r,-r),p.restore(),u&&t.grid(f("SNWE"))):u&&t.grid(f("NSEW")),d=setTimeout(updateView,5e3)}function updateInfo(){e.update_moon_calculations();var t={},n=["moonInfo","phase","julian","age","lunation","visibility","seleno","full","new","lunar","solar"];t[f(n[0])]=[formatDate()],t[f(n[1])]=[f(e.moon_phase_name())],t[f(n[2])]=[e.julian_date.toFixed(2),f("astro")],t[f(n[3])]=[e.days_old,f("days")+",",e.hours_old,f("hours")+",",e.minutes_old,f("minutes")],t[f(n[4])]=[(100*e.phase_of_moon).toFixed(4)+"%",f("thru"),e.lunation],t[f(n[5])]=[(100*e.percent_of_full_moon).toFixed(4)+"%",f("estimated")],t[f(n[6])]=[e.selenographic_deg.toFixed(2)+"°",f(e.west_or_east),"("+f(e.rise_or_set)+")"],t[f(n[7])]=[formatDate(e.next_full_moon_date),f("in"),e.days_until_full_moon.toFixed(),f("days")],t[f(n[8])]=[formatDate(e.next_new_moon_date),f("in"),e.days_until_new_moon.toFixed(),f("days")],t[f(n[9])]=[formatDate(e.next_lunar_eclipse_date),f("in"),e.days_until_lunar_eclipse.toFixed(),f("days")],t[f(n[10])]=[formatDate(e.next_solar_eclipse_date),f("in"),e.days_until_solar_eclipse.toFixed(),f("days")];var i=[];for(var o in t){var a="<p>"+o+":<br>"+t[o].join(" ")+"</p>";i.push(a)}i=i.join(""),document.querySelector("#panel-left").innerHTML=i,document.getElementById("toggle-grid-button").title=f("ToggleGrid"),document.getElementById("toggle-hemisphere-button").title=f("ToggleHemisphere"),document.getElementById("save-image-button").title=f("SaveImage")}function toggleGrid(){(u=!u)?c.classList.add("active"):c.classList.remove("active"),updateView()}function toggleHemisphere(){(s=!s)?m.classList.add("active"):m.classList.remove("active"),updateView()}function saveImage(){var e=g.toDataURL("image/jpeg",1),t={mimetype:"image/jpeg",title:"Image Moon",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};o.create(t,(function(){l.log(n.get("MoonImageSaved")),console.log("export done.")}),e)}function formatDate(e){e=e?new Date(1e3*e):new Date;var t=a(e);return t.format("LLLL").replace(t.format("LT"),t.format("LTS"))}return n.ready((function(){y&&(y=!1,i.getEnvironment((function(e,t){var i="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,o=t.user?t.user.language:i;n.language.code=o,a.locale(o);var l=setTimeout((function(){clearTimeout(l),updateView()}),50)})))})),document.getElementById("fullscreen-button").addEventListener("click",(function(){document.getElementById("main-toolbar").style.display="none",document.getElementById("panel-container").style.top="0px",document.getElementById("panel-container").style.height="100%",document.getElementById("unfullscreen-button").style.visibility="visible",updateSizes(),updateView()})),document.getElementById("unfullscreen-button").addEventListener("click",(function(){document.getElementById("main-toolbar").style.display="block",document.getElementById("panel-container").style.top="55px",document.getElementById("panel-container").style.height="100%",document.getElementById("unfullscreen-button").style.visibility="hidden",updateSizes(),updateView()})),{setup:function setup(){!function initEventListeners(){window.addEventListener("resize",(function(){updateSizes(),updateView()})),c.addEventListener("click",toggleGrid),m.addEventListener("click",toggleHemisphere),document.querySelector("#save-image-button").addEventListener("click",saveImage)}(),updateSizes()},initPrefs:function initPrefs(e){(u=e.showGrid)?(u=!0,c.classList.add("active")):(u=!1,c.classList.remove("active")),(s=e.showSouth)?(s=!0,m.classList.add("active")):(s=!1,m.classList.remove("active"))},getPrefs:function getPrefs(){return{showGrid:u,showSouth:s}},updateInfo:updateInfo}}));