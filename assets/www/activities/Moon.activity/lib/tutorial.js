/*! Sugarizer 2020-03-14 */
define(["webL10n"],function(a){var b={};return b.start=function(){var b=[{element:"",orphan:!0,placement:"bottom",title:a.get("TutoExplainTitle"),content:a.get("TutoExplainContent")},{element:"#activity-button",placement:"bottom",title:a.get("TutoActivityButtonTitle"),content:a.get("TutoActivityButtonContent")},{element:"#toggle-grid-button",placement:"bottom",title:a.get("TutoToggleGridButtonTitle"),content:a.get("TutoToggleGridButtonContent")},{element:"#toggle-hemisphere-button",placement:"bottom",title:a.get("TutoToggleHemisphereButtonTitle"),content:a.get("TutoToggleHemisphereButtonContent")},{element:"#save-image-button",placement:"bottom",title:a.get("TutoSaveImageButtonTitle"),content:a.get("TutoSaveImageButtonContent")},{element:"#fullscreen-button",placement:"bottom",title:a.get("TutoFullScreenButtonTitle"),content:a.get("TutoFullScreenButtonContent")},{element:"#panel-left",title:a.get("TutoPanelLeftTitle"),content:a.get("TutoPanelLeftContent")},{element:"#stop-button",placement:"bottom",title:a.get("TutoStopButtonTitle"),content:a.get("TutoStopButtonContent")}],c=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<div class='popover-content'></div>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+a.get("TutoPrev")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+a.get("TutoNext")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+a.get("TutoEnd")+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:b});c.init(),c.start(!0)},b});