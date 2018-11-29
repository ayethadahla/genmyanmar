if (self.CavalryLogger) { CavalryLogger.start_js(["n7I7a"]); }

__d("RTISubscriptionData",["ChannelConstants","areEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ChannelConstants").SUBSCRIPTION_STATE;function a(a,b,c,d,e,f,h){this.$1=a,this.$2=b,this.$7=!0,this.$8=!1,this.$9=g.SUBSCRIBE,this.$10=null,this.$11=Date.now(),this.$3=d,this.$4=e?e:null,this.$5=f?f:null,this.$6=h?h:null,this.$12=c}a.prototype.matchesContext=function(a){return b("areEqual")(this.$3,a)};a.prototype.getCreatedTime=function(){return this.$11};a.prototype.getTopic=function(){return this.$1};a.prototype.getViewId=function(){return this.$12};a.prototype.getSubscribeCallback=function(){return this.$4};a.prototype.setSubscribeCallback=function(a){this.$4=a};a.prototype.getUnsubscribeCallback=function(){return this.$6};a.prototype.setUnsubscribeCallback=function(a){this.$6=a};a.prototype.getUnsubscribeHook=function(){return this.$5};a.prototype.setUnsubscribeHook=function(a){this.$5=a};a.prototype.getMessageListener=function(){return this.$2};a.prototype.setMessageListener=function(a){this.$2=a};a.prototype.getArbiterToken=function(){return this.$10};a.prototype.setArbiterToken=function(a){this.$10=a};a.prototype.isAlive=function(){return this.$9!=g.UNSUBSCRIBE};a.prototype.isMutatingContext=function(){return this.$9==g.MUTATE_CONTEXT};a.prototype.isDirty=function(){return this.$7};a.prototype.setDirty=function(a){this.$7=a};a.prototype.getState=function(){return this.$9};a.prototype.setState=function(a){this.$9=a};a.prototype.getContext=function(){return this.$3};a.prototype.isSent=function(){return this.$8};a.prototype.setSent=function(a){this.$8=a};a.prototype.prepareMutateContext=function(a){this.setState(g.MUTATE_CONTEXT),this.setDirty(!0),this.setSent(!1),this.$3=a};a.prototype.prepareUnsubscribe=function(){this.setState(g.UNSUBSCRIBE),this.setDirty(!0),this.setSent(!1),this.$2=null};e.exports=a}),null);
__d("RTISubscriptionStore",["Arbiter","BanzaiODS","ChannelConstants","ErrorUtils","RTISubscriptionData","SkywalkerUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ChannelConstants").SUBSCRIPTION_STATE;function a(){this.$1={},this.$2=1}a.prototype.subscribe=function(a,c,d,e,f,h){__p&&__p();d=b("SkywalkerUtils").patchContext(d||{});var i=this.$3(a,d);if(i){var j=i.getState()==g.UNSUBSCRIBE&&i.isDirty()&&!i.isSent();i.isAlive()?b("BanzaiODS").bumpEntityKey("RTISubscriptionStore","duplicate_subscription_alive"):j?b("BanzaiODS").bumpEntityKey("RTISubscriptionStore","duplicate_subscription_unflushed_unsubscribe"):b("BanzaiODS").bumpEntityKey("RTISubscriptionStore","duplicate_subscription_unknown");if(i.isAlive()||j){i.setMessageListener(c);i.setSubscribeCallback(e);i.setUnsubscribeHook(f);i.setUnsubscribeCallback(h);if(j){i.setDirty(!1);i.setSent(!0);i.setState(g.SUBSCRIBE);j=b("ChannelConstants").getRTISkywalkerArbiterType(i.getTopic(),i.getViewId());i.setArbiterToken(this.$4(j,i.getTopic(),i))}return i}}j=this.$2;this.$2+=1;i=new(b("RTISubscriptionData"))(a,c,j,d,e,f,h);c=b("ChannelConstants").getRTISkywalkerArbiterType(a,j);i.setArbiterToken(this.$4(c,a,i));a in this.$1||(this.$1[a]=new Set());this.$1[a].add(i);return i};a.prototype.unsubscribe=function(a){if(!this.isSubscribed(a))return;a.prepareUnsubscribe();var c=a.getArbiterToken();c&&(b("Arbiter").unsubscribe(c),a.setArbiterToken(null))};a.prototype.mutateContext=function(a,b){if(!this.isSubscribed(a))return;a.prepareMutateContext(b)};a.prototype.isSubscribed=function(a){return a.getTopic()in this.$1&&this.$1[a.getTopic()].has(a)&&a.isAlive()};a.prototype.clearSubscriptions=function(){this.$1={}};a.prototype.deleteSubscriptions=function(a){var b=[];this.forEachSubscription(function(c){a.call(this,c)&&b.push(c)}.bind(this));b.forEach(function(a){if(a.getTopic()in this.$1){var b=this.$1[a.getTopic()];b["delete"](a)}}.bind(this))};a.prototype.forEachSubscription=function(a){__p&&__p();for(var b in this.$1){var c=this.$1[b];for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;if(a.call(this,f))return}}};a.prototype.$3=function(a,b){__p&&__p();a=this.$1[a];if(!a)return null;for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;if(e.matchesContext(b))return e}return null};a.prototype.$4=function(a,c,d){return b("Arbiter").subscribe(a,function(a,event){b("BanzaiODS").bumpEntityKey("RTISubscriptionStore","skywalker_subscription_delivery"),event.obj.forEach(function(a){a={topic:c,payload:a};var e=d.getMessageListener();e&&b("ErrorUtils").applyWithGuard(e,this,[a])}.bind(this))}.bind(this))};e.exports=a}),null);
__d("StreamStateMachine",["StreamStateMachineConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("StreamStateMachineConstants").events,h=b("StreamStateMachineConstants").states,i=babelHelpers["extends"]({},g,{GQLS_STATE_TRANSIT_ON_REFRESH:"onRefresh"});function a(a,b){a===void 0&&(a=!1),b===void 0&&(b=1e4),this.$1=b,this.$2=null,this.$3=null,this.$5=a,this.$4=null}a.prototype.start=function(){this.$6(i.GQLS_STATE_TRANSIT_ON_CREATE),this.$5||this.$6(i.GQLS_STATE_TRANSIT_ON_ACTIVE)};a.prototype.ping=function(){switch(this.$4){case h.GQLS_STATE_ACTIVE:this.$6(i.GQLS_STATE_TRANSIT_ON_REFRESH);break;case h.GQLS_STATE_PAUSED:this.$6(i.GQLS_STATE_TRANSIT_ON_RESUME);break;case h.GQLS_STATE_CREATED:this.$6(i.GQLS_STATE_TRANSIT_ON_ACTIVE);break;case h.GQLS_STATE_TERMINATED:break}};a.prototype.kill=function(){this.$6(i.GQLS_STATE_TRANSIT_ON_TERMINATE)};a.prototype.setLifecycleHandler=function(a){this.$3=a};a.prototype.getState=function(){return this.$4};a.prototype.$6=function(event){__p&&__p();switch(event){case i.GQLS_STATE_TRANSIT_ON_CREATE:this.$7();break;case i.GQLS_STATE_TRANSIT_ON_ACTIVE:this.$8();break;case i.GQLS_STATE_TRANSIT_ON_REFRESH:this.$9();break;case i.GQLS_STATE_TRANSIT_ON_PAUSE:this.$10();break;case i.GQLS_STATE_TRANSIT_ON_RESUME:this.$11();break;case i.GQLS_STATE_TRANSIT_ON_TERMINATE:this.$12();break}};a.prototype.$7=function(){this.$4=h.GQLS_STATE_CREATED,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_CREATE)};a.prototype.$8=function(){this.$4=h.GQLS_STATE_ACTIVE,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_ACTIVE),this.$13()};a.prototype.$9=function(){clearTimeout(this.$2),this.$13()};a.prototype.$10=function(){this.$4=h.GQLS_STATE_PAUSED,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_PAUSE)};a.prototype.$11=function(){this.$4=h.GQLS_STATE_ACTIVE,this.$3&&this.$3(g.GQLS_STATE_TRANSIT_ON_RESUME),this.$13()};a.prototype.$12=function(){clearTimeout(this.$2),this.$4=h.GQLS_STATE_TERMINATED};a.prototype.$13=function(){this.$5&&(this.$2=setTimeout(function(){this.$6(g.GQLS_STATE_TRANSIT_ON_PAUSE)}.bind(this),this.$1))};e.exports=a}),null);
__d("RTISubscriptionToken",["StreamStateMachine","gkx"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=a;this.$2=c;this.$4=d;this.$5=e;this.$3=f;this.$6=null;if(b("gkx")("676931")){a=this.getContext();c=this.hasHeartbeatOption(a);this.$7=new(b("StreamStateMachine"))(c);this.$7.start()}}a.prototype.setFriendFanoutToken=function(a){"use strict";this.$6=a};a.prototype.getFriendFanoutToken=function(){"use strict";return this.$6};a.prototype.getSubscriptionData=function(){"use strict";return this.$1};a.prototype.isSubscribed=function(){"use strict";return this.$3(this.$1)};a.prototype.getContext=function(){"use strict";return this.$1.getContext()};a.prototype.mutateContext=function(a){"use strict";this.$4(this.$1,a)};a.prototype.unsubscribe=function(){"use strict";var a=this.$1.getUnsubscribeHook();a&&a();this.$2(this.$1);this.$6&&this.$6.unsubscribe();b("gkx")("676931")&&(this.$7&&this.$7.kill())};a.prototype.fastUnsubscribe=function(){"use strict";this.unsubscribe(),this.$5()};a.prototype.hasHeartbeatOption=function(a){"use strict";__p&&__p();if(a&&a.transformContext){a=JSON.parse(a.transformContext);if(a.serializedQueryParameters){a=JSON.parse(a.serializedQueryParameters);if(a&&a["%options"]&&a["%options"].heartbeat)return!0}}return!1};a.prototype.ping=function(){"use strict";b("gkx")("676931")&&(this.$7&&this.$7.ping())};a.prototype.handleLifecycles=function(a){"use strict";b("gkx")("676931")&&(this.$7&&this.$7.setLifecycleHandler(a))};e.exports=a}),null);
__d("SkywalkerWebClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:SkywalkerWebClientLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:SkywalkerWebClientLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SkywalkerWebClientLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setClientSessionUuid=function(a){this.$1.client_session_uuid=a;return this};a.prototype.setClientTime=function(a){this.$1.client_time=a;return this};a.prototype.setEventName=function(a){this.$1.event_name=a;return this};a.prototype.setGateway=function(a){this.$1.gateway=a;return this};a.prototype.setMessage=function(a){this.$1.message=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTopic=function(a){this.$1.topic=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={client_session_uuid:!0,client_time:!0,event_name:!0,gateway:!0,message:!0,time:!0,topic:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("SkywalkerLogger",["BanzaiODS","FBLogger","LogHistory","SkywalkerWebClientTypedLogger","nullthrows","uuid"],(function(a,b,c,d,e,f){__p&&__p();var g="skywalker_web_client",h=b("LogHistory").getInstance(g);function a(a){a===void 0&&(a={}),this.$1=a,this.$1.client_session_uuid==null&&(this.$1.client_session_uuid=b("uuid")())}a.prototype.log=function(a){"use strict";a=this.$2(a);var event=b("nullthrows")(a.event_name);h.log(event,a);this.$3(a)};a.prototype.warn=function(a){"use strict";a=this.$2(a);var event=b("nullthrows")(a.event_name);h.warn(event,a);b("FBLogger")(g).warn(event);this.$3(a)};a.prototype.error=function(a){"use strict";a=this.$2(a);var event=b("nullthrows")(a.event_name);h.error(event,a);b("FBLogger")(g).mustfix(event);this.$3(a)};a.prototype.bump=function(a){"use strict";b("BanzaiODS").bumpEntityKey(g,a)};a.prototype.$2=function(a){"use strict";a=babelHelpers["extends"]({},this.$1,a);a.client_time==null&&(a.client_time=Date.now());return a};a.prototype.$3=function(a){"use strict";var c=new(b("SkywalkerWebClientTypedLogger"))();c.updateData(a);c.log()};e.exports=a}),null);
__d("SkywalkerOracle",["gkx"],(function(a,b,c,d,e,f){"use strict";f.OracleGK=b("gkx")("678786")}),null);
__d("RTISubscriptionManager",["Arbiter","BanzaiODS","Bootloader","ChannelConstants","CurrentUser","ErrorUtils","RTIFriendFanoutConfig","RTISubscriptionManagerConfig","RTISubscriptionStore","RTISubscriptionToken","Run","SkywalkerLogger","SkywalkerOracle","SystemEvents","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SkywalkerOracle").OracleGK,h=b("ChannelConstants").SUBSCRIPTION_STATE;function a(){__p&&__p();this.PULL_HINT_DELAY_MILLIS=1e4,this.$1=new(b("RTISubscriptionStore"))(),this.$2=new(b("SkywalkerLogger"))({gateway:"chatproxy"}),this.$3=!1,this.$4=!1,this.$5=!1,this.$6=!1,this.$7=!1,this.$8=!0,this.$9=0,this.$10=document.readyState==="complete",b("Run").onAfterLoad(function(){this.$10=!0,this.flush()}.bind(this)),this.$11=null,b("Arbiter").subscribe(b("ChannelConstants").ON_ENTER_STATE,function(a,c){if(!this.$11)return;a=/pull/.test(c.state);!this.$3&&a?(this.$4=!0,this.$5||(this.$5=!0,b("setTimeoutAcrossTransitions")(function(){this.$3=this.$4,this.$5=!1,this.$3&&this.flush()}.bind(this),this.PULL_HINT_DELAY_MILLIS))):!a?(this.$4=!1,this.$3=!1):a&&(this.$3=!0,this.flush())}.bind(this)),b("SystemEvents").subscribe(b("SystemEvents").ONLINE,function(a,b){b||(this.$3=!1,this.$4=!1)}.bind(this)),b("SystemEvents").subscribe(b("SystemEvents").USER,function(a,b){this.$3=!1,this.$4=!1,this.$1.clearSubscriptions()}.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").RTI_SESSION,function(a,b){!this.$11&&b&&this.deleteSubscriptions(function(a){return a.getState()===h.UNSUBSCRIBE}),this.$11=b,this.$11&&(this.$3=!0,this.flush())}.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").ON_INVALID_HISTORY,function(){this.$3=!0,this.forEachSubscription(function(a){return a.setDirty(!0)}),this.getCurrentSession()}.bind(this)),this.getCurrentSession(),b("Arbiter").subscribe(b("ChannelConstants").SKYWALKER,function(a,c){a=c.obj.topic;var d=c.obj.view_id,e={};a!=null?this.$2.log({event_name:"payload_received",topic:a}):this.$2.error({event_name:"payload_parse_error",message:"Missing Skywalker topic field in payload"});c.obj.payloads===void 0?e.obj=[c.obj.payload]:e.obj=c.obj.payloads;c=b("ChannelConstants").getRTISkywalkerArbiterType(a,d);b("Arbiter").inform(c,e)}.bind(this)),this.$12()}a.prototype.subscribe=function(a,c,d,e,f,g){__p&&__p();e=this.$1.subscribe(a,function(d){if(!b("gkx")("676931")){c(d);return}this.isHeartbeat(d.payload)?this.$2.log({event_name:"heartbeat_received",topic:a}):c(d);h.ping()}.bind(this),d,e,f,g);var h=this.$13(e);f=a.substr(0,a.lastIndexOf("/"));if(b("RTIFriendFanoutConfig").passFriendFanoutSubscribeGK&&b("RTIFriendFanoutConfig").topicPrefixes.indexOf(f)>=0){g=a+"_user_id_"+b("CurrentUser").getID();f=this.$1.subscribe(g,c,d);g=this.$13(f);h.setFriendFanoutToken(g)}e.isDirty()&&this.flush();return h};a.prototype.mutateContext=function(a,b){a.getTopic(),this.$1.isSubscribed(a)&&(this.$1.mutateContext(a,b),this.flush())};a.prototype.isHeartbeat=function(a){try{a=JSON.parse(a);if(a.heartbeat)return!0}catch(a){}return!1};a.prototype.unsubscribe=function(a){this.$1.unsubscribe(a)};a.prototype.unsubscribeAll=function(a){if(!this.isReady()||this.$11==null)return;var b=this.$11;this.$2.bump("unsubscribe_all");var c={reset:"t"};a=a!=null?a:function(a){};b.issueRequest("/sub",c,{},a)};a.prototype.activePing=function(){if(!this.isReady()||this.$11==null)return;var a={state:"active"};this.$11.issueRequest("/active_ping",a,{},function(a){})};a.prototype.flush=function(){__p&&__p();if(!this.isReady()||this.$11==null||this.$6){this.$7=!0;this.$11==null&&this.getCurrentSession();return}var a=this.$11;this.$6=!0;this.$7=!1;var c=this.getMaxConsecutiveFlushFailures();if(this.$9>=c){this.$2.warn({event_name:"reset_state"});this.$9=0;this.$1.clearSubscriptions();this.unsubscribeAll(function(){this.$6=!1}.bind(this));return}var d=[],e={};c=!0;var f=0,g=function(a){__p&&__p();if(f>=this.getMaxFlushBatchSize()){this.$7=!0;return!0}if(a.isDirty()){a.getState()===h.MUTATE_CONTEXT&&(c=!1);var b="subscriptions",g=e[b];g||(g=[],e[b]=g);d.push(a);a.setDirty(!1);a.setSent(!1);b={topic:a.getTopic(),state:a.getState(),context:a.getContext(),viewId:a.getViewId()};f+=1;g.push(b)}else c=!1;return!1}.bind(this);this.forEachSubscription(g);if(c&&e.subscriptions&&e.subscriptions.length>0){g=[];for(var j=0;j<e.subscriptions.length;j++)e.subscriptions[j].state===h.SUBSCRIBE&&g.push(e.subscriptions[j]);e.subscriptions=g;this.$8=!0}j=function(c){__p&&__p();var e=c.data!=null;this.$9=e?0:this.$9+1;this.$8&&e&&(this.$8=!1);for(var f=0;f<d.length;f++){var a=d[f];a.isDirty()||(a.setSent(e),a.setDirty(!e));var g=a.getTopic(),j=e?"success":"failure";j=i(a)+"_"+j;!e&&c.error!=null?this.$2.warn({event_name:j,topic:g,message:c.error}):this.$2.log({event_name:j,topic:g});if(a.getState()===h.SUBSCRIBE){j=a.getSubscribeCallback();j&&b("ErrorUtils").applyWithGuard(j,this,[c])}else if(a.getState()===h.MUTATE_CONTEXT)e&&a.setState(h.SUBSCRIBE);else if(a.getState()===h.UNSUBSCRIBE){g=a.getUnsubscribeCallback();g&&b("ErrorUtils").applyWithGuard(g,this,[c])}}this.deleteSubscriptions(function(a){return a.getState()===h.UNSUBSCRIBE&&a.isSent()&&!a.isDirty()});this.$6=!1;this.$7&&(this.$2.bump("repeated_flush"),this.$7=!1,this.flush())}.bind(this);if(Object.keys(e).length<=0){this.$6=!1;return}g={};this.$8&&(g.reset="t");for(var k=0;k<d.length;k++){var l=d[k],m=i(l)+"_attempt";l=l.getTopic();this.$2.log({event_name:m,topic:l})}a.issueRequest("/sub",g,e,j)};a.prototype.deleteSubscriptions=function(a){this.$1.deleteSubscriptions(a)};a.prototype.forEachSubscription=function(a){this.$1.forEachSubscription(a)};a.prototype.isFlushInProgress=function(){return this.$6};a.prototype.getSubscriptions=function(){var a=[];this.forEachSubscription(function(b){return a.push(b)});return a};a.prototype.isSubscribed=function(a){return this.$1.isSubscribed(a)};a.prototype.isReady=function(){return this.$11!=null&&this.$3&&this.$10};a.prototype.getCurrentSession=function(){b("Arbiter").inform(b("ChannelConstants").GET_RTI_SESSION_REQUEST)};a.prototype.getMaxConsecutiveFlushFailures=function(){return b("RTISubscriptionManagerConfig").config&&Object.prototype.hasOwnProperty.call(b("RTISubscriptionManagerConfig").config,"max_consecutive_flush_failures")?Number(b("RTISubscriptionManagerConfig").config.max_consecutive_flush_failures):b("ChannelConstants").DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES};a.prototype.getMaxFlushBatchSize=function(){return b("RTISubscriptionManagerConfig").config&&Object.prototype.hasOwnProperty.call(b("RTISubscriptionManagerConfig").config,"max_subscription_flush_batch_size")?Number(b("RTISubscriptionManagerConfig").config.max_subscription_flush_batch_size):b("ChannelConstants").DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE};a.prototype.$13=function(a){return new(b("RTISubscriptionToken"))(a,function(a){return this.unsubscribe(a)}.bind(this),function(a,b){return this.mutateContext(a,b)}.bind(this),function(){return this.flush()}.bind(this),function(a){return this.isSubscribed(a)}.bind(this))};a.prototype.$12=function(){if(!g)return;b("Bootloader").loadModules(["SkywalkerOracleManager"],function(a){new a(function(a,b){this.subscribe(a,b)}.bind(this)).startOracle()}.bind(this),"RTISubscriptionManager")};function i(a){if(a.getState()===h.SUBSCRIBE)return"subscribe";else if(a.getState()===h.MUTATE_CONTEXT)return"mutate_context";else if(a.getState()===h.UNSUBSCRIBE)return"unsubscribe";return"unknown_state"}var j=new a();b("Run").onUnload(function(){return j.unsubscribeAll()});e.exports=j}),null);
__d("RealtimeEntityPresenceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:RealtimeEntityPresenceLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:RealtimeEntityPresenceLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RealtimeEntityPresenceLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAction=function(a){this.$1.action=a;return this};a.prototype.setActionReason=function(a){this.$1.action_reason=a;return this};a.prototype.setAppID=function(a){this.$1.app_id=a;return this};a.prototype.setCapabilities=function(a){this.$1.capabilities=a;return this};a.prototype.setClientSubscriptionID=function(a){this.$1.client_subscription_id=a;return this};a.prototype.setClientTimeMs=function(a){this.$1.client_time_ms=a;return this};a.prototype.setEntityHandler=function(a){this.$1.entity_handler=a;return this};a.prototype.setEntityID=function(a){this.$1.entity_id=a;return this};a.prototype.setEntityType=function(a){this.$1.entity_type=a;return this};a.prototype.setEventSource=function(a){this.$1.event_source=a;return this};a.prototype.setExceptionMessage=function(a){this.$1.exception_message=a;return this};a.prototype.setExceptionType=function(a){this.$1.exception_type=a;return this};a.prototype.setGatewayConnected=function(a){this.$1.gateway_connected=a;return this};a.prototype.setSequenceID=function(a){this.$1.sequence_id=a;return this};a.prototype.setSessionID=function(a){this.$1.session_id=a;return this};a.prototype.setSourceHost=function(a){this.$1.source_host=a;return this};a.prototype.setSourceTwTaskHandle=function(a){this.$1.source_tw_task_handle=a;return this};a.prototype.setTopic=function(a){this.$1.topic=a;return this};a.prototype.setUserAgentString=function(a){this.$1.user_agent_string=a;return this};a.prototype.setUserFbid=function(a){this.$1.user_fbid=a;return this};c={action:!0,action_reason:!0,app_id:!0,capabilities:!0,client_subscription_id:!0,client_time_ms:!0,entity_handler:!0,entity_id:!0,entity_type:!0,event_source:!0,exception_message:!0,exception_type:!0,gateway_connected:!0,sequence_id:!0,session_id:!0,source_host:!0,source_tw_task_handle:!0,topic:!0,user_agent_string:!0,user_fbid:!0};e.exports=a}),null);
__d("EntityPresenceLogger",["CurrentUser","EntityPresenceConfig","Int64","Random","RealtimeEntityPresenceTypedLogger","UserAgentData","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b,c){this.entityType=a,this.entityID=b,this.subscriptionID=c,this.shouldLog=this.$1(),this.sequenceID=0}a.prototype.logEnter=function(a){this.shouldLog&&this.$2().setAction("enter").setSequenceID(++this.sequenceID).setCapabilities(a).log()};a.prototype.logSubscribeCallback=function(a){this.shouldLog&&this.$2().setAction("subscribe_completed").setActionReason(a?"succeeded":"failed").log()};a.prototype.logPing=function(){this.shouldLog&&this.$2().setAction("ping").setSequenceID(++this.sequenceID).log()};a.prototype.logSkippedPing=function(){this.shouldLog&&this.$2().setAction("skipped_ping").setSequenceID(this.sequenceID).log()};a.prototype.logChangeCapabilities=function(a){this.shouldLog&&this.$2().setAction("change_capabilities").setSequenceID(++this.sequenceID).setCapabilities(a).log()};a.prototype.logLeave=function(){this.shouldLog&&this.$2().setAction("leave").setSequenceID(++this.sequenceID).log()};a.prototype.logUnsubscribeCallback=function(a){this.shouldLog&&this.$2().setAction("unsubscribe_completed").setActionReason(a?"succeeded":"failed").log()};a.prototype.getLogInfo=function(){return this.shouldLog?{client_subscription_id:this.subscriptionID,sequence_id:this.sequenceID.toString()}:{}};a.prototype.$1=function(){if(b("gkx")("678741"))return!0;return b("gkx")("678742")?b("Random").random()<b("EntityPresenceConfig").sessionLoggingSamplingRate:!1};a.prototype.$2=function(){return new(b("RealtimeEntityPresenceTypedLogger"))().setEntityType(this.entityType).setEntityID(this.entityID).setClientSubscriptionID(this.subscriptionID).setClientTimeMs(Date.now()).setEventSource("client").setAppID("229895473858072").setUserFbid(b("CurrentUser").getID()).setUserAgentString(b("UserAgentData").browserName+"/"+(b("UserAgentData").browserFullVersion||""))};e.exports=a}),null);
__d("EntityPresenceManager",["Arbiter","ChannelConstants","EntityPresenceConfig","EntityPresenceLogger","FBLogger","Int64","RTISubscriptionManager","UserActivity","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="entity_presence",h="capabilities",i={users:0,activePing:null,start:function(){this.users++;if(!b("EntityPresenceConfig").activePingEnabled)return;b("RTISubscriptionManager").activePing();this.activePing===null&&(this.activePing=setInterval(function(){b("UserActivity").isOnTab()?(b("RTISubscriptionManager").activePing(),b("Arbiter").inform(b("ChannelConstants").ENTITY_PRESENCE_ACTIVE_PING)):b("Arbiter").inform(b("ChannelConstants").ENTITY_PRESENCE_SKIPPED_PING)},b("EntityPresenceConfig").activePingFrequency))},stop:function(){this.users=Math.max(this.users-1,0),this.users===0&&this.activePing!==null&&(clearInterval(this.activePing),this.activePing=null)}};a={enter:function(a,c,d){__p&&__p();var e=g+"/"+a+"/"+c,f=b("uuid")(),j=new(b("EntityPresenceLogger"))(a,c,f);j.logEnter(d);a=j.getLogInfo();d&&(a[h]=d.toString());var k=b("RTISubscriptionManager").subscribe(e,function(){b("FBLogger")(g).warn("Unexpected update received for entity presence")},a,function(a){a=a!=null&&a.data!=null;j.logSubscribeCallback(a)},null,function(a){a=a!=null&&a.data!=null;j.logUnsubscribeCallback(a)});i.start();return{called:!1,capabilities:d,pingListener:null,skippedPingListener:null,changeCapabilities:function(a){j.logChangeCapabilities(a);var b=j.getLogInfo();a&&(b[h]=a.toString());k.mutateContext(b);this.capabilities=a},leave:function(){__p&&__p();if(this.called){b("FBLogger")(g).warn("leave() called twice for same PresenceTokenType");return}j.logLeave();i.stop();b("Arbiter").unsubscribe(this.pingListener);b("Arbiter").unsubscribe(this.skippedPingListener);k.fastUnsubscribe();this.called=!0},_init:function(){this.pingListener=b("Arbiter").subscribe(b("ChannelConstants").ENTITY_PRESENCE_ACTIVE_PING,function(a){j.logPing()});this.skippedPingListener=b("Arbiter").subscribe(b("ChannelConstants").ENTITY_PRESENCE_SKIPPED_PING,function(a){j.logSkippedPing()});return this}}._init()}};e.exports=a}),null);
__d("EntityPresenceTypeEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXTERNAL_CASE:"external_case",FRIEND_ONE:"friend_one",GMS_SRT:"gms_srt",LIVE_VIDEO:"live_video",LIVING_ROOM:"living_room",LIVING_ROOM_CVC:"living_room_cvc",SPECTACLES:"spectacles",SRT_CUSTOMER_SUPPORT:"srt_customer_support",VOD:"vod"})}),null);