<!-- レイアウトの変更時は、主にこのファイルを編集する -->
<template>
    <div id="app">
        <Cat/>
    </div>
</template>

<!-- script lang="ts" の場合、別ファイルにしないとvueファイルを読み込めないかも（検証中） -->
<script>
import Cat from "./Kittens/index.vue";
export default {
  name: "app",
  /* componentを追加したい場合、以下に追記する */
  components: {
    Cat
  }
};
</script>