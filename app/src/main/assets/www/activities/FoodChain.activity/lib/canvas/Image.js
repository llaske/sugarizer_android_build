enyo.kind({name:"enyo.canvas.Image",kind:enyo.canvas.Control,published:{src:""},create:function(){this.image=new Image,this.inherited(arguments),this.srcChanged()},srcChanged:function(){this.src&&(this.image.src=this.src)},renderSelf:function(n){n.drawImage(this.image,this.bounds.l,this.bounds.t)}});