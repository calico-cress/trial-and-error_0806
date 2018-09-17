/* ## このファイルは編集しない ## */

import Vue from 'vue';
import App from './components/app.vue';

new Vue({
    el: '#app',
    template: '<App/>', // index.htmlの<div id="app">に、左記templateを書き込む
    components: { App },
});
