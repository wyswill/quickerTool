import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: require("@/view/mainPage.vue").default
    },

    {
      path: "/myWorkBar",
      name: "myWorkBar",
      redirect: "frontEnd/myProject",
      component: require("@/view/mainPage.vue").default,
      children: [
        {
          name: "frontEnd",
          path: "frontEnd",
          component: require("@/view/myWorkBar/frontEnd.vue").default,
          children: [
            {
              name: "myProject",
              path: "myProject",
              component: require("@/components/project/index.vue").default
            },
            {
              name: "editeProject",
              path: "editeProject",
              component: require("@/components/editeProject/index.vue").default
            },
          ]
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
