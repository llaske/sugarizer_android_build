Vue.component("sugar-activity",{name:"SugarActivity",data:function(){return{activity:null,environment:null}},mounted(){var t=this;requirejs(["sugar-web/activity/activity","sugar-web/env"],(function(n,i){t.activity=n,i.getEnvironment((function(i,e){t.environment=e,n.setup(),t.$emit("initialized")}))}))},methods:{getActivity:function(){return this.activity},getEnvironment:function(){return this.environment}}});