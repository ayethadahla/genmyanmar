if (self.CavalryLogger) { CavalryLogger.start_js(["p\/SUd"]); }

__d("UFINewCommentsPill.react",["ix","cx","fbt","Arbiter","FluxContainer","Image.react","React","SubscriptionsHandler","UFIThreadedFacecastCommentsStore","UFIUnseenCommentsStore","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;j=babelHelpers.inherits(a,b("React").PureComponent);j&&j.prototype;a.getStores=function(){return[b("UFIThreadedFacecastCommentsStore"),b("UFIUnseenCommentsStore")]};a.calculateState=function(a,c){c=c.instanceID;var d=b("UFIThreadedFacecastCommentsStore").getCommentID(c);d=d!=null?b("UFIUnseenCommentsStore").getUnseenCommentsInThread(c,d):b("UFIUnseenCommentsStore").getUnseenComments(c);return babelHelpers["extends"]({},a,{unseenComments:d})};a.prototype.componentDidMount=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("Arbiter").subscribe("quick-comments-visible-changed",function(a,b){this.setState({quickCommentsVisible:b})}.bind(this)),b("Arbiter").subscribe("quick-comments-expanded-changed",function(a,b){this.setState({quickCommentsExpanded:b})}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$1.release()};a.prototype.render=function(){var a=this.state,c=a.unseenComments,d=a.quickCommentsExpanded;a=a.quickCommentsVisible;if(c<=0||a&&d)return null;d=this.props;var e=d.isLiveVideo;d=d.onClick;e=(e?"_6b7w":"")+(e?"":" _6b7x")+(a?" _6ei8":"");return b("React").createElement("div",{className:e},b("React").createElement("button",{className:"_3-yi",onClick:d},b("React").createElement(b("Image.react"),{src:g("374678"),className:"_3-yj"}),b("React").createElement(b("XUIText.react"),{size:"body3",color:"highlight"},c===1?i._("New Comment"):i._({"*":"New Comments ({comment count})"},[i._param("comment count",c,[0])]))))};function a(){j.apply(this,arguments)}e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("TabBar",["ArbiterMixin","ReactDOM","mixin"],(function(a,b,c,d,e,f){var g;a=babelHelpers.inherits(h,b("mixin")(b("ArbiterMixin")));g=a&&a.prototype;function h(a,c,d){"use strict";g.constructor.call(this),c.props=babelHelpers["extends"]({},c.props,{onTabClick:function(a){return this.inform(h.TAB_CLICK,a)}.bind(this)}),b("ReactDOM").render(a(c),d)}h.TAB_CLICK="onTabClick";e.exports=h}),null);
__d("VideoTipJarTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:VideoTipJarLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoTipJarLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoTipJarLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setGamesOrderID=function(a){this.$1.games_order_id=a;return this};a.prototype.setMatchingQuantity=function(a){this.$1.matching_quantity=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setPaymentID=function(a){this.$1.payment_id=a;return this};a.prototype.setProductID=function(a){this.$1.product_id=a;return this};a.prototype.setSparkQuantity=function(a){this.$1.spark_quantity=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTipJarEvent=function(a){this.$1.tip_jar_event=a;return this};a.prototype.setTipPaymentID=function(a){this.$1.tip_payment_id=a;return this};a.prototype.setUsdAmount=function(a){this.$1.usd_amount=a;return this};a.prototype.setUserAmount=function(a){this.$1.user_amount=a;return this};a.prototype.setUserCurrency=function(a){this.$1.user_currency=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoID=function(a){this.$1.video_id=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={games_order_id:!0,matching_quantity:!0,name:!0,payment_id:!0,product_id:!0,spark_quantity:!0,time:!0,tip_jar_event:!0,tip_payment_id:!0,usd_amount:!0,user_amount:!0,user_currency:!0,vc:!0,video_id:!0,weight:!0};e.exports=a}),null);
__d("XPageRecommendationFeedAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/social_rex/page_feed/",{page_id:{type:"Int",required:!0},sort_order:{type:"Enum",required:!0,enumType:1},feed_container_id:{type:"String",required:!0}})}),null);
__d("PageRecommendationFeedController",["AsyncRequest","Run","SubscriptionsHandler","TabBar","XPageRecommendationFeedAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={initializeTab:function(a,c){var d=new(b("SubscriptionsHandler"))();d.addSubscriptions(a.subscribe(b("TabBar").TAB_CLICK,function(a,d){this.toggleLoadingSpinner_(!0);this.updateFeedContainer_();a=b("XPageRecommendationFeedAsyncController").getURIBuilder().setInt("page_id",c).setEnum("sort_order",d).setString("feed_container_id",this.feedContainer_.id).getURI();new(b("AsyncRequest"))().setURI(a).setFinallyHandler(function(a){this.toggleLoadingSpinner_(!1)}.bind(this)).send()}.bind(this)));b("Run").onLeave(function(){return d.release()})},setLoadingSpinner:function(a){this.loadingSpinner_=a},setFeedContainer:function(a){window.feedContainer=a,this.version_=0,this.feedContainer_=a},updateFeedContainer_:function(){this.feedContainer_.id="feed_container"+this.version_++;while(this.feedContainer_.firstChild)this.feedContainer_.removeChild(this.feedContainer_.firstChild)},toggleLoadingSpinner_:function(a){this.loadingSpinner_.style.display=a?"block":"none"}}}),null);
__d("TabBarShim",["DOMContainer.react","React","isNode"],(function(a,b,c,d,e,f){__p&&__p();a=function a(c){__p&&__p();var d;c.children&&(d=c.children.map(function(c,d){if(typeof c==="object"&&typeof c.ctor==="function")return a(c);else if(b("isNode")(c)){d=b("React").createElement(b("DOMContainer.react"),{key:"TabBarShim-"+d},c);return d}else return c}),d.length===1&&(d=d[0]));var e=c.ctor;return b("React").createElement(e,c.props,d)};e.exports=a}),null);
__d("LiveVideoIndicatorContainerServerCallable.react",["DateConsts","FBJSON","LiveVideoIndicatorContainer.react","React","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=3*b("DateConsts").MS_PER_SEC;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={showElapsedTime:!1,viewerCount:this.props.viewerCount},b}a.prototype.componentDidMount=function(){this.subscriptions=new(b("SubscriptionsHandler"))(),this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("VideoWithLiveBroadcast/viewCountChange",function(a){a=a.getAttribute("data-store");a=a?b("FBJSON").parse(a).viewerCount:null;this.setState({viewerCount:a})}.bind(this))),this.props.showTimePop&&this.props.broadcastCreationTime&&this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("beginPlayback",function(){this.setState({showElapsedTime:!0});var a=setInterval(function(){this.setState({showElapsedTime:!1}),clearInterval(a)}.bind(this),h)}.bind(this)))};a.prototype.componentWillUnmount=function(){this.subscriptions.release()};a.prototype.render=function(){return b("React").createElement(b("LiveVideoIndicatorContainer.react"),{compact:this.props.compact,inline:this.props.inline,inBeeper:this.props.inBeeper,isAudio:this.props.isAudio,isBreakingNews:this.props.isBreakingNews,isLive:this.props.isLive,isPremiere:this.props.isPremiere,isPreview:this.props.isPreview,pageCount:this.props.pageCount,playerID:this.props.videoPlayerController.getVideoPlayerID(),showElapsedTime:this.state.showElapsedTime,startTime:this.props.broadcastCreationTime,textOverride:this.props.textOverride,viewerCount:this.state.viewerCount})};e.exports=a}),null);
__d("TahoeActions",["TahoeActionTypes","TahoeDispatcher"],(function(a,b,c,d,e,f){"use strict";a={setMediaController:function(a){b("TahoeDispatcher").dispatch({type:b("TahoeActionTypes").SET_MC,mediaController:a})},setUFIInstanceID:function(a){b("TahoeDispatcher").dispatch({type:b("TahoeActionTypes").SET_UFI_INSTANCE_ID,ufiInstanceID:a})},exit:function(){b("TahoeDispatcher").dispatch({type:b("TahoeActionTypes").EXIT})}};e.exports=a}),null);
__d("ResizeListener",["EventListener","SubscriptionList","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";var g,h=!1,i=new(b("SubscriptionList"))(function(){g=b("EventListener").listen(window,"resize",j)},function(){g.remove()});function j(){h||(h=!0,b("requestAnimationFrame")(function(){i.fireCallbacks(),h=!1}))}e.exports=i}),null);