if (self.CavalryLogger) { CavalryLogger.start_js(["ih+8k"]); }

__d("ChatSidebarRecentCallsStore",["ChatDispatcher","ChatSidebarRecentCallsActions","FluxReduceStore","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;g=babelHelpers.inherits(i,b("immutable").Record({calls:b("immutable").List()}));g&&g.prototype;function i(){g.apply(this,arguments)}c=babelHelpers.inherits(a,b("FluxReduceStore"));h=c&&c.prototype;function a(a){h.constructor.call(this,a)}a.prototype.getInitialState=function(){return new i()};a.prototype.getParticipants=function(){var a=[];this.getState().calls.forEach(function(b){b=b.participants;a.push.apply(a,b)});return a};a.prototype.reduce=function(a,c){switch(c.type){case b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED:return a.set("calls",b("immutable").List(c.calls));default:return a}};a.__moduleID=e.id;e.exports=new a(b("ChatDispatcher"))}),null);
__d("FluxDerivedStore",["FluxStore","immutable","UserTimingUtils","abstractMethod"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.$FluxDerivedStore1=b("immutable").Map(),this.$FluxDerivedStore3=this.__getStores(),this.$FluxDerivedStore4=this.$FluxDerivedStore3.map(function(a){return a.getDispatchToken()}),this.$FluxDerivedStore2=new Map()}a.prototype.__onDispatch=function(a){if(!this.$FluxDerivedStore4)return;this.getDispatcher().waitFor(this.$FluxDerivedStore4);this.$FluxDerivedStore3.some(function(a){return a.hasChanged()})&&(this.$FluxDerivedStore2.clear(),this.__emitChange())};a.prototype.__getStores=function(){return b("abstractMethod")(this.constructor.name,"__getStores")};a.prototype.__getData=function(a,c){return b("abstractMethod")(this.constructor.name,"__getData")};a.prototype.__getCachedData=function(a,c){return b("abstractMethod")(this.constructor.name,"__getCachedData")};a.prototype.__computeResult=function(a,c,d){return b("abstractMethod")(this.constructor.name,"__computeResult")};a.prototype.__areEqual=function(a,b){return a===b};a.prototype.__updateOne=function(a,b,c,d){if(!d||!this.__areEqual(d,c)){d=this.__computeResult(b,c,this.$FluxDerivedStore1.getIn([b,"result"],null));a.setIn([b,"data"],c);a.setIn([b,"result"],d)}};a.prototype.__updateAll=function(a,b,c,d){__p&&__p();for(var b=b,e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;this.__updateOne(a,g,c.get(g),d.get(g))}};a.prototype.get=function(a){if(this.$FluxDerivedStore2.get(a))return this.$FluxDerivedStore1.getIn([a,"result"]);var b=this.$FluxDerivedStore1.getIn([a,"data"]),c=this.__getData(a,b);this.$FluxDerivedStore1=this.$FluxDerivedStore1.withMutations(function(d){return this.__updateOne(d,a,c,b)}.bind(this));this.$FluxDerivedStore2.set(a,!0);return this.$FluxDerivedStore1.getIn([a,"result"])};a.prototype.getCached=function(a){if(this.$FluxDerivedStore2.get(a))return this.$FluxDerivedStore1.getIn([a,"result"]);var b=this.$FluxDerivedStore1.getIn([a,"data"]),c=this.__getCachedData(a,b);this.$FluxDerivedStore1=this.$FluxDerivedStore1.withMutations(function(d){return this.__updateOne(d,a,c,b)}.bind(this));return this.$FluxDerivedStore1.getIn([a,"result"])};a.prototype.getAll=function(a,c){__p&&__p();var d=new Set(a),e=c||this.$FluxDerivedStore5||b("immutable").Map();c=e.withMutations(function(b){__p&&__p();e.forEach(function(a,c){d.has(c)||b["delete"](c)});if(this.__getDataAll){var c=this.$FluxDerivedStore1.filter(function(a,b){return d.has(b)}).map(function(a){return a.get("data")}),f=this.__getDataAll(d,c);this.$FluxDerivedStore1=this.$FluxDerivedStore1.withMutations(function(b){return this.__updateAll(b,a,f,c)}.bind(this));d.forEach(function(a){b.set(a,this.$FluxDerivedStore1.getIn([a,"result"]))}.bind(this))}else d.forEach(function(a){b.set(a,this.get(a))}.bind(this))}.bind(this));this.$FluxDerivedStore5=c;return c};a.prototype.getAllCached=function(a,c){__p&&__p();var d=new Set(a),e=c||this.$FluxDerivedStore5||b("immutable").Map();a=e.withMutations(function(a){__p&&__p();for(var b=e.keys(),c=Array.isArray(b),f=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(c){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;d.has(g)||a["delete"](g)}this.$FluxDerivedStore1=this.$FluxDerivedStore1.withMutations(function(b){__p&&__p();for(var c=d,e=Array.isArray(c),f=0,c=e?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=c.length)break;g=c[f++]}else{f=c.next();if(f.done)break;g=f.value}g=g;var h=b.getIn([g,"data"]),i=this.__getCachedData(g,h);this.__updateOne(b,g,i,h);a.set(g,b.getIn([g,"result"]))}}.bind(this))}.bind(this));this.$FluxDerivedStore5=a;return a};a.prototype.clearCacheForTestsOnly=function(){this.$FluxDerivedStore2.clear()};a.prototype.getDependencyStores=function(){return this.$FluxDerivedStore3};a.__moduleID=e.id;e.exports=a}),null);
__d("ChatSidebarDerivedStore",["ChatDispatcher","ChatSidebarPresencePrivacyActions","ChatSidebarPresencePrivacyStore","ChatSidebarRecentCallsStore","ChatSidebarStore","ChatSidebarUserDetailsFactory","ChatUnreadCountStore","FluxDerivedStore","PresencePrivacy","PresenceStatusStore","ShortProfilesStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxDerivedStore"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.$ChatSidebarDerivedStore1()}a.prototype.$ChatSidebarDerivedStore1=function(){b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})}),b("PresencePrivacy").subscribe("privacy-changed",function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})}),b("PresencePrivacy").subscribe("privacy-availability-changed",function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})}),b("PresencePrivacy").subscribe("privacy-user-presence-response",function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})})};a.prototype.__getStores=function(){return[b("ChatSidebarPresencePrivacyStore"),b("ChatSidebarRecentCallsStore"),b("ChatSidebarStore"),b("ChatUnreadCountStore"),b("PresenceStatusStore"),b("ShortProfilesStore")]};a.prototype.__getData=function(a){var c=b("ChatSidebarStore").getExtraData(a),d=b("ChatSidebarStore").getUsersData(c.numTopFriends),e=b("ChatSidebarStore").getState(),f=d.availableUsers,g=d.offlineUsers,h=d.topUsers,i=d.workOthers,j=c.nearby,k=e.isAfterDomLoad,l=b("ChatSidebarRecentCallsStore").getState(),m=b("ChatSidebarRecentCallsStore").getParticipants();return babelHelpers["extends"]({},e,c,d,{maxItemSlots:a,presencePrivacy:b("ChatSidebarPresencePrivacyStore").getState(),recentCalls:l,usersDetailedData:b("ChatSidebarUserDetailsFactory").getUsersDetailedData([].concat(f,j,g,m,h,i),k)})};a.prototype.__computeResult=function(a,c){a=c.presencePrivacy.currentUser;return babelHelpers["extends"]({},c,{isUserOffline:a===b("PresencePrivacy").OFFLINE})};a.prototype.getVisibleType=function(){return b("ChatSidebarStore").getVisibleType()};a.__moduleID=e.id;e.exports=new a(b("ChatDispatcher"))}),null);
__d("BaseChatSidebar.react",["Arbiter","AsyncRequest","Bootloader","ChatConfig","ChatDispatcher","ChatSidebarActions","ChatSidebarCachedViewport","ChatSidebarConstants","ChatSidebarDerivedStore","ChatSidebarVisibility","CSS","DOM","Event","LitestandClassicPlaceHolders","MessengerDivebarSizingTypedLogger","PresencePrivacy","PresenceUtil","React","SidebarAppsInitialVisibility","SidebarType","Style","URI","ViewportBounds","debounceAcrossTransitions","emptyFunction","gkx","ifRequired","onAfterDisplay","onAfterLoadSafe","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=44,i=b("ChatSidebarConstants").getItemHeight(),j=8,k="sidebarMode",l=b("ChatConfig").get("expanded_divebar_width"),m=171,n=30,o=300,p=b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),q="buddylistOff",r=b("ChatSidebarCachedViewport").viewport;function s(a){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(b("emptyFunction")).setErrorHandler(b("emptyFunction")).setData({sidebar_mode:a,window_id:b("PresenceUtil").getSessionID()}).setAllowCrossPageTransition(!0).send()}a=babelHelpers.inherits(t,b("React").Component);g=a&&a.prototype;function t(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$2=!1,this.$3=!0,this.$4=b("emptyFunction"),this.$5=b("emptyFunction"),this.state={computedState:b("ChatSidebarDerivedStore").get(t.calculateMaxItemSlots(this.props.heightOffset)),show:!0,pinnedThreads:[]},this.handleDerivedStoreChange=function(){var a=b("ChatSidebarDerivedStore").get(t.calculateMaxItemSlots(this.props.heightOffset));a!==this.state.computedState&&this.setState({computedState:a})}.bind(this),this.handleMouserOut=function(){this.$2=!1,this.$3&&(this.$3=!1,this.$4())}.bind(this),this.handleMouserOver=function(){this.$2=!0}.bind(this),this.handleMouseEnterItem=function(a){b("Bootloader").loadModules(["ChatSidebarHoverCardV2"],function(b){var c=this.state.computedState,d=c.adminedPages.map(function(a){return a.id+""}).filter(Boolean);b.prefetchHoverCardData(a,c.availableUsers.concat(d,c.nearby,c.topUsers,c.workOthers))}.bind(this),"BaseChatSidebar.react")}.bind(this),this.resize=function(a,c){var d,e;b("queryThenMutateDOM")(function(){c&&c(),e=r||{},(!a||a.height!==e.height)&&(d=t.getBodyHeight(this.props.heightOffset))}.bind(this),function(){(!a||a.width!==e.width)&&b("ChatSidebarVisibility").shouldShowSidebar(r,function(a,c){b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)}),this.adjustToFitHeightFromParams(d)}.bind(this))}.bind(this),this.updateOnActiveTypeahead=function(a,b){this.setState({show:!b})}.bind(this),this.update=function(a){if(!this.shouldSidebarUpdate())return;a?this.handleSizeUpdate():this.handleUsersUpdate()}.bind(this),c}t.calculateMaxItemSlots=function(a){return Math.floor((t.getBodyHeight(a)-j)/i)};t.getBodyHeight=function(a){var c=r||b("ChatSidebarVisibility").getViewport(),d=c.height;d-=h;d-=n;d-=a;b("ifRequired")("AppsDivebarDisplayController",function(a){a.isVisible()&&(d-=m)},function(){b("SidebarAppsInitialVisibility").visible&&(d-=m)});return Math.max(0,d)};t.prototype.componentDidMount=function(){__p&&__p();this.$4=b("debounceAcrossTransitions")(this.update,o,this);this.$5=b("debounceAcrossTransitions")(this.handleDerivedStoreChange,o,this);this.setupStore();this.setupSearchHandler();this.setupSettingHandler();b("Event").listen(window,"resize",function(){var a=babelHelpers["extends"]({},r)||{};this.resizeAndUpdateViewport(a)}.bind(this));b("Arbiter").subscribe("page_transition",function(a,c){b("ChatSidebarVisibility").shouldShowSidebar(r,function(a,d){d=document.documentElement||"";p&&c.uri.getPath()!=="/"?b("CSS").addClass(d,q):(b("CSS").removeClass(d,q),p&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"BaseChatSidebar.react"));b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)},c.uri)});b("PresencePrivacy").subscribe("privacy-user-presence-changed",this.resize);this.$1=b("DOM").find(this.props.root,"div.fbChatSidebarBody");var a=t.getBodyHeight(this.props.heightOffset);b("Style").set(this.$1,"height",a+"px");b("onAfterLoadSafe")(function(){__p&&__p();var a=this.state.computedState.visible===b("SidebarType").SIDEBAR;this.resizeAndUpdateViewport();b("onAfterLoadSafe")(function(){a!==(this.state.computedState.visible===b("SidebarType").SIDEBAR)&&b("Bootloader").loadModules(["ChatReliabilityInstrumentation"],function(a){a.logERROR("sidebar flashed")},"BaseChatSidebar.react")}.bind(this));b("Bootloader").loadModules(["AvailableList","AvailableListConstants"],function(a,b){a.subscribe(b.ON_AVAILABILITY_CHANGED,function(){return this.$4()}.bind(this))}.bind(this),"BaseChatSidebar.react");b("gkx")("678258")&&b("Bootloader").loadModules(["WorkChatSidebarUtils"],function(a){a.loadPinnedThreads(function(a){this.setState({pinnedThreads:a})}.bind(this))}.bind(this),"BaseChatSidebar.react")}.bind(this));b("ViewportBounds").addPersistentRight(l);b("Arbiter").inform("sidebar/initialized");b("ChatSidebarActions").init()};t.prototype.componentDidUpdate=function(a,b){b.computedState.visible!==this.state.computedState.visible&&this.handleVisibilityChange(this.state.computedState.visible);a=this.state.computedState.presencePrivacy.currentUser!==b.computedState.presencePrivacy.currentUser;this.state.computedState.enabled!==b.computedState.enabled&&s(this.state.computedState.enabled);a&&this.handleSizeUpdate()};t.prototype.setupStore=function(){b("ChatSidebarDerivedStore").getDependencyStores().forEach(function(a){b("ChatDispatcher").explicitlyRegisterStore(a)}),this.props.onRegisterStore&&this.props.onRegisterStore(function(){return this.adjustToFitHeight()}.bind(this)),b("ChatSidebarActions").loaded(),b("ChatSidebarDerivedStore").addListener(this.$5)};t.prototype.setupSettingHandler=function(){b("Arbiter").subscribe("chat/option-changed",function(a,b){a=b.name;(a==="hide_groups"||a==="hide_admined_pages"||a==="hide_businesses")&&this.adjustToFitHeight()}.bind(this)),b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps","PagesDivebar/show-pages","PagesDivebar/hide-pages"],function(){return this.adjustToFitHeight()}.bind(this))};t.prototype.setupSearchHandler=function(){b("Arbiter").subscribe("sidebar/typeahead/active",this.updateOnActiveTypeahead),b("gkx")("678653")?b("onAfterDisplay")(this.bootloadKeyboardShortcuts.bind(this)):this.bootloadKeyboardShortcuts()};t.prototype.bootloadKeyboardShortcuts=function(){var a=this.props.root;b("Bootloader").loadModules(["KeyboardShortcuts"],function(c){c.register("q",function(event){if(this.$8()!==b("SidebarType").SIDEBAR)return;b("requireWeak")("ChatTypeaheadCore",function(b){b.focusSearchField(a,event)})}.bind(this),{persistOnTransition:!0})}.bind(this),"BaseChatSidebar.react")};t.prototype.render=function(){var a=this.state.computedState;return!a.enabled?null:b("React").createElement("div",{onMouseOver:this.handleMouserOver,onMouseOut:this.handleMouserOut},this.props.children({computedState:a,hide:!this.state.show,onMouseEnterItem:this.handleMouseEnterItem,pinnedThreads:this.state.pinnedThreads}))};t.prototype.handleVisibilityChange=function(a){switch(a){case b("SidebarType").SIDEBAR:this.show();break;case b("SidebarType").BUDDYLIST:this.hide();break}};t.prototype.adjustToFitHeight=function(){var a;b("queryThenMutateDOM")(function(){a=t.getBodyHeight(this.props.heightOffset)}.bind(this),function(){return this.adjustToFitHeightFromParams(a)}.bind(this))};t.prototype.adjustToFitHeightFromParams=function(a){if(!a)return;var c=Math.floor(a-j);this.$4(!0);this.$1&&b("Style").set(this.$1,"height",a+"px");b("Arbiter").inform("sidebar/resized",c,"state");b("Arbiter").inform("reflow")};t.prototype.resizeAndUpdateViewport=function(a){this.resize(a,function(){r=b("ChatSidebarVisibility").getViewport()})};t.prototype.show=function(){var a=document.documentElement||"";b("CSS").addClass(a,k);b("CSS").removeClass(a,q);p&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"BaseChatSidebar.react");b("CSS").show(this.props.root);b("Arbiter").inform("sidebar/visibility",!0,"state");b("LitestandClassicPlaceHolders").destroy("sidebar");b("ViewportBounds").inform("change")};t.prototype.hide=function(){var a=document.documentElement||"";p&&!this.isOnHomepage()?b("CSS").addClass(a,q):(b("CSS").removeClass(a,q),p&&b("Bootloader").loadModules(["Dock"],function(a){a.resizeAllFlyouts()},"BaseChatSidebar.react"));b("CSS").removeClass(a,k);b("CSS").hide(this.props.root);b("Arbiter").inform("sidebar/visibility",!1,"state");b("Arbiter").inform("reflow");b("ViewportBounds").inform("change")};t.prototype.isOnHomepage=function(){return new(b("URI"))(window.location.href).getPath()==="/"};t.prototype.$8=function(){return b("ChatSidebarDerivedStore").getVisibleType()};t.prototype.shouldSidebarUpdate=function(){if(this.$8()!==b("SidebarType").SIDEBAR||this.$2){this.$2&&(this.$3=!0);return!1}return!0};t.prototype.handleSizeUpdate=function(){var a=t.calculateMaxItemSlots(this.props.heightOffset),c=this.state.computedState;this.setState({computedState:b("ChatSidebarDerivedStore").get(t.calculateMaxItemSlots(this.props.heightOffset))},function(){var d=this.state.computedState,e=d.adminedPages,f=d.isUserOffline,g=d.groups,h=d.nearby,i=d.numTopFriends;d=d.pymmList;if(f!==c.isUserOffline||i!==c.numTopFriends||g.length!==c.groups.length||h.length!==c.nearby.length||e.length!==c.adminedPages.length||((f=d)!=null?(f=f.pages)!=null?f.length:f:f)!==((f=c)!=null?(f=f.pymmList)!=null?(f=f.pages)!=null?f.length:f:f:f)){new(b("MessengerDivebarSizingTypedLogger"))().setMaxItemSlots(a).setSidebarType(b("SidebarType").SIDEBAR).setNumTopFriends(i).setNumNearby(h.length).setNumGroups(g.length).setNumAdminedPages(e.length).setNumPymm(((f=d)!=null?(f=f.pages)!=null?f.length:f:f)||0).log()}}.bind(this))};t.prototype.handleUsersUpdate=function(){var a=this.state.computedState.maxItemSlots;a=b("ChatSidebarDerivedStore").get(a);this.state.computedState!==a&&this.setState({computedState:a})};e.exports=t}),null);
__d("SRFunctionRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}e.exports=a}),null);
__d("ChatSidebar.react",["BaseChatSidebar.react","ChatSidebarOrderedList.react","React","SRFunctionRef"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement(b("BaseChatSidebar.react"),{root:a.root,heightOffset:0},b("SRFunctionRef")(function(a){var c=a.computedState,d=a.hide;a=a.onMouseEnterItem;return b("React").createElement(b("ChatSidebarOrderedList.react"),{adminedPages:c.adminedPages,marketplaceThreads:c.marketplaceThreads,availableUsers:c.availableUsers,groups:c.groups,hide:d,isAfterDomLoad:c.isAfterDomLoad,isSidebar:!0,isUserOffline:c.isUserOffline,maxItemSlots:c.maxItemSlots+1,nearby:c.nearby,offlineUsers:c.offlineUsers,onMouseEnterItem:a,pageListModule:c.pageListModule,pymmList:c.pymmList,recentCalls:c.recentCalls,topUsers:c.topUsers,usersDetailedData:c.usersDetailedData,workOthers:c.workOthers})}))}e.exports=a}),null);