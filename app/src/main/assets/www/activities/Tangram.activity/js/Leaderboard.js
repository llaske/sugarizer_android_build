var Leaderboard={props:["strokeColor","fillColor","playersAll","playersPlaying","l10n"],template:'\n    <div id="leaderboard-view">\n      <div class="leaderboard-main">\n        <button id="back-button" v-on:click="$emit(\'go-to-result\')"></button>\n        <div\n          class="leaderboard-main-header"\n          v-bind:style="{backgroundColor: fillColor}"\n        >\n          <div class="leaderboard-item" style="width:25%">Rank</div>\n          <div class="leaderboard-item" style="width:50%">User</div>\n          <div class="leaderboard-item" style="width:25%">Score</div>\n        </div>\n        <div\n          class="leaderboard-main-body"\n        >\n          <div\n            class="leaderboard-panel-container"\n            v-for="(item, index) in players"\n            v-bind:key="index"\n            v-bind:style="{borderColor: item.user.colorvalue.stroke}"\n          >\n            <div class="leaderboard-item leaderboard-item-rank">{{  initP + index + 1  }}</div>\n            <div\n              class="leaderboard-item leaderboard-item-icon"\n              v-bind:style="{backgroundImage: \'url(\'+ generateXOLogoWithColor(item.user.colorvalue.stroke, item.user.colorvalue.fill)+\')\'}"\n            ></div>\n            <div class="leaderboard-item leaderboard-item-name">{{  item.user.name  }}</div>\n            <div class="leaderboard-item leaderboard-item-score"\n            v-bind:style="{backgroundImage: item.score===null ? \'url(./icons/hourglass.svg)\' : \'\'}"\n            >{{  item.score!=null ? item.score : "" }}</div>\n          </div>\n        </div>\n      </div>\n      <div class="leaderboard-footer">\n        <div class="pagination">\n          <button\n            v-if="playersAll.length > 3"\n            v-bind:disabled="isPreviousButtonDisabled"\n            class="btn-in-footer btn-previous-page"\n            v-bind:style="{\n              backgroundColor: fillColor,\n              width: actionButtons.width + \'px\',\n              height: actionButtons.height + \'px\',\n            }"\n            v-on:click="pageChangeHandler(\'previous\')"\n          >\n          </button>\n          <button\n            v-if="playersAll.length > 3"\n            class="btn-in-footer page-no"\n            v-bind:style="{\n              backgroundColor: fillColor,\n              width: actionButtons.width + \'px\',\n              height: actionButtons.height + \'px\',\n            }"\n          >\n            {{ currentPage }}/{{ pageCount }}\n          </button>\n          <button\n            v-if="playersAll.length > 3"\n            v-bind:disabled="isNextButtonDisabled"\n            class="btn-in-footer btn-next-page"\n            v-bind:style="{\n              backgroundColor: fillColor,\n              width: actionButtons.width + \'px\',\n              height: actionButtons.height + \'px\',\n            }"\n            v-on:click="pageChangeHandler(\'next\')"\n          >\n          </button>\n        </div>\n        <div class="footer-actions">\n        </div>\n      </div>\n    </div>\n  ',data:function(){return{players:[],currentPage:1,pageCount:1,visibleItemsPerPageCount:3,initP:0,actionButtons:{width:30,width:30}}},created:function(){window.addEventListener("resize",this.resize),this.sortLeaderboard()},destroyed:function(){window.removeEventListener("resize",this.resize)},mounted:function(){this.pageCount=Math.ceil(this.playersAll.length/this.visibleItemsPerPageCount),this.resize(),document.getElementById("spinner").style.visibility="hidden"},watch:{playersAll:function(){var e=this;e.pageCount=Math.ceil(e.playersAll.length/e.visibleItemsPerPageCount),e.sortLeaderboard(),setTimeout(()=>{e.resize()},0)},playersPlaying:function(){this.sortLeaderboard()},currentPage:function(){const e=document.querySelector(".leaderboard-main-body");e&&e.scrollTo(0,0)}},computed:{isPreviousButtonDisabled:function(){return 1===this.currentPage},isNextButtonDisabled:function(){return this.currentPage===this.pageCount}},methods:{resize:function(){var e=document.getElementById("main-toolbar"),t=0!=e.offsetHeight?e.offsetHeight+3:3,n=window.innerHeight-t;document.querySelector("#leaderboard-view").style.height=n+"px";let i=document.querySelector(".leaderboard-footer");this.$set(this.actionButtons,"width",.95*i.offsetHeight),this.$set(this.actionButtons,"height",.95*i.offsetHeight)},sortLeaderboard:function(e){var t=this;t.players=[];for(var n=[],i=0;i<t.playersAll.length;i++)n.push(t.playersAll[i]);n.sort((function(e,t){return t.score-e.score})),t.initP=(t.currentPage-1)*t.visibleItemsPerPageCount;var r=t.playersAll.length-t.initP;r>t.visibleItemsPerPageCount&&(r=t.visibleItemsPerPageCount),t.players=n.slice(t.initP,t.initP+r)},pageChangeHandler:function(e){switch(e){case"next":this.currentPage<this.pageCount&&(this.currentPage+=1);break;case"previous":this.currentPage>1&&(this.currentPage-=1);break;default:this.currentPage=e}this.sortLeaderboard()}}};