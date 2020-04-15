# 前端兼容性问题总结

## HTML 篇

### 样式兼容性问题

```
<!-- IE 按 Edge 模式渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<!-- IE 8 9 10 按 IE7 模式渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=Emulate7" />
```
### 怪异模式

怪异模式是没有遵守 W3C 规范的一种兼容模式，其中的 width 是包括 contentWidth, 左右padding, 左右border 在内的全部范围(height 也一样)，类似于 box-sizing: border-box;，而且 table 的 font-size 不能从父元素继承。以下情况会触发浏览器怪异模式(Quirks Mode):

- 没写 DOCTYPE 触发怪异模式
- 在<!DOCTYPE ...>前加<?xml version="1.0" encoding="utf-8" ?>, IE6 下会触发怪异模式
- 在<!DOCTYPE ...>前加入<!-- keep IE7 in Quirks Mode -->, IE7进入怪异模式
- <!DOCTYPE ...>前有任何非空字符，会在IE6 下会触发怪异模式
- <!DOCTYPE ...>前有 XML ，在IE7 下不会触发怪异模式，但不能有其他非空字符

检查document.compatMode,可以查看浏览器工作在哪个模式：值BackCompat为怪异模式，值CSS1Compat为标准模式

### display:inline-block 元素间有间隙

```
<!-- 以下的 li 元素是 display: inline; 类型的 -->
<!-- 这样写元素之间有间隙 -->
<ul>
  <li>apple</li>
  <li>banana</li>
  <li>pineapple</li>
  <li>peach</li>
  <li>orange</li>
</ul>
<!-- 换个写法解决问题-->
<ul>
  <li>apple</li><li>
  banana</li><li>
  pineapple</li><li>
  peach</li><li>
  orange</li>
</ul>
```

### IE可能出现的文档样式短暂失效问题

```
<head>
    <!-- meta部分 -->
    <title></title>
    <!-- 可能的script部分 -->
    <script type="text/javascript"></script>   <!-- 关键：添加一个空标签 -->
    <!-- link部分 -->
</head>
```

## css 篇

### 双倍间距问题

```
/*一下代码在 IE6 中会出现双倍间距*/
#box{
  float: left;
  margin: 10px;
}

//解决方法
#box{
  float: left;
  margin: 10px;
  display: inline;
}
```
### 错位问题

```
/*IE6中，这样的多个盒子并列时会发生向下偏移，应该对偏移的盒子添加负 margin-top 进行修正*/
.box{
  float: left;
}
```

### E6 奇数宽高问题

IE6 中盒子的宽(width) 和高(height)设置为奇数时会有 bug，尽量设置为偶数即可。

### IE6 Peekaboo Bug

一个 div#top 中加入一个 div#float 向左浮动，然后加入一个或多个 div, 直到清除浮动为止：

```
<style>
#top{
    border: dotted 2px black;
    background: #eee;    /*top有背景*/
}
#float{
    height: 196px;
    width: 196px;
    border: 2px solid red;
}
.border{
    border: 2px solid green;
}
.clear{
    clear: both;
    border: 2px solid blue;
}
</style>
<body>
    <div id="top">
        <div id="float">float div</div>
        <!-- 这以下在 IE6 中不能正常显示 -->
        <div class="border">inside-div text!</div>
        <div class="border">inside-div text!</div>
        <!-- 这以上在 IE6 中不能正常显示 -->
        <div class="clear">clear div</div>
    </div>
</body>
```
解决方法，给 #top 一个 height 或 width ：
```
#top{
    height: 300px;
}
```

### 盒子坍塌

这个问题比较普遍，在盒内层元素设置外边距时会发生

```
/*发生盒子坍塌*/
#box{
  height: 300px;
}
#box .inner-box{
  margin:20px;
}

/*修正*/
#box{
  height: 300px;
  margin-top: -20px;
}
#box .inner-box{
  margin:20px;
}
```

### 文字大小

字体大小在不同浏览上不一致。例如font-size:14px，在 IE 中的实际行高是16px，下面有3px留白；在 Firefox 中的实际行高是17px，下面有3px留白，上边1px留白；在 opera 中就更不一样了。解决方式统一指定行高 line-height

```
html{
  font-size: 14px;
  line-height: 14px;
}
```

另外，我们会遇到 font-size:62.5% 这样的定义，为了把默认的 16px 映射为 10px, 这样1em = 10px 更利于计算。

### 去除元素默认边距

有很多元素默认带有边距，对我们排版很不利。但利用通配符*去除边距存在性能问题，所以用下面语句清除默认边距

```
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{
  margin: 0;
  padding: 0;
}
```

### 低版本 IE 高度限定失效

一般的元素指定高度属性 height 可以固定该元素高度，但在低版本 IE 中无法固定元素高度，该元素高度依然会被内容撑开，需要注意。(宽度也一样)

### IE6 不支持 png 透明效果

解决方式用滤镜

```
#box{
  _background: none;
  filter: progid:DXImageTransForm.Microsoft.AlphaImageLoader(src='路径');
}
```

### Firefox 的宽度问题

Firefox浏览器会的 body 比其他浏览器的 body 宽度小1个像素，注意设置其子元素（尤其 float 元素大小，防止排版混乱。

### IE6中的吞吃问题

IE6 中为上下2个 div 中的上一个地址设置背景时，下一个 div 也会带有背景。类似的还有 overflow:scroll 时，出现的滚动条不完整。应该 分别对在上方的 div 和滚动条不完整的 div 加 zoom: 1样式。

### IE6 图片格式问题

IE6 中的图片默认存在边框，应统一去除。同时图片下方会有空隙，用 font-size解决
```
img{
  border: none;
  font-size: 0;
}
```

### IE中无法定义1px高度这样的小盒子

IE6 中的空元素高度不能低于19px，解决方式有四种：

1、在元素中插入空注释 <!---->
2、在元素中插入空格 &nbsp;
3、加入 css: overflow:hidden;
4、加入 css: font-size: 0;

### IE6 z-index 失效

当父元素已设置 z-index 属性后，子元素的 z-index 会失效。

### IE6中 select 始终高于 div

浮层 div 出现时隐藏 select，浮层 div 消失时再显示 select。

### 让 chrome 支持小于 12px 的字体

```
#box{
  font-size: 8px;
  -webkit-text-size-adjust: none;
}
/* 但是，上面这个方法 chrome27 以后就不能用了。但我们可以用 css3 解决这个问题 */
#box{
  font-size: 12px;
  -webkit-transform: scale(0.75);
}
```

### CSS Hack

兼容性属性设置，注意书写顺序：优先写高等级浏览器支持方式、优先写支持浏览器多的方式

```
/*以 color 属性为例，注意书写顺序*/
#box{
  color: #f00;   //所有浏览器都支持
  color: #0f0 !important;   //只有 IE6 无效
  color: #00f\9;  //所有 IE 都有效
  color: #ff0\0;  //IE8+ 有效
  color: #f0f\9\0; //IE9+ 有效
  *color: #fff;  //仅 IE6, IE7 有效
  #color: #0ff;  //仅 IE6, IE7 有效
  +color: #800;  //仅 IE6, IE7 有效
  -color: #008;  //只有 IE6 有效
  _color: #080;  //只有 IE6 有效
}
```
由于后定义的属性覆盖先定义的属性，所有上面设置最后的效果为：

IE6 为 #080
IE7 为 #800
IE8 为 #ff0
IE9,10 为 #0f0
其他 为 #f00