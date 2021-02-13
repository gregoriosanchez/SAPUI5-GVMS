// @ts-nocheck
sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/m/MessageToast"
],

/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast 
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 */

    function(Controller, MessageToast){
        "use strict";
        return Controller.extend("SAPUI5_TEST.SAPUI5.controller.App", {
            onInit: function () {

            },

            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMessage", [sRecipient]);
                
                MessageToast.show(sMsg);
            }
        });
    });