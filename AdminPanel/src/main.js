import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

// Create Pinia instance
const pinia = createPinia();

import App from "./App.vue";
import router from "./router";

//Progress Bar

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
