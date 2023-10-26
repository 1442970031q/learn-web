<template>
  <h1>v2</h1>
  <V2Api />
  <h1>v3</h1>
  <V3Api />
</template>

<script lang="ts" setup>
import V2Api from "./components/V2Api.vue";
import V3Api from "./components/V3Api.vue";
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
