import { Component, Vue } from 'vue-property-decorator';

/**
 * 子画面のクラス（子猫クラス）
 * @export
 * @class Kitten
 * @extends {Vue}
 */
@Component
export default class Kitten extends Vue {
    private msg: string = '(*ΦωΦ*)';
}
