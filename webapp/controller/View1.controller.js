sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("mentoria.ka.fiori.zpraticamodel1bfs.controller.View1", {

        onInit: function () {
            
            var oCadastros = new JSONModel();
            oCadastros.loadData("/model/Cadastros.json");
            this.getView().setModel(oCadastros);
            
        },

        onNovoPress: function (oEvent) {

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

                    oDialog.bindElement({path: "/dataForm"});
                    oDialog.open();
                })
            } else {
                oDialogNewReg.open();
            }

        }, 

        onCancelButton: function () {
            this.getView().byId("idDialogNewReg").close();
        },

        onSalveButton: function (oEvent) {
            let oModelForm = this.getView().getModel().getProperty("/dataForm");
 
            let oModelTable = this.getView().getModel().getProperty("/dataTable");
 
 
            let sSexo = this.getView().byId("selectedSexo").getSelectedKey();
 
            oModelTable.push(oModelForm);
 
            oEvent.getSource().getParent().destroy();
 
            this.getView().getModel().setProperty("/dataTable", oModelTable);
 
 
            let oModelFormNew = Object.create(oModelForm);
 
            for (const property in oModelFormNew) {
                oModelFormNew[property] = "";
            };
 
            this.getView().getModel().setProperty("/dataForm", oModelFormNew);

            this.byId("idPanel").getBinding("items").refresh();

            this.getView().byId("idDialogNewReg").close();
        },

    });
});
