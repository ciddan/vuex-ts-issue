"use strict";

System.config({
	baseURL: "/",
	transpiler: false,
	packages: {
		"/app":						{ defaultExtension: "js" }
	},
	map: {
		"vue":						"node_modules/vue/dist/vue.js",
		"vue-class-component":		"node_modules/vue-class-component/dist/vue-class-component.js",
		"vuex":						"node_modules/vuex/dist/vuex.js"
	}
});
