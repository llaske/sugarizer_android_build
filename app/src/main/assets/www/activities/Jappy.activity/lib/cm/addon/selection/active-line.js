!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";var t="CodeMirror-activeline-background";function clearActiveLines(e){for(var i=0;i<e.state.activeLines.length;i++)e.removeLineClass(e.state.activeLines[i],"wrap","CodeMirror-activeline"),e.removeLineClass(e.state.activeLines[i],"background",t),e.removeLineClass(e.state.activeLines[i],"gutter","CodeMirror-activeline-gutter")}function updateActiveLines(e,i){for(var n=[],r=0;r<i.length;r++){var a=i[r],o=e.getOption("styleActiveLine");if("object"==typeof o&&o.nonEmpty?a.anchor.line==a.head.line:a.empty()){var c=e.getLineHandleVisualStart(a.head.line);n[n.length-1]!=c&&n.push(c)}}(function sameArray(e,t){if(e.length!=t.length)return!1;for(var i=0;i<e.length;i++)if(e[i]!=t[i])return!1;return!0})(e.state.activeLines,n)||e.operation((function(){clearActiveLines(e);for(var i=0;i<n.length;i++)e.addLineClass(n[i],"wrap","CodeMirror-activeline"),e.addLineClass(n[i],"background",t),e.addLineClass(n[i],"gutter","CodeMirror-activeline-gutter");e.state.activeLines=n}))}function selectionChange(e,t){updateActiveLines(e,t.ranges)}e.defineOption("styleActiveLine",!1,(function(t,i,n){var r=n!=e.Init&&n;i!=r&&(r&&(t.off("beforeSelectionChange",selectionChange),clearActiveLines(t),delete t.state.activeLines),i&&(t.state.activeLines=[],updateActiveLines(t,t.listSelections()),t.on("beforeSelectionChange",selectionChange)))}))}));