if (self.CavalryLogger) { CavalryLogger.start_js(["gl0Zm"]); }

__d("AdsLWIPromotionTabNuxStoreCreateSuccessActionHandler",["AdsBoostedComponentCommonV2CreateSuccessWithBoostIdDataActionFlux","AdsDataAtom","AdsSelectorUtils","BoostedComponentExistingAdInfoStoreV2","BoostedComponentStoreState","adsLWIBoostedComponentObjectiveSelector","adsLWIInstanceDataSelector","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BoostedComponentStoreState").getKey;a={type:b("AdsBoostedComponentCommonV2CreateSuccessWithBoostIdDataActionFlux").actionType,genExtraData:function(a,c){b("AdsDataAtom").waitFor(b("AdsSelectorUtils").getStoreDispatchTokens([b("adsLWIBoostedComponentObjectiveSelector"),b("adsLWIInstanceDataSelector")]));c=a.boostID;a=a.instanceID;a=b("nullthrows")(b("adsLWIInstanceDataSelector")(a));var d=a.product;a=g(a.appID,a.targetID,c);c=b("BoostedComponentExistingAdInfoStoreV2").getDataByKey(a);a=c.objective;return{objective:a,product:d}},mutate:function(a,b,c){a=b.product;return a!==null?b:b.withMutations(function(a){a.set("objective",c.objective).set("product",c.product)})}};e.exports=a}),null);
__d("AdsLWIPromotionTabNuxStoreEditCloseActionHandler",["BoostedComponentDialogUIActionTypesV2"],(function(a,b,c,d,e,f){"use strict";a={type:b("BoostedComponentDialogUIActionTypesV2").EDIT_DIALOG_CLOSE,mutate:function(a,b,c){a=b.product;return a===null?b:b.set("showNux",!0)}};e.exports=a}),null);
__d("AdsLWIPromotionTabNuxStoreActionHandlers",["AdsLWIPromotionTabNuxStoreCreateSuccessActionHandler","AdsLWIPromotionTabNuxStoreEditCloseActionHandler"],(function(a,b,c,d,e,f){"use strict";e.exports=[b("AdsLWIPromotionTabNuxStoreCreateSuccessActionHandler"),b("AdsLWIPromotionTabNuxStoreEditCloseActionHandler")]}),null);
__d("AdsLWIPromotionsTabNux.react",["cx","React","SimpleNUXMessage","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={nuxShown:!0},this.$1=function(){b("SimpleNUXMessage").markMessageSeenByUser(this.props.nuxType),this.setState({nuxShown:!1})}.bind(this),c}a.prototype.render=function(){var a=this.state.nuxShown,c=b("SimpleNUXMessage").hasUserSeenMessage(this.props.nuxType);if(!a||c)return null;c=this.props;var d=c.nuxBody,e=c.nuxTitle;c=c.promotionTab;return b("React").createElement(b("XUIAmbientNUX.react"),{context:c,customwidth:320,position:"below",shown:a,width:"custom",onCloseButtonClick:this.$1},b("React").createElement("div",{className:"_1bnq"},e),b("React").createElement("div",{className:"_1bnr"},d))};e.exports=a}),null);
__d("AdsLWIPromotionTabNuxRecord",["AdproObjectiveType","immutable"],(function(a,b,c,d,e,f){"use strict";var g;c=b("immutable").Record({objective:b("AdproObjectiveType").NONE,product:null,showNux:!1});g=babelHelpers.inherits(a,c);g&&g.prototype;function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("AdsLWIPromotionTabNuxStore",["AdsDataAtom","AdsLWIPromotionTabNuxRecord","FluxReduceStore","createObjectBy","AdsLWIPromotionTabNuxStoreActionHandlers"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("createObjectBy")(b("AdsLWIPromotionTabNuxStoreActionHandlers"),function(a){return a.type});g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return new(b("AdsLWIPromotionTabNuxRecord"))()};a.prototype.reduce=function(a,b){b=b.action;var c=h[b.type];if(c){var d=c.genExtraData&&c.genExtraData(b,a);return c.mutate(b,a,d)}return a};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("adsLWIPromotionTabNuxStoreDataSelector",["AdsLWIPromotionTabNuxStore","AdsStoreUtils"],(function(a,b,c,d,e,f){"use strict";a=b("AdsStoreUtils").toSelector(b("AdsLWIPromotionTabNuxStore"));e.exports=a}),null);
__d("AdsLWIPromotionsTabNuxContainer.react",["fbt","AdproObjectiveType","AdsLWIPromotionsTabNux.react","AdsSelectorUtils","BoostedComponentProduct","FluxContainer","React","SimpleNUXMessageTypes","adsLWIPromotionTabNuxStoreDataSelector","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function i(a,c){if(c===b("AdproObjectiveType").WEBSITE_CONVERSIONS)return g._("View Your Sales and Results");if(a===b("BoostedComponentProduct").BOOSTED_POST)return g._("Manage Your Boosted Posts");else return g._("Manage Your Promotions")}function j(a){if(a===b("BoostedComponentProduct").BOOSTED_POST)return g._("When people start responding to your boosted posts, you can view the results here.");else return g._("When people start responding to your promotions, you can view the results here.")}h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.getStores=function(){return b("AdsSelectorUtils").getStores([b("adsLWIPromotionTabNuxStoreDataSelector")])};a.calculateState=function(a,c){a=b("nullthrows")(b("adsLWIPromotionTabNuxStoreDataSelector")());c=a.objective;var d=a.product;a=a.showNux;return{objective:c,product:d,showNux:a}};a.prototype.render=function(){var a=this.state,c=a.objective,d=a.product;a=a.showNux;if(!a||!d)return null;a=this.props.tabElement;var e=j(d);d=i(d,c);return b("React").createElement(b("AdsLWIPromotionsTabNux.react"),{nuxBody:e,nuxTitle:d,nuxType:b("SimpleNUXMessageTypes").ADS_LWI_PROMOTION_HUB_POST_CREATION_NUX_NEW,promotionTab:a})};function a(){h.apply(this,arguments)}e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("HiddenPromoteButton.react",["AdsLWIDialogUtils","AdsLWIInstanceType","AdsLWIProductUtils","BoostedComponentRef","FBLogger","PageTransitions","React","URI","adsLWICurrentDialogStateSelector","createCancelableFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("AdsLWIDialogUtils").openLWIDialog;c=b("AdsLWIInstanceType").createRandomInstanceID;var i=b("AdsLWIProductUtils").isAdsLWIProduct;function j(){__p&&__p();var a=new(b("URI"))(window.location.href).getQueryData(),c=a.boosted_auto_open;if(c==null)return null;if(!i(String(c))){b("FBLogger")("boosted_component").mustfix("URI had invalid product specified: %s",String(c));return null}var d=a.notif_t||a.ref||b("BoostedComponentRef").AUTO_OPEN_UNKNOWN_SOURCE,e=a.boost_id?String(a.boost_id):"";a=a.target_id?String(a.target_id):null;return{product:c,boostID:e,placement:d,targetID:a}}var k=c();d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.maybeAutoOpenDialog=b("createCancelableFunction")(function(){var a=j();a&&!b("adsLWICurrentDialogStateSelector")().dialogState.instanceID&&h(k,this.props.pageID,a.placement,a.product,a.boostID,a.targetID);b("PageTransitions").registerCompletionCallback(this.maybeAutoOpenDialog)}.bind(this)),c}a.prototype.componentDidMount=function(){b("PageTransitions").registerCompletionCallback(this.maybeAutoOpenDialog)};a.prototype.componentWillUnmount=function(){this.maybeAutoOpenDialog.cancel()};a.prototype.render=function(){return null};e.exports=a}),null);
__d("XPagesPresenceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/presence/",{})}),null);
__d("PagePresencePoller",["ActorURI","AsyncRequest","UserActivity","XPagesPresenceController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=9e4,h=0,i=function(a){h=Date.now();var c=b("XPagesPresenceController").getURIBuilder().getURI();c=b("ActorURI").create(c,a);new(b("AsyncRequest"))().setURI(c).send()};a={init:function(a){b("UserActivity").subscribe(function(){Date.now()-h>g&&i(a)}),setInterval(function(){b("UserActivity").isActive()&&i(a)},g)}};e.exports=a}),null);