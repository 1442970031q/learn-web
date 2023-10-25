// CommonJs规范 特性：同步加载的特性 ，模块加载完成才会进行之后的工作 运行时加载
/**
 * 模块调用 require
 * 模块定义 module.exports
 * NodeJS为什么采用 Commonjs模块系统 ？
 * 服务器端的文件放在磁盘上同步加载快 不用考虑异步加载的场景 所以采用Commonjs加载方式
 *
 * NodeJS采用的就是 Commonjs模块系统 并且做了特殊处理
 * 1. 增加 id filename loaded等属性
 * 2. 增加了catch 能够缓存模块 并且可以通过 delete require.catch[modeName] 删除缓存
 *
 *
 */

// AMD（Asynchronous Module Definition）规范  特性：依赖前置 提前执行 非同步加载 动态加载
/**
 * AMD 是一种支持异步的模块加载规范 实现这个规范的工具有 RequireJS库
 * 模块定义 
    * 独立模块定义 define(()=>({
    * "moduleA":""}))
    * 有依赖的模块定义
    * define(["moduleA","moduleB"],(mA,mB)=>({"moduleC":""}))
    * define(数组依赖的模块名称,模块实现)
 * 模块调用
 * require(["moduleA","moduleB"],(mA,mB)=>{}) 第一个参数依赖的模块，第二个参数回调
 */

// AMD和Commonjs模块系统的相同点 都是运行时加载

// CMD（Common Moduel Definition）规范 特性：依赖就近 延迟执行 非同步加载 动态加载
/**
 * CMD 实现的工具有 Sea.js
 * 
 * 模块定义
 * define('moduleA',function(require,exports,module){
 * console.log("模块a加载")
 * exports.run=()=>{}
 * })
 * 模块加载
 * define('main',function(require,exports,module){
 *  require("moduleA").run()
 * })
 */

// UMD（Universal  Module Definition）通用的模块规范 对 CommonJS 和 AMD ，CMD 做兼容处理 
/**
 * (function(root, factory) {
  if (typeof exports === "object" && typeof module === "object") {
    // CommonJS规范 node 环境 判断是否支持 module.exports 支持 require 这种方法
    module.exports = factory(require);
  } else if (typeof define === "function" && define.amd) {
    // AMD 如果环境中有define函数，并且define函数具备amd属性，则可以判断当前环境满足AMD规范
    console.log("是AMD模块规范，如require.js");
    define(factory());
  } else if (typeof exports === "object") {
    // 不支持 module 但是支持 exports 的情况下使用 exports导出 是CommonJS 规范
    exports["jiang-hooks"] = factory();
  } else {
    // 直接挂载在全局对象上
    root.umdModule = factory();
  }
})(this, function() {
  return {
    name: "Umd模块",
  };
});
 */


// ES6 模块系统 特性：静态化 编译时加载
/**
 * 
 * 模块定义：通过export 导出定义的模块 动态引入绑定内部的数据 没有缓存
 * 
 * 模块调用： 通过 import 模块导入 import 具有导入提升的功能
 * 
 */


// 运行时加载和编译时加载含义：运行时加载指的是在代码运行的时候才能知道具体的模块，编译时加载指的是在代码未运行之前编译阶段就可以知道对应模块