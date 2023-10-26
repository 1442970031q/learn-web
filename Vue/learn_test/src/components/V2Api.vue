<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "V2Api",
  data() {
    return {
      msg: "v2api",
    };
  },
  /**
   * 是一种特殊的watch
   * 缓存计算值 当所依赖的数据没有变化不会进行重新计算
   * 内部有一个dirty属性当为ture时就执行对应的计算为false 就不返回旧值。
   * 当改属性被模版引用会更新模版
   */
  computed: {
    fullName() {
      return "ok";
    },
  },
  watch: {},
});
</script>

<style scoped lang="less"></style>
