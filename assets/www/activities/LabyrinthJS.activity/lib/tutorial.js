define(["webL10n","activity/activity"],(function(){var t,e={},n=l10n_s;return e.elements=[],e.init=function(){var o=n.get("TutoPrev"),i=n.get("TutoNext"),l=n.get("TutoEnd"),a=[{element:"",orphan:!0,placement:"bottom",title:n.get("TutoExplainTitle"),content:n.get("TutoExplainContent")},{element:e.getElement("board"),placement:"top",title:n.get("TutoBoardTitle"),content:n.get("TutoBoardContent")},{element:e.getElement("activity"),placement:"bottom",title:n.get("TutoActivityTitle"),content:n.get("TutoActivityContent")},{element:e.getElement("node"),placement:"bottom",title:n.get("TutoNodeTitle"),content:n.get("TutoNodeContent")},{element:e.getElement("link"),placement:"bottom",title:n.get("TutoLinkTitle"),content:n.get("TutoLinkContent")},{element:e.getElement("remove"),placement:"bottom",title:n.get("TutoRemoveTitle"),content:n.get("TutoRemoveContent")},{element:e.getElement("undo"),placement:"bottom",title:n.get("TutoUndoTitle"),content:n.get("TutoUndoContent")},{element:e.getElement("redo"),placement:"bottom",title:n.get("TutoRedoTitle"),content:n.get("TutoRedoContent")},{element:e.getElement("zoom"),placement:"bottom",title:n.get("TutoZoomTitle"),content:n.get("TutoZoomContent")},{element:e.getElement("png"),placement:"bottom",title:n.get("TutoPngTitle"),content:n.get("TutoPngContent")},{element:e.getElement("textvalue"),placement:"bottom",title:n.get("TutoTextTitle"),content:n.get("TutoTextContent")},{element:e.getElement("foreground"),placement:"bottom",title:n.get("TutoForegroundTitle"),content:n.get("TutoForegroundContent")},{element:e.getElement("background"),placement:"bottom",title:n.get("TutoBackgroundTitle"),content:n.get("TutoBackgroundContent")},{element:e.getElement("bold"),placement:"bottom",title:n.get("TutoBoldTitle"),content:n.get("TutoBoldContent")},{element:e.getElement("italic"),placement:"bottom",title:n.get("TutoItalicTitle"),content:n.get("TutoItalicContent")},{element:e.getElement("font"),placement:"bottom",title:n.get("TutoFontTitle"),content:n.get("TutoFontContent")},{element:e.getElement("fontplus"),placement:"bottom",title:n.get("TutoFontPlusTitle"),content:n.get("TutoFontPlusContent")},{element:e.getElement("fontminus"),placement:"bottom",title:n.get("TutoFontMinusTitle"),content:n.get("TutoFontMinusContent")},{element:e.getElement("stop"),placement:"bottom",title:n.get("TutoStopTitle"),content:n.get("TutoStopContent")}];(t=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<div class='popover-content'></div>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+o+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+i+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+l+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:a})).init()},e.setElement=function(t,n){e.elements[t]=n},e.getElement=function(t){return e.elements[t]},e.start=function(){e.init(),t.start(!0)},e}));