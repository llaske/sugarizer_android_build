var EbookReader={template:'\n\t\t<div>\n\t\t\t<div id="left" class="reader-left" v-on:click="previousPage()"></div>\n\t\t\t<div id="area" class="reader-area"></div>\n\t\t\t<div id="right" class="reader-right" v-on:click="nextPage()"></div>\n\t\t</div>',data:function(){return{rendition:null}},methods:{computeScreenSize:function(){var t=document.getElementById("canvas")||document.getElementById("body"),e=t.offsetHeight;return{width:t.offsetWidth-100,height:e}},render:function(t,e){this.rendition&&(this.rendition.clear(),this.rendition.destroy());var i=this.computeScreenSize();document.getElementById("left").style.height=i.height+"px",document.getElementById("right").style.height=i.height+"px",this.rendition=t.renderTo("area",i),this.rendition.display(e)},nextPage:function(){if(null!=this.rendition){var t=this,e=t.getLocation();t.rendition.next().then((function(){}),(function(){t.rendition.display(e)})),document.getElementById("right").classList.add("reader-right-sel"),setTimeout((function(){document.getElementById("right").classList.remove("reader-right-sel")}),100)}},previousPage:function(){if(null!=this.rendition){var t=this,e=t.getLocation();t.rendition.prev().then((function(){}),(function(){t.rendition.display(e)})),document.getElementById("left").classList.add("reader-left-sel"),setTimeout((function(){document.getElementById("left").classList.remove("reader-left-sel")}),100)}},goToPage:function(t){null!=this.rendition&&this.rendition.display(t)},getLocation:function(){return this.rendition.currentLocation().start.cfi}}};