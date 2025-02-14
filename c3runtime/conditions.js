"use strict";

{
    globalThis.C3.Plugins.GameAnalytics.Cnds =
    {
        isRemoteConfigsReady(functionName)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["isRemoteConfigsReady"] == "function")
            {
                var callback = function(result) {
                    if(functionName && globalThis["c2_callFunction"]) {
                        globalThis["c2_callFunction"](functionName, [result ? 1 : 0]);
                    }
                }
                globalThis["GameAnalytics"]["isRemoteConfigsReady"](callback);
                return false;
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                return globalThis["gameanalytics"]["GameAnalytics"]["isRemoteConfigsReady"]();
            }
            else
            {
                console.log("isRemoteConfigsReady: GameAnalytics object not found");
                return false;
            }
        }
    };
}
