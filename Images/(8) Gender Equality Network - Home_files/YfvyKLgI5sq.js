if (self.CavalryLogger) { CavalryLogger.start_js(["IExwy"]); }

__d("SUISplitButton.react",["cx","fbt","React","SUIButton.react","SUIComponent","SUIDropdownMenu.react","SUIDropdownMenuContext","SUISelectorOption.react","SUISelectorSeparator.react","SUITheme","emptyFunction","intersectArrays","joinClasses","mergeDeep","shallowEqual"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("SUIComponent"));i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={menu:this.$SUISplitButton1(this.props),context:{menuAlignment:"right",renderButton:this.$SUISplitButton2.bind(this)}},b}a.prototype.componentDidUpdate=function(a,c){(a.children!==this.props.children||a.menu!==this.props.menu||!b("shallowEqual")(this.$SUISplitButton3(a),this.$SUISplitButton3()))&&this.setState({menu:this.$SUISplitButton1()})};a.prototype.$SUISplitButton3=function(a){a===void 0&&(a=this.props);return{children:a.children,contextualLayerBehaviors_DEPRECATED:a.contextualLayerBehaviors_DEPRECATED,dropdownMaxHeight_DEPRECATED:a.dropdownMaxHeight_DEPRECATED,dropdownWidth_DEPRECATED:a.dropdownWidth_DEPRECATED,menuAlignment_DEPRECATED:a.menuAlignment_DEPRECATED,menuPosition_DEPRECATED:a.menuPosition_DEPRECATED,shouldHideOnMouseLeave_DEPRECATED:a.shouldHideOnMouseLeave_DEPRECATED,onChange_DEPRECATED:a.onChange_DEPRECATED}};a.prototype.$SUISplitButton1=function(a){a===void 0&&(a=this.props);return(a=a.menu)!=null?a:j(this.$SUISplitButton3())};a.prototype.$SUISplitButton4=function(){return this.props.uniformOverride?b("mergeDeep")(b("SUITheme").get(this).SUISplitButton,this.props.uniformOverride):b("SUITheme").get(this).SUISplitButton};a.prototype.$SUISplitButton2=function(a){var c,d=this.$SUISplitButton4();return b("React").createElement(b("SUIButton.react"),{borderedSides:b("intersectArrays")(["top","right","bottom"],this.props.borderedSides),className_DEPRECATED:"_764l",disabled:this.props.disabled,height:this.props.height,icon:d.use[this.props.use].chevron,label:(c=a.label)!=null?c:h._("Open Dropdown"),labelIsHidden:!0,onClick:a.onMenuButtonClick,roundedCorners:b("intersectArrays")(["topRight","bottomRight"],this.props.roundedCorners),theme:this.props.theme,uniformOverride:{padding:{normal:{button:"0",icon:"0",onlyIcon:d.chevronPadding},"short":{button:"0",icon:"0",onlyIcon:d.chevronPadding},tall:{button:"0",icon:"0",onlyIcon:d.chevronPadding}}},use:this.props.use})};a.prototype.render=function(){__p&&__p();var a=this.props;a.children;var c=a.className_DEPRECATED,d=a.disabled,e=a.height,f=a.margin,g=a.maxWidth;a.menu;var h=a.minWidth,i=a.style;a.theme;a.uniformOverride;var j=a.use,k=a.width;a.contextualLayerBehaviors_DEPRECATED;a.dropdownMaxHeight_DEPRECATED;a.dropdownWidth_DEPRECATED;a.menuAlignment_DEPRECATED;a.menuPosition_DEPRECATED;a.shouldHideOnMouseLeave_DEPRECATED;a.onChange_DEPRECATED;a=babelHelpers.objectWithoutProperties(a,["children","className_DEPRECATED","disabled","height","margin","maxWidth","menu","minWidth","style","theme","uniformOverride","use","width","contextualLayerBehaviors_DEPRECATED","dropdownMaxHeight_DEPRECATED","dropdownWidth_DEPRECATED","menuAlignment_DEPRECATED","menuPosition_DEPRECATED","shouldHideOnMouseLeave_DEPRECATED","onChange_DEPRECATED"]);var l=this.$SUISplitButton4(),m=g!==void 0||h!==void 0||k!==void 0;g=m?babelHelpers["extends"]({},i,{maxWidth:g,minWidth:h,width:k}):i;h=b("joinClasses")(c,f,"_4nka"+(m?" _3hk3":""));return b("React").createElement("div",{className:h,style:g},b("React").createElement(b("SUIButton.react"),babelHelpers["extends"]({},a,{borderedSides:b("intersectArrays")(["top","bottom","left"],this.props.borderedSides),className_DEPRECATED:"_2a2d",disabled:d,height:e,roundedCorners:b("intersectArrays")(["topLeft","bottomLeft"],this.props.roundedCorners),use:j})),b("React").createElement("div",{className:"_449i",style:{background:l.use[j].dividerColor,height:b("SUITheme").get(this).SUIButton.height[e]}}),b("React").createElement(b("SUIDropdownMenuContext").Provider,{value:this.state.context},this.state.menu))};a.defaultProps=b("SUIButton.react").defaultProps;function j(a){var c=b("React").Children.toArray(a.children).map(function(c){var d=c.type,e=c.props;switch(d){case b("SUISelectorOption.react"):return{type:"item","data-testid":e["data-testid"],isDisabled:e.disabled,icon:e.icon,label:e.children,description:(d=e.tooltip)!=null?d:void 0,onClick:function(){typeof a.onChange_DEPRECATED==="function"&&a.onChange_DEPRECATED(e.value)}};case b("SUISelectorSeparator.react"):return{type:"separator"};default:return{type:"item",isDisabled:!0,label:c,onClick:b("emptyFunction")}}});return b("React").createElement(b("SUIDropdownMenu.react"),{contextualLayerBehaviors:a.contextualLayerBehaviors_DEPRECATED,dropdownWidth:a.dropdownWidth_DEPRECATED,items:c,maxHeight:a.dropdownMaxHeight_DEPRECATED,menuAlignment:a.menuAlignment_DEPRECATED,menuPosition:a.menuPosition_DEPRECATED,shouldHideOnMouseLeave:a.shouldHideOnMouseLeave_DEPRECATED})}e.exports=a}),null);
__d("DialogFitHeightToContent",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"max-height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("LivingRoomUFIDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!0})}),null);
__d("LivingRoomUFIActions",["LivingRoomUFIDispatcher"],(function(a,b,c,d,e,f){"use strict";a={clearUFIParams:function(a){a={type:"CLEAR_UFI",instanceKey:a};b("LivingRoomUFIDispatcher").dispatch(a)},setUFIParams:function(a,c,d){a={type:"SET_UFI",instanceKey:a,ufiMarkup:c,config:d};b("LivingRoomUFIDispatcher").dispatch(a)}};e.exports=a}),null);
__d("LivingRoomUFIStore",["FluxReduceStore","LivingRoomUFIDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i;c=babelHelpers.inherits(j,b("immutable").Record({markup:null,config:null}));g=c&&c.prototype;function j(a){g.constructor.call(this,a)}h=babelHelpers.inherits(k,b("immutable").Record({ufiState:b("immutable").Map()}));h&&h.prototype;k.prototype.clearUFIParams=function(a){return this.set("ufiState",this.ufiState.set(a,null))};k.prototype.setUFIParams=function(a,b,c){return this.set("ufiState",this.ufiState.set(a,new j({markup:b,config:c})))};function k(){h.apply(this,arguments)}i=babelHelpers.inherits(a,b("FluxReduceStore"));i&&i.prototype;a.prototype.getInitialState=function(){return new k()};a.prototype.getConfig=function(a){a=this.getState().ufiState.get(a);return a&&a.config};a.prototype.getUFIMarkup=function(a){a=this.getState().ufiState.get(a);return a&&a.markup};a.prototype.reduce=function(a,b){switch(b.type){case"CLEAR_UFI":return a.clearUFIParams(b.instanceKey);case"SET_UFI":return a.setUFIParams(b.instanceKey,b.ufiMarkup,b.config);default:b.type;return a}};function a(){i.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("LivingRoomUFIDispatcher"))}),null);
__d("XLivingRoomUFIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/async/watchparty/{living_room_id}/",{living_room_id:{type:"FBID",required:!0}})}),null);
__d("LivingRoomUFIHelper",["AsyncRequest","LivingRoomUFIActions","LivingRoomUFIDispatcher","LivingRoomUFIStore","XLivingRoomUFIController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3;a={loadUFI:function(a){if(b("LivingRoomUFIStore").getConfig(a))return;var c=b("XLivingRoomUFIController").getURIBuilder().setFBID("living_room_id",a).getURI();new(b("AsyncRequest"))().setURI(c).setAllowCrossPageTransition(!0).setErrorHandler(function(){setTimeout(function(){return this.loadUFI(a)}.bind(this),g)}.bind(this)).send()},updateUFI:function(a,c,d,e){b("LivingRoomUFIDispatcher").explicitlyRegisterStores([b("LivingRoomUFIStore")]),b("LivingRoomUFIActions").setUFIParams(a,c,d)}};e.exports=a}),null);