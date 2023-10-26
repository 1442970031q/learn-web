<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ fullName }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const msg = ref("v3api");
const fullName = computed(() => "ok");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
