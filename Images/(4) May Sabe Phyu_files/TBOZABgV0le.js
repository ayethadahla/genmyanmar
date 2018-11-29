if (self.CavalryLogger) { CavalryLogger.start_js(["aSu42"]); }

__d("EmojiDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationDispatcher"))({strict:!1})}),null);
__d("EmojiActions",["EmojiDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("keyMirror")({CHANGE_CURRENT_CATEGORY:null,CHANGE_EMOJI_COLOR:null,EMOJI_COLOR_READY:null,GET_EMOJI_COLOR:null,TRAY_DATA_READY:null,UPDATE_TRAY_DATA:null});var g={Types:a,loadedTrayData:function(){b("EmojiDispatcher").dispatch({type:g.Types.TRAY_DATA_READY})},updateTrayData:function(){b("EmojiDispatcher").dispatch({type:g.Types.UPDATE_TRAY_DATA})},changeEmojiColor:function(a){b("EmojiDispatcher").dispatch({type:g.Types.CHANGE_EMOJI_COLOR,color:a})},changeCurrentCategory:function(a){b("EmojiDispatcher").dispatch({type:g.Types.CHANGE_CURRENT_CATEGORY,currentCategory:a})},getEmojiColor:function(){b("EmojiDispatcher").dispatch({type:g.Types.GET_EMOJI_COLOR})},emojiColorReady:function(a){b("EmojiDispatcher").dispatch({type:g.Types.EMOJI_COLOR_READY,color:a})}};e.exports=g}),null);
__d("FBRTCConfig",["CurrentUser"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=null,i=null,j=0,k={};a={setConfig:function(a){var b=a.isVCEndpointCall,c=a.meetingID,d=a.meetingPassword,e=a.peerID;a=a.serverConfig;g=b;h=c;i=d;j=e;k=a},isVCEndpointCall:function(){return g},getMeetingID:function(){return h},getMeetingPassword:function(){return i},getPeerID:function(){return j},statsInterpreterConfig:function(){return{bad_score_count:3,frr_weight:800,plr_weight:500,rtt_weight:2,score_threshold:1e3}},unsupportedBrowserUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.unsupported_browser)return k.troubleshooting_urls.unsupported_browser;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_error)return k.troubleshooting_urls.user_media_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_permission_error)return k.troubleshooting_urls.user_media_permission_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},isMessengerDotCom:function(){return k.is_messenger_dot_com},useMessengerCallUI:function(){return k.messenger_call_ui},useHDVideoQuality:function(){return k.use_hd_video_quality},shouldCreateDataChannel:function(){return k.data_channel},disableURLManager:function(){return k.disable_url_manager}};e.exports=a}),null);
__d("ChatEmojiPickerButton.react",["cx","fbt","Image.react","ImmutableObject","Keys","MessengerHotLikePreviewEvents","MessengerHotLikeUtils","React","MercuryMessageObject","MercuryTriodeSourceUtil","StickerConstants","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MercuryMessageObject").get();c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.$6=function(a){a.stopPropagation(),this.props.onClick(this.props.emojiData.emojiCodes,this.refs.div)}.bind(this),this.$7=function(a){a.keyCode===b("Keys").RETURN&&(a.preventDefault(),this.props.onClick(this.props.emojiData.emojiCodes,this.refs.div))}.bind(this),this.$8=function(a){a.preventDefault();a.stopPropagation();if(a.button!==0)return;!this.props.enableHotEmoji?this.$1=setTimeout(this.$10,1e3):(this.$1=setTimeout(function(){this.$3=Date.now(),this.$11(),this.$12()}.bind(this),500),this.props.onMouseDown&&this.props.onMouseDown())}.bind(this),this.$9=function(a){a.stopPropagation();b("clearTimeout")(this.$1);if(this.props.enableHotEmoji){if(!(this.props.threadID&&this.$3))return;this.$3=0;this.$14();this.$15()}}.bind(this),this.$10=function(){this.props.onLongPress(this.props.emojiData.emojiCodes,this.refs.div)}.bind(this),this.$16=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").POP,this.props.threadID)}.bind(this),this.$4=function(){this.$3&&(this.$3=0,this.$14(),this.$16())}.bind(this),c}a.prototype.componentWillUnmount=function(){this.$4(),b("clearTimeout")(this.$1),b("clearTimeout")(this.$2)};a.prototype.render=function(){return b("React").createElement("div",{"aria-label":this.$5(),onClick:this.$6,onKeyDown:this.$7,onMouseDown:this.$8,onMouseLeave:this.$4,onMouseUp:this.$9,ref:"div",role:"button",tabIndex:"0"},b("React").createElement(b("Image.react"),{className:"_1lih _1ift _1ifu",style:{margin:0},src:this.props.emojiData.uri}))};a.prototype.$5=function(){return h._("Pick emoji {emoji choice}",[h._param("emoji choice",String.fromCodePoint.apply(String,this.props.emojiData.emojiCodes))])};a.prototype.$11=function(){this.$10();if(!this.props.threadID)return;var a=this.$13();b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").START,a,this.props.threadID,this.props.emojiData.emojiCodes)};a.prototype.$15=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP_EMOJI,this.props.threadID,!0)};a.prototype.$12=function(){this.$14(),this.$2=b("setTimeoutAcrossTransitions")(this.$16,b("MessengerHotLikeUtils").SizeTimes.large)};a.prototype.$14=function(){b("clearTimeout")(this.$2)};a.prototype.$13=function(){__p&&__p();var a=this.props.threadID;if(!a)return null;a=j.constructStickerMessageObject(b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID,b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),a);j.normalizeNewMessage(a);a.is_like_preview=!0;a.like_preview_since=this.$3;a.customLike=this.props.emojiData;a.body="";return new(b("ImmutableObject"))(a)};a.propTypes={emojiData:c.object.isRequired,enableHotEmoji:c.bool,onClick:c.func.isRequired,onLongPress:c.func.isRequired,threadID:c.string};e.exports=a}),null);
__d("ChatEmojiPicker.react",["cx","Bootloader","ChatEmojiPickerButton.react","ChatEmojiSkinToneSelector.react","EmojiActions","EmojiFormat.bs","EmojiLikeConstants","Grid.react","MessengerEmojiTransitionMapping.bs","MessengerHotLikePreviewEvents","MessengerSupportedEmojiUtils","React","SkinToneEmoji.bs","SubscriptionsHandler","gkx","joinClasses","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("Grid.react").GridItem;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=!1,this.$2=null,this.state={clickedEmoji:null,selectedEmoji:[],toneSelectorShown:!1,toneSelectorContext:null},this.scrollToTop=function(a){this.refs.scrollable&&(this.refs.scrollable.scrollTo?this.refs.scrollable.scrollTo({top:0,behavior:a?"smooth":void 0}):this.refs.scrollable.scrollTop=0)}.bind(this),this.$8=function(a){if(this.props.shouldSaveEmojiColorChoice){var c=b("SkinToneEmoji.bs").getTone(a);b("EmojiActions").changeEmojiColor(c)}this.$9();this.props.onSelect&&this.props.onSelect(a)}.bind(this),this.$4=function(a,c){this.props.shouldSaveEmojiColorChoice&&this.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?(this.$10(a,c),this.$1=!1):this.$1?this.$1=!1:this.$8(a)}.bind(this),this.$5=function(a,c){this.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?this.$10(a,c):this.setState({clickedEmoji:a}),this.$1=!0}.bind(this),this.$7=function(){this.$1||this.$3()}.bind(this),this.$6=function(){this.$3();var a=this.refs.scrollable;typeof this.props.onScroll==="function"&&a&&(a.scrollTop+a.clientHeight+100>=a.scrollHeight-20&&(this.props.onScroll&&this.props.onScroll()))}.bind(this),c}a.prototype.componentDidMount=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").START,function(a,c,d){d&&this.props.useSkinToneSelector&&!b("SkinToneEmoji.bs").hasVariations(d)&&this.state.toneSelectorShown&&this.$3()}.bind(this)),b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").FINISH_EMOJI_ANIMATION,function(a,c,d){a===this.props.threadID&&(d&&this.state.clickedEmoji&&this.props.sendCustomEmoji&&(this.props.sendCustomEmoji({emoji:b("EmojiFormat.bs").codeArrayToUnicode(this.state.clickedEmoji)},d,b("EmojiLikeConstants").source.PICKER),this.setState({clickedEmoji:null})))}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$2&&this.$2.release()};a.prototype.render=function(){__p&&__p();var a=!b("gkx")("705411")||this.props.useMessengerSupportedEmoji,c=this.props.emojiChoices.map(function(c){var d=String.fromCodePoint.apply(String,c),e=this.props.enableHotEmoji||!b("SkinToneEmoji.bs").hasVariations(c),f=c;if(a&&!b("MessengerSupportedEmojiUtils").isMessengerSupportedEmojiKey(b("EmojiFormat.bs").codeArrayToCodeString(f)))return null;b("MessengerEmojiTransitionMapping.bs").hasGender(f)&&(f=b("MessengerEmojiTransitionMapping.bs").makeFemale(f));if(b("MessengerEmojiTransitionMapping.bs").isBlacklisted(f))return null;var g=b("MessengerSupportedEmojiUtils").getUrl(b("EmojiFormat.bs").codeArrayToCodeString(f),this.props.emojiSize?this.props.emojiSize:b("EmojiLikeConstants").size.SMALL);return g?b("React").createElement(i,{key:c.join("_"),className:"_3-sy _3dyd"+(d===this.props.currentEmoji?" _4w0j":"")},b("React").createElement("div",{className:(d===this.props.currentEmoji?"_4rlt":"")+" _4rlu"},b("React").createElement(b("ChatEmojiPickerButton.react"),{emojiData:{emojiCodes:f,uri:g},enableHotEmoji:e,onClick:this.$4,onLongPress:this.$5,threadID:this.props.threadID}))):null}.bind(this)).filter(function(a){return!!a});return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_6f3k"),onScroll:this.$6,ref:"scrollable"},b("React").createElement(b("Grid.react"),{cols:this.props.columns,alignh:this.props.alignh,className:"_3-s_ _3ecb"},c),this.props.useSkinToneSelector?b("React").createElement(b("ChatEmojiSkinToneSelector.react"),{context:this.state.toneSelectorContext,emojiCodes:this.state.selectedEmoji,onBlur:this.$7,onSelect:this.$8,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,shown:this.state.toneSelectorShown,threadID:this.props.threadID}):null)};a.prototype.$9=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"select_emoji","",0,a),b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"ChatEmojiPicker.react")};a.prototype.$10=function(a,b){this.setState({toneSelectorShown:!0,selectedEmoji:a,toneSelectorContext:b})};a.prototype.$3=function(){this.setState({toneSelectorShown:!1})};a.propTypes={className:c.string,columns:c.number,currentEmoji:c.string,emojiChoices:c.arrayOf(c.arrayOf(c.number)).isRequired,enableHotEmoji:c.bool,onSelect:c.func,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,threadID:c.string,useSkinToneSelector:c.bool,useMessengerSupportedEmoji:c.bool};a.defaultProps={columns:7,useSkinToneSelector:!1};e.exports=a}),null);
__d("ChatEmojiSkinToneFlyout.react",["cx","fbt","ChatEmojiPicker.react","MessengerEmojiConfig","React","SkinToneEmoji.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){var a=[];if(this.props.emojiCodes.length>0){var c=b("SkinToneEmoji.bs").removeTone(this.props.emojiCodes);a=b("MessengerEmojiConfig").emoji_colors.map(function(a){return b("SkinToneEmoji.bs").applyTone(c,a)})}var d=null;this.props.shouldSaveEmojiColorChoice&&(d=b("React").createElement("div",{className:"_4gww"},h._("Pick one. You can change it anytime in Settings.")));return b("React").createElement("div",null,d,b("React").createElement(b("ChatEmojiPicker.react"),{className:this.props.className,columns:6,emojiChoices:a,enableHotEmoji:!0,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,threadID:this.props.threadID}))};function a(){i.apply(this,arguments)}a.propTypes={className:c.string,emojiCodes:c.arrayOf(c.number).isRequired,onSelect:c.func.isRequired,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,threadID:c.string};e.exports=a}),null);
__d("ChatEmojiSkinToneSelector.react",["cx","fbt","ChatEmojiSkinToneFlyout.react","ContextualLayerAutoFlip","React","XUIContextualDialog.react","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=276;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{behaviors:{ContextualLayerAutoFlip:b("ContextualLayerAutoFlip")},context:this.props.context,contextRef:b("emptyFunction"),label:h._("Skintone Selector"),onBlur:this.props.onBlur,onToggle:this.$1,shown:this.props.shown,width:j},b("React").createElement(b("ChatEmojiSkinToneFlyout.react"),{className:"_2ejf",emojiCodes:this.props.emojiCodes,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,threadID:this.props.threadID}))};function a(){i.apply(this,arguments)}a.propTypes={context:c.instanceOf(HTMLElement),emojiCodes:c.arrayOf(c.number).isRequired,onBlur:c.func.isRequired,onSelect:c.func.isRequired,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,shown:c.bool,threadID:c.string};e.exports=a}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(event){var a=b("ReactDOM").findDOMNode(this),c=b("Vector").getEventPosition(event.nativeEvent),d=b("Vector").getElementPosition(a);a=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(a).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(c)?clearTimeout(this.timer):this._onMouseEnter());c=c.x-d.x;d=c/a;b("Locale").isRTL()?c=d>1-this.PAGE_TO_PREV_PERCENTAGE:c=d<this.PAGE_TO_PREV_PERCENTAGE;c?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(event){var a=this.state.currentActiveSection==this.sections.FORWARD,c=event.target;b("Parent").bySelector(c,"._51an")||this.props.onClick&&this.props.onClick(a,event)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({isAvatarStickersSelected:!1,recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_AVATAR_STICKERS:return a.set("isAvatarStickersSelected",!0);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0).set("isAvatarStickersSelected",!1);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("InstantGameContextType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK"})}),null);
__d("MessagingThreadCustomizationSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMIN_MSG_CHANGE_LINK:"admin_msg",THREAD_INLINE:"thread_inline",JOURNEY_PROMPT:"journey_prompt",JOURNEY_PROMPT_WRITE_IN:"journey_prompt_write_in",PROMO_LINK:"promo_link",SETTINGS:"thread_settings",USER_INFO_ACTION_SHEET:"user_info_action_sheet",ROOM_CREATION:"room_creation",DELETE_ALL_SETTING:"delete_all_setting",RELATIONSHIP_STATUS_UPDATE:"relationship_status_update",TESTBOT:"testbot",SET_FROM_MESSAGE:"set_from_message",GROUP_NULL_STATE:"group_null_state"})}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALOHA_GAMEHOST:"aloha_gamehost",EMBEDDED_PLAYER:"embedded_player",FB_AD:"fb_ad",FB_CANVAS:"fb_canvas",FB_CANVAS_MIGRATION:"fb_canvas_migration",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_GROUP_CHALLENGE_EDGE_STORY:"fb_feed_group_challenge_edge_story",FB_FEED_PLAY_FROM_POST_EDGE_STORY:"fb_feed_play_from_post_edge_story",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_FEED_POST_GAMEPLAY:"fb_feed_post_gameplay",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_GAMES_TAB:"fb_games_tab",FB_GAMES_TAB_NOTIFICATION:"fb_games_tab_notification",FB_GROUP_AYMT:"fb_group_aymt",FB_GROUP_CHALLENGE:"fb_group_challenge",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_GROUP_TOURNAMENT_FEED_UNIT:"fb_group_tournament_feed_unit",FB_INVITE_DECLINED_NOTIF:"fb_invite_declined_notif",FB_MESSENGER_AD:"fb_messenger_ad",FB_NON_MESSENGER_WAP_INVITE_NOTIF:"fb_non_messenger_wap_invite_notif",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",FB_PLAYED_FROM_POST_NOTIF:"fb_played_from_post_notif",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_STORY_ATTRIBUTION_LINK:"fb_story_attribution_link",FB_TOURNAMENT_FINISHED_NOTIF:"fb_tournament_finished_notif",FB_TURN_REMINDER_NOTIF:"fb_turn_reminder_notif",GAME_SEARCH:"game_search",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",GAME_SWITCH:"game_switch",BIG_BLUE_IG_SEARCH:"big_blue_ig_search",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",STREAMER_DASHBOARD:"streamer_dashboard",CUSTOM_SHARE:"in_game_custom_share",M_ME_LINK:"m_me_link",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BBALL_EMOJI:"bball_emoji",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_COMPOSER:"composer",MESSENGER_COMPOSER_SMS:"composer_sms",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_BOT_NULL_STATE:"game_bot_null_state_cta",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_PUSH_NOTIFICATION:"game_push_notification",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_M_SUGGESTION:"game_m_suggestion",MESSENGER_MORE_DRAWER_CHAT_EXTENSION:"more_drawer_chat_extension",MESSENGER_NEW_FRIEND_BUMP:"new_friend_bump",MESSENGER_ONE_LINE_COMPOSER:"one_line_composer",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MESSENGER_SOCCER_EMOJI:"soccer_emoji",MESSENGER_STALE_THREAD_QUICK_REPLY:"stale_thread_quick_reply",MESSENGER_STICKER:"sticker",MESSENGER_TOURNAMENT_START:"tournament_start",PRESENCE_ON_MESSENGER:"presence_on_messenger",THREAD_ACTIVITY_BANNER:"thread_activity_banner",MESSENGER_CUSTOM_UPDATE_XMA:"custom_update_xma",MESSENGER_LEADERBOARD_XMA:"leaderboard_xma",MESSENGER_LEADERBOARD_BREADCRUMB:"leaderboard_breadcrumb",MESSENGER_CUSTOM_UPDATE_BREADCRUMB:"custom_update_breadcrumb",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_GAME_CHAINING_PAGE:"mobile_game_chaining_page",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MSITE:"msite",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",SRT_REVIEW:"srt_review",TOURNAMENT_UNIT:"tournament_unit",TOURNAMENT_THREAD_ACTIVITY_BANNER:"tournament_thread_activity_banner",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_HUB_BOOKMARKS:"www_games_hub_bookmarks",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_URL:"www_play_url",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_APP_BOOKMARK:"www_app_bookmark",WWW_PROFILE_HOVERCARD:"www_profile_hovercard",WWW_SPOTLIGHT_BOTTOM_UNIT:"www_spotlight_bottom_unit",WWW_PLAY_GAME_LOGGED_OUT_VIEW:"www_play_game_logged_out_view",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",FB_GG_SEARCH:"fb_gg_search",FB_GG_NOTIFICATION:"fb_gg_notification",FB_GG_URL:"fb_gg_url",FB_GG_STORY:"fb_gg_story",FB_GG_FEED:"fb_gg_feed",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",GAME_CTA:"game_cta",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",THREAD_SETTINGS:"thread_settings",UNKNOWN:"unknown"})}),null);
__d("RTWebLoggingCallType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({P2P:"p2p",MW:"mw",ESCALATED:"escalated"})}),null);
__d("create-react-class",["create-react-class/factory","react"],(function(a,b,c,d,e,f){"use strict";if(typeof b("react")==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new(b("react").Component)().updater;e.exports=b("create-react-class/factory")(b("react").Component,b("react").isValidElement,a)}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);
__d("XGamesDesktopAppDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/desktopapp/download/",{app_id:{type:"Int"},fbsource:{type:"Int"},ref:{type:"String"},canvas_url:{type:"String"}})}),null);
__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},sharing_info:{type:"TypeAssert"},upsell_logging_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);