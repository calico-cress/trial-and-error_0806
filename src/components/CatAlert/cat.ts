import { Component, Vue } from 'vue-property-decorator';

/**
 * 子コンポーネントのクラス（猫クラス）
 * @export
 * @class Cat
 * @extends {Vue}
 */
@Component
export default class Cat extends Vue {
  private msg: string = '(*ΦωΦ*)';
}
