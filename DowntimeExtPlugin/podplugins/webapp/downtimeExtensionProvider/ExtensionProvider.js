sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "sap/ext/sample/downtimeExtensionProvider/PluginEventExtension",
    "sap/ext/sample/downtimeExtensionProvider/ExtensionUtilities"
], function (PluginExtensionProvider, PluginEventExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("sap.ext.sample.downtimeExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
           return [
               new PluginEventExtension(this.oExtensionUtilities)
           ];
        }
    })
});