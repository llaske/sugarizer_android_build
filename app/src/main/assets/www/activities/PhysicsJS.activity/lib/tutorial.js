define(["webL10n"],(function(t){var e={start:function(){var e=[{element:"",orphan:!0,placement:"bottom",title:t.get("TutoExplainTitle"),content:t.get("TutoExplainContent")},{element:"#viewport",placement:"top",title:t.get("TutoBoardTitle"),content:t.get("TutoBoardContent")},{element:"#circle-button",placement:"bottom",title:t.get("TutoCircleTitle"),content:t.get("TutoCircleContent")},{element:"#box-button",placement:"bottom",title:t.get("TutoBoxTitle"),content:t.get("TutoBoxContent")},{element:"#triangle-button",placement:"bottom",title:t.get("TutoTriangleTitle"),content:t.get("TutoTriangleContent")},{element:"#polygon-button",placement:"bottom",title:t.get("TutoPolygonTitle"),content:t.get("TutoPolygonContent")},{element:"#gravity-button",placement:"bottom",title:t.get("TutoGravityTitle"),content:t.get("TutoGravityContent")},{element:"#sensor-button",placement:"bottom",title:t.get("TutoSensorTitle"),content:t.get("TutoSensorContent")},{element:"#apple-button",placement:"bottom",title:t.get("TutoAppleTitle"),content:t.get("TutoAppleContent")},{element:"#clear-button",placement:"bottom",title:t.get("TutoClearTitle"),content:t.get("TutoClearContent")},{element:"#run-button",placement:"bottom",title:t.get("TutoPauseTitle"),content:t.get("TutoPauseContent")}],o=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<div class='popover-content'></div>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+t.get("TutoPrev")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+t.get("TutoNext")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+t.get("TutoEnd")+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:e});o.init(),o.start(!0)}};return e}));