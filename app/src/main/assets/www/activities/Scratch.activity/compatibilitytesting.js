var GUI=webpackJsonpGUI([3],{576:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(0)),i=_interopRequireDefault(n(12)),u=n(7),l=_interopRequireDefault(n(55)),c=_interopRequireDefault(n(141)),f=_interopRequireDefault(n(8)),s=_interopRequireDefault(n(23)),p=_interopRequireDefault(n(41));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var d=function mapStateToProps(e){return{vm:e.vm}},h=(0,u.connect)(d)(c.default),y=(0,u.connect)(d)(l.default),m=function(e){function Player(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Player);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Player.__proto__||Object.getPrototypeOf(Player)).call(this,e));return t.updateProject=t.updateProject.bind(t),t.state={projectId:window.location.hash.substring(1)||"10015059"},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Player,e),o(Player,[{key:"componentDidMount",value:function componentDidMount(){window.addEventListener("hashchange",this.updateProject),window.location.hash.substring(1)||(window.location.hash="10015059")}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.addEventListener("hashchange",this.updateProject)}},{key:"updateProject",value:function updateProject(){this.setState({projectId:window.location.hash.substring(1)})}},{key:"render",value:function render(){return a.default.createElement("div",{style:{display:"flex"}},a.default.createElement(s.default,r({},this.props,{width:480}),a.default.createElement(f.default,{height:40},a.default.createElement(y,{style:{marginRight:10,height:40}})),a.default.createElement(h,{height:360,width:480})),a.default.createElement("iframe",{allowFullScreen:!0,allowTransparency:!0,frameBorder:"0",height:"402",src:"https://scratch.mit.edu/projects/embed/"+this.state.projectId+"/?autostart=true",width:"485"}))}}]),Player}(a.default.Component),w=(0,p.default)(m),b=document.createElement("div");document.body.appendChild(b),i.default.render(a.default.createElement(w,null),b)}},[576]);