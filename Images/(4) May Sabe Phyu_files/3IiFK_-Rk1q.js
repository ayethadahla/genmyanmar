if (self.CavalryLogger) { CavalryLogger.start_js(["oSAi1"]); }

__d("ChatTypeaheadConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({USER_TYPE:"user",THREAD_TYPE:"thread",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",PAGE_TYPE:"page",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",HEADER_TYPE:"header",INTERNAL_BOT_PAGE_TYPE:"internal_bot_page",GAME_TYPE:"game"});e.exports=a}),null);
__d("MediaStream",[],(function(a,b,c,d,e,f){e.exports=window.MediaStream||window.webkitMediaStream}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("MessengerBootloadedSecondarySearchLogger",["Bootloader","MessengerSecondarySearchFunnelConstants","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h="",i={ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]},j=!1;c=b("MessengerSecondarySearchFunnelConstants").EVENTS;var k=c.END,l=c.IMPRESSIONS,m=c.START,n=c.QUERY_CHANGED,o=c.RESULT_SELECTED,p=c.SOURCE_ENDED,q=c.SOURCE_STARTED;d=b("MessengerSecondarySearchFunnelConstants").END_ACTIONS;var r=d.ABANDON,s=d.SINGLE_RESULT_SELECTED;f=b("MessengerSecondarySearchFunnelConstants").SOURCES;var t=f.SERVER,u=f.SHORT_PROFILES,v=f.SUGGESTED_RECIPIENTS,w=f.LOCAL_AND_SERVER,x=f.ORDERED_GCF_FRIENDLIST;function y(a){if(i.SUGGESTED_RECIPIENTS.includes(a))return v;else if(i.ORDERED_GCF_FRIENDLIST.includes(a))return x;else if(i.SHORT_PROFILES.includes(a))return u;else return t}function a(event){__p&&__p();if(!b("gkx")("678592"))return;b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"],function(a){__p&&__p();switch(event.name){case m:j=!1;i={ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]};a.startFunnel(b("MessengerSecondarySearchFunnelConstants").CLIENTS.WWW,event.surface,event.surface,null,event.loggingID);break;case k:var c=event.end_reason;event.surface===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&(c=j?s:r);a.endFunnel(b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION,c,event.loggingID,null,event.isNewThread);break;case l:c=event.entries.map(function(a){a.data_source=[y(a.result_fbid)];return a});g=event.entries.map(function(a){return a.result_fbid});a.impressions(event.query,c,w,event.loggingID);break;case n:h=event.query;a.queryChanged(event.query,event.loggingID);break;case o:j=!0;c=y(event.id);var d=g.indexOf(event.id);a.resultSelected(event.id,d,event.type,event.query,c,event.surface,event.loggingID,event.selectionType);break;case p:d=!event.query||event.query===h;switch(event.source){case v:i.SUGGESTED_RECIPIENTS=event.ids?event.ids:[];break;case u:i.SHORT_PROFILES=event.ids?event.ids:[];d=!0;break;case x:i.ORDERED_GCF_FRIENDLIST=event.ids?event.ids:[];d=!0;break;default:break}a.sourceEnded(event.query,event.numResults,event.source,event.status,d,event.loggingID);break;case q:a.sourceStarted(event.query,event.source,event.loggingID);break}},"MessengerBootloadedSecondarySearchLogger")}e.exports={logSearchEvent:a}}),null);
__d("ChatSearchSource",["AbstractSearchSource","AsyncRequest","Bootloader","CurrentUser","MercuryParticipantTypes","MessengerBootloadedSecondarySearchLogger","MessengerSearchFunnelLoggerConstants","MessengerSecondarySearchFunnelConstants","promiseDone","requireWeak","SearchableEntry","SearchSourceCallbackManager","ShortProfiles","TokenizeUtil","debounce","emptyFunction","isValidUniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=null;b("requireWeak")("OrderedFriendsList",function(a){h=a});c=babelHelpers.inherits(a,b("AbstractSearchSource"));g=c&&c.prototype;function a(a){g.constructor.call(this),this.$ChatSearchSource1=new(b("SearchSourceCallbackManager"))({parseFn:b("TokenizeUtil").parse,matchFn:b("TokenizeUtil").isQueryMatch,indexFn:a.indexFn,searchType:a.searchType||""}),this.$ChatSearchSource2=a.queryRequests||[],this.$ChatSearchSource3=a.searchType||"",this.$ChatSearchSource4=!1,this.$ChatSearchSource5=b("debounce")(this.$ChatSearchSource5,100,this),this.$ChatSearchSource6=a.excludeMemorializedUsers||!1,this.$ChatSearchSource7=""}a.prototype.bootstrapImpl=function(a){b("promiseDone")(b("ShortProfiles").fetchAll(),function(){this.$ChatSearchSource4=!0,this.$ChatSearchSource8(),a()}.bind(this))};a.prototype.searchImpl=function(a,b,c){__p&&__p();var d=null,e={},f=c&&c.onQueryFinished,g=c&&c.onQueryStarted;g&&g(a);g=this.$ChatSearchSource1.search(a,function(c){!d?(d=c,d.forEach(function(a){return e[a.getUniqueID()]=!0})):c.forEach(function(a){var b=a.getUniqueID();e[b]||(d.push(a),e[b]=!0)}),b(d,a),a.length===1&&this.$ChatSearchSource4&&(f&&f(a))}.bind(this),c);if(!g||!this.$ChatSearchSource2||!this.$ChatSearchSource2.length||a.length===0){f&&f(a);return}if(a.length===1){this.$ChatSearchSource4&&(f&&f(a));return}var h={value:a,existing_ids:d&&d.map(function(a){return a.getUniqueID()}).join(","),limit:c&&c.threadLimit,exclude_memorialized_users:this.$ChatSearchSource6,logging_id:c&&c.loggingID},i=this.$ChatSearchSource2.length;this.$ChatSearchSource2.forEach(function(b){var c=Date.now();this.$ChatSearchSource5(h,b,function(b){b=this.$ChatSearchSource9(this.$ChatSearchSource10(b)).filter(function(a){return!!a});this.$ChatSearchSource11(a,b.length,c);this.$ChatSearchSource12(b,a);i--;i===0&&(this.$ChatSearchSource1.setQueryStringAsExhausted(a),f&&f(a))}.bind(this))}.bind(this),this)};a.prototype.getAllEntriesMap=function(){return this.$ChatSearchSource1.getAllEntries()};a.prototype.$ChatSearchSource11=function(a,c,d){if(this.$ChatSearchSource3===b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG){var e=Date.now();b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(b,f){b.logSourceEnded(a,f.SOURCES.SERVER,c,f.QUERY_PROGRESS.FINISHED),this.$ChatSearchSource13(b.getCurrentFunnelID(),d,e,a,c,"universal")}.bind(this),"ChatSearchSource")}else this.$ChatSearchSource3===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SERVER,query:a,numResults:c,status:b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST})};a.prototype.$ChatSearchSource13=function(a,c,d,e,f,g){b("Bootloader").loadModules(["MessengerSearchDataSourceLoadedEventTypedLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(b,h){new b().setSearchFunnelID(a).setStartTimeMs(c).setEndTimeMs(d).setQueryString(e).setDataSource(h.SOURCES.SERVER).setResultsCount(f).setLoadStatus(h.QUERY_PROGRESS.FINISHED).setIsResultUsed(this.$ChatSearchSource7===e).setSearchSurface(g).log()}.bind(this),"ChatSearchSource")};a.prototype.$ChatSearchSource8=function(){var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c.type===b("MercuryParticipantTypes").FRIEND||c.type===b("MercuryParticipantTypes").FB4C});var c=a.map(this.$ChatSearchSource14);c.length&&(this.$ChatSearchSource3===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SHORT_PROFILES,query:"",ids:a,numResults:c.length,status:b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST}),this.$ChatSearchSource1.addLocalEntries(c))};a.prototype.$ChatSearchSource9=function(a){return a.map(this.$ChatSearchSource15,this)};a.prototype.$ChatSearchSource15=function(a,c){if(a.mercury_thread)return!h?null:h.normalizeThreadEntry(a,c);var d=a.text,e=a.uid;if(!d||!b("isValidUniqueID")(e))return null;var f=h?h.getActiveRank(e):0;h&&!h.contains(e)&&(f+=c);return new(b("SearchableEntry"))({uniqueID:e,title:d,order:f,subtitle:a.subtext,type:a.render_type||a.type,photo:a.photo,uri:a.path,auxiliaryData:{isMessengerUser:a.is_messenger_user,alias:a.alias,workForeignEntityInfo:a.work_foreign_entity_info}})};a.prototype.$ChatSearchSource10=function(a){a=a.getPayload();if(Array.isArray(a))return a;else if(a&&a.entries)return a.entries;else return[]};a.prototype.$ChatSearchSource14=function(a){var c=b("ShortProfiles").getNow(a),d=a==b("CurrentUser").getID()?b("MercuryParticipantTypes").FRIEND:c.type,e=[c.additionalName,c.alternateName].concat(c.searchTokens||[]).join(" "),f=c.name,g=null;return new(b("SearchableEntry"))({uniqueID:a,title:f,order:h?h.getActiveRank(a):0,subtitle:g,keywordString:e,type:d,photo:c.thumbSrc,uri:c.uri,auxiliaryData:{isMessengerUser:c.is_messenger_user,alias:c.alias}})};a.prototype.$ChatSearchSource5=function(a,c,d,e){this.$ChatSearchSource3===b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG&&a.value!==this.$ChatSearchSource7&&(b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(c,d,e){c.logStartQuery(b("MessengerSearchFunnelLoggerConstants").NAME,a.value),d.logSourceStarted(a.value,e.SOURCES.SERVER)},"ChatSearchSource"),this.$ChatSearchSource7=a.value),new(b("AsyncRequest"))(c.uri).setData(babelHelpers["extends"]({},a,c.data)).setMethod("GET").setReadOnly(!0).setHandler(d).setErrorHandler(e||b("emptyFunction")).setAllowCrossPageTransition(!0).send()};a.prototype.$ChatSearchSource12=function(a,b){a.length&&this.$ChatSearchSource1.addQueryEntries(a,b)};a.prototype.addLocalEntries=function(a){this.$ChatSearchSource1.addLocalEntries(a)};a.prototype.refreshData=function(){b("ShortProfiles").fetchAll()};e.exports=a}),null);
__d("BanzaiScribe",["Banzai"],(function(a,b,c,d,e,f){function a(a){return{log:function(c,d,e){d=[d];e!=null&&d.push(e);b("Banzai").post("scribe:"+c,d,a)}}}c=a({});c.create=a;e.exports=c}),null);