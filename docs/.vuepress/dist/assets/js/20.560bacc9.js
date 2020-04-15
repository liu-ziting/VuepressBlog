(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{253:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"前端兼容性问题总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端兼容性问题总结"}},[s._v("#")]),s._v(" 前端兼容性问题总结")]),s._v(" "),n("h2",{attrs:{id:"html-篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html-篇"}},[s._v("#")]),s._v(" HTML 篇")]),s._v(" "),n("h3",{attrs:{id:"样式兼容性问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#样式兼容性问题"}},[s._v("#")]),s._v(" 样式兼容性问题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\x3c!-- IE 按 Edge 模式渲染 --\x3e\n<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n\x3c!-- IE 8 9 10 按 IE7 模式渲染 --\x3e\n<meta http-equiv="X-UA-Compatible" content="IE=Emulate7" />\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"怪异模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#怪异模式"}},[s._v("#")]),s._v(" 怪异模式")]),s._v(" "),n("p",[s._v("怪异模式是没有遵守 W3C 规范的一种兼容模式，其中的 width 是包括 contentWidth, 左右padding, 左右border 在内的全部范围(height 也一样)，类似于 box-sizing: border-box;，而且 table 的 font-size 不能从父元素继承。以下情况会触发浏览器怪异模式(Quirks Mode):")]),s._v(" "),n("ul",[n("li",[s._v("没写 DOCTYPE 触发怪异模式")]),s._v(" "),n("li",[s._v('在<!DOCTYPE ...>前加<?xml version="1.0" encoding="utf-8" ?>, IE6 下会触发怪异模式')]),s._v(" "),n("li",[s._v("在<!DOCTYPE ...>前加入"),s._v(", IE7进入怪异模式")]),s._v(" "),n("li",[s._v("\n<!DOCTYPE ...>前有任何非空字符，会在IE6 下会触发怪异模式\n")]),s._v(" "),n("li",[s._v("\n<!DOCTYPE ...>前有 XML ，在IE7 下不会触发怪异模式，但不能有其他非空字符\n")])]),s._v(" "),n("p",[s._v("检查document.compatMode,可以查看浏览器工作在哪个模式：值BackCompat为怪异模式，值CSS1Compat为标准模式")]),s._v(" "),n("h3",{attrs:{id:"display-inline-block-元素间有间隙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-block-元素间有间隙"}},[s._v("#")]),s._v(" display:inline-block 元素间有间隙")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\x3c!-- 以下的 li 元素是 display: inline; 类型的 --\x3e\n\x3c!-- 这样写元素之间有间隙 --\x3e\n<ul>\n  <li>apple</li>\n  <li>banana</li>\n  <li>pineapple</li>\n  <li>peach</li>\n  <li>orange</li>\n</ul>\n\x3c!-- 换个写法解决问题--\x3e\n<ul>\n  <li>apple</li><li>\n  banana</li><li>\n  pineapple</li><li>\n  peach</li><li>\n  orange</li>\n</ul>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"ie可能出现的文档样式短暂失效问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie可能出现的文档样式短暂失效问题"}},[s._v("#")]),s._v(" IE可能出现的文档样式短暂失效问题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<head>\n    \x3c!-- meta部分 --\x3e\n    <title></title>\n    \x3c!-- 可能的script部分 --\x3e\n    <script type="text/javascript"><\/script>   \x3c!-- 关键：添加一个空标签 --\x3e\n    \x3c!-- link部分 --\x3e\n</head>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"css-篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-篇"}},[s._v("#")]),s._v(" css 篇")]),s._v(" "),n("h3",{attrs:{id:"双倍间距问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双倍间距问题"}},[s._v("#")]),s._v(" 双倍间距问题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*一下代码在 IE6 中会出现双倍间距*/\n#box{\n  float: left;\n  margin: 10px;\n}\n\n//解决方法\n#box{\n  float: left;\n  margin: 10px;\n  display: inline;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"错位问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错位问题"}},[s._v("#")]),s._v(" 错位问题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*IE6中，这样的多个盒子并列时会发生向下偏移，应该对偏移的盒子添加负 margin-top 进行修正*/\n.box{\n  float: left;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"e6-奇数宽高问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#e6-奇数宽高问题"}},[s._v("#")]),s._v(" E6 奇数宽高问题")]),s._v(" "),n("p",[s._v("IE6 中盒子的宽(width) 和高(height)设置为奇数时会有 bug，尽量设置为偶数即可。")]),s._v(" "),n("h3",{attrs:{id:"ie6-peekaboo-bug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie6-peekaboo-bug"}},[s._v("#")]),s._v(" IE6 Peekaboo Bug")]),s._v(" "),n("p",[s._v("一个 div#top 中加入一个 div#float 向左浮动，然后加入一个或多个 div, 直到清除浮动为止：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<style>\n#top{\n    border: dotted 2px black;\n    background: #eee;    /*top有背景*/\n}\n#float{\n    height: 196px;\n    width: 196px;\n    border: 2px solid red;\n}\n.border{\n    border: 2px solid green;\n}\n.clear{\n    clear: both;\n    border: 2px solid blue;\n}\n</style>\n<body>\n    <div id="top">\n        <div id="float">float div</div>\n        \x3c!-- 这以下在 IE6 中不能正常显示 --\x3e\n        <div class="border">inside-div text!</div>\n        <div class="border">inside-div text!</div>\n        \x3c!-- 这以上在 IE6 中不能正常显示 --\x3e\n        <div class="clear">clear div</div>\n    </div>\n</body>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("解决方法，给 #top 一个 height 或 width ：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#top{\n    height: 300px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"盒子坍塌"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#盒子坍塌"}},[s._v("#")]),s._v(" 盒子坍塌")]),s._v(" "),n("p",[s._v("这个问题比较普遍，在盒内层元素设置外边距时会发生")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*发生盒子坍塌*/\n#box{\n  height: 300px;\n}\n#box .inner-box{\n  margin:20px;\n}\n\n/*修正*/\n#box{\n  height: 300px;\n  margin-top: -20px;\n}\n#box .inner-box{\n  margin:20px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"文字大小"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文字大小"}},[s._v("#")]),s._v(" 文字大小")]),s._v(" "),n("p",[s._v("字体大小在不同浏览上不一致。例如font-size:14px，在 IE 中的实际行高是16px，下面有3px留白；在 Firefox 中的实际行高是17px，下面有3px留白，上边1px留白；在 opera 中就更不一样了。解决方式统一指定行高 line-height")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("html{\n  font-size: 14px;\n  line-height: 14px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("另外，我们会遇到 font-size:62.5% 这样的定义，为了把默认的 16px 映射为 10px, 这样1em = 10px 更利于计算。")]),s._v(" "),n("h3",{attrs:{id:"去除元素默认边距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去除元素默认边距"}},[s._v("#")]),s._v(" 去除元素默认边距")]),s._v(" "),n("p",[s._v("有很多元素默认带有边距，对我们排版很不利。但利用通配符*去除边距存在性能问题，所以用下面语句清除默认边距")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{\n  margin: 0;\n  padding: 0;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"低版本-ie-高度限定失效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#低版本-ie-高度限定失效"}},[s._v("#")]),s._v(" 低版本 IE 高度限定失效")]),s._v(" "),n("p",[s._v("一般的元素指定高度属性 height 可以固定该元素高度，但在低版本 IE 中无法固定元素高度，该元素高度依然会被内容撑开，需要注意。(宽度也一样)")]),s._v(" "),n("h3",{attrs:{id:"ie6-不支持-png-透明效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie6-不支持-png-透明效果"}},[s._v("#")]),s._v(" IE6 不支持 png 透明效果")]),s._v(" "),n("p",[s._v("解决方式用滤镜")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#box{\n  _background: none;\n  filter: progid:DXImageTransForm.Microsoft.AlphaImageLoader(src='路径');\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"firefox-的宽度问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#firefox-的宽度问题"}},[s._v("#")]),s._v(" Firefox 的宽度问题")]),s._v(" "),n("p",[s._v("Firefox浏览器会的 body 比其他浏览器的 body 宽度小1个像素，注意设置其子元素（尤其 float 元素大小，防止排版混乱。")]),s._v(" "),n("h3",{attrs:{id:"ie6中的吞吃问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie6中的吞吃问题"}},[s._v("#")]),s._v(" IE6中的吞吃问题")]),s._v(" "),n("p",[s._v("IE6 中为上下2个 div 中的上一个地址设置背景时，下一个 div 也会带有背景。类似的还有 overflow:scroll 时，出现的滚动条不完整。应该 分别对在上方的 div 和滚动条不完整的 div 加 zoom: 1样式。")]),s._v(" "),n("h3",{attrs:{id:"ie6-图片格式问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie6-图片格式问题"}},[s._v("#")]),s._v(" IE6 图片格式问题")]),s._v(" "),n("p",[s._v("IE6 中的图片默认存在边框，应统一去除。同时图片下方会有空隙，用 font-size解决")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("img{\n  border: none;\n  font-size: 0;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"ie中无法定义1px高度这样的小盒子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie中无法定义1px高度这样的小盒子"}},[s._v("#")]),s._v(" IE中无法定义1px高度这样的小盒子")]),s._v(" "),n("p",[s._v("IE6 中的空元素高度不能低于19px，解决方式有四种：")]),s._v(" "),n("p",[s._v("1、在元素中插入空注释 "),s._v("\n2、在元素中插入空格  \n3、加入 css: overflow:hidden;\n4、加入 css: font-size: 0;")]),s._v(" "),n("h3",{attrs:{id:"ie6-z-index-失效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie6-z-index-失效"}},[s._v("#")]),s._v(" IE6 z-index 失效")]),s._v(" "),n("p",[s._v("当父元素已设置 z-index 属性后，子元素的 z-index 会失效。")]),s._v(" "),n("h3",{attrs:{id:"ie6中-select-始终高于-div"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ie6中-select-始终高于-div"}},[s._v("#")]),s._v(" IE6中 select 始终高于 div")]),s._v(" "),n("p",[s._v("浮层 div 出现时隐藏 select，浮层 div 消失时再显示 select。")]),s._v(" "),n("h3",{attrs:{id:"让-chrome-支持小于-12px-的字体"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#让-chrome-支持小于-12px-的字体"}},[s._v("#")]),s._v(" 让 chrome 支持小于 12px 的字体")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#box{\n  font-size: 8px;\n  -webkit-text-size-adjust: none;\n}\n/* 但是，上面这个方法 chrome27 以后就不能用了。但我们可以用 css3 解决这个问题 */\n#box{\n  font-size: 12px;\n  -webkit-transform: scale(0.75);\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"css-hack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-hack"}},[s._v("#")]),s._v(" CSS Hack")]),s._v(" "),n("p",[s._v("兼容性属性设置，注意书写顺序：优先写高等级浏览器支持方式、优先写支持浏览器多的方式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*以 color 属性为例，注意书写顺序*/\n#box{\n  color: #f00;   //所有浏览器都支持\n  color: #0f0 !important;   //只有 IE6 无效\n  color: #00f\\9;  //所有 IE 都有效\n  color: #ff0\\0;  //IE8+ 有效\n  color: #f0f\\9\\0; //IE9+ 有效\n  *color: #fff;  //仅 IE6, IE7 有效\n  #color: #0ff;  //仅 IE6, IE7 有效\n  +color: #800;  //仅 IE6, IE7 有效\n  -color: #008;  //只有 IE6 有效\n  _color: #080;  //只有 IE6 有效\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("由于后定义的属性覆盖先定义的属性，所有上面设置最后的效果为：")]),s._v(" "),n("p",[s._v("IE6 为 #080\nIE7 为 #800\nIE8 为 #ff0\nIE9,10 为 #0f0\n其他 为 #f00")])])}),[],!1,null,null,null);a.default=t.exports}}]);