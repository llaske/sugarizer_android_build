/*! Sugarizer 2020-03-14 */
define(["webL10n"],function(a){var b={};return b.start=function(b){var c=[{element:"",orphan:!0,placement:"bottom",title:a.get("TutoExplainTitle"),content:a.get("TutoExplainContent")},{element:"#previous-button",placement:"bottom",title:a.get("Previous"),content:a.get("TutoPreviousExplanation")},{element:"#next-button",placement:"bottom",title:a.get("Next"),content:a.get("TutoNextExplanation")},{element:"#add-button",placement:"bottom",title:a.get("TutoAddPage"),content:a.get("TutoAddPageExplanation")},{element:"#add-globe",placement:"bottom",title:a.get("AddGlobe"),content:a.get("TutoAddGlobeExplanation")},{element:"#text-button",placement:"bottom",title:a.get("TutoEditText"),content:a.get("TutoEditTextExplanation")},{element:"#sort-button",placement:"bottom",title:a.get("TutoSortBoxes"),content:a.get("TutoSortBoxesExplanation")},{element:"#clean-all-button",placement:"bottom",title:a.get("TutoCleanAll"),content:a.get("TutoCleanAllExplanation")},{element:"#image-save",placement:"bottom",title:a.get("TutoImageSave"),content:a.get("TutoImageSaveExplanation")},{element:"#page-counter",placement:"left",title:a.get("TutoPageCounter"),content:a.get("TutoPageCounterExplanation")},{element:"#stop-button",placement:"left",title:a.get("TutoStop"),content:a.get("TutoStopExplanation")}],d=new Tour({template:"            <div class='popover tour'>                <div class='arrow'></div>                <h3 class='popover-title tutorial-title'></h3>                <div class='popover-content'></div>                <div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>                    <div class='tutorial-prev-icon icon-button' data-role='prev'>                        <div class='tutorial-prev-icon1 web-activity'>                            <div class='tutorial-prev-icon2 web-activity-icon'></div>                            <div class='tutorial-prev-icon3 web-activity-disable'></div>                        </div>                        <div class='icon-tutorial-text'>"+a.get("TutoPrev")+"</div>                    </div>                    <span data-role='separator' style='margin: 4px'>|</span>                    <div class='tutorial-next-icon icon-button' data-role='next'>                        <div class='tutorial-next-icon1 web-activity'>                            <div class='tutorial-next-icon2 web-activity-icon'></div>                            <div class='tutorial-next-icon3 web-activity-disable'></div>                        </div>                        <div class='icon-tutorial-text'>"+a.get("TutoNext")+"</div>                    </div>                    <div class='tutorial-end-icon icon-button' data-role='end'>                        <div class='tutorial-end-icon1 web-activity'>                            <div class='tutorial-end-icon2 web-activity-icon'></div>                            <div class='tutorial-end-icon3 web-activity-disable'></div>                        </div>                        <div class='icon-tutorial-text'>"+a.get("TutoEnd")+"</div>                    </div>                </div>            </div>",storage:!1,backdrop:!0,steps:c});d.init(),d.start(!0)},b});