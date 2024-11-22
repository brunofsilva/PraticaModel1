sap.ui.define(function () {
    "use strict";

    let Formatter = {

        find_age(vDtNasc) { 

            let vDate = new Date(vDtNasc);

            let vTemp = Date.now() - vDate.getTime();

            let vDate2 = new Date(vTemp); 

            return Math.abs(vDate2.getUTCFullYear() - 1970);
        },

        idade: function (vDtNasc) {
            return Formatter.find_age(vDtNasc);
        }
    };

    return Formatter;

}, true);