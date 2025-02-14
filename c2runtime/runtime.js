// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.GameAnalytics = function(runtime)
{
    this.runtime = runtime;
};

(function ()
{
    /////////////////////////////////////
    // *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
    //                            vvvvvvvv
    var pluginProto = cr.plugins_.GameAnalytics.prototype;

    /////////////////////////////////////
    // Object type class
    pluginProto.Type = function(plugin)
    {
        this.plugin = plugin;
        this.runtime = plugin.runtime;
    };

    var typeProto = pluginProto.Type.prototype;

    // called on startup for each object type
    typeProto.onCreate = function()
    {
    };

    /////////////////////////////////////
    // Instance class
    pluginProto.Instance = function(type)
    {
        this.type = type;
        this.runtime = type.runtime;

        // any other properties you need, e.g...
        // this.myValue = 0;
    };

    var instanceProto = pluginProto.Instance.prototype;

    // called whenever an instance is created
    instanceProto.onCreate = function()
    {
        // note the object is sealed after this call; ensure any properties you'll ever need are set on the object
        // e.g...
        // this.myValue = 0;

        this.build = this.properties[0];
        this.customUserId = this.properties[1];
        this.enableManualSessionHandling = this.properties[2];
        this.enableInfoLog = this.properties[3];
        this.enableVerboseLog = this.properties[4];
        this.autoDetectAppVersion = this.properties[5];
        this.gameKeyBrowser = this.properties[6];
        this.secretKeyBrowser = this.properties[7];
        this.gameKeyAndroid = this.properties[8];
        this.secretKeyAndroid = this.properties[9];
        this.gameKeyIOS = this.properties[10];
        this.secretKeyIOS = this.properties[11];

        this.customDimensions01 = [];
        this.customDimensions02 = [];
        this.customDimensions03 = [];
        this.resourceCurrencies = [];
        this.resourceItemTypes = [];
    };

    // called whenever an instance is destroyed
    // note the runtime may keep the object after this call for recycling; be sure
    // to release/recycle/reset any references to other objects in this function.
    instanceProto.onDestroy = function ()
    {
    };

    // called when saving the full state of the game
    instanceProto.saveToJSON = function ()
    {
        // return a Javascript object containing information about your object's state
        // note you MUST use double-quote syntax (e.g. "property": value) to prevent
        // Closure Compiler renaming and breaking the save format
        return {
            // e.g.
            //"myValue": this.myValue
        };
    };

    // called when loading the full state of the game
    instanceProto.loadFromJSON = function (o)
    {
        // load from the state previously saved by saveToJSON
        // 'o' provides the same object that you saved, e.g.
        // this.myValue = o["myValue"];
        // note you MUST use double-quote syntax (e.g. o["property"]) to prevent
        // Closure Compiler renaming and breaking the save format
    };

    // only called if a layout object - draw to a canvas 2D context
    instanceProto.draw = function(ctx)
    {
    };

    // only called if a layout object in WebGL mode - draw to the WebGL context
    // 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
    // directory or just copy what other plugins do.
    instanceProto.drawGL = function (glw)
    {
    };

    // The comments around these functions ensure they are removed when exporting, since the
    // debugger code is no longer relevant after publishing.
    /**BEGIN-PREVIEWONLY**/
    instanceProto.getDebuggerValues = function (propsections)
    {
        // Append to propsections any debugger sections you want to appear.
        // Each section is an object with two members: "title" and "properties".
        // "properties" is an array of individual debugger properties to display
        // with their name and value, and some other optional settings.

        var props = [
            {"name": "Build", "value": this.build},
            {"name": "Custom user ID", "value": this.customUserId},
            {"name": "Enable manual session handling", "value": this.enableManualSessionHandling},
            {"name": "Enable info log", "value": this.enableInfoLog},
            {"name": "Enable verbose log", "value": this.enableVerboseLog},
            {"name": "Auto detect app version", "value": this.autoDetectAppVersion},
            {"name": "Game key (browser)", "value": this.gameKeyBrowser},
            {"name": "Secret key (browser)", "value": this.secretKeyBrowser},
            {"name": "Game key (android)", "value": this.gameKeyAndroid},
            {"name": "Secret key (android)", "value": this.secretKeyAndroid},
            {"name": "Game key (ios)", "value": this.gameKeyIOS},
            {"name": "Secret key (ios)", "value": this.secretKeyIOS},
        ];

        var x;

        for (x = 0; x < this.customDimensions01.length; x++)
        {
            props.push({"name": "Custom dimensions 01 index=" + x.toString(), "value": this.customDimensions01[x]});
        }
        for (x = 0; x < this.customDimensions02.length; x++)
        {
            props.push({"name": "Custom dimensions 02 index=" + x.toString(), "value": this.customDimensions02[x]});
        }
        for (x = 0; x < this.customDimensions03.length; x++)
        {
            props.push({"name": "Custom dimensions 03 index=" + x.toString(), "value": this.customDimensions03[x]});
        }
        for (x = 0; x < this.resourceCurrencies.length; x++)
        {
            props.push({"name": "Resource currencies index=" + x.toString(), "value": this.resourceCurrencies[x]});
        }
        for (x = 0; x < this.resourceItemTypes.length; x++)
        {
            props.push({"name": "Resource item types index=" + x.toString(), "value": this.resourceItemTypes[x]});
        }

        propsections.push({
            "title": "GameAnalytics",
            "properties": props
        });
    };

    instanceProto.onDebugValueEdited = function (header, name, value)
    {
        // Called when a non-readonly property has been edited in the debugger. Usually you only
        // will need 'name' (the property name) and 'value', but you can also use 'header' (the
        // header title for the section) to distinguish properties with the same name.
    };
    /**END-PREVIEWONLY**/

    //////////////////////////////////////
    // Conditions
    function Cnds() {};

    Cnds.prototype.isRemoteConfigsReady = function (functionName)
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
    };

    pluginProto.cnds = new Cnds();

    //////////////////////////////////////
    // Actions
    function Acts() {};

    Acts.prototype.addAvailableCustomDimension01 = function (dimension)
    {
        this.customDimensions01.push(dimension);
    };

    Acts.prototype.addAvailableCustomDimension02 = function (dimension)
    {
        this.customDimensions02.push(dimension);
    };

    Acts.prototype.addAvailableCustomDimension03 = function (dimension)
    {
        this.customDimensions03.push(dimension);
    };

    Acts.prototype.addAvailableResourceCurrency = function (currency)
    {
        this.resourceCurrencies.push(currency);
    };

    Acts.prototype.addAvailableResourceItemType = function (itemType)
    {
        this.resourceItemTypes.push(itemType);
    };

    Acts.prototype.initialize = function ()
    {
        var VERSION = "3.0.13";

        if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["initialize"] == "function")
        {
            var ga = globalThis["GameAnalytics"];

            if(this.enableInfoLog)
            {
                ga["setEnabledInfoLog"](true);
            }
            if(this.enableVerboseLog)
            {
                ga["setEnabledVerboseLog"](true);
            }
            if(this.enableManualSessionHandling)
            {
                ga["setEnabledManualSessionHandling"](true);
            }

            if(this.customDimensions01.length > 0)
            {
                ga["configureAvailableCustomDimensions01"](this.customDimensions01);
            }
            if(this.customDimensions02.length > 0)
            {
                ga["configureAvailableCustomDimensions02"](this.customDimensions02);
            }
            if(this.customDimensions03.length > 0)
            {
                ga["configureAvailableCustomDimensions03"](this.customDimensions03);
            }
            if(this.resourceCurrencies.length > 0)
            {
                ga["configureAvailableResourceCurrencies"](this.resourceCurrencies);
            }
            if(this.resourceItemTypes.length > 0)
            {
                ga["configureAvailableResourceItemTypes"](this.resourceItemTypes);
            }

            ga["configureBuild"](this.build);

            if(this.autoDetectAppVersion)
            {
                ga["configureAutoDetectAppVersion"](true);
            }

            var sdkVersion = "construct " + VERSION;
            var gameKey = globalThis["device"]["platform"] === "Android" ? this.gameKeyAndroid : this.gameKeyIOS;
            var secretKey = globalThis["device"]["platform"] === "Android" ? this.secretKeyAndroid : this.secretKeyIOS;

            ga["initialize"]({
                "gameKey": gameKey,
                "secretKey": secretKey,
                "sdkVersion": sdkVersion
            });
        }
        else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
        {
            var ga = globalThis["gameanalytics"]["GameAnalytics"];

            if(this.enableInfoLog)
            {
                ga["setEnabledInfoLog"](true);
            }
            if(this.enableVerboseLog)
            {
                ga["setEnabledVerboseLog"](true);
            }
            if(this.enableManualSessionHandling)
            {
                ga["setEnabledManualSessionHandling"](true);
            }

            if(this.customDimensions01.length > 0)
            {
                ga["configureAvailableCustomDimensions01"](this.customDimensions01);
            }
            if(this.customDimensions02.length > 0)
            {
                ga["configureAvailableCustomDimensions02"](this.customDimensions02);
            }
            if(this.customDimensions03.length > 0)
            {
                ga["configureAvailableCustomDimensions03"](this.customDimensions03);
            }
            if(this.resourceCurrencies.length > 0)
            {
                ga["configureAvailableResourceCurrencies"](this.resourceCurrencies);
            }
            if(this.resourceItemTypes.length > 0)
            {
                ga["configureAvailableResourceItemTypes"](this.resourceItemTypes);
            }

            ga["configureBuild"](this.build);

            ga["configureSdkGameEngineVersion"]("construct " + VERSION);

            ga["initialize"](this.gameKeyBrowser, this.secretKeyBrowser);
        }
        else
        {
            console.log("initialize: GameAnalytics object not found");
            return;
        }
    };

    Acts.prototype.addBusinessEvent = function (currency, amount, itemType, itemId, cartType)
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
    };

    Acts.prototype.addResourceEvent = function (flowType, currency, amount, itemType, itemId)
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
    };

    Acts.prototype.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03)
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
    };

    Acts.prototype.addProgressionEventWithScore = function (progressionStatus, progression01, progression02, progression03, score)
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
    };

    Acts.prototype.addDesignEvent = function (eventId)
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
    };

    Acts.prototype.addDesignEventWithValue = function (eventId, value)
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
    };

    Acts.prototype.addErrorEvent = function (severity, message)
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
    };

    Acts.prototype.setEnabledEventSubmission = function (flag)
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
    };

    Acts.prototype.setEnabledManualSessionHandling = function (flag)
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
    };

    Acts.prototype.setCustomDimension01 = function (dimension)
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
    };

    Acts.prototype.setCustomDimension02 = function (dimension)
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
    };

    Acts.prototype.setCustomDimension03 = function (dimension)
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
    };

    Acts.prototype.startSession = function ()
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
    };

    Acts.prototype.endSession = function ()
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
    };

    Acts.prototype.configureBuild = function (buildNumber)
    {
        this.build = buildNumber;
    };

    pluginProto.acts = new Acts();

    //////////////////////////////////////
    // Expressions
    function Exps() {};

    Exps.prototype.getRemoteConfigsValueAsString = function (ret, key, defaultValue, functionName)
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
            }, );
            ret.set_string("");
        }
        else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
        {
            ret.set_string(globalThis["gameanalytics"]["GameAnalytics"]["getRemoteConfigsValueAsString"](key, defaultValue));
        }
        else
        {
            console.log("getRemoteConfigsValueAsString: GameAnalytics object not found");
            ret.set_string("");
        }
    };

    Exps.prototype.getRemoteConfigsContentAsString = function (ret, functionName)
    {
        if(typeof globalThis["GameAnalytics"] !== "undefined" && typeof globalThis["GameAnalytics"]["getRemoteConfigsContentAsString"] == "function")
        {
            var callback = function(result) {
                if(functionName && globalThis["c2_callFunction"]) {
                    globalThis["c2_callFunction"](functionName, [result]);
                }
            }
            globalThis["GameAnalytics"]["getRemoteConfigsContentAsString"](callback);
            ret.set_string("");
        }
        else if(typeof globalThis["gameanalytics"] !== "undefined" && typeof globalThis["gameanalytics"]["GameAnalytics"] != "undefined")
        {
            ret.set_string(globalThis["gameanalytics"]["GameAnalytics"]["getRemoteConfigsContentAsString"]());
        }
        else
        {
            console.log("endSession: GameAnalytics object not found");
            ret.set_string("");
        }
    };

    pluginProto.exps = new Exps();

}());
