<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ fullName }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
const msg = ref("v3api");
/**
收集effect 
 */
const fullName = computed(() => "ok");
const msg2 = reactive({ name: "123", age: ref(17) }); //会对ref自动进行拆包处理
const msg3 = ref({});
/**
 * 提供了 clear 函数
 * const stop = watch(fullName, (old, newv, clearCB) => { });
  stop();
 */

/**
 * ref和reactive的区别
ref 内部对与值类型的数据做了特殊处理 因为 Proxy只能代理对象类型的数据 对于值类型的通过Object.defineProtaty进行处理
但当通过ref包裹对象时候也会通过toReative进行处理
 */

/**
 */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
