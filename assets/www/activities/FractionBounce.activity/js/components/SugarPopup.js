Vue.component("sugar-popup",{data:function(){return{humane:null}},mounted(){var n=this;requirejs(["humane"],(function(u){n.humane=u}))},methods:{log(n){this.humane.log(n)}}});