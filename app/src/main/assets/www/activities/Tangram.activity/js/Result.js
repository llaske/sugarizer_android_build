var ResultCard={components:{clock:Clock},props:["strokeColor","fillColor","puzzle","configKonva","configLayer","l10n"],template:'\n\t\t<div class="result-card" v-bind:style="{backgroundColor: \'#ffffff\'}">\n      <div class="info-bar">\n        <div class="info-block clock-info-block"\n        >\n          <div class="info-block-logo clock-logo"></div>\n          <div class="info-block-content">\n            <clock v-bind:time="puzzle.timeTaken"></clock>\n          </div>\n        </div>\n\n        <div class="info-bar-logo info-user-logo"\n          v-bind:style="{backgroundImage: puzzle.isSolved ? \'url(\'+ generateXOLogoWithColor(strokeColor, fillColor)+\')\' : \'url(./icons/robot.svg)\' }"\n        ></div>\n\n        <div class="info-block score-info-block"\n        >\n          <div class="info-block-content info-score-1">\n            <div>{{ l10n.stringScore }}:</div>\n          </div>\n          <div class="info-block-content info-score-2">\n            <div>{{puzzle.score}}</div>\n          </div>\n        </div>\n      </div>\n\t\t\t<div class="result-card-main">\n        <v-stage ref="stage" v-bind:config="configKonva"\n        >\n          <v-layer ref="layer" :config="configLayer">\n            <v-line\n              v-for="(targetTan, index) in puzzle.targetTans"\n              v-bind:key="index"\n              :config="{\n                ...targetTan,\n              }"\n            ></v-line>\n          </v-layer>\n        </v-stage>\n      </div>\n\t\t</div>\n\t'},Result={components:{"result-card":ResultCard,clock:Clock},props:["strokeColor","fillColor","puzzles","pNo","userResponse","timeMarks","disabled","playersAll","l10n"],template:'\n    <div id="result-screen"\n      v-bind:style="{backgroundColor: strokeColor}"\n    >\n      <div class="result-header">\n        <div class="result-bar"\n        >\n          <div class="result-bar-block"\n            v-bind:style="{backgroundColor: fillColor}"\n          >\n            <clock v-bind:time="timeMarks[0] - timeMarks[timeMarks.length-1]" v-bind:text="l10n.stringTotalTime+\' \'"></clock>\n          </div>\n          <div class="result-bar-block"\n            v-bind:style="{backgroundColor: fillColor}"\n          >\n            <div>{{l10n.stringTotalScore}} {{totalScore}}</div>\n          </div>\n        </div>\n      </div>\n\n      <div class="result-main"\n      >\n        <div class="result-panel-primary"\n        >\n          <result-card\n            v-for="(puzzle,index) in puzzlesSet"\n            v-bind:key="index"\n            v-bind:configLayer="configLayer"\n            v-bind:configKonva="configKonva"\n            v-bind:puzzle="puzzle"\n            v-bind:stroke-color="strokeColor"\n    \t\t\t\tv-bind:fill-color="fillColor"\n            v-bind:l10n="l10n"\n          ></result-card>\n\n        </div>\n\n      </div>\n      <div class="result-footer">\n          <div class="pagination">\n          </div>\n          <div class="footer-actions">\n            <button\n              v-if="playersAll.length!=0"\n              class="btn-in-footer btn-see-leaderboard"\n              v-bind:style="{\n                backgroundColor: fillColor,\n                width: actionButtons.width + \'px\',\n                height: actionButtons.height + \'px\',\n              }"\n              v-on:click="$emit(\'see-leaderboard\')"\n            >\n            </button>\n            <button\n              class="btn-in-footer btn-restart"\n              v-if="isRestartButtonVisible"\n              v-bind:disabled="disabled"\n              v-bind:style="{\n                backgroundColor: fillColor,\n                width: actionButtons.width + \'px\',\n                height: actionButtons.height + \'px\',\n              }"\n              v-on:click="$emit(\'restart-game\')"\n            ></button>\n          </div>\n      </div>\n    </div>\n  ',data:function(){return{configKonva:{width:300,height:300},configLayer:{scaleX:5,scaleY:5},actionButtons:{width:30,width:30},totalScore:0,puzzlesSet:[],canRestart:!0,tanColors:["blue","purple","red","green","yellow","yellow"]}},created:function(){window.addEventListener("resize",this.resize),this.initializePuzzleShape()},destroyed:function(){window.removeEventListener("resize",this.resize)},mounted:function(){this.resize(),document.getElementById("spinner").style.visibility="hidden"},computed:{isRestartButtonVisible:function(){var n=this;return n.canRestart=!n.$root.SugarPresence||(!n.$root.SugarPresence.isConnected()||n.$root.SugarPresence.isHost),n.canRestart}},watch:{userResponse:function(){this.initializePuzzleShape()}},methods:{resize:function(){let n=document.getElementById("main-toolbar"),e=0!=n.offsetHeight?n.offsetHeight+3:3,t=window.innerHeight-e;window.innerWidth,document.querySelector(".result-card-main");document.querySelector("#result-screen").style.height=t+"px";let o=document.querySelector(".result-footer");this.$set(this.actionButtons,"width",.95*o.offsetHeight),this.$set(this.actionButtons,"height",.95*o.offsetHeight)},initializePuzzleShape:function(){let n=this;n.puzzlesSet=[],n.totalScore=0;for(var e=0;e<n.userResponse.length;e++)n.totalScore+=n.userResponse[e].score;for(e=0;e<n.userResponse.length;e++){let t={isSolved:n.userResponse[e].isSolved,score:n.userResponse[e].score,timeTaken:n.timeMarks[e]-n.timeMarks[e+1],targetTans:[]},o=n.userResponse[e].tans;for(let e=0;e<o.length;e++){let i=new Tan(o[e].tanType,o[e].anchor.dup(),o[e].orientation),l=[...i.getPoints()],s=i.center(),r=[];for(let n=0;n<l.length;n++){let e=l[n].dup();r.push(e.toFloatX()),r.push(e.toFloatY())}t.targetTans.push({points:r,offsetX:s.toFloatX(),offsetY:s.toFloatY(),x:s.toFloatX(),y:s.toFloatY(),fill:n.tanColors[o[e].tanType],lineJoin:"round",closed:!0})}n.puzzlesSet.push(t)}}}};