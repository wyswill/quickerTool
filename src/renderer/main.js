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

/* 封装的的单个组件 */
import qktext from "./components/public_single_components/qktext.vue";
Vue.use(qktext);
Vue.component("qktext", qktext);
import qkButton from "./components/public_single_components/qkButton.vue";
Vue.use(qkButton);
Vue.component("qkButton", qkButton);
import qkLink from "./components/public_single_components/qkLink.vue";
Vue.use(qkLink);
Vue.component("qkLink", qkLink);
import qkContainer from "./components/public_single_components/qkContainer.vue";
Vue.use(qkContainer);
Vue.component("qkContainer", qkContainer);
import qkContainerUpDowm from "./components/public_single_components/qkContainerUpDowm.vue";
Vue.use(qkContainerUpDowm);
Vue.component("qkContainerUpDowm", qkContainerUpDowm);
import qkContainerLeftRight from "./components/public_single_components/qkContainerLeftRight.vue";
Vue.use(qkContainerLeftRight);
Vue.component("qkContainerLeftRight", qkContainerLeftRight);

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: {
    App,
    qktext,
    qkButton,
    qkLink,
    qkContainer,
    qkContainerUpDowm,
    qkContainerLeftRight
  },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
