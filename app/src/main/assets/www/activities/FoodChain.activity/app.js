enyo.kind({name:"FoodChain.App",kind:enyo.Control,classes:"board",components:[{name:"glass",classes:"glass"},{name:"cardbox",classes:"cardbox",components:[]},{kind:"Image",src:"images/FoodChain.png",classes:"logo"},{name:"LearnGame",kind:"ShadowButton",img:"one",classes:"game-LearnGame",ontap:"playGame",onenter:"showGameDescription",onleave:"hideGameDescription"},{name:"BuildGame",kind:"ShadowButton",img:"two",classes:"game-BuildGame",ontap:"playGame",onenter:"showGameDescription",onleave:"hideGameDescription"},{name:"PlayGame",kind:"ShadowButton",img:"three",classes:"game-PlayGame",ontap:"playGame",onenter:"showGameDescription",onleave:"hideGameDescription"},{kind:"ShadowButton",img:"information",classes:"information",ontap:"showCredits"},{name:"networkCheck",kind:"FoodChain.NetworkCheck"},{name:"popup",classes:"game-popup",components:[{name:"title",classes:"game-title"},{name:"description",classes:"game-description"}]},{kind:"Signals",onEndOfSound:"endOfSound"}],create:function(){this.inherited(arguments),FoodChain.context.home=this,this.initCardStack(),this.$.popup.hide(),this.games=[],this.setLocale(),FoodChain.context.game="",FoodChain.context.object=this,this.soundtrack="audio/popcorn"},setLocale:function(){enyo.forEach(this.$.cardbox.getControls(),(function(e){e.setLocale()}))},initCardStack:function(){this.cardcount=0,this.cards=[];for(var e=0;e<12;){for(var t=Math.floor(Math.random()*FoodChain.cards.length),n=!1,o=0;!n&&o<this.cards.length-1;o++)this.cards[o]==FoodChain.cards[t]&&(n=!0);n||(this.cards.push(FoodChain.cards[t]),e++)}},rendered:function(){FoodChain.sound.play(this.soundtrack),this.$.networkCheck.check(),this.createComponent({name:"timer",kind:"Timer",baseInterval:1200,onTriggered:"displayCard"},{owner:this})},endOfSound:function(e,t){t.sound==this.soundtrack&&FoodChain.sound.play(this.soundtrack)},displayCard:function(){if(this.cardcount==this.cards.length)return this.$.cardbox.destroyComponents(),this.$.cardbox.render(),void this.initCardStack();var e=Math.floor(Math.random()*window.innerWidth*.7),t=Math.floor(Math.random()*window.innerHeight*.7);this.$.cardbox.createComponent({kind:"FoodChain.Card",cardname:this.cards[this.cardcount],x:e,y:t,z:0}).render(),this.cardcount=this.cardcount+1},showGameDescription:function(e){this.games.LearnGame={title:__$FC("learn"),description:__$FC("learndesc")},this.games.BuildGame={title:__$FC("build"),description:__$FC("builddesc")},this.games.PlayGame={title:__$FC("play"),description:__$FC("playdesc")},this.$.title.setContent(this.games[e.name].title+":"),this.$.title.addClass("game-color-"+e.name),this.$.description.setContent(this.games[e.name].description),this.$.description.addClass("game-color-"+e.name),this.$.popup.show()},hideGameDescription:function(e){this.$.title.removeClass("game-color-"+e.name),this.$.description.removeClass("game-color-"+e.name),this.$.popup.hide()},showCredits:function(){this.$.timer.stop(),this.removeComponent(this.$.timer),FoodChain.context.object=(new FoodChain.Credits).renderInto(document.getElementById("body"))},playGame:function(e){this.$.popup.hide(),FoodChain.sound.pause(),this.$.timer.stop(),this.removeComponent(this.$.timer);var t=void 0===e.level?1:e.level;"LearnGame"==e.name?FoodChain.context.object=new FoodChain.LearnGame({level:t}).renderInto(document.getElementById("body")):"BuildGame"==e.name?FoodChain.context.object=new FoodChain.BuildGame({level:t}).renderInto(document.getElementById("body")):"PlayGame"==e.name&&(FoodChain.context.object=new FoodChain.PlayGame({level:t}).renderInto(document.getElementById("body")))},checkDatabase:function(e){this.$.networkCheck.check(e)},hasDatabase:function(){return this.$.networkCheck.getConnected()},getDatabase:function(){return this.hasDatabase()?"":"http://server.sugarizer.org/activities/FoodChain.activity/"}});