import Vue			from "vue";
import App			from "./App";

new Vue(
{
	render: (createElement) => createElement(App)
}).$mount("#app");
