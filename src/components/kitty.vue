<template>
  <div class="kitty">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "kitty",
  data() {
    return {
      msg: "kitty on the lap"
    };
  }
};
</script>