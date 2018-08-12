/* jqueryは、$.ajax()が無いslim版を使用。また、$.ajaxの代わりにfetch apiを使用 */
import * as $ from 'jquery/dist/jquery.slim';
import 'bootstrap'; // globalへの展開
import Vue from 'vue';

// Vueインスタンスの生成
new Vue({
    el: '#app',
    data: {
        message: 'kitty on the lap',
        // items: [] // 一旦空配列
    },
    /**
     * Vueインスタンスがマウントされた時に呼ばれる（Vue.js API ライフサイクルフック）
     */
    mounted: function () {
        // jsonファイルから初期データ取得（localstrageに無い場合）
        // if (this.items.length === 0) this.getInitialData();
        /* ビュー全体がレンダリングされた後の処理は以下に書く（既存の $(funtion().. 内のデータ取得以外の処理はここ） */
        this.$nextTick(function () {
            // 
        });
    },
    methods: {
        /**
         * jsonファイルから初期データを取得する
         */
        getInitialData: function (): void {
            fetch('../dummy-data.json')
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    // this.items = json.todo;
                })
                .catch(err => console.log(err)); // エラー発生時はログに記録する
        },
    },
});
