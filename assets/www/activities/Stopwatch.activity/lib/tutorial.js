define(["webL10n"],(function(t){var e={start:function(){var e=[{element:"",orphan:!0,placement:"bottom",title:t.get("TutoExplainTitle"),content:t.get("TutoExplainContent")},{element:"#1 .start-stop-button",placement:"bottom",title:t.get("TutoStartStopTitle"),content:t.get("TutoStartStopContent")},{element:"#1 .reset-button",placement:"bottom",title:t.get("TutoResetTitle"),content:t.get("TutoResetContent")},{element:"#1 .mark-button",placement:"bottom",title:t.get("TutoMarkTitle"),content:t.get("TutoMarkContent")},{element:"#1 .counter",placement:"right",title:t.get("TutoCounterTitle"),content:t.get("TutoCounterContent")},{element:"#add-stopwatch",placement:2*$("#add-stopwatch").outerHeight()+$("#add-stopwatch").position().top+$("#canvas").scrollTop()>$("#canvas").height()?"top":"right",title:t.get("TutoAddTitle"),content:t.get("TutoAddContent")},{element:"#1 .remove",placement:"left",title:t.get("TutoRemoveTitle"),content:t.get("TutoRemoveContent")}],scrollToAddButton=function(){$("#canvas").animate({scrollTop:$("#add-stopwatch").offset().top},500)},scrollToTop=function(){$("#canvas").animate({scrollTop:$("#1 .counter").offset().top},500)},o=new Tour({template:"                <div class='popover tour'>                    <div class='arrow'></div>                    <h3 class='popover-title tutorial-title'></h3>                    <div class='popover-content'></div>                    <div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>                        <div class='tutorial-prev-icon icon-button' data-role='prev'>                            <div class='tutorial-prev-icon1 web-activity'>                                <div class='tutorial-prev-icon2 web-activity-icon'></div>                                <div class='tutorial-prev-icon3 web-activity-disable'></div>                            </div>                            <div class='icon-tutorial-text'>"+t.get("TutoPrev")+"</div>                        </div>                        <span data-role='separator' style='margin: 4px'>|</span>                        <div class='tutorial-next-icon icon-button' data-role='next'>                            <div class='tutorial-next-icon1 web-activity'>                                <div class='tutorial-next-icon2 web-activity-icon'></div>                                <div class='tutorial-next-icon3 web-activity-disable'></div>                            </div>                            <div class='icon-tutorial-text'>"+t.get("TutoNext")+"</div>                        </div>                        <div class='tutorial-end-icon icon-button' data-role='end'>                            <div class='tutorial-end-icon1 web-activity'>                                <div class='tutorial-end-icon2 web-activity-icon'></div>                                <div class='tutorial-end-icon3 web-activity-disable'></div>                            </div>                            <div class='icon-tutorial-text'>"+t.get("TutoEnd")+"</div>                        </div>                    </div>                </div>",autoscroll:!0,onNext:function(t){var e=t.getCurrentStep();4===e&&scrollToAddButton(),5===e&&scrollToTop()},onPrev:function(t){var e=t.getCurrentStep();6===e&&scrollToAddButton(),5===e&&scrollToTop()},storage:!1,backdrop:!0,steps:e});o.init(),o.start(!0)}};return e}));