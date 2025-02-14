"use strict";

{
    globalThis.C3.Plugins.GameAnalytics.Acts =
    {
        addAvailableCustomDimension01(dimension)
        {
            this._customDimensions01.push(dimension);
        },

        addAvailableCustomDimension02(dimension)
        {
            this._customDimensions02.push(dimension);
        },

        addAvailableCustomDimension03(dimension)
        {
            this._customDimensions03.push(dimension);
        },

        addAvailableResourceCurrency(currency)
        {
            this._resourceCurrencies.push(currency);
        },

        addAvailableResourceItemType(itemType)
        {
            this._resourceItemTypes.push(itemType);
        },

        initialize()
        {
            var VERSION = "3.0.13";

            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["initialize"] == "function")
            {
                var ga = globalThis["GameAnalytics"];

                if(this._enableInfoLog)
                {
                    ga["setEnabledInfoLog"](true);
                }
                if(this._enableVerboseLog)
                {
                    ga["setEnabledVerboseLog"](true);
                }
                if(this._enableManualSessionHandling)
                {
                    ga["setEnabledManualSessionHandling"](true);
                }

                if(this._customDimensions01.length > 0)
                {
                    ga["configureAvailableCustomDimensions01"](this._customDimensions01);
                }
                if(this._customDimensions02.length > 0)
                {
                    ga["configureAvailableCustomDimensions02"](this._customDimensions02);
                }
                if(this._customDimensions03.length > 0)
                {
                    ga["configureAvailableCustomDimensions03"](this._customDimensions03);
                }
                if(this._resourceCurrencies.length > 0)
                {
                    ga["configureAvailableResourceCurrencies"](this._resourceCurrencies);
                }
                if(this._resourceItemTypes.length > 0)
                {
                    ga["configureAvailableResourceItemTypes"](this._resourceItemTypes);
                }

                ga["configureBuild"](this._build);

                if(this._autoDetectAppVersion)
                {
                    ga["configureAutoDetectAppVersion"](true);
                }

                var sdkVersion = "construct " + VERSION;
                var gameKey = globalThis["device"]["platform"] === "Android" ? this._gameKeyAndroid : this._gameKeyIOS;
                var secretKey = globalThis["device"]["platform"] === "Android" ? this._secretKeyAndroid : this._secretKeyIOS;

                ga["initialize"]({
                    "gameKey": gameKey,
                    "secretKey": secretKey,
                    "sdkVersion": sdkVersion
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                var ga = globalThis["gameanalytics"]["GameAnalytics"];

                if(this._enableInfoLog)
                {
                    ga["setEnabledInfoLog"](true);
                }
                if(this._enableVerboseLog)
                {
                    ga["setEnabledVerboseLog"](true);
                }
                if(this._enableManualSessionHandling)
                {
                    ga["setEnabledManualSessionHandling"](true);
                }

                if(this._customDimensions01.length > 0)
                {
                    ga["configureAvailableCustomDimensions01"](this._customDimensions01);
                }
                if(this._customDimensions02.length > 0)
                {
                    ga["configureAvailableCustomDimensions02"](this._customDimensions02);
                }
                if(this._customDimensions03.length > 0)
                {
                    ga["configureAvailableCustomDimensions03"](this._customDimensions03);
                }
                if(this._resourceCurrencies.length > 0)
                {
                    ga["configureAvailableResourceCurrencies"](this._resourceCurrencies);
                }
                if(this._resourceItemTypes.length > 0)
                {
                    ga["configureAvailableResourceItemTypes"](this._resourceItemTypes);
                }

                ga["configureBuild"](this._build);

                ga["configureSdkGameEngineVersion"]("construct " + VERSION);

                ga["initialize"](this._gameKeyBrowser, this._secretKeyBrowser);
            }
            else
            {
                console.log("initialize: GameAnalytics object not found");
                return;
            }
        },

        addBusinessEvent(currency, amount, itemType, itemId, cartType)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addBusinessEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addBusinessEvent"]({
                    "currency": currency,
                    "amount": amount,
                    "itemType": itemType,
                    "itemId": itemId,
                    "cartType": cartType
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addBusinessEvent"](currency, amount, itemType, itemId, cartType);
            }
            else
            {
                console.log("addBusinessEvent: GameAnalytics object not found");
                return;
            }
        },

        addResourceEvent(flowType, currency, amount, itemType, itemId)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addResourceEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addResourceEvent"]({
                    "flowType": flowType,
                    "currency": currency,
                    "amount": amount,
                    "itemType": itemType,
                    "itemId": itemId
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addResourceEvent"](flowType, currency, amount, itemType, itemId);
            }
            else
            {
                console.log("addResourceEvent: GameAnalytics object not found");
                return;
            }
        },

        addProgressionEvent(progressionStatus, progression01, progression02, progression03)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addProgressionEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addProgressionEvent"]({
                    "progressionStatus": progressionStatus,
                    "progression01": progression01,
                    "progression02": progression02,
                    "progression03": progression03
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addProgressionEvent"](progressionStatus, progression01, progression02, progression03);
            }
            else
            {
                console.log("addProgressionEvent: GameAnalytics object not found");
                return;
            }
        },

        addProgressionEventWithScore(progressionStatus, progression01, progression02, progression03, score)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addProgressionEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addProgressionEvent"]({
                    "progressionStatus": progressionStatus,
                    "progression01": progression01,
                    "progression02": progression02,
                    "progression03": progression03,
                    "score": score
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addProgressionEvent"](progressionStatus, progression01, progression02, progression03, score);
            }
            else
            {
                console.log("addProgressionEventWithScore: GameAnalytics object not found");
                return;
            }
        },

        addDesignEvent(eventId)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addDesignEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addDesignEvent"]({
                    "eventId": eventId
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addDesignEvent"](eventId);
            }
            else
            {
                console.log("addDesignEvent: GameAnalytics object not found");
                return;
            }
        },

        addDesignEventWithValue(eventId, value)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addDesignEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addDesignEvent"]({
                    "eventId": eventId,
                    "value": value
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addDesignEvent"](eventId, value);
            }
            else
            {
                console.log("addDesignEventWithValue: GameAnalytics object not found");
                return;
            }
        },

        addErrorEvent(severity, message)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["addErrorEvent"] == "function")
            {
                globalThis["GameAnalytics"]["addErrorEvent"]({
                    "severity": severity,
                    "message": message
                });
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["addErrorEvent"](severity, message);
            }
            else
            {
                console.log("addErrorEvent: GameAnalytics object not found");
                return;
            }
        },

        setEnabledEventSubmission(flag)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["setEnabledEventSubmission"] == "function")
            {
                globalThis["GameAnalytics"]["setEnabledEventSubmission"](flag ? true : false);
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["setEnabledEventSubmission"](flag ? true : false);
            }
            else
            {
                console.log("setEnabledEventSubmission: GameAnalytics object not found");
                return;
            }
        },

        setEnabledManualSessionHandling(flag)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["setEnabledManualSessionHandling"] == "function")
            {
                globalThis["GameAnalytics"]["setEnabledManualSessionHandling"](flag ? true : false);
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["setEnabledManualSessionHandling"](flag ? true : false);
            }
            else
            {
                console.log("setEnabledManualSessionHandling: GameAnalytics object not found");
                return;
            }
        },

        setCustomDimension01(dimension)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["setCustomDimension01"] == "function")
            {
                globalThis["GameAnalytics"]["setCustomDimension01"](dimension);
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["setCustomDimension01"](dimension);
            }
            else
            {
                console.log("setCustomDimension01: GameAnalytics object not found");
                return;
            }
        },

        setCustomDimension02(dimension)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["setCustomDimension02"] == "function")
            {
                globalThis["GameAnalytics"]["setCustomDimension02"](dimension);
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["setCustomDimension02"](dimension);
            }
            else
            {
                console.log("setCustomDimension02: GameAnalytics object not found");
                return;
            }
        },

        setCustomDimension03(dimension)
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["setCustomDimension03"] == "function")
            {
                globalThis["GameAnalytics"]["setCustomDimension03"](dimension);
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["setCustomDimension03"](dimension);
            }
            else
            {
                console.log("setCustomDimension03: GameAnalytics object not found");
                return;
            }
        },

        startSession()
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["startSession"] == "function")
            {
                globalThis["GameAnalytics"]["startSession"]();
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["startSession"]();
            }
            else
            {
                console.log("startSession: GameAnalytics object not found");
                return;
            }
        },

        endSession()
        {
            if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["endSession"] == "function")
            {
                globalThis["GameAnalytics"]["endSession"]();
            }
            else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
            {
                globalThis["gameanalytics"]["GameAnalytics"]["endSession"]();
            }
            else
            {
                console.log("endSession: GameAnalytics object not found");
                return;
            }
        },

        configureBuild(buildNumber)
        {
            this._build = buildNumber;
        }
    };
}
