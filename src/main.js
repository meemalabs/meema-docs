import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import "./index.css";

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/github-gist.css'

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.use(VueHighlightJS)
// app.use(VueHighlightJS)

app.mount('#app')
