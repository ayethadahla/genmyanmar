if (self.CavalryLogger) { CavalryLogger.start_js(["Eh9le"]); }

__d("PrivacyConst",[],(function(a,b,c,d,e,f){e.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,COMPOSER_CUSTOM_INCLUSION:1067668039947624,COMPOSER_CUSTOM_EXCLUSION:1082068668536535,CAN_LIKE_AND_COMMENT_PUBLIC_PROFILE_MEDIA:1269423589794183,CAN_TAG_PUBLIC_PROFILE_MEDIA:260920744319731,CAN_DOWNLOAD_PUBLIC_PROFILE_MEDIA:410249702663051,CAN_SHARE_PUBLIC_PROFILE_MEDIA:1648969422065270,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171,FACEREC_ENROLLMENT:1709697052669794,DEVICE_PHOTO_PROCESSING:1798505450455620,SPACES_VR_OFFLINE_VISIT_PRIVACY:351913698615451,RESHARES_ON_TIMELINE_VISIBILITY:230094651068076,CAN_POST_TRIBUTES:298481070877996,CAN_SEE_TRIBUTE_POSTS:1909416226028186,RESHARE_TO_STORIES:282421212606762},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2,FRIENDS_TAGGED:6},ExpansionType:{NONE:0,TAGS_ONLY:1}}}),null);
__d("DOMClone",[],(function(a,b,c,d,e,f){a={shallowClone:function(a){return g(a,!1)},deepClone:function(a){return g(a,!0)}};function g(a,b){a=a.cloneNode(b);typeof a.__FB_TOKEN!=="undefined"&&delete a.__FB_TOKEN;typeof a.__FB_STORE!=="undefined"&&delete a.__FB_STORE;return a}e.exports=a}),null);
__d("FileInput",["cx","ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("UserAgent_DEPRECATED").ie();c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));h=c&&c.prototype;function a(a,c,d){"use strict";__p&&__p();h.constructor.call(this);this.container=a;this.control=c;a=b("DOM").scry(this.container,"a")[0];a&&a.removeAttribute("href");c=b("DOM").create("div",{className:"_3jk"},d);b("DOM").appendContent(this.control,c);this._boundHandleChange=this._handleChange.bind(this);i&&(this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this));this._setInputElement(d)}a.prototype.getValue=function(){"use strict";return this.input.value};a.prototype.getInput=function(){"use strict";return this.input};a.prototype.getContainer=function(){"use strict";return this.container};a.prototype.getControl=function(){"use strict";return this.control};a.prototype.clear=function(){"use strict";this.input.value="";if(this.input.value!==""){var a=b("DOMClone").deepClone(this.input);b("DOM").replace(this.input,a);this._setInputElement(a)}};a.prototype.destroy=function(){"use strict";this._focus.remove(),this._focus=null,this._listener.remove(),this._listener=null,i&&(this._IEKeyDownListener.remove(),this._IEKeyDownListener=null),this.container=null,this.control=null,this.input=null};a.prototype._setInputElement=function(a){"use strict";this.input=a,this._focus&&this._focus.remove(),this._focus=b("Focus").relocate(a,this.control),this._listener&&this._listener.remove(),this._listener=b("Event").listen(a,"change",this._boundHandleChange),i&&(this._IEKeyDownListener&&this._IEKeyDownListener.remove(),this._IEKeyDownListener=b("Event").listen(a,"keydown",this._boundHandleIEKeyDown))};a.prototype._handleChange=function(event){"use strict";this.inform("change",event);if(this.input){var a=this.input.form;a&&i<9&&b("Event").fire(a,"change",event)}};a.prototype._handleIEKeyDown=function(event){"use strict";if(event.keyCode===b("Keys").RETURN){event.preventDefault();var a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0);this.input.dispatchEvent(a)}};e.exports=a}),null);
__d("FileInput.react",["cx","invariant","FileInput","InlineBlock.react","React","ReactDOM","joinClasses","nullthrows"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.getFileInput=function(){return b("nullthrows")(this.$1)}.bind(this),this.focus=function(){var a=b("ReactDOM").findDOMNode(this.refs.fileInput);a instanceof HTMLInputElement&&!a.disabled&&a.focus()}.bind(this),c}a.prototype.render=function(){"use strict";var a=b("joinClasses")("_m",this.props.containerClassName),c="container",d=b("React").createElement("input",babelHelpers["extends"]({},this.props,{type:"file",className:b("joinClasses")(this.props.className,"_n"),ref:"fileInput"}),void 0);if(this.props.display==="block")return b("React").createElement("div",{className:a,ref:c},this.props.children,d);else if(this.props.display==="inline-block")return b("React").createElement(b("InlineBlock.react"),{className:a,ref:c},this.props.children,d);else return b("React").createElement("span",{className:a,ref:c},this.props.children,d)};a.prototype.componentDidMount=function(){"use strict";var a=b("ReactDOM").findDOMNode(this.refs.fileInput),c=b("ReactDOM").findDOMNode(this.refs.container);if(!(a instanceof HTMLInputElement)||!(c instanceof HTMLElement))return;var d=c.firstChild;d instanceof HTMLAnchorElement||h(0,5212);d.setAttribute("rel","ignore");this.$1=new(b("FileInput"))(c,d,a)};a.prototype.componentWillUnmount=function(){"use strict";this.$1&&(this.$1.destroy(),this.$1=null)};a.defaultProps={display:"inline-block"};e.exports=a}),null);
__d("RichTextEditorLink.react",["cx","Link.react","React","Tooltip"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.children,d=a.contentState,e=a.entityKey;a=a.offsetKey;var f="#";e!=null&&(f=d.getEntity(e).getData().url);d=f==="#"?{}:b("Tooltip").propsFor(f);return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},d,{"data-offset-key":a,"data-tooltip-alignh":"center","data-tooltip-content":f,href:f,target:"_blank",className:"_42a-"}),c)};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("BUIProgressBar.react",["cx","BUIComponent","ErrorMarker.react","Image.react","LoadingMarker.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i=248;d={background:"default",isBuffering:!1,isSuccess:!1,isError:!1,height:"medium",width:i,color:"blue",flexibleWidth:!1,padding:!0,representsWait:!0,isComplete:!1,useAltCompleteVisuals:!0};f=babelHelpers.inherits(a,b("BUIComponent"));h=f&&f.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.$BUIProgressBar3=function(){if(this.props.flexibleWidth)return{width:"100%"};var a=+this.props.width;return{width:(a>i?i:a)+"px"}}.bind(this),b}a.prototype.$BUIProgressBar1=function(){if(!this.props.icon&&!this.props.message)return null;var a;this.props.icon&&(a=b("React").createElement(b("Image.react"),{className:"__q1",src:this.props.icon}));return b("React").createElement("div",{className:"__q2","data-testid":this.props.dataTestId},a,this.props.message)};a.prototype.$BUIProgressBar2=function(){var a=this.props.background;if(this.props.isBuffering)return b("React").createElement("div",{className:"__q3",style:{width:"100%"}});var c=this.props.percentage||0;c<0&&(c=0);c>100&&(c=100);return b("React").createElement("div",{className:"_65ab"+(a==="default"?" __q6":"")+(a==="transparent"?" _65ac":"")},b("React").createElement("div",{className:"__q7",style:{width:c+"%"}}))};a.prototype.render=function(){var a=b("joinClasses")("__qa"+(this.props.isComplete===!0?" __qb":"")+(this.props.isComplete===!0&&this.props.useAltCompleteVisuals?" _6age":"")+(this.props.isError===!0?" __qc":"")+(this.props.height==="small"?" _2tr-":"")+(this.props.color==="gray"?" _2tr_":"")+(this.props.padding===!0?" _2m-z":""),this.props.className);a=b("React").createElement("div",{className:a,style:this.$BUIProgressBar3()},this.$BUIProgressBar2(),this.$BUIProgressBar1());this.props.representsWait&&!this.props.isComplete&&(a=b("React").createElement(b("LoadingMarker.react"),null,a));this.props.isError&&(a=b("React").createElement(b("ErrorMarker.react"),null,a));return a};a.propTypes={background:c.oneOf(["default","transparent"]),dataTestId:c.string,icon:c.object,isBuffering:c.bool,isError:c.bool,isSuccess:c.bool,message:c.node,percentage:c.number,height:c.oneOf(["small","medium"]),width:c.number,color:c.oneOf(["gray","blue"]),flexibleWidth:c.bool,padding:c.bool,representsWait:c.bool,isComplete:c.bool,useAltCompleteVisuals:c.bool};a.defaultProps=d;e.exports=a}),null);
__d("CloseButton.react",["cx","fbt","CloseButtonIcon","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.size||"medium",d=a.appearance||"normal",e=c==="small";c=c==="huge";var f=d==="dark";d=d==="inverted";var g=a.ajaxify||null,i=a.rel||null;c="uiCloseButton"+(e?" uiCloseButtonSmall":"")+(c?" uiCloseButtonHuge":"")+(e&&f?" uiCloseButtonSmallDark":"")+(e&&d?" uiCloseButtonSmallInverted":"")+(!e&&f?" uiCloseButtonDark":"")+(!e&&d?" uiCloseButtonInverted":"");f=h._("Close");e=Object.assign({},this.props);delete e.size;delete e.appearance;delete e.ajaxify;delete e.tooltip;delete e.ariaLabel;return b("React").createElement("a",babelHelpers["extends"]({},e,{ajaxify:g,href:"#",role:"button",title:a.ariaLabel||f,"aria-label":a.ariaLabel||f,"data-hover":a.tooltip&&"tooltip","data-skipchecker":null,"data-tooltip-alignh":a.tooltip&&"center","data-tooltip-content":a.tooltip,className:b("joinClasses")(this.props.className,c),rel:i}),b("React").createElement(b("Image.react"),{className:"uiCloseButtonHighContrast",src:b("CloseButtonIcon").icon}))};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("XUICardHeaderTitle.react",["cx","React","TabBarItem.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.itemComponent,c=null;this.props.count&&this.props.count>0&&(c=b("React").createElement("span",{className:"_c1b"},this.props.count));var d=this.props.children,e;if(a===b("TabBarItem.react")&&!c){var f=typeof d==="string"?d:b("React").isValidElement(d)&&d&&d.props.children&&d.props.children.textContent;f&&(d=b("React").createElement("div",{className:"_9hb"},d),e=b("React").createElement("div",{className:"_9hc","aria-hidden":!0},f))}return b("React").createElement(a,babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_38my")}),d,e,c,b("React").createElement("span",{className:"_c1c"}))};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={itemComponent:b("TabBarItem.react")};e.exports=a}),null);
__d("XUIDialogHeaderTitle.react",["XUICardHeaderTitle.react"],(function(a,b,c,d,e,f){e.exports=b("XUICardHeaderTitle.react")}),null);
__d("XUICardHeader.react",["cx","invariant","React","TabBar.react","XUICardHeaderTitle.react","XUICardSection.react","XUIDialogHeaderTitle.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.$1=function(){"use strict";var a=0;b("React").Children.forEach(this.props.children,function(c){c&&(c.type===b("XUICardHeaderTitle.react")||c.type===b("XUIDialogHeaderTitle.react")||h(0,1264),a++)});return a};a.prototype.$2=function(){"use strict";this.props.type==="primary"&&(this.props.itemCount==null||h(0,1265));return this.props.itemCount!=null?b("React").createElement("span",{className:"_5dw7"},this.props.itemCount):null};a.prototype.$3=function(){"use strict";return this.props.link?b("React").createElement("span",{className:"_5dw8"},this.props.link):null};a.prototype.$4=function(){"use strict";var a=this.$1();if(a===1)return b("React").Children.map(this.props.children,function(a){return b("React").cloneElement(a,{itemComponent:"span"})});else return b("React").createElement(b("TabBar.react"),{activeTabKey:this.props.activeTabKey,className:"_1ng1",defaultActiveTabKey:this.props.defaultActiveTabKey,onTabClick:this.props.onTabClick,shouldCalculateVisibleTabs:this.props.shouldCalculateVisibleTabs},this.props.children)};a.prototype.render=function(){"use strict";var a=(this.props.type==="primary"?"_5dw9":"")+" _5dwa"+(this.props.type==="secondary"?" _5dwb":"")+(this.$1()!==1?" _3s3z":"");return b("React").createElement(b("XUICardSection.react"),{className:b("joinClasses")(this.props.className,a)},this.$4(),this.$2(),this.$3(),b("React").createElement("div",{className:"_3s3-"}))};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={onTabClick:function(){return!0},type:"secondary"};e.exports=a}),null);
__d("XUIDialogHeader.react",["cx","fbt","React","XUICardHeader.react","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null;this.props.showCloseButton===!0&&(a=b("React").createElement(b("XUICloseButton.react"),{label:this.props.closeButtonText,className:"layerCancel _51-t"}));return b("React").createElement(b("XUICardHeader.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-i0"),link:a,type:"primary"}),this.props.children)};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={closeButtonText:h._("Close"),onTabClick:function(){return!0},showCloseButton:!0};e.exports=a}),null);
__d("XUITypeaheadTextOnlyView.react",["cx","React","TypeaheadViewItem","TypeaheadViewPropTypes"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("React").createClass({displayName:"XUITypeaheadTextOnlyViewItem",mixins:[b("TypeaheadViewItem").Mixin],propTypes:b("TypeaheadViewItem").propTypes,render:function(){var a=this.props.entry,c="_599m"+(this.props.highlighted?" _599n":"");return b("React").createElement("li",{"aria-label":a.getTitle(),"aria-selected":this.props.highlighted,className:c,key:a.getUniqueID(),onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,title:a.getTitle()},b("React").createElement("div",{className:"_599p"},a.getTitle()))}});c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){var c=a===this.props.highlightedEntry;return b("React").createElement(i,{entry:a,highlighted:c,key:a.getUniqueID(),onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight})}.bind(this),c}a.prototype.render=function(){"use strict";var a="_599r"+(this.props.entries.length?"":" _599s")+(this.props.isRightToLeft?" _1c5r":"")+(this.props.scrolled?" _62w5":"");return b("React").createElement("ul",{className:a,id:this.props.controlleeID,role:this.props.role},this.props.entries.map(this.$1))};a.propTypes=b("TypeaheadViewPropTypes");a.defaultProps={role:"listbox"};e.exports=a}),null);
__d("PhotosUploadWaterfallMixin",["PhotosUploadWaterfall","emptyFunction"],(function(a,b,c,d,e,f){a=b("emptyFunction");c={getUploaderApp:a,getWaterfallID:a,getAdditionalData:function(){return{}},logWaterfallStep:function(a,c,d){b("PhotosUploadWaterfall").sendSignal(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)},logWaterfallStepUsingBanzai:function(a,c,d){b("PhotosUploadWaterfall").sendBanzai(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)}};e.exports=c}),null);
__d("PhotoSourceTypes",["keyMirror"],(function(a,b,c,d,e,f){e.exports=b("keyMirror")({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null})}),null);
__d("BaseSelectionContainer",[],(function(a,b,c,d,e,f){__p&&__p();var g=0;function a(){"use strict";this.$1=(g++).toString()}a.prototype.getSelectionContainerID=function(){"use strict";return this.$1};a.prototype.getSource=function(){"use strict";throw new Error("This must be implemented by the child class")};a.prototype.getName=function(){"use strict";return null};a.prototype.getSize=function(){"use strict";return null};a.prototype.hasPlaceholderUI=function(){"use strict";throw new Error("This must be implemented by the child class")};e.exports=a}),null);
__d("SelectionSource",["PhotoSourceTypes"],(function(a,b,c,d,e,f){var g={FILE:"file",FLASH:"flash",VAULT:"vault",SUGGESTIONS:"suggestions",POSTED_PHOTOS:"posted_photos",PAGES_POSTED_PHOTOS:"pages_posted_photos",toPhotoSourceType:function(a){switch(a){case g.FILE:case g.FLASH:return b("PhotoSourceTypes").COMPUTER;case g.VAULT:return b("PhotoSourceTypes").SYNCED_PHOTOS;case g.SUGGESTIONS:return b("PhotoSourceTypes").SUGGESTIONS;case g.POSTED_PHOTOS:return b("PhotoSourceTypes").POSTED_PHOTOS;case g.PAGES_POSTED_PHOTOS:return b("PhotoSourceTypes").PAGES_POSTED_PHOTOS;default:throw new Error("No mapping for SelectionSource: "+a)}}};e.exports=g}),null);
__d("FileSelectionContainer",["BaseSelectionContainer","SelectionSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("BaseSelectionContainer"));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this.$FileSelectionContainer1=a}a.prototype.getFile=function(){"use strict";return this.$FileSelectionContainer1};a.prototype.getSource=function(){"use strict";return b("SelectionSource").FILE};a.prototype.getName=function(){"use strict";return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name};a.prototype.getSize=function(){"use strict";return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size};a.prototype.hasPlaceholderUI=function(){"use strict";return!1};e.exports=a}),null);
__d("FilePickerEvent",[],(function(a,b,c,d,e,f){e.exports={BEGIN:"FilePickerEvent/BEGIN",SELECT_START:"FilePickerEvent/SELECT_START",SELECTED:"FilePickerEvent/SELECTED_FILES",ALBUM_LIMIT_EXCEEDED:"FilePickerEvent/ALBUM_LIMIT_EXCEEDED",SESSION_LIMIT_EXCEEDED:"FilePickerEvent/SESSION_LIMIT_EXCEEDED",SELECT_CANCELED:"FilePickerEvent/SELECT_CANCELED",FALLBACK:"FilePickerEvent/FALLBACK"}}),null);
__d("PUWApplications",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WEB_SIMPLE:"web_simple",WEB_FLASH:"web_flash",WEB_HTML5:"web_html5",WEB_COMPOSER:"web_composer",WEB_ARCHIVE:"web_archive",WEB_MESSENGER:"web_messenger",WEB_OMNIPICKER:"web_omnipicker",WEB_MUSE_OMNIPICKER:"web_muse_omnipicker",WEB_SAY_THANKS:"web_say_thanks",WEB_GOODWILL_CAMPAIGN_OMNIPICKER:"web_goodwill_campaign_omnipicker",WEB_PRODUCT_PHOTO_OMNIPICKER:"web_product_photo_omnipicker",WEB_PAGES_MESSENGER:"web_pages_messenger",WEB_M_ZERO:"web_m_zero",WEB_M_BASIC:"web_m_basic",WEB_M_TOUCH:"web_m_touch",WEB_REACT_COMPOSER:"web_react_composer",MOBILE_FB4IOS:"mobile_fb4ios",MOBILE_FB4IOS_SNAP:"mobile_fb4ios_snap",MOBILE_FB4A:"mobile_fb4a",MOBILE_PMA_ANDROID:"mobile_pma_android",MOBILE_PMA_IOS:"mobile_pma_ios",THIRD_PARTY:"third_party"})}),null);
__d("PUWSteps",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLIENT_FLOW_BEGIN:"client_flow_begin",CLIENT_SELECT_BEGIN:"client_select_begin",CLIENT_SELECT_SUCCESS:"client_select_success",CLIENT_SELECT_CANCEL:"client_select_cancel",CLIENT_SELECT_FAIL:"client_select_fail",CLIENT_FLOW_POST:"client_flow_post",CLIENT_TRANSFER_BATCH_BEGIN:"client_transfer_batch_begin",CLIENT_UPLOAD_BEGIN:"client_upload_begin",CLIENT_ATTACH_PHOTO:"client_attach_photo",CLIENT_PROCESS_BEGIN:"client_process_begin",CLIENT_PROCESS_SUCCESS:"client_process_success",CLIENT_PROCESS_CANCEL:"client_process_cancel",CLIENT_PROCESS_SKIP:"client_process_skip",CLIENT_PROCESS_FAIL:"client_process_fail",CLIENT_PROCESS_UNAVAILABLE:"client_process_unavailable",CLIENT_SPHERICAL_CHECK_SUCCESS:"client_spherical_check_success",CLIENT_SPHERICAL_CHECK_FAIL:"client_spherical_check_fail",CLIENT_TRANSFER_ENQUEUE:"client_transfer_enqueue",CLIENT_TRANSFER_BEGIN:"client_transfer_begin",CLIENT_TRANSFER_SUCCESS:"client_transfer_success",CLIENT_TRANSFER_CANCEL:"client_transfer_cancel",CLIENT_TRANSFER_FAIL:"client_transfer_fail",CLIENT_TRANSFER_MANUAL_RETRY:"client_transfer_manual_retry",CLIENT_UPLOAD_SUCCESS:"client_upload_success",CLIENT_UPLOAD_FAIL:"client_upload_fail",CLIENT_UPLOAD_CANCEL:"client_upload_cancel",CLIENT_UPLOAD_REMOVE:"client_upload_remove",CLIENT_FACEREC_BEGIN:"client_facerec_begin",CLIENT_FACEREC_SUCCESS:"client_facerec_success",CLIENT_FACEREC_FAIL:"client_facerec_fail",CLIENT_PHOTO_PREVIEW_OPEN:"client_photo_preview_open",CLIENT_PHOTO_PREVIEW_CLOSE:"client_photo_preview_close",CLIENT_TRANSFER_BATCH_SUCCESS:"client_transfer_batch_success",CLIENT_TRANSFER_BATCH_CANCEL:"client_transfer_batch_cancel",CLIENT_TRANSFER_BATCH_FAIL:"client_transfer_batch_fail",CLIENT_PUBLISH_ENQUEUE:"client_publish_enqueue",CLIENT_PUBLISH_BEGIN:"client_publish_begin",CLIENT_PUBLISH_SUCCESS:"client_publish_success",CLIENT_PUBLISH_FAIL:"client_publish_fail",CLIENT_ATTEMPT_FAIL:"client_attempt_fail",CLIENT_FLOW_SUCCESS:"client_flow_success",CLIENT_FLOW_FATAL:"client_flow_fatal",CLIENT_FLOW_GIVEUP:"client_flow_giveup",CLIENT_FLOW_CANCEL:"client_flow_cancel",CLIENT_FLOW_FAIL:"client_flow_fail",CLIENT_FLOW_INCOMPLETE:"client_flow_incomplete",CLIENT_ATTEMPT_INCOMPLETE:"client_attempt_incomplete",CLIENT_FLOW_RETRY:"client_flow_retry",CLIENT_ATTEMPT_RETRY:"client_attempt_retry",CLIENT_DIAGNOSTIC:"client_diagnostic",CLIENT_QUALITY_SWITCH:"client_quality_switch",CLIENT_CANCEL_SURVEY:"client_cancel_survey",CLIENT_PHOTO_EDIT_BEGIN:"client_photo_edit_begin",CLIENT_PHOTO_EDIT_SUCCESS:"client_photo_edit_success",SERVER_UPLOAD_BEGIN:"server_upload_begin",SERVER_UPLOAD_SUCCESS:"server_upload_success",SERVER_UPLOAD_FAIL:"server_upload_fail",SERVER_PUBLISH_BEGIN:"server_publish_begin",SERVER_PUBLISH_SUCCESS:"server_publish_success",SERVER_PUBLISH_FAIL:"server_publish_fail",SERVER_RECEIVER_BEGIN:"server_receiver_begin",SERVER_RECEIVER_PUBLISH_BEGIN:"server_receiver_publish_begin",SERVER_SENTRY_RESTRICTION:"server_sentry_restriction"})}),null);
__d("PhotosUploadWaterfallXMixin",["invariant","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","randomInt"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new Map();function i(a,c){var d={};a.client_time=Math.round(Date.now()/1e3);b("PhotosUploadWaterfallXConfig").retryBanzai&&(d.retry=!0,a.nonce=b("randomInt")(4294967296));b("Banzai").post(b("PhotosUploadWaterfallXConfig").banzaiRoute,a,d);c&&setTimeout(c,0)}function j(a,c){if(b("PhotosUploadWaterfallXConfig").useBanzai)i(a,c);else{a=new(b("AsyncSignal"))(b("PhotosUploadWaterfallXConfig").loggingEndpoint,{data:JSON.stringify(a)}).setHandler(c);b("PhotosUploadWaterfallXConfig").timeout&&a.setTimeout(10*1e3);a.send()}}e.exports={logStep:function(a,b,c){var d=this.getWaterfallID&&this.getWaterfallID(),e=this.getWaterfallAppName&&this.getWaterfallAppName();if(!d||!e)return;j(babelHelpers["extends"]({step:a,qn:d,uploader:e,ref:this.getWaterfallSource&&this.getWaterfallSource()},b),c)},logPUWStep:function(a,b,c,d,e,f,g){if(f&&f.logOncePerSession){h.has(b)||h.set(b,new Set());if(h.get(b).has(a))return;h.get(b).add(a)}j(Object.assign({step:a,qn:b,uploader:c,ref:d},e),g)}}}),null);
__d("HTML5FilePicker",["cx","ArbiterMixin","BrowserSupport","CSS","DOM","FilePickerEvent","FileSelectionContainer","Keys","Parent","PhotosUploadID","PhotosUploadWaterfall","PhotosUploadWaterfallMixin","PhotosUploadWaterfallXMixin","PUWApplications","PUWSteps","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();this._config=babelHelpers["extends"]({accept:void 0,multiple:void 0},c);this._button=a;this._beginInformed=!1;if(!b("BrowserSupport").hasFileAPI()){this.logStep(b("PUWSteps").CLIENT_PROCESS_UNAVAILABLE,{error:"no_file_api"});if(Object.prototype.hasOwnProperty.call(this._config,"fallbackFunction")){this._config.fallbackFunction.call(this);return}return}this._subscriptions=[];c=this._config.input||b("DOM").create("input",{type:"file",className:"_n"});Object.prototype.hasOwnProperty.call(this._config,"accept")&&(c.accept=this._config.accept);Object.prototype.hasOwnProperty.call(this._config,"multiple")&&(c.multiple=this._config.multiple);Object.prototype.hasOwnProperty.call(this._config,"title")&&(c.title=this._config.title);a=b("DOM").create("label",{className:"accessible_elem","for":b("getOrCreateDOMID")(c)},c.title);a=b("DOM").create("div",{className:"_3jk"},[a,c]);b("CSS").addClass(this._button,"_m");b("DOM").appendContent(this._button,a);this._button.setAttribute("rel","ignore");this._bindInput(c);this._button.onkeydown=function(event){event.keyCode===b("Keys").RETURN&&(this._input.click(),event&&event.stopPropagation&&event.stopPropagation())}.bind(this);a=b("Parent").byClass(this._button,"addPhotosDisabled");a&&(b("CSS").removeClass(a,"addPhotosDisabled"),b("CSS").addClass(a,"addPhotosEnabled"))}Object.assign(a.prototype,b("ArbiterMixin"),b("PhotosUploadWaterfallMixin"),b("PhotosUploadWaterfallXMixin"),{getUploaderApp:function(){return b("PhotosUploadWaterfall").APP_HTML5},getWaterfallID:function(){return this._config.qn},getWaterfallAppName:function(){return b("PUWApplications").WEB_HTML5},getWaterfallSource:function(){return this._config.ref},getSwfID:function(){return null},_constructFileList:function(){var a=Array.from(this._input.files);a.forEach(function(a){a.uploadID=b("PhotosUploadID").getNewID()});return a},_constructFileSelectionContainerList:function(){var a=Array.from(this._input.files);return a.map(function(a){return new(b("FileSelectionContainer"))(a)})},cleanup:function(){this._input&&(this._input.onclick=null,this._input.onchange=null),this._button&&(this._button.onkeydown=null)},_bindInput:function(a){this.cleanup(),a.onclick=function(){this.logWaterfallStep(b("PhotosUploadWaterfall").SELECT_START),this._beginInformed||(this._beginInformed=!0,this.inform(b("FilePickerEvent").BEGIN||"FilePickerEvent/BEGIN")),this.inform(b("FilePickerEvent").SELECT_START)}.bind(this),a.onchange=function(){this.inform(b("FilePickerEvent").SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()}),this._bindInput(this._input.cloneNode(!1))}.bind(this),this._input&&b("DOM").replace(this._input,a),this._input=a}});e.exports=a}),null);
__d("PrivacySelectorNewDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();var g,h="selector";g=babelHelpers.inherits(a,b("Dispatcher_DEPRECATED"));g&&g.prototype;a.prototype.handleUpdateFromSelector=function(a){"use strict";this.dispatch(babelHelpers["extends"]({payloadSource:h},a))};function a(){"use strict";g.apply(this,arguments)}c=new a();e.exports=c}),null);
__d("FBStoriesPrivacySelectorLoadingPlaceholder.react",["fbt","React","XUIButton.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{size:"medium",haschevron:!1,label:g._("Loading..."),image:b("React").createElement(b("XUISpinner.react"),null),onClick:function(a){a.stopPropagation()}}))};e.exports=a}),null);
__d("FBStoriesPrivacySelectorLoadingContainerBootloader.react",["BootloadOnRender.react","FBStoriesPrivacySelectorLoadingPlaceholder.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a){return b("React").createElement(b("BootloadOnRender.react"),{loader:b("JSResource")("FBStoriesPrivacySelectorLoadingContainer.react").__setRef("FBStoriesPrivacySelectorLoadingContainerBootloader.react"),placeholder:b("React").createElement(b("FBStoriesPrivacySelectorLoadingPlaceholder.react"),null),component:b("React").createElement(b("LazyComponent.react"),a)})};e.exports=a}),null);
__d("AbstractCheckboxInput.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=b("React").createRef(),c}a.prototype.render=function(){"use strict";var a=this.props,c=a.className,d=a.useLabel,e=a["data-testid"];a=babelHelpers.objectWithoutProperties(a,["className","useLabel","data-testid"]);return!d?b("React").createElement("input",babelHelpers["extends"]({},a,{"data-testid":e,className:c,ref:this.$1,type:"checkbox"})):b("React").createElement("label",{className:b("joinClasses")(c,"_kv1"),"data-testid":e},b("React").createElement("input",babelHelpers["extends"]({},a,{className:null,ref:this.$1,type:"checkbox"})),b("React").createElement("span",{className:"_66ul","data-hover":this.props.tooltip!=null?"tooltip":null,"data-tooltip-content":this.props.tooltip}))};a.prototype.focusInput=function(){"use strict";this.$1.current&&this.$1.current.focus()};a.prototype.blurInput=function(){"use strict";this.$1.current&&this.$1.current.blur()};a.prototype.setIndeterminate=function(){"use strict";this.$1.current&&(this.$1.current.indeterminate=!0)};a.prototype.isIndeterminate=function(){"use strict";return this.$1.current?this.$1.current.indeterminate:!1};a.defaultProps={useLabel:!0};e.exports=a}),null);
__d("FBToggleSwitch.react",["cx","AbstractCheckboxInput.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.$1=function(a){this.props.onToggle&&this.props.disabled!==!0&&this.props.onToggle(a.target.checked)}.bind(this),b}a.prototype.render=function(){var a="_ypo"+(this.props.animate?" _ypp":"")+(this.props.disabled?" _ypq":"")+(this.props.size==="large"?" _1dfi":""),c,d;this.props.indeterminate===!0?d=this.props.checked:c=this.props.checked;return b("React").createElement(b("AbstractCheckboxInput.react"),babelHelpers["extends"]({},this.props,{checked:c,className:b("joinClasses")(this.props.className,a),defaultChecked:d,onChange:this.$1}),void 0)};a.propTypes={animate:c.bool,indeterminate:c.bool,onToggle:c.func,disabled:c.bool,tooltip:c.oneOfType([c.node,c.string]),size:c.oneOf(["normal","large"])};e.exports=a}),null);
__d("createMentionEntityForContentState",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=b.getType().toLowerCase();if(c==="hashtag")return a.createEntity("HASHTAG","IMMUTABLE");var d=c==="user"||c==="fb4c"?"SEGMENTED":"IMMUTABLE",e=b.getAuxiliaryData();return a.createEntity("MENTION",d,{id:b.getUniqueID(),uri:b.getURI(),isWeak:e&&e.renderType==="non_member",type:c})}e.exports=a}),null);
__d("range",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){c=c==null||c===0?a<b?1:-1:c;var d=-1;b=Math.max(Math.ceil((b-a)/c),0);var e=Array(b);a=a;while(b--)e[++d]=a,a+=c;return e}e.exports=a}),null);
__d("XPrivacyCustomDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/privacy/custom_dialog/",{id:{type:"String",required:!0},option_id:{type:"String",required:!0},autosave:{type:"Bool",defaultValue:!1},explain_tags:{type:"Bool",defaultValue:!1},limit_community:{type:"Bool",defaultValue:!1},limit_facebook:{type:"Bool",defaultValue:!1},limit_fof:{type:"Bool",defaultValue:!1},limit_tagexpand:{type:"Bool",defaultValue:!1},is_new_privacy_selector:{type:"Bool",defaultValue:!1},render_location_enum:{type:"Enum",enumType:1},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},saved_custom_opt_in:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);