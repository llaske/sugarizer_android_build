var Result={components:{"slots-component":Slots,clock:Clock,inputNumber:InputNumber},props:["strokeColor","fillColor","questions","qNo","time","score","slots","scores","timeTaken","compulsoryOpsForEachQuestion","playersAll","disabled","l10n","sugarPresence"],template:'\n    <div id="result-view"\n    >\n      <div class="result-header">\n        <div class="result-bar"\n        >\n          <div class="result-bar-block"\n            v-bind:style="{backgroundColor: fillColor}"\n          ><clock v-bind:time="totalTime" v-bind:text="l10n.stringTotalTime+\' \'"></clock>\n          </div>\n\n          <div class="result-bar-block"\n            v-bind:style="{backgroundColor: fillColor}"\n          > {{ l10n.stringTotalScore }} {{ score }}</div>\n\n        </div>\n      </div>\n\n      <div class="result-main"\n        v-bind:style="{backgroundColor: strokeColor}"\n      >\n          <template v-for="(panel, index) in questionSet" v-bind:key="index">\n            <div class="result-panel"\n              v-bind:style="{backgroundColor: \'#ffffff\'}"\n            >\n\n              <div class="result-panel-main">\n                <div class="my-solution">\n                  <div class="info-bar">\n                    <div class="info-block clock-info-block"\n                    >\n                      <div class="info-block-logo clock-logo"></div>\n                      <div class="info-block-content">\n                        <clock v-bind:time="timeForEachQuestion[index]"></clock>\n                      </div>\n                    </div>\n\n                    <div\n                      class="info-bar-logo info-user-logo"\n                      v-bind:style="{backgroundImage: \'url(\'+ generateXOLogoWithColor(strokeColor, fillColor)+\')\'}"\n                    ></div>\n\n                    <div class="info-block score-info-block"\n                    >\n                      <div class="info-block-content info-score-1">\n                        <div>{{ l10n.stringScore }}:</div>\n                      </div>\n                      <div class="info-block-content info-score-2">\n                        <div>{{ scores[index] }}</div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <div class="solution-main">\n                    <slots-component\n                      v-if="mySlots[index].length!=0"\n                      v-bind:strokeColor="strokeColor"\n                      v-bind:fillColor="fillColor"\n                      v-bind:slots="mySlots[index]"\n                      v-bind:compulsoryOpsForQuestion="compulsoryOpsForEachQuestion[index]"\n                      v-bind:isTargetAcheived="panel.targetNum === mySlots[index][mySlots[index].length-1].res"\n                    ></slots-component>\n                  </div>\n                </div>\n\n                <div class="best-solution">\n                  <div class="info-bar">\n                    <div class="info-bar-logo bestSoln-logo"></div>\n                  </div>\n\n                  <div class="solution-main">\n                    <slots-component\n                    v-bind:strokeColor="strokeColor"\n                    v-bind:fillColor="fillColor"\n                    v-bind:slots="bestSlots[index]"\n                    v-bind:compulsoryOpsForQuestion="compulsoryOpsForEachQuestion[index]"\n                    isTargetAcheived="true"\n                    ></slots-component>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n          </template>\n      </div>\n\n      <div class="result-footer">\n          <div class="pagination">\n            <button\n              v-if="qNo > 1"\n              v-bind:disabled="isPreviousButtonDisabled"\n              class="btn-general-block btn-previous-page"\n              v-bind:style="{backgroundColor: fillColor}"\n              v-on:click="pageChangeHandler(\'previous\')"\n            >\n            </button>\n            <button\n              v-if="qNo > 1"\n              class="btn-general-block page-no"\n              v-bind:style="{backgroundColor: fillColor}"\n            >\n              {{ currentPage }}/{{ pageCount }}\n            </button>\n            <button\n              v-if="qNo > 1"\n              v-bind:disabled="isNextButtonDisabled"\n              class="btn-general-block btn-next-page"\n              v-bind:style="{backgroundColor: fillColor}"\n              v-on:click="pageChangeHandler(\'next\')"\n            >\n            </button>\n          </div>\n          <div class="footer-actions">\n            <button\n              v-if="playersAll.length!=0"\n              class="btn-general-block btn-rankings-block"\n              v-bind:style="{backgroundColor: fillColor}"\n              v-on:click="$emit(\'see-leaderboard\')"\n            >\n            </button>\n            <button\n              v-if="isRestartButtonVisible"\n              v-bind:disabled="disabled"\n              class="btn-general-block btn-restart-block"\n              v-bind:style="{backgroundColor: fillColor}"\n              v-on:click="$emit(\'restart-game\')"\n            >\n            </button>\n          </div>\n      </div>\n    </div>\n  ',data:function(){return{questionSet:[],bestSlots:[],mySlots:[],totalTime:0,timeForEachQuestion:[],currentPage:1,pageCount:1,visibleItemsPerPageCount:1,canRestart:!0}},created:function(){window.addEventListener("resize",this.resize),this.initializeSlots()},destroyed:function(){window.removeEventListener("resize",this.resize)},mounted:function(){var n=this;n.totalTime=n.timeTaken.reduce((function(n,e){return n+e}),0),n.pageCount=Math.ceil((n.qNo+1)/n.visibleItemsPerPageCount),n.resize()},computed:{isPreviousButtonDisabled:function(){return 1===this.currentPage},isNextButtonDisabled:function(){return this.currentPage===this.pageCount},isRestartButtonVisible:function(){var n=this;return n.canRestart=!n.sugarPresence||(!n.sugarPresence.isShared()||n.sugarPresence.isHost),setTimeout(()=>{n.resize()},0),n.canRestart}},methods:{resize:function(){var n=document.getElementById("main-toolbar"),e=0!=n.offsetHeight?n.offsetHeight+3:3,t=window.innerHeight-e,o=window.innerWidth/t;if(document.querySelector("#result-view").style.height=t+"px",0!=this.playersAll.length&&(document.querySelector(".btn-rankings-block").style.width=document.querySelector(".btn-rankings-block").offsetHeight+"px"),this.canRestart&&(document.querySelector(".btn-restart-block").style.width=document.querySelector(".btn-restart-block").offsetHeight+"px"),this.qNo>1&&(document.querySelector(".btn-previous-page").style.width=document.querySelector(".btn-previous-page").offsetHeight+"px",document.querySelector(".page-no").style.width=document.querySelector(".page-no").offsetHeight+"px",document.querySelector(".btn-next-page").style.width=document.querySelector(".btn-next-page").offsetHeight+"px"),o<1){if(document.querySelector(".result-panel-main"))for(var i=document.querySelectorAll(".result-panel-main"),l=0;l<i.length;l++)i[l].style.flexDirection="column",i[l].children[0].style.width="98%",i[l].children[1].style.width="98%"}else if(document.querySelector(".result-panel-main"))for(i=document.querySelectorAll(".result-panel-main"),l=0;l<i.length;l++)i[l].style.flexDirection="row",i[l].children[0].style.width="48%",i[l].children[1].style.width="48%"},initializeSlots:function(){var n=this;n.questionSet=[],n.bestSlots=[],n.mySlots=[],n.timeForEachQuestion=[];var e=(n.currentPage-1)*n.visibleItemsPerPageCount,t=n.qNo+1-e;t>n.visibleItemsPerPageCount&&(t=n.visibleItemsPerPageCount);for(var o=e;o<e+t;o++)n.questionSet.push(n.questions[o]),n.timeForEachQuestion.push(n.timeTaken[o]);for(var i=e;i<e+t;i++){var l=[],s=rpnToSlots(n.questions[i].bestSoln);for(o=0;o<s.length;o++){var r={num1:{type:null,val:null},operator:null,num2:{type:null,val:null},res:null,useless:!1};r.num1.val=s[o][0].val,r.num1.type=s[o][0].type,r.operator=s[o][1],r.num2.val=s[o][2].val,r.num2.type=s[o][2].type,r.res=s[o][3],l.push(r)}n.bestSlots.push(l),n.mySlots.push(n.slots[i])}},pageChangeHandler:function(n){switch(n){case"next":this.currentPage<this.pageCount&&(this.currentPage+=1);break;case"previous":this.currentPage>1&&(this.currentPage-=1);break;default:this.currentPage=n}this.initializeSlots()}}};