define(["webL10n"],(function(t){var e={start:function(){var e=[{element:"",orphan:!0,placement:"bottom",title:t.get("TutoExplainTitle"),content:t.get("TutoExplainContent")},{element:"#clock-container",placement:"right",title:t.get("TutoHandTitle"),content:t.get("TutoHandContent")},{element:"#simple-clock-button",placement:"bottom",title:t.get("TutoSimpleTitle"),content:t.get("TutoSimpleContent")},{element:"#nice-clock-button",placement:"bottom",title:t.get("TutoNiceTitle"),content:t.get("TutoNiceContent")},{element:"#write-time-button",placement:"bottom",title:t.get("TutoTimeTitle"),content:t.get("TutoTimeContent")},{element:"#write-date-button",placement:"bottom",title:t.get("TutoDateTitle"),content:t.get("TutoDateContent")},{element:"#write-seconds-button",placement:"bottom",title:t.get("TutoSecondsTitle"),content:t.get("TutoSecondsContent")},{element:"#show-am-pm",placement:"bottom",title:t.get("ShowAmPmTitle"),content:t.get("TutoShowAmPmContent")},{element:"#show-mins",placement:"bottom",title:t.get("ShowMinsTitle"),content:t.get("TutoShowMinsContent")},{element:"#set-time-button",placement:"bottom",title:t.get("TutoSetTimeTitle"),content:t.get("TutoSetTimeContent")},{element:"#set-timeGame-button",placement:"bottom",title:t.get("TutoSetTimeGameTitle"),content:t.get("TutoSetTimeGameContent")}],i=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<div class='popover-content'></div>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+t.get("TutoPrev")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+t.get("TutoNext")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+t.get("TutoEnd")+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:e});i.init(),i.start(!0)}};return e}));