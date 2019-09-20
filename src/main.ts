/* ## このファイルは編集しない ## */

import Vue from 'vue';

// bootstrap-vue 導入
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// bootstrapのCSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// メイン画面のコンポーネント
import App from './components/app.vue';

new Vue({
  template: '<App/>', // index.htmlの<div id="app">に、左記templateを差し込む
  components: { App }
}).$mount('#app');
