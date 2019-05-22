import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";

/* element ui */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

/* iconfont */
import "./assets/icon/iconfont.css";
import insert_html from "./tools/add_component";
Vue.prototype.insert_html = insert_html;

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
