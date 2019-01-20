/* ## このファイルは編集しない ## */

import Vue from 'vue';
import App from './components/app.vue';

new Vue({
    template: '<App/>', // index.htmlの<div id="app">に、左記templateを差し込む
    components: { App },
}).$mount('#app');
