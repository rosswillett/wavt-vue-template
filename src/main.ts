import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App); // $('#app').__vue_app__
app.mount('#app'); // $('#app').__vue_app__._instance.exposeProxy
