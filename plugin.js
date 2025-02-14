//Converted with C2C3AddonConverter v1.0.0.13
"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const PLUGIN_ID = "GameAnalytics";
    // callMap Deprecated const PLUGIN_VERSION = "3.0.13";
    const PLUGIN_CATEGORY = "other";

    // callMap Deprecated let app = null;

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.GameAnalytics = class GameAnalytics extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);
            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("GameAnalytics");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);
            this._info.SetIsDeprecated(false);
            this._info.SetSupportsEffects(false);
            this._info.SetMustPreDraw(false);
            this._info.SetCanBeBundled(false);

            // Support both the C2 and C3 runtimes
            this._info.SetSupportedRuntimes(["c2", "c3"]);

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
                new SDK.PluginProperty("text", "build", "0.1"),
                new SDK.PluginProperty("text", "custom-user-id", ""),
                new SDK.PluginProperty("combo", "enable-manual-session-handling", { initialValue: "false", items: ["false", "true"] }),
                new SDK.PluginProperty("combo", "enable-info-log", { initialValue: "true", items: ["false", "true"] }),
                new SDK.PluginProperty("combo", "enable-verbose-log", { initialValue: "false", items: ["false", "true"] }),
                new SDK.PluginProperty("combo", "auto-detect-app-version", { initialValue: "false", items: ["false", "true"] }),
                new SDK.PluginProperty("text", "game-key-browser", ""),
                new SDK.PluginProperty("text", "secret-key-browser", ""),
                new SDK.PluginProperty("text", "game-key-android", ""),
                new SDK.PluginProperty("text", "secret-key-android", ""),
                new SDK.PluginProperty("text", "game-key-ios", ""),
                new SDK.PluginProperty("text", "secret-key-ios", "")
            ]);
            this._info.AddFileDependency({
                filename: "GameAnalytics.js",
                type: "external-script"
            });
            this._info.AddCordovaPluginReference({
                id: "cordova-plugin-gameanalytics"
            });
            this._info.AddCordovaPluginReference({
                id: "cordova-plugin-device"
            });
            SDK.Lang.PopContext();        // .properties
            SDK.Lang.PopContext();
        }
    };
    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
