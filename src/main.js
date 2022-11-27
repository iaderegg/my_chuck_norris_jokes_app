import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

import VueSweetalert from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(VueSweetalert);
app.use(router);

app.mount("#app");
