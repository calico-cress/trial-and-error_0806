/**
 * ## 注意 ##
 * メンテナンスに多少コストがかかるため、構成を煩雑にしないよう、できる限りシンプルに使う
 * 処理を追加する場合は良く検討のこと
 */

// webpackプラグイン
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loaderのVer15から、左記が必要 

// 環境変数 process.env.NODE_ENV が未設定の場合、developmentモードにしておく
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`  process.env.NODE_ENV -> ${process.env.NODE_ENV}\n`);

// 定義を追加したい場合、オブジェクトリテラルを追加する
let config = [{
    // 環境によってmodeを切替える
    mode: process.env.NODE_ENV,
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.js',
        /* sourcemapをクリーンに出力する
         * https://www.mistergoodcat.com/post/the-joy-that-is-source-maps-with-vuejs-and-typescript */
        devtoolModuleFilenameTemplate: info => {
            var $filename = 'sources://' + info.resourcePath;
            if (info.resourcePath.match(/\.vue$/) && !info.allLoaders.match(/type=script/)) {
                $filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash;
            }
            return $filename;
        },
        devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'], // 省略可能な拡張子の設定
        modules: [
            "node_modules"
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // import Vue from 'vue'; のためのパス指定
        }
    },
    module: {
        rules: [
            // 拡張子がvueのファイルを解決
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            // 拡張子がtsのファイルを解決
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            // .cssファイルと.vueファイルの<style>ブロックに適用される
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        // 複数のバンドルファイル間で共通しているモジュールを"common_lib.bundle.js"に切り出す
        splitChunks: {
            name: 'common-lib',
            chunks: 'initial'
        }
    },
    // 環境によってsourcemapを切り替える
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
    // 環境によって使用するプラグインを切り替える
    plugins: [
        new CleanWebpackPlugin(['dist']),
        /* vue.js公式の指定
         * todo：productionとdevelopmentで、バンドルファイルを比較したい｡｡ */
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new VueLoaderPlugin()
    ]
}];

module.exports = config;