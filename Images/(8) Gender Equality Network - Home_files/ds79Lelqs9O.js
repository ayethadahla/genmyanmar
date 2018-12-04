if (self.CavalryLogger) { CavalryLogger.start_js(["UkB0z"]); }

__d("AdsCommonLocalMapUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a="#4D6AA4";b="#3b5998";c="#dc3847";d=19;f=1;var g={KILOMETERS_TO_METERS:1e3,MILES_TO_METERS:1609.34,ZOOM_MAX:d,ZOOM_MIN:f,LEAFLET_TARGET_CIRCLE_OPTIONS:{color:a,clickable:!1,fillOpacity:30/255,opacity:95/255,weight:1},LEAFLET_TARGET_MARKER_OPTIONS:{color:"#fff",fillColor:a,fillOpacity:1,opacity:1,radius:4,weight:2},LEAFLET_TARGET_REGION_INCLUDE_OPTIONS:{color:b,clickable:!1,opacity:.5,fillColor:b,fillOpacity:.11,weight:1,noClip:!0},LEAFLET_TARGET_HIGHLIGHT_REGION_INCLUDE_OPTIONS:{color:b,clickable:!1,opacity:.5,fillColor:b,fillOpacity:.22,weight:1,noClip:!0},LEAFLET_TARGET_REGION_EXCLUDE_OPTIONS:{color:c,clickable:!1,opacity:.5,fillColor:c,fillOpacity:.11,weight:1,noClip:!0},LEAFLET_TARGET_HIGHLIGHT_REGION_EXCLUDE_OPTIONS:{color:c,clickable:!1,opacity:.5,fillColor:c,fillOpacity:.22,weight:1,noClip:!0},LEAFLET_TILES_OPTIONS:{maxZoom:d,minZoom:f},LEAFLET_MARKER_ICON_OPTIONS:{iconSize:[25,32],iconAnchor:[12,32]},LEAFLET_MARKER_LOCATION_PIN_ICON_SELECTED_OPTIONS:{iconSize:[22,27],iconAnchor:[11,27]},LEAFLET_MARKER_LOCATION_PIN_ICON_NOT_SELECTED_OPTIONS:{iconSize:[13,13],iconAnchor:[6,13]},getBestZoom:function(a,b,c,d,e){b=a/180*Math.PI;a=Math.min(c,d);c=6e4/800*a/e*Math.cos(b);d=function(a){return Math.log(a)/Math.LN2};a=10+Math.floor(d(c));return a},getRadiusInMeters:function(a,b){return b==="kilometer"?a*g.KILOMETERS_TO_METERS:a*g.MILES_TO_METERS}};e.exports=g}),null);
__d("AdsTargetingLocationInlineMapUtils",["GeoCoordinates","LeafletUtils","LeafletView","LocationConstants","leaflet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e4;function h(a){__p&&__p();var c;a.forEach(function(a){__p&&__p();var d;if(a.center&&a.radius){var e=a.center,f=a.radius;d=b("LeafletUtils").circleBounds(b("LeafletUtils").toLatLng(e),f)}else a.coordinateLists&&a.coordinateLists.size?a.coordinateLists.forEach(function(a){a=a.map(function(a){return b("LeafletUtils").toLatLng(new(b("GeoCoordinates"))(a.latitude,a.longitude))}).toArray();a=b("leaflet").latLngBounds(a);d=void 0===d?a:d.extend(a)}):a.center&&(d=b("LeafletUtils").circleBounds(b("LeafletUtils").toLatLng(a.center),g));void 0===c?c=d:c.extend(d)});return c}function a(a,c){c=h(c);return!c?a:a.setCenter(b("LeafletUtils").fromLatLng(c.getCenter()))}function c(a,c){return new(b("LeafletView"))({center:a.center,zoom:b("LocationConstants").getNextZoomRangeStart(c)})}function d(a){return a.type===b("LocationConstants").CUSTOM_LOCATIONS&&a.custom_type===b("LocationConstants").CUSTOM_TYPE_MULTI_CITY}f={centerToLocations:a,getAllBounds:h,isLocationForMultiCity:d,zoomToNextRange:c};e.exports=f}),null);
__d("AdsTargetingLocationMapPopup",["cx","FbtResultBase","React","isEmpty","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={showingPopoverMenu:!1},this.$1=function(){var a=b("isEmpty")(this.props.menuItems);return b("React").createElement("div",null,b("React").createElement("div",{className:(a?"_2e-k":"")+(a?"":" _37vz")},this.props.label),a?null:this.$2())}.bind(this),this.$5=function(a){return!!(this.props.menuItemsDisabled&&this.props.menuItemsDisabled[a])}.bind(this),this.$3=function(){this.setState({showingPopoverMenu:!this.state.showingPopoverMenu})}.bind(this),this.$6=function(a){this.setState({showingPopoverMenu:!1}),this.props.onMenuItemSelect(a,this.props.location)}.bind(this),c}a.prototype.render=function(){return b("React").createElement("div",{className:"_37vy"},this.$1())};a.prototype.$2=function(){var a="_37v-";return b("React").createElement("div",{className:"_37v_"},b("React").createElement("button",{className:a,type:"button",value:"locationpopoverbutton",onClick:this.$3},this.props.children),this.$4())};a.prototype.$4=function(){if(!this.state.showingPopoverMenu)return null;var a=b("nullthrows")(this.props.menuItems),c="_37w0",d=Object.keys(a).map(function(d){var e=this.$6.bind(this,d),f=a[d],g=this.$5(d);return b("React").createElement("button",{className:c,disabled:g,key:d,value:"locationpopoveritem",onClick:e},f)}.bind(this));return b("React").createElement("div",{className:"_37w1"},d)};a.propTypes={label:c.oneOfType([c.string,c.instanceOf(b("FbtResultBase"))]).isRequired,location:c.object.isRequired,menuItems:c.object,menuItemsDisabled:c.object,onMenuItemSelect:c.func.isRequired};e.exports=a}),null);
__d("AdsTargetingLocationTypeAliases",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({DEFAULT:null,INVOKE_CALLBACK_ON_SINGLE_NODE:null,NONE:null,SHOW_POPUP:null,ZOOM_TO_MARKER:null,ZOOM_TO_NEXT_RANGE:null});c={CLICK_BEHAVIORS:a};e.exports=c}),null);
__d("LeafletCircleMarker.react",["GeoCoordinates","LeafletLayer.react","LeafletPath","LeafletUtils","React","leaflet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.mutate=function(a,c,d){__p&&__p();var e=c.options||{},f=e.radius;e=babelHelpers.objectWithoutProperties(e,["radius"]);var g=d.options||{},h=g.prevRadius;g=babelHelpers.objectWithoutProperties(g,["prevRadius"]);if(!b("LeafletPath").mutateOptions(a,e,g))return!1;b("LeafletLayer.react").mutateEventHandlers(a,c.eventHandlers,d.eventHandlers);c.center!==d.center&&a.setLatLng(b("LeafletUtils").toLatLng(c.center));f!==h&&a.setRadius(c.radius);return!0};a.toLayer=function(a){var c=b("leaflet").circleMarker(b("LeafletUtils").toLatLng(a.center),a.options);b("LeafletLayer.react").addEventHandlers(c,a.eventHandlers);return c};a.prototype.render=function(){return null};function a(){g.apply(this,arguments)}a.propTypes={options:c.object,eventHandlers:c.object,center:c.instanceOf(b("GeoCoordinates")).isRequired};e.exports=a}),null);
__d("LeafletPolyline.react",["immutable","LeafletPath","LeafletUtils","React","areEqual","leaflet","nearlyEqualNumbers"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("React").PropTypes;g=babelHelpers.inherits(h,b("React").Component);g&&g.prototype;h.coordinatesToLatLngs=function(a){return a.toSeq().map(b("LeafletUtils").toLatLng).toArray()};h.mutate=function(a,c,d){if(!h.mutateOptions(a,c.options,d.options))return!1;d&&!b("areEqual")(d,c)&&c.popup&&(a.unbindPopup(),a.bindPopup(c.popup.type.toLayer(c.popup.props,a)));b("immutable").is(c.coordinates,d.coordinates)||a.setLatLngs(h.coordinatesToLatLngs(c.coordinates));return!0};h.toLayer=function(a){var c=b("leaflet").polyline(h.coordinatesToLatLngs(a.coordinates),a.options);a.popup&&c.bindPopup(a.popup.type.toLayer(a.popup.props,c));return c};h.mutateOptions=function(a,c,d){c=c||{};var e=c.smoothFactor,f=c.noClip;c=babelHelpers.objectWithoutProperties(c,["smoothFactor","noClip"]);d=d||{};var g=d.smoothFactor,h=d.noClip;d=babelHelpers.objectWithoutProperties(d,["smoothFactor","noClip"]);if(!b("LeafletPath").mutateOptions(a,c,d))return!1;return!b("nearlyEqualNumbers")(g,e)||h!==f?!1:!0};h.prototype.render=function(){return null};function h(){g.apply(this,arguments)}h.propTypes={options:a.object,coordinates:a.instanceOf(b("immutable").List).isRequired,popup:a.element};e.exports=h}),null);
__d("LeafletMultiPolyline.react",["immutable","LeafletLayer.react","LeafletPolyline.react","LeafletUtils","React","leaflet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("React").PropTypes;g=babelHelpers.inherits(h,b("React").Component);g&&g.prototype;h.coordinateListsToLatLngs=function(a){return a.toSeq().map(function(a){return a.toSeq().map(function(a){if(a instanceof b("immutable").List)return a.toSeq().map(b("LeafletUtils").toLatLng).toArray();else return b("LeafletUtils").toLatLng(a)}).toArray()}).toArray()};h.mutate=function(a,c,d){if(!b("LeafletPolyline.react").mutateOptions(a,c.options,d.options))return!1;b("LeafletLayer.react").mutateEventHandlers(a,c.eventHandlers,d.eventHandlers);b("immutable").is(c.coordinateLists,d.coordinateLists)||a.setLatLngs(h.coordinateListsToLatLngs(c.coordinateLists));return!0};h.toLayer=function(a){var c=b("leaflet").multiPolyline(h.coordinateListsToLatLngs(a.coordinateLists),a.options);b("LeafletLayer.react").addEventHandlers(c,a.eventHandlers);return c};h.prototype.render=function(){return null};function h(){g.apply(this,arguments)}h.propTypes={options:a.object,eventHandlers:a.object,coordinateLists:a.instanceOf(b("immutable").List).isRequired};e.exports=h}),null);
__d("LeafletTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MULTIPOLYGON:"leaflet_multipolygon"})}),null);
__d("LeafletMultiPolygon.react",["LeafletLayer.react","LeafletMultiPolyline.react","LeafletTestIDs","LeafletUtils","React","areEqual","immutable","leaflet"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.mutate=function(a,c,d){"use strict";var e=c.popup;e&&d&&!b("areEqual")(d,c)?(a.closePopup(),a.unbindPopup(),a.bindPopup(e.type.toLayer(e.props,a)),a.openPopup(b("LeafletUtils").toLatLng(e.props.coordinates))):!e&&d.popup&&(a.closePopup(),a.unbindPopup());return b("LeafletMultiPolyline.react").mutate(a,c,d)};a.toLayer=function(a){"use strict";var c=b("leaflet").multiPolygon(b("LeafletMultiPolyline.react").coordinateListsToLatLngs(a.coordinateLists),babelHelpers["extends"]({"data-testid":b("LeafletTestIDs").MULTIPOLYGON},a.options)),d=a.popup;d&&(c.bindPopup(d.type.toLayer(d.props,c)),c.openPopup(b("LeafletUtils").toLatLng(d.props.coordinates)));b("LeafletLayer.react").addEventHandlers(c,a.eventHandlers);return c};a.prototype.render=function(){"use strict";return null};function a(){"use strict";g.apply(this,arguments)}a.propTypes={options:c.object,eventHandlers:c.object,coordinateLists:c.instanceOf(b("immutable").List).isRequired};e.exports=a}),null);
__d("AdsTargetingLocationInlineMap.react",["cx","fbt","ix","AdsCommonLocalMapUtils","AdsInterfacesLogger","AdsInterfacesLoggerConfigColumns","AdsTargetingLocationLoggingEvents","AdsTargetingLocationMapPopup","BanzaiODS","FBLogger","FBOverlayElement.react","FBTilesMap.react","FBTilesMapZoomOverlay__DEPRECATED.react","GeoCoordinates","Image.react","LeafletCircle.react","LeafletCircleMarker.react","LeafletMarker.react","LeafletMultiPolygon.react","LeafletPopup.react","LeafletUtils","LeafletView","LocationConstants","React","SUIBusinessTheme","SUIButton.react","TilesMapConfig","XUIButton.react","areEqual","emptyFunction","immutable","leaflet","performanceNow","AdsTargetingLocationInlineMapUtils","AdsTargetingLocationTypeAliases"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;var k=b("AdsTargetingLocationInlineMapUtils").centerToLocations,l=b("AdsTargetingLocationInlineMapUtils").getAllBounds,m=b("AdsTargetingLocationInlineMapUtils").isLocationForMultiCity,n=b("AdsTargetingLocationInlineMapUtils").zoomToNextRange,o=b("AdsTargetingLocationTypeAliases").CLICK_BEHAVIORS,p=new(b("LeafletView"))({center:new(b("GeoCoordinates"))(0,0),zoom:1}),q=1,r=2,s=b("React").createElement(b("Image.react"),{src:i("22149"),width:"12"}),t=b("React").createElement(b("Image.react"),{src:i("22118"),width:"16"}),u={INCLUDE:h._("Include"),EXCLUDE:h._("Exclude"),DELETE:h._("Delete")},v={DELETE:h._("Delete")},w=0;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={locating:!1,mapOptions:{scrollWheelZoom:!this.props.disableScrollWheelZoom,maxBounds:this.props.maxBounds},size:null,view:this.props.view||p,popupLocationKey:null},this.$1=function(a){__p&&__p();if(a.coordinateLists.size)return null;if(!a.geoLocation.type)return null;var c=b("LocationConstants").getPluralLocationType(a.geoLocation.type);switch(c){case b("LocationConstants").COUNTRIES:return new(b("LeafletView"))({center:a.center,zoom:r});case b("LocationConstants").COUNTRY_GROUPS:return new(b("LeafletView"))({center:a.center,zoom:q});case b("LocationConstants").CUSTOM_LOCATIONS:return a.geoLocation.custom_type===b("LocationConstants").CUSTOM_TYPE_MULTI_CITY?new(b("LeafletView"))({center:a.center,zoom:a.geoLocation.country?r:q}):null;default:return null}},this.$8=function(a,c){if(c)return a?b("AdsCommonLocalMapUtils").LEAFLET_TARGET_HIGHLIGHT_REGION_EXCLUDE_OPTIONS:b("AdsCommonLocalMapUtils").LEAFLET_TARGET_HIGHLIGHT_REGION_INCLUDE_OPTIONS;else return a?b("AdsCommonLocalMapUtils").LEAFLET_TARGET_REGION_EXCLUDE_OPTIONS:b("AdsCommonLocalMapUtils").LEAFLET_TARGET_REGION_INCLUDE_OPTIONS},this.$9=function(a,b,c){if(b)if(a)return c?"_3ag7":"_s6h";else return c?"_3ag8":"_s6i";else if(a)return c?"_3ag9":"_3i44";else return c?"_3aga":"_3i45"},this.$4=function(a,c,d,e){__p&&__p();var f=this.props.menuItems||(this.props.onlyInclusion?v:u),g;this.props.menuItems||(g=c?{INCLUDE:!1,EXCLUDE:!0,DELETE:!1}:{INCLUDE:!0,EXCLUDE:!1,DELETE:!1});var h={};c||this.props.excludedLocations.forEach(function(a,c){c=a.geoLocation;c.type===b("LocationConstants").CUSTOM_LOCATIONS&&c.custom_type===b("LocationConstants").CUSTOM_TYPE_MULTI_CITY&&(h[c.key]=!0)});a.forEach(function(a,i){__p&&__p();if(!c&&h[a.geoLocation.key]===!0)return;var j=this.state.popupLocationKey===a.geoLocation.key;i=this.props.highlightLocations.contains(a)||j;var k=a.geoLocation.type===b("LocationConstants").CUSTOM_LOCATIONS&&a.geoLocation.custom_type===b("LocationConstants").CUSTOM_TYPE_MULTI_CITY,l=(i?"h":"")+(c?"-":"")+a.geoLocation.key,n=this.$8(c,i),p=[],q=b("React").createElement(b("LeafletPopup.react"),{options:{autoPan:!1,closeButton:!1,className:"_1l0n",maxWidth:500}},a.popup||b("React").createElement(b("AdsTargetingLocationMapPopup"),{label:this.$10(a.geoLocation),location:a.geoLocation,menuItems:m(a.geoLocation)?v:f,menuItemsDisabled:g,onMenuItemSelect:this.props.onPopupMenuItemSelect}));q=j||[o.DEFAULT,o.SHOW_POPUP].includes(this.props.clickBehavior)?q:void 0;var r=this.$11(a),s=function(a){j&&a.target.openPopup()},t=function(b){this.state.popupLocationKey!==a.geoLocation.key&&this.setState({popupLocationKey:a.geoLocation.key})}.bind(this),u=function(b){this.state.popupLocationKey===a.geoLocation.key&&j&&this.setState({popupLocationKey:null})}.bind(this),w=function(a){this.props.showPopupOnHover&&t(a)}.bind(this),x=function(a){this.props.showPopupOnHover&&u(a)}.bind(this);k=a.icon||b("leaflet").divIcon(babelHelpers["extends"]({},b("AdsCommonLocalMapUtils").LEAFLET_MARKER_ICON_OPTIONS,{className:this.$9(c,i,k)}));p.push(b("React").createElement(b("LeafletMarker.react"),{coordinates:a.center,eventHandlers:{add:s,click:r,mouseover:w,mouseout:x,popupclose:u,popupopen:t},key:"m"+l,options:{clickable:!0,icon:k,zIndexOffset:i?1e3:0},popup:q}));s=!1;a.coordinateLists&&a.coordinateLists.size&&(p.push(b("React").createElement(b("LeafletMultiPolygon.react"),{coordinateLists:a.coordinateLists,key:"p"+l,options:n})),s=!0);r=a.circleCenter||a.center;r&&a.radius&&(p.push(b("React").createElement(b("LeafletCircle.react"),{center:r,key:"c"+l,options:n,radius:a.radius})),s||p.push(b("React").createElement(b("LeafletCircleMarker.react"),{center:r,key:"cm"+l,options:b("AdsCommonLocalMapUtils").LEAFLET_TARGET_MARKER_OPTIONS})));i?e.push.apply(e,p):d.push.apply(d,p)}.bind(this))}.bind(this),this.$10=function(a){return a.name},this.$12=function(){b("AdsInterfacesLogger").log({eventName:b("AdsTargetingLocationLoggingEvents").GEO_LOCATION_MAP_ZOOM_IN},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP);var a=this.state.view;a.zoom<b("TilesMapConfig").ZOOM_RANGE.MAX&&this.$3(a.setZoom(a.zoom+1))}.bind(this),this.$13=function(){b("AdsInterfacesLogger").log({eventName:b("AdsTargetingLocationLoggingEvents").GEO_LOCATION_MAP_ZOOM_OUT},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP);var a=this.state.view;a.zoom>b("TilesMapConfig").ZOOM_RANGE.MIN&&this.$3(a.setZoom(a.zoom-1))}.bind(this),this.$14=function(){b("AdsInterfacesLogger").log({eventName:b("AdsTargetingLocationLoggingEvents").GEO_LOCATION_MAP_ZOOM_TO_FIT},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP);var a=this.$2(this.state.size,this.props.locations.union(this.props.excludedLocations));this.$3(a)}.bind(this),this.$15=function(){var a=this.state.view.zoom<b("TilesMapConfig").ZOOM_RANGE.MAX?this.$12:void 0,c=this.state.view.zoom>b("TilesMapConfig").ZOOM_RANGE.MIN?this.$13:void 0,d=!this.props.disableCollapseButton&&b("React").createElement("div",{className:"_qh2"},b("React").createElement(b("XUIButton.react"),{className:"_qh3",image:t,label:h._("click to collaps map"),labelIsHidden:!0,type:"button",onClick:this.props.onCollapseMap}));return b("React").createElement(b("FBOverlayElement.react"),{horizontal:"right",key:"zoomControls",vertical:"top"},b("React").createElement("div",null,d,b("React").createElement(b("FBTilesMapZoomOverlay__DEPRECATED.react"),{className:"_3-8j",onZoomIn:a,onZoomOut:c}),b("React").createElement("div",{className:"_qh4"},b("React").createElement(b("XUIButton.react"),{className:"_qh5",image:s,label:h._("Zoom To Fit"),labelIsHidden:!0,type:"button",onClick:this.$14}))))}.bind(this),this.$16=function(){return b("React").createElement(b("FBOverlayElement.react"),{horizontal:"right",key:"addLocation",vertical:"bottom"},b("React").createElement("div",null,b("React").createElement(b("SUIButton.react"),{disabled:this.props.addingLocation,icon:b("React").createElement(b("Image.react"),{src:this.props.addLocationMode===b("LocationConstants").INCLUDE?i("22123"):i("22122")}),isDepressed:this.state.locating,label:h._("Drop Pin"),style:{marginBottom:"12px",marginRight:"12px"},theme:b("SUIBusinessTheme"),type:"button",onClick:this.$17})))}.bind(this),this.$7=function(){return this.props.hideAllControls?null:this.props.enableDropPin?[this.$15(),this.$16()]:[this.$15()]}.bind(this),this.$5=function(event){this.state.locating&&(this.setState({locating:!1}),this.props.onAddLocationFromMap(new(b("GeoCoordinates"))(event.latlng.lat,b("LeafletUtils").wrapLongitude(event.latlng.lng))))}.bind(this),this.$17=function(a){this.setState({locating:!this.state.locating})}.bind(this),this.$2=function(a,c){if(!a||0===c.size)return this.state.view;c=l(c);if(!c)return this.state.view;c=b("LeafletUtils").fitBounds(c,{width:a.x,height:a.y},{zoomRange:[0,20]});return c}.bind(this),this.$6=function(a){var b=this.state.view;this.props.centerLocations&&this.props.centerLocations.size>0?b=k(this.state.view,this.props.centerLocations):(this.props.locations.size>0||this.props.excludedLocations.size>0||this.props.fitLocations.size>0)&&(b=this.$2(a,this.props.locations.union(this.props.excludedLocations).union(this.props.fitLocations)));this.$3(b,a)}.bind(this),this.$3=function(a,b){b=b||this.state.size;this.props.view?this.setState({size:b}):this.setState({view:a,size:b});this.props.onViewChange&&this.props.onViewChange(a,b)}.bind(this),c}a.prototype.UNSAFE_componentWillMount=function(){w=b("performanceNow")()};a.prototype.componentDidMount=function(){var a,c=Math.floor(b("performanceNow")()-w);b("AdsInterfacesLogger").log({eventName:b("AdsTargetingLocationLoggingEvents").GEO_LOCATION_MAP_MOUNTING_TIME,data:(a={},a[b("AdsInterfacesLoggerConfigColumns").SCENARIO_DURATION]=c,a)},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP);b("BanzaiODS").bumpEntityKey("ads_targeting_location","geo_location_map_mounting_time",c)};a.prototype.UNSAFE_componentWillUpdate=function(a,c){b("performanceNow")()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();if(!b("LeafletUtils").areViewEqual(a.view,this.props.view))this.setState({view:a.view||p});else if(null!==this.state.size&&a.fitLocations.size>0&&(a.forceUpdate||!b("areEqual")(a.fitLocations,this.props.fitLocations))){var c=null;if(a.fitLocations.size==1){var d=a.fitLocations.first();c=this.$1(d)}c||(c=this.$2(this.state.size,a.fitLocations));this.$3(c)}b("areEqual")(a.maxBounds,this.props.maxBounds)||b("FBLogger")("ads").warn("AdsTargetingLocationInlineMap does not support changing maxBounds");a.view&&!a.onViewChange&&b("FBLogger")("ads").warn("AdsTargetingLocationInlineMap expects `onViewChange` if given `view`");a.mapHasFocus||this.setState({popupLocationKey:null})};a.prototype.shouldComponentUpdate=function(a,c){a=a.addLocationMode!==this.props.addLocationMode||a.enableDropPin!==this.props.enableDropPin||!b("areEqual")(a.highlightLocations,this.props.highlightLocations)||!b("areEqual")(a.locations,this.props.locations)||!b("areEqual")(a.excludedLocations,this.props.excludedLocations)||!b("areEqual")(a.mapHasFocus,this.props.mapHasFocus)||!b("LeafletUtils").areViewEqual(a.view,this.props.view);c=c!==void 0&&(c.size!=this.state.size||!b("LeafletUtils").areViewEqual(c.view,this.state.view)||c.popupLocationKey!==this.state.popupLocationKey||c.locating!=this.state.locating);return a||c};a.prototype.render=function(){var a=null;this.state.locating?a=this.props.addLocationMode===b("LocationConstants").INCLUDE?"_3aio":"_3aiw":a="_3-cr";var c=[],d=[];this.$4(this.props.locations,!1,c,d);this.$4(this.props.excludedLocations,!0,c,d);return b("React").createElement(b("FBTilesMap.react"),{className:a,eventHandlers:{click:this.$5},options:this.state.mapOptions,showReportButton:!1,showZoomControls:!1,view:this.state.view,onSizeSettled:this.$6,onViewChange:this.$3},this.$7(),c,d)};a.prototype.$18=function(a){var c=a.meta;if(!this.props.onSingleNodeClick||b("immutable").Set.isSet(c)&&c.size!==1){this.$19(a);return}a=b("immutable").Set.isSet(c)?c.first():c;this.props.onSingleNodeClick(a.getID())};a.prototype.$11=function(a){switch(this.props.clickBehavior){case o.DEFAULT:case o.ZOOM_TO_MARKER:return function(){return this.$20(a)}.bind(this);case o.ZOOM_TO_NEXT_RANGE:return function(){return this.$19(a)}.bind(this);case o.INVOKE_CALLBACK_ON_SINGLE_NODE:return function(){return this.$18(a)}.bind(this);default:return b("emptyFunction")}};a.prototype.$20=function(a){a=this.$2(this.state.size,b("immutable").Set.of(a));this.$3(a)};a.prototype.$19=function(a){this.$3(n(a,this.state.view.zoom))};a.propTypes={addLocationMode:c.string.isRequired,addingLocation:c.bool,clickBehavior:c.oneOf(Object.keys(o)),disableCollapseButton:c.bool,disableScrollWheelZoom:c.bool,enableDropPin:c.bool.isRequired,excludedLocations:c.instanceOf(b("immutable").Set).isRequired,fitLocations:c.instanceOf(b("immutable").Set).isRequired,forceUpdate:c.bool,hideAllControls:c.bool,highlightLocations:c.instanceOf(b("immutable").Set).isRequired,locations:c.instanceOf(b("immutable").Set).isRequired,mapHasFocus:c.bool,maxBounds:c.instanceOf(b("leaflet").LatLngBounds),menuItems:c.object,onlyInclusion:c.bool.isRequired,showPopupOnHover:c.bool,view:c.instanceOf(b("LeafletView")),onAddLocationFromMap:c.func.isRequired,onCollapseMap:c.func.isRequired,onPopupMenuItemSelect:c.func.isRequired,onViewChange:c.func};a.defaultProps={clickBehavior:o.DEFAULT,mapHasFocus:!0};e.exports=a}),null);
__d("AdsTargetingLocationMapMetaRecord",["cx","AdsCommonLocalMapUtils","AdsTargetingLocationUtils","GeoCoordinates","LeafletUtils","LocationConstants","immutable","leaflet","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i={},j=new Map(),k=350,l=Object.freeze({NONE:0,SHIFT_LEFT:-1,SHIFT_RIGHT:1});a=babelHelpers.inherits(m,b("immutable").Record({center:null,circleCenter:null,coordinateLists:null,geoLocation:null,icon:null,meta:null,name:null,popup:null,radius:0}));h=a&&a.prototype;function m(a){h.constructor.call(this,a)}m.prototype.hashCode=function(){var a=b("AdsTargetingLocationUtils").getUniqueKey(this.geoLocation);j.has(a)||j.set(a,b("AdsTargetingLocationUtils").getHashCode(this.geoLocation));return b("nullthrows")(j.get(a))};m.fromGeoLocations=function(a,c){var d=[];b("LocationConstants").locationTypes.forEach(function(b){(a[b]||[]).forEach(function(a){if(a.latitude==null||a.longitude==null)return;d.push(this.fromGeoLocationCached(a,c(a)))}.bind(this))}.bind(this));return b("immutable").Set(d)};m.fromGeoLocationCached=function(a,c){var d=b("AdsTargetingLocationUtils").getUniqueKey(a);i[d]||(i[d]=this.fromGeoLocation(a,c));return i[d]};m.fromGeoLocation=function(a,c){var d=[],e=0,f=new(b("GeoCoordinates"))(Number(a.latitude),Number(a.longitude));a.polygons&&a.polygons.length&&(d=this.generatePolygonLists(a.polygons));a.radius&&a.distance_unit&&(e=b("AdsTargetingLocationUtils").getRadiusInMeters(a.radius,a.distance_unit));return new m({center:f,coordinateLists:b("immutable").List(d),geoLocation:a,icon:null,meta:c,name:a.name,popup:null,radius:e})};m.generatePolygonLists=function(a){__p&&__p();var c=b("leaflet").latLngBounds(a),d=l.NONE;if(c.getEast()-c.getWest()>k){var e=this.boundsForShiftedMultipolygons(a,l.SHIFT_LEFT),f=this.boundsForShiftedMultipolygons(a,l.SHIFT_RIGHT);c=Math.abs(c.getEast()-c.getWest());var g=Math.abs(e.getEast()-e.getWest()),h=Math.abs(f.getEast()-f.getWest());(g<=c||h<=c)&&(Math.abs(e.getCenter().lng)<=Math.abs(f.getCenter().lng)?d=l.SHIFT_LEFT:d=l.SHIFT_RIGHT)}var i=[];a.forEach(function(a){var c=[];a.forEach(function(a){c.push(new(b("GeoCoordinates"))(Number(a.lat),this.shiftLongitude(b("LeafletUtils").wrapLongitude(Number(a.lng)),d)))}.bind(this));i.push(b("immutable").List(c))}.bind(this));return i};m.shiftLongitude=function(a,b){b===l.SHIFT_LEFT?a=a<0?a:a-360:b===l.SHIFT_RIGHT&&(a=a>0?a:a+360);return a};m.boundsForShiftedMultipolygons=function(a,c){var d=[];a.forEach(function(a){var e=[];a.forEach(function(a){e.push(b("LeafletUtils").toLatLng(new(b("GeoCoordinates"))(Number(a.lat),this.shiftLongitude(b("LeafletUtils").wrapLongitude(Number(a.lng)),c))))}.bind(this));d.push(e)}.bind(this));return b("leaflet").latLngBounds(d)};m.iconForSingleLocationSelected=function(){return b("leaflet").divIcon(babelHelpers["extends"]({},b("AdsCommonLocalMapUtils").LEAFLET_MARKER_LOCATION_PIN_ICON_SELECTED_OPTIONS,{className:"_tl9"}))};m.iconForSingleLocationNotSelected=function(){return b("leaflet").divIcon(babelHelpers["extends"]({},b("AdsCommonLocalMapUtils").LEAFLET_MARKER_LOCATION_PIN_ICON_NOT_SELECTED_OPTIONS,{className:"_tla"}))};e.exports=m}),null);
__d("AdsTargetingLocationMapRecord",["AdsTargetingLocationMapMetaRecord","emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("AdsTargetingLocationMapMetaRecord"));g&&g.prototype;a.fromGeoLocation=function(a){return b("AdsTargetingLocationMapMetaRecord").fromGeoLocation(a,void 0)};a.fromGeoLocationCached=function(a){return b("AdsTargetingLocationMapMetaRecord").fromGeoLocationCached(a,void 0)};a.fromGeoLocations=function(a){return b("AdsTargetingLocationMapMetaRecord").fromGeoLocations(a,b("emptyFunction"))};function a(){g.apply(this,arguments)}e.exports=a}),null);