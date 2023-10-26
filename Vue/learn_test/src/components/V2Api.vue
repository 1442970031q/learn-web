<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ fullName }}</p>
    <b>展示：{{ inputValue }}</b>
    <div>v-model:<input type="text" v-model="inputValue" /></div>
    <div>
      @input+:value <input type="text" :value="inputValue" @input="handle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 * 生命周期相关问题
 * new Vue(options)过程
 * 1.在beforeCreated 之前 执行初始化 lifecycle(初始化 生命周期函数) initEvent（绑定 $once $on $emit $off）
 * beforeCreated 执行
 * 2.在beforeCreated 之后 初始化 injections 劫持date（通过 Object.defineProtaty） 初始化 provide
 * ceated 执行
 * 3. 判断是否有el 如果有el则判断el类型 如果是模版字符串类型则抽取 ast 模版树 优化模版树 生成render函数 如果是元素类型
 * 转成模版字符串 生成 render函数
 * beforeMount 执行
 * 4. 产生一个VDOM用于记录老的虚拟dom 通过render函数生成真实dom 真实dom替换掉el append到页面内
 * mounted 执行
 * 如果中间有 update操作会进行新老Vdom的diff 找出最小跟新
 * 5. 执行 distory方法进行销毁 移除事件 和清除对象
 * 执行 beforeDistory
 * 执行 distoryed
 */

/**
 * diff 流程 算法特点 
 * 1. 比较 key 和 tag 是否相同 
 * 2. 判断 属性是否相同 相同复用原由元素
 * 3. 判断自节点是否相同 不同的话判断自节点是否是列表如果是列表就双指针对比更新
react vue2 vue3 diff算法区别 https://juejin.cn/post/6919376064833667080?searchId=2023102616391636325502611AFC0DA865
*/

/**
 * vue.exends() 创建一个vue的实例
 * 所有组件都会调用 vue.extends 方法
 * const Profile=Vue.extends({templte:``,data:function(){return{}}}) new Profile().mount("#id")
 */

/**
 * 为什么 data 是个函数？
 通过闭包保证date不会被污染  
 */

/**
 * v-model是语法糖 :value+@input么？
 * v-model 绑定在表单中 对于input 表单 是 :value @input 并且会对中文输入做处理 对于中文中拼写的内容不进行展示
 * 对于 checkbox 是绑定 :value @change
 * 对于组件绑定 vue2 是 :value 还有input 可以通过 model:{prop:"checked",event:"chage"} 对于多个v-model 通过 v-model.sync 解决
 * vue3 通过 v-model.checked 来改变名称 vue3删除sync
 */

 /**
  * Vue.nextTick()
  * vue2 在通过 data=“122”赋值跟新的watch 会添加到一个队列里 nextTike会被添加到跟新队列之后
  * vue3 
  */
export default defineComponent({
  name: "V2Api",
  data() {
    return {
      msg: "v2api",
      inputValue: "",
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
  methods: {
    handle(e: any) {
      this.inputValue = e.target.value;
    },
  },
});
</script>

<style scoped lang="less"></style>
