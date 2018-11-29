if (self.CavalryLogger) { CavalryLogger.start_js(["odHlk"]); }

__d("BoostedPostBoostUnavailableDialog.react",["BUIAdoptionDialogButton.react","BUIAdoptionDialogCancelButton.react","BUIAdoptionHorizontalLayout.react","React","ServerHTML.react","XUIContextualDialog.react","XUIContextualDialogBody.react","XUIContextualDialogFooter.react","XUIContextualDialogTitle.react"],(function(a,b,c,d,e,f){"use strict";var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{alignment:"center",contextRef:this.props.hostButtonRef,hoverContextRef:this.props.hostButtonRef,position:"above",width:b("XUIContextualDialog.react").WIDTH.NORMAL,onToggle:this.props.onToggle},b("React").createElement(b("XUIContextualDialogTitle.react"),null,this.props.summary),b("React").createElement(b("XUIContextualDialogBody.react"),null,b("React").createElement(b("ServerHTML.react"),{blob:this.props.description})),b("React").createElement(b("XUIContextualDialogFooter.react"),null,b("React").createElement(b("BUIAdoptionHorizontalLayout.react"),null,b("React").createElement(b("BUIAdoptionDialogCancelButton.react"),{onClick:this.props.onCancelButtonClick}),b("React").createElement(b("BUIAdoptionDialogButton.react"),{href:this.props.confirmLink,label:this.props.confirmLabel,use:"confirm",onClick:this.props.onSubmitButtonClick}))))};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("BoostedPostGrayAccountDialog.react",["fbt","BUIAdoptionDialogButton.react","BUIAdoptionDialogCancelButton.react","React","XPagesManagerSettingsController","XUIContextualDialog.react","XUIContextualDialogBody.react","XUIContextualDialogFooter.react","XUIContextualDialogTitle.react"],(function(a,b,c,d,e,f,g){"use strict";var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a),this.state={assignRoleURI:b("XPagesManagerSettingsController").getURIBuilder().setString("page_token",this.props.pageID).setString("tab","admin_roles").getURI()}}a.prototype.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{alignment:"center",contextRef:this.props.hostButtonRef,hoverContextRef:this.props.hostButtonRef,position:"above",shown:!1,width:b("XUIContextualDialog.react").WIDTH.NORMAL,onToggle:this.props.onToggle},b("React").createElement(b("XUIContextualDialogTitle.react"),null,this.props.summary),b("React").createElement(b("XUIContextualDialogBody.react"),null,this.props.description),b("React").createElement(b("XUIContextualDialogFooter.react"),null,b("React").createElement(b("BUIAdoptionDialogCancelButton.react"),{onClick:this.props.onCancelButtonClick}),b("React").createElement(b("BUIAdoptionDialogButton.react"),{href:this.state.assignRoleURI,label:g._("Manage Page Roles"),layerAction:"button",use:"confirm",onClick:this.props.onSubmitButtonClick})))};e.exports=a}),null);
__d("BoostedPostUnpublishedPageDialog.react",["fbt","AsyncRequest","BUIAdoptionDialogButton.react","BUIAdoptionDialogCancelButton.react","FBPagePublishModes","FDSSpinner.react","React","XPageEditPageVisibilitySaveController","XUIContextualDialog.react","XUIContextualDialogBody.react","XUIContextualDialogFooter.react","XUIContextualDialogTitle.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a),this.$1=function(){this.props.onSubmitButtonClick();var a=b("XPageEditPageVisibilitySaveController").getURIBuilder().setInt("page_id",this.props.pageID).getURI();this.setState({isPublishing:!0});new(b("AsyncRequest"))().setURI(a).setData({publish:b("FBPagePublishModes").PUBLISHED,force_reload:!0,redirect_to_setting:!1}).setMethod("POST").setHandler(function(){this.setState({isPublishing:!1})}.bind(this)).send()}.bind(this),this.state={isPublishing:!1}}a.prototype.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{alignment:"center",contextRef:this.props.hostButtonRef,hoverContextRef:this.props.hostButtonRef,position:"above",shown:this.state.isPublishing,width:b("XUIContextualDialog.react").WIDTH.NORMAL,onToggle:this.props.onToggle},b("React").createElement(b("XUIContextualDialogTitle.react"),null,this.props.summary),b("React").createElement(b("XUIContextualDialogBody.react"),null,this.props.description),b("React").createElement(b("XUIContextualDialogFooter.react"),null,b("React").createElement(b("BUIAdoptionDialogCancelButton.react"),{disabled:this.state.isPublishing,onClick:this.props.onCancelButtonClick}),b("React").createElement(b("BUIAdoptionDialogButton.react"),{disabled:this.state.isPublishing,label:g._("Publish Page"),layerAction:"button",use:"confirm",onClick:this.$1}),this.state.isPublishing?b("React").createElement(b("FDSSpinner.react"),{shade:"dark"}):null))};e.exports=a}),null);
__d("BoostedPostBoostUnavailableUtils",["AdsLWIErrorCode","BoostedPostBoostUnavailableDialog.react","BoostedPostGrayAccountDialog.react","BoostedPostUnpublishedPageDialog.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a,c,d,e,f,h,i,j,k,l){switch(e){case b("AdsLWIErrorCode").INELIGIBLE_GRAY_ACCOUNT:return b("React").createElement(b("BoostedPostGrayAccountDialog.react"),{description:d,hostButtonRef:f,pageID:k,summary:l,onCancelButtonClick:h,onSubmitButtonClick:i,onToggle:j});case b("AdsLWIErrorCode").INELIGIBLE_UNPUBLISHED_PAGE:return b("React").createElement(b("BoostedPostUnpublishedPageDialog.react"),{description:d,hostButtonRef:f,pageID:k,summary:l,onCancelButtonClick:h,onSubmitButtonClick:i,onToggle:j})}return g(a,c,d,f,h,i,j,l)};var g=function(a,c,d,e,f,g,h,i){return b("React").createElement(b("BoostedPostBoostUnavailableDialog.react"),{confirmLabel:a,confirmLink:c,description:d,hostButtonRef:e,summary:i,onCancelButtonClick:f,onSubmitButtonClick:g,onToggle:h})};e.exports={getDialog:a}}),null);
__d("BoostedComponentFlow",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUDIENCE_MANAGER:"audience_manager",CHECKOUT:"checkout",CREATE:"create",CREATIVE_EDIT:"creative_edit",CREATIVE_REFRESH:"creative_refresh",DEATILED_TARGETING:"detailed_targeting",EDIT:"edit",EDIT_ADGROUP:"edit_adgroup",EDIT_POST:"edit_post",FORM_CREATION:"FORM_CREATION",LEAD_MANAGEMENT:"lead_management",IMAGE_PICKER:"image_picker",VIDEO_PICKER:"video_picker",INELIGIBLE:"ineligible",INSIGHTS:"insights",INTEGRITY:"integrity",LINK_INSTAGRAM_ACCOUNT:"link_instagram_account",PAYMENTS:"payments",POST_INSIGHTS:"post_insights",SELECT_PAGE:"select_page",SHARE_CTA:"share_cta",UPSELL:"upsell",VIDEO_UPLOAD:"video_upload",WALKTHROUGH:"walkthrough",DURATION_DATE_PICKER:"duration_date_picker",NONE:"none"})}),null);
__d("BoostedPostCannotPromoteButton.react",["fbt","Banzai","BoostedComponentClientEvent","BoostedComponentFlow","BoostedComponentRef","BoostedPostBoostUnavailableUtils","FDSButton.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=g._("Boost Unavailable");c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(){return this.refs.buttonRef}.bind(this),this.$2=function(){this.$3(b("BoostedComponentClientEvent").INELIGIBLE_FLOW_CANCEL)}.bind(this),this.$4=function(){this.$3(b("BoostedComponentClientEvent").INELIGIBLE_FLOW_ACTION_CLICK)}.bind(this),this.$5=function(a){a&&this.$3(b("BoostedComponentClientEvent").INELIGIBLE_FLOW_DIALOG_OPEN)}.bind(this),c}a.prototype.$3=function(event){if(!b("Banzai").isEnabled("boosted_component"))return;var a={flow:b("BoostedComponentFlow").INELIGIBLE,event:event,ineligible_error_code:this.props.lwiErrorCode,product:this.props.product,page_id:this.props.pageID,placement:b("BoostedComponentRef").WWW_BOOSTED_UNAVAILABLE_BUTTON,post_id:this.props.postID};b("Banzai").post("boosted_component",a,b("Banzai").VITAL)};a.prototype.render=function(){return b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{isDisabled:!0,label:i,ref:"buttonRef",use:"default"}),b("BoostedPostBoostUnavailableUtils").getDialog(this.props.confirmLabel,this.props.confirmLink,this.props.description,this.props.lwiErrorCode,this.$1,this.$2,this.$4,this.$5,this.props.pageID,this.props.summary))};e.exports=a}),null);