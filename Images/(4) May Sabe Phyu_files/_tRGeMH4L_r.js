if (self.CavalryLogger) { CavalryLogger.start_js(["oGj7G"]); }

__d("AdsLWIDialogStateAsyncCreateErrorReducerPlugin",["AdsDataAtom","AdsLWIStepperManager","AdsSelectorUtils","BoostedComponentProduct","adsLWIInstanceDataSelector","immutable","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={reduce:function(a,c){b("AdsDataAtom").waitFor(b("AdsSelectorUtils").getStoreDispatchTokens([b("adsLWIInstanceDataSelector")]));c=c.instanceID;var d=a.dialogState;c=b("nullthrows")(b("adsLWIInstanceDataSelector")(c));var e=c.product,f=b("AdsLWIStepperManager").getPhaseTypeForProduct(e,!1);return a.withMutations(function(a){a.set("dialogState",d.withMutations(function(a){a.set("step",0).set("phaseType",f)})).set("history",b("immutable").List()).set("shown",e!==b("BoostedComponentProduct").BOOSTED_AUTOMATED_ADS)})}};e.exports=a}),null);