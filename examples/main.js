import Vue from "vue";
import App from "./App.vue";

import SongYong from "../packages";
import Toast from "../packages/toast.vue";

Vue.use(SongYong);

Vue.config.productionTip = false;
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message) {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor({
        propsData: {},
      });
      toast.$slots.default = [message];
      toast.$mount(); // 挂载到生命周期
      document.body.appendChild(toast.$el); // $el插入内容
    };
  },
};

new Vue({
  render: (h) => h(App),
}).$mount("#app");
