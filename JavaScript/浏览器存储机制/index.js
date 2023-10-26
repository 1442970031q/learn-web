// 相关文档：https://segmentfault.com/a/1190000004743454

// 访问cookie document.cookie
// 设置cookie document.cookie="new cookie"
// cookie 可以在同一个域名下多个网页访问 不能跨域
// 当一个站点设置了cookie 那么浏览器在每次请求时 都会在hearde中携带上cookie 

//cookie的形式 是个字符串 以url key=value; key=value; key=value; 中间的空格不能省略
//cookie 其他属性的设置

document.cookie="test=mycookie1; domin=google.com.hk; " // domin 设定可访问域名
document.cookie="test=mycookie2; domin=google.com.hk; path=/search; " // path 设定可访问的页面
document.cookie="test=mycookie3; exprise=Sat, 04 Nov 2017 16:00:00 GMT; " // exprise设置删除时间 是GMT的时间格式
document.cookie="test=mycookie4; max-age=10080; " // max-age设置过期时间 单位为秒 为0时候立即删除 为负值表明会话结束删除
document.cookie="test=mycookie4; secure " // secure 安全标识 通过secure标识的只有在 https请求才会发送到服务器
