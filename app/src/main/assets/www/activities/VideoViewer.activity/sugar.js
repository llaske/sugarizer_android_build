Util.onSugar()&&(enyo.Sugar={},enyo.Sugar.component=null,enyo.Sugar.sendMessage=function(n,e){enyo.Sugar.component&&enyo.Sugar.component.signal(n,JSON.parse(e))},enyo.kind({name:"Sugar",create:function(){this.inherited(arguments),this.handlers=[],enyo.Sugar.component=this},connect:function(n,e){this.handlers[n]=e},sendMessage:function(n,e){var o="";if(o=o+"enyo://"+n.length+"/"+n,e){var a=JSON.stringify(e);o=o+"/"+a.length+"/"+a}else o+="/0/";console.log(o)},signal:function(n,e){var o=this.handlers[n];o&&o(e)}}));