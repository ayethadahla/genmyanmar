if (self.CavalryLogger) { CavalryLogger.start_js(["6Wcow"]); }

__d("CatalogQEs",["AdsLoadObjectUtils","CurrentUser","LoadObject","ProductFeedsQE","ProductsConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[{universe:"catalog_create_ad_flow",disableAutoExposureLogging:!0,qeProp:"isCatalogCreateAdFlowEnabled",param:"is_catalog_create_ad_flow_enabled",removeManagedBusiness:!0},{universe:b("ProductFeedsQE").UNIVERSE.CATALOG_MANAGER_SIDEBAR_NAVIGATION,disableAutoExposureLogging:!1,qeProp:"isCatalogManagerSidebarNavigationEnabled",param:"catalog_manager_sidebar_navigation",removeManagedBusiness:!0},{universe:"catalog_page_shops_upsell",shardingType:"business",disableAutoExposureLogging:!0,qeProp:"showPageUpsell",param:"show_page_upsell",removeManagedBusiness:!1},{universe:"catalog_add_products_content_variation_b_universe",shardingType:"business",disableAutoExposureLogging:!0,qeProp:"isCatalogManagerAddProductsContentUpdateEnabled",param:"show_content_variation_b",removeManagedBusiness:!0}];function a(a){__p&&__p();var c=a.catalogID,d=a.catalog,e=a.loadQE;a=g.map(function(a){__p&&__p();var f;f=(f=a.defaultValue)!=null?f:!1;var g=a.shardingType==="catalog"?c:b("CurrentUser").getID();if(a.shardingType==="business")if(d.hasValue()){var h;g=(h=(h=d.getValueEnforcing().business)==null?void 0:h.id)!=null?h:null}else return b("LoadObject").loading();if(g==null)return b("LoadObject").withValue({qe:null,config:a,isInTestGroup:f});h=e(a.universe,g).getValue();if(h==null)return b("LoadObject").loading();a.disableAutoExposureLogging===!0&&h.update({auto_exposure_logging_enabled:!1});g=a.removeManagedBusiness&&b("ProductsConfig").is_managed_business?f:h.getParamBool(a.param,f);return b("LoadObject").withValue({qe:h,config:a,isInTestGroup:g})});return b("AdsLoadObjectUtils").all(a)}e.exports={loadAll:a}}),null);