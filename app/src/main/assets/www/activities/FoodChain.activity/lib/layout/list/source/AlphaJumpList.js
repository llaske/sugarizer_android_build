enyo.kind({name:"enyo.AlphaJumpList",kind:"List",scrollTools:[{name:"jumper",kind:"AlphaJumper"}],initComponents:function(){this.createChrome(this.scrollTools),this.inherited(arguments)},rendered:function(){this.inherited(arguments),this.centerJumper()},resizeHandler:function(){this.inherited(arguments),this.centerJumper()},centerJumper:function(){var e=this.getBounds(),t=this.$.jumper.getBounds();this.$.jumper.applyStyle("top",(e.height-t.height)/2+"px")}});