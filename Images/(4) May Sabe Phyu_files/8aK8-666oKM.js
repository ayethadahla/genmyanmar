if (self.CavalryLogger) { CavalryLogger.start_js(["dNVH2"]); }

__d("LivingRoomTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setClienttime=function(a){this.$1.clienttime=a;return this};a.prototype.setCommentBody=function(a){this.$1.comment_body=a;return this};a.prototype.setComposerSessionID=function(a){this.$1.composer_session_id=a;return this};a.prototype.setContentItemID=function(a){this.$1.content_item_id=a;return this};a.prototype.setCurationContext=function(a){this.$1.curation_context=a;return this};a.prototype.setDeviceid=function(a){this.$1.deviceid=a;return this};a.prototype.setEntrySource=function(a){this.$1.entry_source=a;return this};a.prototype.setErrorMessage=function(a){this.$1.error_message=a;return this};a.prototype.setErrorStack=function(a){this.$1.error_stack=a;return this};a.prototype.setExitStatus=function(a){this.$1.exit_status=a;return this};a.prototype.setIsCommentReply=function(a){this.$1.is_comment_reply=a;return this};a.prototype.setLivingRoomAction=function(a){this.$1.living_room_action=a;return this};a.prototype.setLivingRoomID=function(a){this.$1.living_room_id=a;return this};a.prototype.setLivingRoomSurface=function(a){this.$1.living_room_surface=a;return this};a.prototype.setManualConfigType=function(a){this.$1.manual_config_type=a;return this};a.prototype.setManualCreationSource=function(a){this.$1.manual_creation_source=a;return this};a.prototype.setManualGroupID=function(a){this.$1.manual_group_id=a;return this};a.prototype.setManualProfileID=function(a){this.$1.manual_profile_id=a;return this};a.prototype.setManualSessionID=function(a){this.$1.manual_session_id=a;return this};a.prototype.setOldScheduledStartTime=function(a){this.$1.old_scheduled_start_time=a;return this};a.prototype.setPlaylistID=function(a){this.$1.playlist_id=a;return this};a.prototype.setQuery=function(a){this.$1.query=a;return this};a.prototype.setReactionType=function(a){this.$1.reaction_type=a;return this};a.prototype.setSuggestedItemID=function(a){this.$1.suggested_item_id=a;return this};a.prototype.setTargetID=function(a){this.$1.target_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTimeSpent=function(a){this.$1.time_spent=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoEvent=function(a){this.$1.video_event=a;return this};a.prototype.setVideoIDMarauder=function(a){this.$1.video_id_marauder=a;return this};a.prototype.setVideoOffset=function(a){this.$1.video_offset=a;return this};a.prototype.setVideoState=function(a){this.$1.video_state=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.setXmaClickSameVideo=function(a){this.$1.xma_click_same_video=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={clienttime:!0,comment_body:!0,composer_session_id:!0,content_item_id:!0,curation_context:!0,deviceid:!0,entry_source:!0,error_message:!0,error_stack:!0,exit_status:!0,is_comment_reply:!0,living_room_action:!0,living_room_id:!0,living_room_surface:!0,manual_config_type:!0,manual_creation_source:!0,manual_group_id:!0,manual_profile_id:!0,manual_session_id:!0,old_scheduled_start_time:!0,playlist_id:!0,query:!0,reaction_type:!0,suggested_item_id:!0,target_id:!0,time:!0,time_spent:!0,vc:!0,video_event:!0,video_id_marauder:!0,video_offset:!0,video_state:!0,weight:!0,xma_click_same_video:!0};e.exports=a}),null);
__d("ProfileOverviewFilterDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationReactDispatcher"))({strict:!0})}),null);
__d("ProfileOverviewFilterFluxStore",["FluxReduceStore","ProfileBulkEditConstants","ProfileOverviewFilterDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("ProfileBulkEditConstants").maxCount,j=b("immutable").Map;c=b("immutable").Record;var k=b("immutable").Set;g=babelHelpers.inherits(l,c({taggedInOnly:!1,postedBy:"ANYONE",selectedStories:null,actionCounts:j(),dateOption:{key:"all",start:null,end:null}}));g&&g.prototype;function l(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new l()};a.prototype.getTaggedInOnly=function(){return this.getState().get("taggedInOnly")};a.prototype.getPostedBy=function(){return this.getState().get("postedBy")};a.prototype.getDateOptionKey=function(){return this.getState().get("dateOption").key};a.prototype.getStartTime=function(){return this.getState().get("dateOption").start};a.prototype.getEndTime=function(){return this.getState().get("dateOption").end};a.prototype.getPostedByFilterParams=function(){var a=this.getPostedBy();switch(a){case"OWNER":case"NON_OWNER":return{group:a};default:return{}}};a.prototype.getFilterOptions=function(){return{taggedInOnly:this.getTaggedInOnly(),postedBy:this.getPostedByFilterParams(),startTime:this.getStartTime(),endTime:this.getEndTime()}};a.prototype.isDefaultFilterOptions=function(){var a=this.getState();return a.taggedInOnly===!1&&a.postedBy==="ANYONE"&&a.dateOption.key==="all"};a.prototype.getSelectedStories=function(){return this.getState().get("selectedStories")};a.prototype.getCanDoAction=function(a){var b=this.getSelectedStories();return!b?!1:b.size===this.getState().actionCounts.get(a)};a.prototype.$ProfileOverviewFilterFluxStore1=function(a,b){return a.set("selectedStories",b?k():null).set("actionCounts",j())};a.prototype.$ProfileOverviewFilterFluxStore2=function(a,b,c,d){__p&&__p();var e=a.selectedStories;if(!e||d===e.contains(b))return a;var f;if(d){if(e.size>=i)return a;e=e.add(b);f=1}else e=e.remove(b),f=-1;var g=c;d=a.get("actionCounts").withMutations(function(a){for(var b in g)a.set(b,(a.get(b)||0)+f*g[b])});return a.set("selectedStories",e).set("actionCounts",d)};a.prototype.reduce=function(a,b){__p&&__p();switch(b.key){case"taggedInOnly":case"postedBy":case"dateOption":return a.set(b.key,b.value);case"resetSettings":return this.getInitialState();case"setStorySelected":return this.$ProfileOverviewFilterFluxStore2(a,b.storyID,b.actionMap,b.selected);case"toggleStory":var c=a.selectedStories;if(!c)break;c=c.contains(b.storyID);return this.$ProfileOverviewFilterFluxStore2(a,b.storyID,b.actionMap,!c);case"toggleManaging":return this.$ProfileOverviewFilterFluxStore1(a,!this.getSelectedStories());case"setManaging":return this.$ProfileOverviewFilterFluxStore1(a,b.value)}return a};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("ProfileOverviewFilterDispatcher"))}),null);
__d("ProfileViewSwitcher.react",["ix","cx","fbt","FlexLayout.react","FluxContainer","Image.react","ProfileEngagementTypedLogger","ProfileOverviewFilterFluxStore","ProfileTabUtils","React","TimelineComponentKeys","TimelineController","XUIButton.react","XUIButtonGroup.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k;c=babelHelpers.inherits(l,b("React").Component);j=c&&c.prototype;function l(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$1=function(){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_view_switcher_click").setItemType(this.props.loggingName).setProductBucket("profile_core").setProfileIDDummy(this.props.profileID).setProfileSessionID(this.props.profileSessionID).setSurface(this.props.surface).log()}.bind(this),c}l.getButtonSize=function(a){return"large"};l.prototype.render=function(){return b("React").createElement(b("XUIButton.react"),{className:b("joinClasses")(this.props.className,this.props.isSelected?"_6ciz":""),href:this.props.link,image:b("React").createElement(b("Image.react"),{className:"_3-90",src:this.props.isSelected?this.props.selectedImage:this.props.notSelectedImage}),label:this.props.label,onClick:this.$1,size:"large"})};d=babelHelpers.inherits(a,b("React").Component);k=d&&d.prototype;function a(a){k.constructor.call(this,a)}a.prototype.componentDidMount=function(){this.props.surface==="sticky_header"&&b("TimelineController").register(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,this)};a.prototype.render=function(){var a=this.state.tabKey,c=b("ProfileTabUtils").isTimelineTab(a),d=b("ProfileTabUtils").isTimelineOverviewTab(a)&&!this.state.isManaging;a=b("ProfileTabUtils").isTimelineOverviewTab(a)&&this.state.isManaging;var e=a?this.props.gridLink:this.props.gridManageLink,f={profileID:this.props.profileID,profileSessionID:this.props.profileSessionID,surface:this.props.surface};a=this.props.showManageButton?b("React").createElement(l,babelHelpers["extends"]({className:"_3-91 _3-94",isSelected:a,label:i._("Manage Posts"),link:e,loggingName:"grid-view-manage",notSelectedImage:g("566584"),selectedImage:g("591462")},f)):null;e=b("React").createElement(l,babelHelpers["extends"]({isSelected:c,label:i._("List View"),link:this.props.listLink,loggingName:"list-view",notSelectedImage:g("509325"),selectedImage:g("509324")},f));c=b("React").createElement(l,babelHelpers["extends"]({isSelected:d,label:i._("Grid View"),link:this.props.gridLink,loggingName:"grid-view",notSelectedImage:g("509303"),selectedImage:g("509302")},f));return b("React").createElement(b("FlexLayout.react"),{align:"start",wrap:"wrap"},a,b("React").createElement(b("XUIButtonGroup.react"),{className:this.props.bottomSpacing,display:"inline"},e,c))};a.prototype.handleTabChange=function(a,b){this.setState({tabKey:a})};a.getStores=function(){return[b("ProfileOverviewFilterFluxStore")]};a.calculateState=function(a,c){return{isManaging:b("ProfileOverviewFilterFluxStore").getSelectedStories()!==null,tabKey:a?a.tabKey:c.initialTabKey}};e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("LivingRoomLoggerAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD_CONTENT:"add_content",ADVANCE_QUEUE:"advance_queue",ADVANCE_QUEUE_CANCELED:"advance_queue_canceled",ADVANCE_QUEUE_PROCESSED:"advance_queue_processed",ADVANCE_QUEUE_SCHEDULED:"advance_queue_scheduled",ADVANCE_QUEUE_INVALID:"advance_queue_invalid",AUTO_COHOST_OPT_OUT_BANNER_RENDERED:"auto_cohost_opt_out_banner_rendered",AUTO_PLAY_BANNER_JOB_CANCELED:"auto_play_banner_job_canceled",AUTO_PLAY_BANNER_JOB_INVALID:"auto_play_banner_job_invalid",AUTO_PLAY_BANNER_JOB_PROCESSED:"auto_play_banner_job_processed",AUTO_PLAY_BANNER_JOB_SCHEDULED:"auto_play_banner_job_scheduled",AUTO_PLAY_VIDEO_NOT_FOUND:"auto_play_video_not_found",AUTO_PLAY_FAIL_TO_RETRIEVE_FROM_SEARCH_SOURCE:"auto_play_fail_to_retrieve_from_search_source",AUTO_PLAY_SEARCH_SOURCE_VIDEO_NOT_FOUND:"auto_play_search_source_video_not_found",AUTO_PLAY_FIT_SOURCE_VIDEO_NOT_FOUND:"auto_play_fit_source_video_not_found",AUTO_PLAY_VIDEO_FAIL_INTEGRITY_CHECK:"auto_play_video_fail_integrity_check",AUTO_PLAY_VIDEO_FAIL_VALIDATION:"auto_play_video_fail_validation",AUTO_PLAY_VIDEO_PLAYED:"auto_play_video_played",AUTO_PLAY_VIDEO_SET:"auto_play_video_set",AUTO_SEAL_JOB_INVALID:"auto_seal_job_invalid",AUTOCURATE_PLAYLIST:"autocurate_playlist",BANNER_AUTO_PLAY_VIDEO_RENDERED:"banner_cancel_auto_play_video_rendered",BECOME_HOST:"become_host",COHOST_PROMOTION_REQUEST_BANNER_RENDERED:"cohost_promotion_request_banner_rendered",CLICK_ADD_VIDEO:"click_add_video",CLICK_ADD_VIDEO_TAB:"click_add_video_tab",CLICK_AUTO_COHOST_OPT_OUT_BANNER:"click_auto_cohost_opt_out_banner",CLICK_AUTO_COHOST_OPT_OUT_BANNER_OPT_OUT:"click_auto_cohost_opt_out_banner_opt_out",CLICK_AUTO_PLAY_VIDEO_BANNER:"click_cancel_auto_play_video_banner",CLICK_AUTO_PLAY_VIDEO_BANNER_ACCEPT:"click_cancel_auto_play_video_banner_accept",CLICK_AUTO_PLAY_VIDEO_BANNER_CANCEL:"click_cancel_auto_play_video_banner_cancel",CLICK_COHOST_PROMOTION_REQUEST_BANNER:"click_cohost_promotion_request_banner",CLICK_COHOST_PROMOTION_REQUEST_BANNER_APPROVE:"click_cohost_promotion_request_banner_approve",CLICK_COHOST_PROMOTION_REQUEST_BANNER_DECLINE:"click_cohost_promotion_request_banner_decline",CLICK_END_SESSION:"click_end_session",CLICK_INVITE_BUTTON:"click_invite_button",CLICK_TO_OPEN:"click_to_open",CLICK_PREPOPULATE:"click_prepopulate",CLICK_PREPOPULATE_LATER:"click_prepopulate_later",CLICK_PROFILE:"click_profile",CLICK_RECOMMENDED_SHOW:"click_recommended_show",CLICK_RECOMMENDED_VIDEO:"click_recommended_video",CLICK_RECAP_VIDEO:"click_recap_video",CLICK_RECAP_INSIGHTS:"click_recap_insights",CLICK_RECAP_SAVE:"click_recap_save",CLICK_RECAP_UNSAVE:"click_recap_unsave",CLICK_SEND_INVITE:"click_send_invite",CLICK_SEND_IN_MESSENGER:"click_send_in_messenger",CLICK_SHARE_LIVING_ROOM:"click_share_living_room",CLICK_SPROUT:"click_sprout",CLICK_SUGGEST_VIDEO:"click_suggest_video",CLICK_SUGGESTED_VIDEO_BANNER:"click_suggested_video_banner",CLICK_SUGGESTED_VIDEO_BANNER_ACCEPT:"click_suggested_video_banner_accept",CLICK_VIEW_QUEUE:"click_view_queue",COMMENT:"comment",COMMENT_PAYLOAD_RECEIVED:"comment_payload_received",COMMENT_PAYLOAD_RENDERED:"comment_payload_rendered",COMMENT_REACTION:"comment_reaction",COMPOSER_POST_BUTTON_DISABLED:"composer_post_button_disabled",CREATE_LIVING_ROOM:"create_living_room",CREATE_LIVING_ROOM_ACTION_LINK_IMPRESSION:"create_living_room_action_link_impression",CREATE_POST_CLICKED:"create_post_clicked",CREATE_POST_FAILED:"create_post_failed",CREATE_POST_SUCCEEDED:"create_post_succeeded",CREATION_ENTRY_POINT_IMPRESSION:"creation_entry_point_impression",CREATOR_FIRST_ENTER_PROCESSED:"creator_first_enter_processed",CURATION_VIDEOS_REQUESTED:"curation_videos_requested",CURATION_VIDEOS_RETURNED:"curation_videos_returned",DISABLE_ADD_COHOST_BY_DEFAULT_AND_REVOKE_COHOSTS:"disable_add_cohost_by_default_and_revoke_cohosts",DELETED:"deleted",DISMISS_ALL_SUGGESTED:"dismiss_all_suggested",DISMISS_SUGGESTED:"dismiss_suggested",ENTERING_FULLSCREEN:"entering_fullscreen",ERROR:"error",EXECUTE_PAGE_SEARCH:"execute_page_search",EXECUTE_VIDEO_SEARCH:"execute_video_search",EXIST_ACTIVE_LIVING_ROOM:"exist_active_living_room",GRANT_HOST:"grant_host",HIDE_ENTRY_POINT:"hide_entry_point",IMPRESSION:"impression",INACTIVE_VIEWER_COMMENT:"inactive_viewer_comment",INACTIVE_VIEWER_PRESENCE:"inactive_viewer_presence",INACTIVE_VIEWER_REACTION:"inactive_viewer_reaction",INACTIVE_VIEWER_REJOIN:"inactive_viewer_rejoin",INVITE_ONLINE_FRIENDS_CTA_IMPRESSION:"invite_online_friends_cta_impression",INVITE_ONLINE_FRIENDS_CTA_CLICK:"invite_online_friends_cta_click",INVITE_ONLINE_FRIENDS_CTA_CLICK_INVITE:"invite_online_friends_cta_click_invite",INVITE_ONLINE_FRIENDS_CTA_INVITE_PROCESSED:"invite_online_friends_cta_invite_processed",JOIN:"join",JOIN_PROCESSED:"join_processed",LEAVE:"leave",LEAVE_PROCESSED:"leave_processed",LOADING_LIVING_ROOM:"loading_living_room",INITIAL_VIDEO_PLAY:"initial_video_play",MESSENGER_CTA_CLICK_CREATE:"messenger_cta_click_create",MESSENGER_CTA_CLICK_ENTRY_POINT:"messenger_cta_click_entry_point",MESSENGER_CTA_IMPRESSION:"messenger_cta_impression",MUSIC_VIDEO_ADDED:"music_video_added",NOTIF_SUBSCRIPTIONS_ALL:"notif_subscriptions_all",NOTIF_SUBSCRIPTIONS_HIGHLIGHTS:"notif_subscriptions_highlights",NOTIF_SUBSCRIPTIONS_OFF:"notif_subscriptions_off",NOTIF_SUBSCRIPTIONS_CANNOT_SEE_BELL:"notif_subscriptions_cannot_see_bell",NOTIF_SUBSCRIPTIONS_OFF_PAGE_UNFOLLOWED:"notif_subscriptions_off_page_unfollowed",NULL_STATE_RENDERED:"null_state_rendered",OPEN_CREATION_DIALOG:"open_creation_dialog",PIN_COMMENT:"pin_comment",PLAY_FIRST_VIDEO:"play_first_video",PLAY_NEXT_FROM_QUEUE:"play_next_from_queue",PLAY_NOW_FROM_QUEUE:"play_now_from_queue",PRESENCE_SUBSCRIPTION_PAYLOAD:"presence_subscription_payload",QUICK_PROMOTION_IMPRESSION:"quick_promotion_impression",QUICK_PROMOTION_CLICK:"quick_promotion_click",QUEUE_END_REACHED:"queue_end_reached",QUEUE_STALL_PROCESSED:"queue_stall_processed",REACTION:"reaction",REMOVE_CONTENT:"remove_content",RESTRICTED_CONTENT_HIDDEN:"restricted_content_hidden",REVOKE_HOST:"revoke_host",GROUP_MALL_UPSELL_IMPRESSION:"group_mall_upsell_impression",GROUP_MALL_UPSELL_CLICK:"group_mall_upsell_click",RESCHEDULE:"reschedule",SCHEDULE:"schedule",START:"start",RESUME:"resume",CANCEL:"cancel",SEAL_ASYNC:"seal_async",SEND_INVITE:"send_invite",SEND_INVITE_NOTIF:"send_invite_notif",SEND_INVITE_MESSAGE:"send_invite_message",SESSION_END:"session_end",SESSION_START:"session_start",SHOW_CUSTOMIZATION_DIALOG:"show_customization_dialog",SHOW_INVITE_DIALOG:"show_invite_dialog",SHOW_MANAGE_PARTICIPANTS:"show_manage_participants",SPROUT_IMPRESSION:"sprout_impression",START_COMMENTATING_BANNER_RENDERED:"start_commentating_banner_rendered",START_COMMENTATING_BANNER_CLICK:"start_commentating_banner_click",SUGGEST_VIDEO:"suggest_video",SUGGEST_VIDEO_PROCESSED:"suggest_video_processed",SUGGESTED_VIDEO_BANNER_RENDERED:"suggested_video_banner_rendered",UNHANDLED_GRAPHQL_ERROR:"unhandled_graphql_error",UNPIN_COMMENT:"unpin_comment",UPDATE_CUSTOM_NAME:"update_custom_name",VIDEO_STATE:"video_state",VIDEO_STATE_PUBLISH:"video_state_publish",ZOMBIE_TRIGGER_FIRED:"zombie_trigger_fired",CURATION_CLOSE:"curation_close",CURATION_OPEN:"curation_open",CURATION_TAB_IMPRESSION:"curation_tab_impression",CURATION_CLICK_SEARCH:"curation_click_search",ADD_TO_QUEUE:"add_to_queue",REMOVE_FROM_QUEUE:"remove_from_queue",PLAY_NOW:"play_now",PLAY_NEXT:"play_next",CURATION_VIDEO_VALIDATION_FAILED:"curation_video_validation_failed",SOCIAL_PLAYER_CREATION_SHEET_CANCELED:"social_player_creation_sheet_canceled",SOCIAL_PLAYER_CREATION_SHEET_PRIVACY_SELECTOR_CHANGED:"social_player_creation_sheet_privacy_selector_changed",SOCIAL_PLAYER_CREATION_SHEET_PRIVACY_SELECTOR_CLICKED:"social_player_creation_sheet_privacy_selector_clicked",SOCIAL_PLAYER_CREATION_SHEET_SEARCH_TEXT_ENTERED:"social_player_creation_sheet_search_text_entered",SOCIAL_PLAYER_CREATION_SHEET_SEARCHED_FRIEND_SELECTED:"social_player_creation_sheet_searched_friend_selected",SOCIAL_PLAYER_CREATION_SHEET_SELECT_NF_POST:"social_player_creation_sheet_select_nf_post",SOCIAL_PLAYER_CREATION_SHEET_SEND_INVITATION:"social_player_creation_sheet_send_invitation",SOCIAL_PLAYER_CREATION_SHEET_SUBMITTED:"social_player_creation_sheet_submitted",SOCIAL_PLAYER_PLUGIN_CLICK_INVITE_FRIENDS:"social_player_plugin_click_invite_friends",SOCIAL_PLAYER_PLUGIN_CLICK_FACEPILE:"social_player_plugin_click_facepile",SOCIAL_PLAYER_PLUGIN_IMPRESSION:"social_player_plugin_impression"})}),null);