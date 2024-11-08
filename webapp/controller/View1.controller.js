sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("mentoria.ka.fiori.zpraticamodel1bfs.controller.View1", {
        onInit: function () {

            // var oModelJson = new JSONModel({
            //     dataTable: [],
            //     dataForm: {
            //         nome, dtNasc, sexo, altura
            //     }
            // })
            
            var oModelJson2 = new JSONModel();
            oModelJson2.loadData("/model/Cadastros.json");
            this.getView().setModel(oModelJson2, "model2");

            
        },

        onNovoPress: function () {

            var oView = this.getView(),
                oDialogNewReg = this.getView().byId("idDialogNewReg");
            if (!oDialogNewReg) {
                Fragment.load({
                    id: oView.getId(),
                    name: "mentoria.ka.fiori.zpraticamodel1bfs.view.DialogNewRegister",
                    type: "XML",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            } else {
                oDialogNewReg.open();
            }

        }, 

        onCancelButton: function () {
            this.getView().byId("idDialogNewReg").close();
        },

        onSalveButton: function () {
            this.getView().byId("idDialogNewReg").close();
        },

    });
});
