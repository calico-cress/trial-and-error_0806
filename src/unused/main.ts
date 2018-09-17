/* jqueryは、$.ajax()が無いslim版を使用。また、$.ajaxの代わりにfetch apiを使用 */
// import * as $ from 'jquery/dist/jquery.slim';
// import 'bootstrap'; // globalへbootstrapを展開

import Vue from 'vue';

// Vueインスタンスの生成
new Vue({
    el: '#app',
    data: {
        message: 'kitty on the lap',
        // cards: [] // interfaceを定義する
    },
    /**
     * Vueインスタンスがマウントされた時に呼ばれる（Vue.js API ライフサイクルフック）
     */
    mounted: function () {
        // 現時点では、ダミーデータ取得
        // this.getInitialData();
        /* ビュー全体がレンダリングされた後の処理は以下に書く（既存の $(funtion().. 内のデータ取得以外の処理はここ） */
        this.$nextTick(function () {
            // 
        });
    },
    methods: {
        /**
         * 初期データを取得する（現状ダミー）
         */
        getInitialData: function (): void {
            fetch('../dummy-data.json')
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    // this.cards = json.cards;
                })
                .catch(err => console.log(err)); // エラー発生時はログに記録する
        },
    },
});