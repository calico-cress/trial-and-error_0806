import Vue from "vue";
import Component from "vue-class-component";

/* デコレータ.. props等はこちらに記載する */
@Component({
    name: 'Kitten'
})
export default class Kitten extends Vue {
    msg: string = "(*ΦωΦ*)";
}
