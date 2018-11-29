if (self.CavalryLogger) { CavalryLogger.start_js(["pVCHX"]); }

__d("ImportEventByTicketLinkMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"ImportEventData!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"import_event",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input",type:"ImportEventData!"}],concreteType:"ImportEventResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"created_event",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}];return{kind:"Request",operationKind:"mutation",name:"ImportEventByTicketLinkMutation",id:"1676052019108507",text:null,metadata:{},fragment:{kind:"Fragment",name:"ImportEventByTicketLinkMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"ImportEventByTicketLinkMutation",argumentDefinitions:a,selections:b}}}();e.exports=a}),null);
__d("ImportEventByTicketLinkMutation",["RelayModern","ImportEventByTicketLinkMutation.graphql"],(function(a,b,c,d,e,f){"use strict";b("RelayModern").graphql;a=function(){return b("ImportEventByTicketLinkMutation.graphql")};e.exports=a}),null);
__d("EventbriteLinkImportDialog.react",["cx","fbt","EventAddOnsiteTicketingUtil","EventOnsiteTicketing","EventsActionsLogger","FBJSON","FBToggleSwitch.react","FBUnclickableOverlay.react","FDSButton.react","FDSText.react","Image.react","ImageBlock.react","ImportEventByTicketLinkMutation","InlineBlock.react","InputLabel.react","Random","React","ReactComposerLoggingName","ReactComposerScrapedAttachmentActions","ReactComposerTaggerActions","ReactComposerTaggerType","RelayAPIConfig","RelayFBEnvironment","RelayModern","SearchableEntry","SUIBusinessTheme","SUINotice.react","SUISpinner.react","XUIDialog.react","XUIDialogBody.react","XUIDialogFooter.react","XUIDialogHeader.react","XUIDialogHeaderTitle.react","XUIGrayText.react","XUIText.react","suiMargin"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("RelayModern").commitMutation;function k(a,b){return a.length>b?a.slice(0,b)+"...":a}c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={selectedValue:null,overlayDisabled:!0,importError:!1,errorMessage:null},this.handleSelect=function(a){this.setState({selectedValue:a}),this.$1(b("EventsActionsLogger").Type.CLICK,b("EventsActionsLogger").Target.TOGGLE_BUTTON,a)}.bind(this),this.$3=function(){__p&&__p();this.setState({overlayDisabled:!1});var a=null;this.state.selectedValue!==null&&(a=this.state.selectedValue?b("EventOnsiteTicketing").ENABLE_ONSITE_TICKETING:b("EventOnsiteTicketing").DISABLE_ONSITE_TICKETING);j(b("RelayFBEnvironment"),{mutation:b("ImportEventByTicketLinkMutation"),variables:{input:{client_mutation_id:"ImportEventByTicketLinkMutation"+b("Random").uint32(),actor_id:b("RelayAPIConfig").actorID,ticket_link:this.props.ticketLink,page_id:this.props.pageID,post_id:this.props.postID,action_context:b("FBJSON").stringify(this.props.acontext),event_onsite_ticketing:a}},onCompleted:function(a,c){a=(c=a)!=null?(c=c.import_event)!=null?(c=c.created_event)!=null?c.id:c:c:c;c=this.props.context;if(a&&c){c=c.composerID;b("ReactComposerScrapedAttachmentActions").setScrapedAttachment(c,null,{},b("ReactComposerLoggingName").EVENT_IMPORT_BY_INTERCEPT);var d=new(b("SearchableEntry"))({uniqueID:a,title:""});b("ReactComposerTaggerActions").setTaggerData(c,b("ReactComposerLoggingName").TAG_EVENT_TICKET,b("ReactComposerTaggerType").TAG_EVENT_TICKET,{ticketedEventData:d})}this.props.onCompleted&&this.props.onCompleted(a)}.bind(this),onError:function(a){var c=a.toString().split(":"),d=null;if(c.length==3)switch(c[1]){case" GraphQL server responded with error 1401048":case" GraphQL server responded with error 1401025":case" GraphQL server responded with error 1588016":d=c[2];break;default:break}this.$1(b("EventsActionsLogger").Type.ERROR,b("EventsActionsLogger").Target.IMPORT_EVENT_BUTTON,null,a.toString());this.setState({overlayDisabled:!0,importError:!0,errorMessage:d})}.bind(this)});this.$1(b("EventsActionsLogger").Type.CLICK,b("EventsActionsLogger").Target.IMPORT_EVENT_BUTTON)}.bind(this),c}a.prototype.$1=function(a,c,d,e){d===void 0&&(d=null),e===void 0&&(e=null),b("EventsActionsLogger").log(null,{type:a,target:c,acontext:this.props.acontext},{has_access_token:!0,page_id:this.props.pageID,ticket_link:this.props.ticketLink,toggle_on:d,error_message:e,post_id:this.props.postID})};a.prototype.UNSAFE_componentWillMount=function(){"use strict";this.props.supportsTicketing&&(this.setState({selectedValue:!0}),this.$1(b("EventsActionsLogger").Type.VIEW,b("EventsActionsLogger").Target.TOGGLE_BUTTON)),this.$1(b("EventsActionsLogger").Type.VIEW,b("EventsActionsLogger").Target.IMPORT_EVENT_BUTTON)};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:"_1oui"},b("React").createElement(b("SUISpinner.react"),{theme:b("SUIBusinessTheme")}),b("React").createElement(b("FDSText.react"),{display:"block",margin:"_3-8y",textAlign:"center",size:"body1",weight:"bold"},b("EventAddOnsiteTicketingUtil").getImportingEventText()),b("React").createElement(b("FDSText.react"),{display:"block",textAlign:"center",size:"body3",color:"secondary"},b("EventAddOnsiteTicketingUtil").getLoadingText2()))};a.prototype.render=function(){"use strict";var a=b("React").createElement(b("InlineBlock.react"),{alignv:"middle",height:48},b("React").createElement("div",null,b("React").createElement("div",null,b("React").createElement(b("FDSText.react"),{size:"body1"},this.props.name)),b("React").createElement(b("FDSText.react"),{size:"body3",color:"secondary"},this.props.startTimeSentence),b("React").createElement("div",null,b("React").createElement(b("FDSText.react"),{size:"body3",color:"placeholder"},this.props.description?k(this.props.description,152):null))));this.props.logoUrl&&(a=b("React").createElement(b("ImageBlock.react"),{spacing:"large"},b("React").createElement(b("Image.react"),{className:"_4jc3",src:this.props.logoUrl}),a));var c=null;if(this.props.supportsTicketing){var d=this.state.selectedValue?h._("ON"):h._("OFF");c=b("React").createElement("div",{className:"_69o-"},b("React").createElement(b("XUIText.react"),{size:"body2",weight:"bold",className:"_69o_"},b("EventAddOnsiteTicketingUtil").getManageTitleText()),b("React").createElement(b("InputLabel.react"),{className:"_67_8",label:d},b("React").createElement(b("FBToggleSwitch.react"),{checked:this.state.selectedValue,onToggle:this.handleSelect,className:"_6807"})),b("React").createElement("br",null),b("React").createElement(b("XUIGrayText.react"),{size:"body3"},b("EventAddOnsiteTicketingUtil").getDisclaimerText()))}return b("React").createElement(b("XUIDialog.react"),{shown:!0,width:600,modal:!0,label:"",layerHideOnBlur:!1,hideOnEscape:!1,isStrictlyControlled:!0,onHide:this.props.onXout},b("React").createElement(b("FBUnclickableOverlay.react"),{disabled:this.state.overlayDisabled,className:"_1ouh"},b("React").createElement(b("XUIDialogHeader.react"),null,b("React").createElement(b("XUIDialogHeaderTitle.react"),null,b("EventAddOnsiteTicketingUtil").getImportEventText())),b("React").createElement(b("XUIDialogBody.react"),null,this.state.importError?b("React").createElement(b("SUINotice.react"),{margin:"_3-96",theme:b("SUIBusinessTheme"),type:"error"},this.state.errorMessage?this.state.errorMessage:b("EventAddOnsiteTicketingUtil").getFailedToImportEventText()):null,this.state.overlayDisabled?null:this.$2(),b("React").createElement(b("FDSText.react"),{size:"body1"},b("EventAddOnsiteTicketingUtil").getImportFollowingEventText("Eventbrite")),b("React").createElement("div",{className:"_4jc4"},b("React").createElement("div",{className:"_69o-"},a),c?b("React").createElement("div",{style:{marginLeft:"14px"}},b("React").createElement(b("FDSText.react"),{size:"body1",color:"primary"},b("EventAddOnsiteTicketingUtil").getOptionalText())):null,c)),b("React").createElement(b("XUIDialogFooter.react"),null,this.props.onBack?b("React").createElement(b("FDSButton.react"),{label:b("EventAddOnsiteTicketingUtil").getBackText(),use:"default",onClick:this.props.onBack,margin:"_3-8_"}):null,b("React").createElement(b("FDSButton.react"),{label:this.props.ctaText,use:"primary",onClick:this.$3}))))};e.exports=a}),null);
__d("ImportEventButtonContainerQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"ticket_link_validation_data",type:"TicketLinkValidationData!",defaultValue:null},{kind:"LocalArgument",name:"refetchCounter",type:"ID",defaultValue:0}],b={kind:"LinkedField",alias:null,name:"validate_ticket_uri",storageKey:null,args:[{kind:"Variable",name:"ticket_link_validation_data",variableName:"ticket_link_validation_data",type:"TicketLinkValidationData!"}],concreteType:"TicketLinkValidationResult",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"authorize_url",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"cta_text",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_managed",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"supports_ticketing",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"eventbrite_event",storageKey:null,args:null,concreteType:"EventbriteEvent",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"logo_url",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"start_time_sentence",args:null,storageKey:null}]}]},c=[{kind:"Variable",name:"id",variableName:"refetchCounter",type:"ID!"}],d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",operationKind:"query",name:"ImportEventButtonContainerQuery",id:"710398352417396",text:null,metadata:{},fragment:{kind:"Fragment",name:"ImportEventButtonContainerQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[b,{kind:"LinkedField",alias:"dummy_event_for_refetch_ignore_lint_warning",name:"node",storageKey:null,args:c,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Event",selections:[d]}]}]},operation:{kind:"Operation",name:"ImportEventButtonContainerQuery",argumentDefinitions:a,selections:[b,{kind:"LinkedField",alias:"dummy_event_for_refetch_ignore_lint_warning",name:"node",storageKey:null,args:c,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d]}]}}}();e.exports=a}),null);
__d("ImportEventErrorDialog.react",["fbt","EventsActionsLogger","FDSButton.react","FDSModal.react","FDSModalFooter.react","FDSSection.react","FDSText.react","React","suiMargin"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.componentDidMount=function(){b("EventsActionsLogger").log(null,{type:b("EventsActionsLogger").Type.VIEW,target:b("EventsActionsLogger").Target.IMPORT_ERROR_DIALOG,acontext:this.props.acontext},this.props.loggingExtraData)};a.prototype.render=function(){return b("React").createElement(b("FDSModal.react"),{footer:b("React").createElement(b("FDSModalFooter.react"),{primaryButton:b("React").createElement(b("FDSButton.react"),{label:g._("OK"),onClick:this.props.onClose,use:"primary"})}),isShown:!0,onHide:this.props.onClose,width:500},b("React").createElement(b("FDSSection.react"),null,b("React").createElement(b("FDSText.react"),{margin:"_3-8q",size:"body1"},g._("This event can't be imported because it's not associated with your Eventbrite account."))))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("ImportEventButtonContainer.react",["EventActionContext","EventbriteLinkImportDialog.react","EventsActionsLogger","EventTicketingOAuthMessage","FDSButton.react","ImportEventErrorDialog.react","PopupWindow","React","RelayFBEnvironment","RelayModern","SUIBusinessTheme","SUILoadingModalOverlay.react","XEventsPermalinkController","ImportEventButtonContainerQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var i=function(){return b("ImportEventButtonContainerQuery.graphql")};c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={showImportDialog:!1,refetchCounter:0,popup:null},this.monitorPopupInterval=null,this.loggedView=!1,this.$1=function(a){__p&&__p();a=a.data;var c=new RegExp("^"+this.props.postID+b("EventTicketingOAuthMessage").CODE_PREFIX+"(.+)$");c=c.exec(a);if(c!==null)if(c[1]===b("EventTicketingOAuthMessage").AUTHORIZED){a=this.state.refetchCounter-1;this.setState({refetchCounter:a,showImportDialog:!0});this.$2(b("EventsActionsLogger").Type.ALLOW_ADD_TICKETS,!0)}else c[1]===b("EventTicketingOAuthMessage").NOT_AUTHORIZED&&this.$2(b("EventsActionsLogger").Type.DENY_ADD_TICKETS,!1)}.bind(this),this.$5=function(){this.setState({showImportDialog:!1})}.bind(this),c}a.prototype.componentDidMount=function(){window.addEventListener("message",this.$1,!1),this.monitorPopupInterval=setInterval(function(){this.state.popup&&this.state.popup.closed&&this.setState({popup:null})}.bind(this),100)};a.prototype.componentWillUnmount=function(){window.removeEventListener("message",this.$1),clearInterval(this.monitorPopupInterval),this.state.popup&&!this.state.popup.closed&&this.state.popup.close()};a.prototype.$2=function(a,c){c===void 0&&(c=null),b("EventsActionsLogger").log(null,{type:a,target:b("EventsActionsLogger").Target.IMPORT_CONTINUE_BUTTON,surface:b("EventsActionsLogger").Surface.PAGES_POST,mechanism:b("EventsActionsLogger").Mechanism.HEADER,acontext:{}},{has_access_token:c,page_id:this.props.pageID,post_id:this.props.postID,ticket_link:this.props.ticketLink})};a.prototype.$3=function(a){a=b("PopupWindow").open(a,700,500);this.setState({popup:a});this.$2(b("EventsActionsLogger").Type.CLICK,!1)};a.prototype.$4=function(){this.setState({showImportDialog:!0}),this.$2(b("EventsActionsLogger").Type.CLICK,!0)};a.prototype.$6=function(a){if(a){a=b("XEventsPermalinkController").getURIBuilder().setInt("event_id",a).getURI();window.location=a}};a.prototype.$7=function(){this.$2(b("EventsActionsLogger").Type.CLICK_BEFORE_READY)};a.prototype.$8=function(a){__p&&__p();var c=a.error;a=a.props;if(c)return null;c=null;!a&&this.state.showImportDialog&&(c=b("React").createElement(b("SUILoadingModalOverlay.react"),{theme:b("SUIBusinessTheme")}));var d=null;if(a&&this.state.showImportDialog){var e,f,g,h;h=((h=a)!=null?(h=h.validate_ticket_uri)!=null?h.is_managed:h:h)||!1;g=(g=a)!=null?(g=g.validate_ticket_uri)!=null?g.cta_text:g:g;f=(f=a)!=null?(f=f.validate_ticket_uri)!=null?f.eventbrite_event:f:f;e=((e=a)!=null?(e=e.validate_ticket_uri)!=null?e.supports_ticketing:e:e)||!1;var i=b("EventActionContext").getNewActionContext();i.action_history=[{mechanism:b("EventsActionsLogger").Mechanism.HEADER,surface:b("EventsActionsLogger").Surface.PAGES_POST}];if(h&&f&&g){var j=f.name,k=f.description,l=f.start_time_sentence,m=f.logo_url;d=b("React").createElement(b("EventbriteLinkImportDialog.react"),{name:j,description:k,startTimeSentence:l,logoUrl:m,supportsTicketing:e,pageID:this.props.pageID,acontext:i,ctaText:g,ticketLink:this.props.ticketLink,onCompleted:this.$6,onXout:this.$5,postID:this.props.postID})}else{j={is_managed_event:h,is_valid_event:!!f,page_id:this.props.pageID,post_id:this.props.postID,ticket_link:this.props.ticketLink};d=b("React").createElement(b("ImportEventErrorDialog.react"),{acontext:i,loggingExtraData:j,onClose:this.$5})}}var n=(k=a)!=null?(k=k.validate_ticket_uri)!=null?k.authorize_url:k:k;l=this.state.popup?!this.state.popup.closed:!1;a&&!this.loggedView&&(this.loggedView=!0,this.$2(b("EventsActionsLogger").Type.VIEW,!n));return b("React").createElement(b("React").Fragment,null,b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{isDisabled:l||this.state.showImportDialog,label:this.props.label,onClick:a?n?function(){return this.$3(n)}.bind(this):function(){return this.$4()}.bind(this):function(){return this.$7()}.bind(this)})),c,d)};a.prototype.render=function(){return b("React").createElement(h,{environment:b("RelayFBEnvironment"),cacheConfig:{force:!0},query:i,variables:{ticket_link_validation_data:{ticket_uri:this.props.ticketLink,surface:b("EventsActionsLogger").Surface.PAGES_POST,oauth_id:this.props.postID,page_id:this.props.pageID},refetchCounter:this.state.refetchCounter},render:function(a){return this.$8(a)}.bind(this)})};e.exports=a}),null);