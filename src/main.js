// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#bot-app',
  components: { App },
  data() {
    return {
      feeds: [
        {
          type: 'message',
          text: 'Hi, how can I help you ?'
        }
      ]
    }
  },
  template:
    '<App :draggable="true" header-caption="Vue chat client demo" :feeds="feeds"/>',
  mounted() {}
})
