import { Component, Vue } from 'vue-property-decorator';

/**
 * 猫一覧の型
 * @interface CatList
 */
interface CatAttr {
  name: string;
  race: string;
  color: string;
}

/**
 * 猫一覧を横表示する型
 * @interface OtherNotation
 */
interface OtherNotation {
  [key: string]: string | boolean;
}

/**
 * 猫一覧の横表示コンポーネント
 * @export
 * @class Kitten
 * @extends {Vue}
 */
@Component
export default class CatTable extends Vue {
  /**
   * 猫一覧
   * @private
   * @type {CatAttr[]}
   * @memberof CatTable
   */
  private cats: CatAttr[] = [];

  /**
   * 横表示用の算出プロパティ
   * @readonly
   * @private
   * @type {OtherNotation[]}
   * @memberof CatTable
   */
  private get dataForHorizontal(): OtherNotation[] {
    // 重複のないraceを抽出する
    const races = this.cats
      .map((x: CatAttr): string => x.race.replace(' ', '-').toLowerCase())
      .filter((x: string, i: number, self: string[]): boolean => {
        return self.indexOf(x) === i;
      })
      .sort();

    /* 以下のような形状に変換する
     * { name: くるみ, 'big-cat': false, 'small-cat': true }
     * { name: メロウ, 'big-cat': false, 'small-cat': true } */
    const result: OtherNotation[] = [];
    // データの整形
    this.cats.forEach((x: CatAttr): void => {
      // nameを作成
      const temp: OtherNotation = {
        name: x.name
      };
      // name以外の要素を作成
      races.forEach((y: string): void => {
        const flg = y === x.race.replace(' ', '-').toLowerCase();
        temp[y] = flg ? '◯' : '−';
      });
      result.push(temp);
    });
    return result;
  }

  /**
   * lifecycle hooks
   * @private
   * @memberof CatTable
   */
  private mounted(): void {
    (async (): Promise<void> => {
      const data: CatAttr[] = await fetch('http://localhost:3000/members').then(
        (res: Response): Promise<CatAttr[]> => res.json()
      );
      if (data && data.length > 0) this.cats = data;
    })();
  }
}
