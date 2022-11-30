import { App } from 'vue'
import StarrySky from './src/StarrySky.vue';

StarrySky.install = (App: App) => {
	App.component('StarrySky', StarrySky);
};

export default StarrySky;
