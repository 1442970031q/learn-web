// beforeRouteEach  全局的 
// beforeRouteEnter 跳转组件 
// beforeRouteUpdate 跟新传入的参数
// beforeRouteLeave 离开组件

// vue-route 路由几种模式
/**
 * has模式:  https:www.baidu.com/#/ 兼容性好 不美观 不利于seo（因为锚定的抓不到）
 * 通过监听 addEventListenr("hashchange",()=>{}) //低版本浏览器
 * addEventListenr("popstate") // 版本较高的浏览器
 */