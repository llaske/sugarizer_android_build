enyo.kind({name:"enyo.AlphaJumper",classes:"enyo-alpha-jumper enyo-border-box",published:{marker:null},events:{onAlphaJump:""},handlers:{ondown:"down",onmove:"move",onup:"up"},initComponents:function(){for(var t="A".charCodeAt(0),e=t;e<t+26;e++)this.createComponent({content:String.fromCharCode(e)});this.inherited(arguments)},down:function(t,e){if(this.tracking&&enyo.dispatcher.release(),this.tracking=!0,this.hasNode()){var n=this.node.getBoundingClientRect(),i=void 0===n.width?n.right-n.left:n.width;this.x=n.left+i/2}enyo.dispatcher.capture(this),this.track(e)},move:function(t,e){this.tracking&&this.track(e)},up:function(){this.tracking&&(enyo.dispatcher.release(),this.setMarker(null),this.tracking=!1)},track:function(t){var e=document.elementFromPoint(this.x,t.pageY),n=this.nodeToControl(e);n&&this.setMarker(n)},nodeToControl:function(t){for(var e,n=0,i=this.controls;e=i[n];n++)if(t==e.hasNode())return e},markerChanged:function(t){t&&t.removeClass("active"),this.marker&&(this.marker.addClass("active"),this.doAlphaJump({letter:this.marker.getContent(),index:this.marker.indexInContainer()}))}});