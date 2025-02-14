"use strict";

{
    globalThis.C3.Plugins.GameAnalytics.Exps =
    {
        getRemoteConfigsValueAsString(key, defaultValue, functionName)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["getRemoteConfigsValueAsString"] == "function")
            {
                var callback = function(result) {
                    if(functionName && globalThis["c2_callFunction"]) {
                        globalThis["c2_callFunction"](functionName, [result]);
                    }
                }
                globalThis["GameAnalytics"]["getRemoteConfigsValueAsString"]({
                    "key": key,
                    "defaultValue": defaultValue
                }, callback);
                return "";
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                return globalThis["gameanalytics"]["GameAnalytics"]["getRemoteConfigsValueAsString"](key, defaultValue);
            }
            else
            {
                console.log("getRemoteConfigsValueAsString: GameAnalytics object not found");
                return "";
            }
        },

        getRemoteConfigsContentAsString(functionName)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["getRemoteConfigsContentAsString"] == "function")
            {
                var callback = function(result) {
                    if(functionName && globalThis["c2_callFunction"]) {
                        globalThis["c2_callFunction"](functionName, [result]);
                    }
                }
                globalThis["GameAnalytics"]["getRemoteConfigsContentAsString"](callback);
                return "";
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                return globalThis["gameanalytics"]["GameAnalytics"]["getRemoteConfigsContentAsString"]();
            }
            else
            {
                console.log("endSession: GameAnalytics object not found");
                return "";
            }
        }
    };
}
