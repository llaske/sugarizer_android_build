/*! Sugarizer 2020-03-14 */
define(["webL10n"],function(a){var b={};return b.start=function(){steps=[],pianoMode?steps=[{element:"#app_"+currentPianoMode,placement:"bottom",title:a.get("TutoCurrentModeTitle"),content:a.get("TutoCurrentModeContent")},{element:"#"+document.querySelectorAll(".container")[0].id,placement:"top",title:a.get("TutoPianoTitle"),content:a.get("TutoPianoContent")},{element:"#piano-button",placement:"bottom",title:a.get("TutoPianoButtonTitle"),content:a.get("TutoPianoButtonContent")}]:steps=[{element:"",orphan:!0,placement:"bottom",title:a.get("TutoExplainTitle"),content:a.get("TutoExplainContent")},{element:"#app_items",placement:"top",title:a.get("TutoSoundsTitle"),content:a.get("TutoSoundsContent")},{element:"#app_collections",placement:"bottom",title:a.get("TutoFilterTitle"),content:a.get("TutoFilterContent")},{element:"#piano-button",placement:"bottom",title:a.get("TutoPianoInfoTitle"),content:a.get("TutoPianoInfoContent")}];var b=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<div class='popover-content'></div>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+a.get("TutoPrev")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+a.get("TutoNext")+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+a.get("TutoEnd")+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:steps});b.init(),b.start(!0)},b});