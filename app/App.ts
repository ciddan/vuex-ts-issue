import Vue 				from "vue";
import Component		from "vue-class-component";

import { mapActions }	from "vuex";
import Vuex				from "vuex";

@Component(
{
	template: "<h1>Check the log output on the console</h1>"
})
export default class App extends Vue
{
	created() {
		console.log("mapActions from: import { mapActions }", mapActions);
		console.log("Vuex from: import Vuex", Vuex);

		console.log("mapActions from hack-y TypeScript cast to access it from the default export", (Vuex as any).mapActions);
	}
}
