define(["sugar-web/env","sugar-web/activity/activity","sugar-web/datastore"],(function(t,a,e){var i={activity:a,data:{allProjects:"[]"},env:t,xoColor:{stroke:"#00A0FF",fill:"#8BFF7A"},saveLocally:function(t){a.getDatastoreObject().setDataAsText(JSON.stringify(this.data)),a.getDatastoreObject().save((function(){t&&t()}))},isInsideSugarizer:function(){return t.isSugarizer()},loadData:function(t){var e=this;a.getDatastoreObject().loadAsText((function(a,i,n){null!=n&&(e.data=JSON.parse(n)),i.buddy_color&&(e.xoColor=i.buddy_color),void 0!==t&&t()}))},sugarizerStop:function(){document.getElementById("stop-button").click()},getLanguage:function(){var a={name:"",language:"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language};return t.isSugarizer()?e.localStorage.getValue("sugar_settings").language:(callback(),a.language)},setup:function(){!1!==this.isInsideSugarizer()&&a.setup()}};return window.sugarizerCompatibility=i,i.setup(),i}));