import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import "./index.css";

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
