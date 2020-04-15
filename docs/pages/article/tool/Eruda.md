# 移动端调试神器（eruda）

>之前提到的vconsole调试工具，最近又发现一个更牛逼的eruda，vconsole相比之下就有点弱了。

eruda 是一个专为手机网页前端设计的调试面板，其主要功能包括：捕获 console 日志、检查元素状态、显示性能指标、捕获XHR请求、显示本地存储和 Cookie 信息、浏览器特性检测等等。
 

 1.按钮拖拽，面板透明度大小设置。

 2.Console 面板：捕获 Console 日志，支持 log 、 error 、 info 、 warn 、 dir 、 time/timeEnd 、 clear 、 count 、 assert 、 table ；支持占位符，包括%c 自定义样式输出；支持按日志类型及正则表达式过滤；支持快捷命令加载 underscore 、 jQuery 库；支持 JavaScript 脚本执行。

 3.Elements 面板：查看标签内容及属性；查看应用在 Dom 上的样式；支持页面元素高亮；支持屏幕直接点击选取；查看 Dom 上绑定的各类事件。

 4.Network 面板：图表显示页面加载速度；查看页面各资源请求时间（ Android ）；捕获 XHR 请求，查看发送数据、返回头、返回内容等信息。

 5.Resources 面板：查看并清除 localStorage 、 sessionStorage 及 cookie ；查看页面加载脚本及样式文件；查看页面加载图片。

 6.Sources 面板：查看页面源码；格式化 html ， css ， js 代码及 json 数据。

 7.Info 面板：输出 URL 及 User Agent ；支持自定义输出内容。

 8.Snippets 面板：页面元素添加边框；加时间戳刷新页面；支持自定义代码片段。

 9.Features 面板：浏览器常用特性检测；提供 Can I use ， Html5Test 快捷访问

### 快速上手
-----------
通过CDN使用：
```
<script src="//cdn.bootcss.com/eruda/1.4.2/eruda.min.js"></script>
<script>eruda.init();</script>
```
通过npm安装：
```
npm install eruda --save
```
在页面中加载脚本：
```
<script src="node_modules/eruda/eruda.min.js"></script>
<script>eruda.init();</script>
```
Js文件对于移动端来说略重（gzip后大概100kb）。建议通过url参数来控制是否加载调试器，比如：
```
;(function () {
    var src = 'node_modules/eruda/eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
```

初始化时可以传入配置：
 - container: 用于插件初始化的Dom元素，如果不设置，默认创建div作为容器直接置于html根结点下面。
 - tool：指定要初始化哪些面板，默认加载所有。
```
let el = document.createElement('div');
document.body.appendChild(el);

eruda.init({
    container: el,
    tool: ['console', 'elements'],
    useShadowDom: true
});
```