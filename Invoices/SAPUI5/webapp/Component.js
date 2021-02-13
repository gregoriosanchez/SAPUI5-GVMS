//@ts-nocheck
sap.ui.define([
"sap/ui/core/UIComponent",
"SAPUI5_TEST/SAPUI5/model/Models",
"sap/ui/model/resource/ResourceModel"
],
/**
 * @param {typeof sap.ui.core.UIComponent} UIComponent
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 */

 function(UIComponent,  Models, ResourceModel){
    return UIComponent.extend("SAPUI5_TEST.SAPUI5.Component",
    {
        metadata: {
            manifest : "json"
        },

        init: function() {
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(Models.createRecipient());

            //set i18n model on the view
            var i18Model = new ResourceModel({bundleName: "SAPUI5_TEST.SAPUI5.i18n.i18n"});
            this.setModel(i18Model, "i18n");
        }
    });
 });