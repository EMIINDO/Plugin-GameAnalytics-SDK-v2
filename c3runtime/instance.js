"use strict";

{
    globalThis.C3.Plugins.GameAnalytics.Instance = class GameAnalyticsInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            // Initialise object properties
            this._build = "";
            this._customUserId = "";
            this._enableManualSessionHandling = false;
            this._enableInfoLog = false;
            this._enableVerboseLog = false;
            this._autoDetectAppVersion = false;
            this._gameKeyBrowser = "";
            this._secretKeyBrowser = "";
            this._gameKeyAndroid = "";
            this._secretKeyAndroid = "";
            this._gameKeyIOS = "";
            this._secretKeyIOS = "";

            this._customDimensions01 = [];
            this._customDimensions02 = [];
            this._customDimensions03 = [];
            this._resourceCurrencies = [];
            this._resourceItemTypes = [];

            if (properties)        // note properties may be null in some cases
            {
                this._build = properties[0];
                this._customUserId = properties[1];
                this._enableManualSessionHandling = properties[2];
                this._enableInfoLog = properties[3];
                this._enableVerboseLog = properties[4];
                this._autoDetectAppVersion = properties[5];
                this._gameKeyBrowser = properties[6];
                this._secretKeyBrowser = properties[7];
                this._gameKeyAndroid = properties[8];
                this._secretKeyAndroid = properties[9];
                this._gameKeyIOS = properties[10];
                this._secretKeyIOS = properties[11];
            }
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }
    };
}
