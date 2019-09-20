import { Component, Vue } from 'vue-property-decorator';
import Cat from './CatAlert/cat.vue';
import Table from './CatTable/table.vue';

/**
 * メイン画面クラス
 * @export
 * @class AppComponent
 * @extends {Vue}
 */
@Component({
  name: 'app',
  components: { Cat, Table }, // 子componentを使用する場合、こちらに追加する
})
export default class AppComponent extends Vue {}
