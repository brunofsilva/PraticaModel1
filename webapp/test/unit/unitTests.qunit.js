/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mentoriakafiori/zpratica-model1bfs/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
