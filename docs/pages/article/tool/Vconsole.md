# 移动端使用vconsole调试console

>因为最近一直在弄移动端项目，由于在移动端无法打开控制台，所以想办法打印调试console的数据一直苦恼。之前用的是chrome的inspect调试，但是只能使用移动版的chrome查看数据，兼容不好，所以最近使用了vConsole 进行调试。

### 使用
首先去下载相关的代码，由于只需要在页面引入一个js文件，直接去下载就可以，地址：https://www.npmjs.com/package/vconsole

或者使用 npm 安装：
```
npm install vconsole
```
使用webpack，然后js代码中
```
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole() // 初始化
```

或者找到这个模块下面的 dist/vconsole.min.js ，然后复制到自己的项目中
```
<head>
    <script src="dist/vconsole.min.js"></script>
</head>
<!--建议在 `<head>` 中引入哦~ -->
<script>
  // 初始化
  var vConsole = new VConsole();
  console.log('VConsole is cool');
</script>
```

### 注意
请注意，VConsole 只是 vConsole 的原型，而非一个已实例化的对象。所以在手动 new 实例化之前，vConsole 不会被插入到网页中。

官方文档：https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md