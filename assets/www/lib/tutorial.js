/*! Sugarizer 2020-03-14 */
define([],function(){var a,b={},c=!1;return b.elements=[],b.icons=null,b.init=function(){var c=l10n.get("TutoPrev"),d=l10n.get("TutoNext"),e=l10n.get("TutoEnd");this.activityId="org.olpcfrance.sharednotes";var f=void 0;a=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<table><tr><td style='vertical-align:top;'><div id='icon-tutorial' style='visibility:hidden;display:inline-block;'></div>\t\t\t\t</td><td><div class='popover-content'></div></td></tr></table>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+c+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+d+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+e+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:[],onShown:function(){if(b.icons&&b.icons.steps&&b.icons.steps[a.getCurrentStep()]){var c=b.icons.steps[a.getCurrentStep()],d=document.getElementById("icon-tutorial");d.style.visibility="visible",d.style.backgroundImage="url('"+c.directory+"/"+c.icon+"')",d.style.backgroundSize=c.size+"px",d.style.width=c.size+"px",d.style.height=c.size+"px",d.style.marginTop="15px",d.style.marginLeft="5px",c.color&&iconLib.colorize(d,c.color,function(){})}},onEnd:function(){b.elements=[],b.icons=null}});var g=app.getView();if(g==constant.radialView)a.addSteps([{element:"",orphan:!0,placement:"bottom",title:l10n.get("TutoInitMainTitle"),content:l10n.get("TutoInitMainContent")},{element:b.getElement("owner"),placement:"right",title:l10n.get("TutoUserTitle"),content:l10n.get("TutoUserContent")},{element:b.getElement("activity"),placement:"bottom",title:l10n.get("TutoActivityTitle"),content:l10n.get("TutoActivityContent")},{element:b.getElement("journal"),placement:"right",title:l10n.get("TutoJournalTitle"),content:l10n.get("TutoJournalContent")},{element:b.getElement("radialbutton"),placement:"bottom",title:l10n.get("TutoFavoriteTitle"),content:l10n.get("TutoFavoriteContent")},{element:b.getElement("listbutton"),placement:"bottom",title:l10n.get("TutoListTitle"),content:l10n.get("TutoListContent")},{element:b.getElement("searchtext"),placement:"bottom",title:l10n.get("TutoSearchTitle"),content:l10n.get("TutoSearchContent")},{element:b.getElement("offlinebutton"),placement:"bottom",title:l10n.get("TutoOfflineTitle"),content:l10n.get("TutoOfflineContent")},{element:b.getElement("neighborbutton"),placement:"bottom",title:l10n.get("TutoNeighborTitle"),content:l10n.get("TutoNeighborContent")},{element:"",orphan:!0,placement:"bottom",title:l10n.get("TutoRunTitle"),content:l10n.get("TutoRunContent")}]),b.icons={steps:{0:{icon:"owner-icon.svg",directory:"icons",size:constant.sizeEmpty,color:preferences.getColor()},3:{icon:"activity-journal.svg",directory:"icons",size:constant.sizeEmpty},7:{icon:"cloud-warning.svg",directory:"icons",size:constant.sizeEmpty},9:{icon:"activity-icon.svg",directory:"activities/SharedNotes.activity/activity",size:constant.sizeEmpty}}};else if(g==constant.listView){var h=b.getElementAsObject("activities");if(h){var i=[];b.icons={steps:{}};for(var j=0;j<h.length;j++)i.push({element:"",orphan:!0,placement:"bottom",title:h[j].title,content:h[j].description}),b.icons.steps[j]=h[j].icon;a.addSteps(i),f=b.getElementAsObject("step")}else a.addSteps([{element:b.getElement("radialbutton"),placement:"bottom",title:l10n.get("TutoFavoriteTitle"),content:l10n.get("TutoFavoriteContent")},{element:b.getElement("listbutton"),placement:"bottom",title:l10n.get("TutoListTitle"),content:l10n.get("TutoListContent")},{element:b.getElement("favoriteitembutton"),placement:"bottom",title:l10n.get("TutoFavswitchTitle"),content:l10n.get("TutoFavswitchContent")},{element:b.getElement("searchtext"),placement:"bottom",title:l10n.get("TutoSearchTitle"),content:l10n.get("TutoSearchContent")},{element:b.getElement("neighborbutton"),placement:"bottom",title:l10n.get("TutoNeighborTitle"),content:l10n.get("TutoNeighborContent")}])}else if(g==constant.journalView)a.addSteps([{element:"",orphan:!0,placement:"bottom",title:l10n.get("TutoJournalIntroTitle"),content:l10n.get("TutoJournalIntroContent")},{element:b.getElement("activityitem"),placement:"bottom",title:l10n.get("TutoJournalActivityTitle"),content:l10n.get("TutoJournalActivityContent")},{element:b.getElement("timeitem"),placement:"bottom",title:l10n.get("TutoJournalTimeTitle"),content:l10n.get("TutoJournalTimeContent")},{element:b.getElement("titleitem"),placement:"bottom",title:l10n.get("TutoJournalTitleTitle"),content:l10n.get("TutoJournalTitleContent")},{element:b.getElement("favoriteitem"),placement:"bottom",title:l10n.get("TutoJournalFavoriteTitle"),content:l10n.get("TutoJournalFavoriteContent")},{element:b.getElement("checkitem"),placement:"bottom",title:l10n.get("TutoJournalCheckTitle"),content:l10n.get("TutoJournalCheckContent")},{element:b.getElement("searchtext"),placement:"bottom",title:l10n.get("TutoJournalSearchTitle"),content:l10n.get("TutoJournalSearchContent")},{element:b.getElement("favoritebutton"),placement:"bottom",title:l10n.get("TutoJournalFavButtonTitle"),content:l10n.get("TutoJournalFavButtonContent")},{element:b.getElement("typeselect"),placement:"bottom",title:l10n.get("TutoJournalTypeTitle"),content:l10n.get("TutoJournalTypeContent")},{element:b.getElement("timeselect"),placement:"bottom",title:l10n.get("TutoJournalTimeButtonTitle"),content:l10n.get("TutoJournalTimeButtonContent")},{element:b.getElement("sortselect"),placement:"bottom",title:l10n.get("TutoJournalSortButtonTitle"),content:l10n.get("TutoJournalSortButtonContent")},{element:b.getElement("fromdevicebutton"),placement:"bottom",title:l10n.get("TutoJournalFromDeviceButtonTitle"),content:l10n.get("TutoJournalFromDeviceButtonContent")},{element:b.getElement("journalbutton"),placement:"top",title:l10n.get("TutoJournalLocalTitle"),content:l10n.get("TutoJournalLocalContent")},{element:b.getElement("cloudonebutton"),placement:"top",title:l10n.get("TutoJournalCloudOneTitle"),content:l10n.get("TutoJournalCloudOneContent")},{element:b.getElement("cloudallbutton"),placement:"top",title:l10n.get("TutoJournalCloudAllTitle"),content:l10n.get("TutoJournalCloudAllContent")},{element:b.getElement("radialbutton"),placement:"bottom",title:l10n.get("TutoGotoHomeTitle"),content:l10n.get("TutoGotoHomeContent")}]);else if(g==constant.neighborhoodView)a.addSteps([{element:"",orphan:!0,placement:"bottom",title:l10n.get("TutoNeighborIntroTitle"),content:window.sugarizerOS?l10n.get("TutoNeighborIntroContent2"):l10n.get("TutoNeighborIntroContent")},{element:b.getElement("owner"),placement:"right",title:l10n.get("TutoNeighborUserTitle"),content:l10n.get("TutoNeighborUserContent")},{element:b.getElement("server"),placement:"auto",title:l10n.get("TutoNeighborServerTitle"),content:l10n.get("TutoNeighborServerContent")},{element:b.getElement("other"),placement:"auto",title:l10n.get("TutoNeighborOtherTitle"),content:l10n.get("TutoNeighborOtherContent")},{element:b.getElement("activity"),placement:"auto",title:l10n.get("TutoNeighborActivityTitle"),content:l10n.get("TutoNeighborActivityContent")},{element:b.getElement("wifi"),placement:"auto",title:l10n.get("TutoNeighborWifiTitle"),content:l10n.get("TutoNeighborWifiContent")},{element:b.getElement("radialbutton"),placement:"bottom",title:l10n.get("TutoGotoHomeTitle"),content:l10n.get("TutoGotoHomeContent")}]);else if(g==constant.initView){var k={element:b.getElement("previous"),placement:"top",title:l10n.get("TutoInitPreviousTitle"),content:l10n.get("TutoInitPreviousContent")},l={element:b.getElement("next"),placement:"top",title:l10n.get("TutoInitNextTitle"),content:l10n.get("TutoInitNextContent")},m=b.getElementAsObject("createnew"),i=[[{element:"",orphan:!0,placement:"bottom",title:l10n.get("TutoInitIntroTitle"),content:l10n.get("TutoInitIntroTitleIntroContent")},{element:b.getElement("newuser"),placement:"left",title:l10n.get("TutoInitNewUserTitle"),content:l10n.get("TutoInitNewUserContent")},{element:b.getElement("login"),placement:"right",title:l10n.get("TutoInitLoginTitle"),content:l10n.get("TutoInitLoginContent")},{element:b.getElement("historybox"),placement:"bottom",title:l10n.get("TutoInitHistoryTitle"),content:l10n.get("TutoInitHistoryContent")},{element:b.getElement("helpbutton"),placement:"bottom",title:l10n.get("TutoInitHelpTitle"),content:l10n.get("TutoInitHelpContent")},{element:b.getElement("stopbutton"),placement:"bottom",title:l10n.get("TutoInitStopTitle"),content:l10n.get("TutoInitStopContent")}],[{element:b.getElement("serverbox"),placement:"bottom",title:l10n.get("TutoInitServerTitle"),content:l10n.get("TutoInitServerContent")},{element:b.getElement("qrcode"),placement:"bottom",title:l10n.get("TutoInitQRCodeTitle"),content:l10n.get("TutoInitQRCodeContent")},k,l],[{element:b.getElement("namebox"),placement:"bottom",title:m?l10n.get("TutoInitNameNewTitle"):l10n.get("TutoInitNameTitle"),content:m?l10n.get("TutoInitNameNewContent"):l10n.get("TutoInitNameContent")},k,l],[{element:b.getElement("passbox"),placement:"right",title:m?l10n.get("TutoInitPasswordNewTitle"):l10n.get("TutoInitPasswordTitle"),content:m?l10n.get("TutoInitPasswordNewContent"):l10n.get("TutoInitPasswordContent")},k,l],[{element:m?b.getElement("owner"):b.getElement("passbox"),placement:"right",title:m?l10n.get("TutoInitColorTitle"):l10n.get("TutoInitPasswordTitle"),content:m?l10n.get("TutoInitColorContent"):l10n.get("TutoInitPasswordContent")},k,l]],n=b.getElementAsObject("currentstep");a.addSteps(i[n]),0==n&&(b.icons={steps:{0:{icon:"owner-icon.svg",directory:"icons",size:constant.sizeEmpty,color:{stroke:"#005FE4",fill:"#FF2B34"}}}})}a.init(),void 0!==f&&a.goTo(f)},b.setElement=function(a,c){b.elements[a]=c},b.getElement=function(a){return"#"+b.elements[a]},b.getElementAsObject=function(a){return b.elements[a]},b.start=function(){b.init(),a.start(!0),c=!0},b.isLaunched=function(){return c},b});