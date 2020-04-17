(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{257:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wiki"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiki"}},[t._v("#")]),t._v(" wiki")]),t._v(" "),a("h2",{attrs:{id:"项目介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[t._v("#")]),t._v(" 项目介绍")]),t._v(" "),a("blockquote",[a("p",[t._v("wiki基于GitBook搭建的知识库管理，用于记录碎片化的代码片段，文章集合，破解软件下载地址等等，持续更新中...")])]),t._v(" "),a("ul",[a("li",[t._v("传送门："),a("a",{attrs:{href:"http://wiki.lihail.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v(" --项目部署于GitPage")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"产品依赖于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产品依赖于"}},[t._v("#")]),t._v(" 产品依赖于:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.gitbook.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"项目运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目运行"}},[t._v("#")]),t._v(" 项目运行")]),t._v(" "),a("pre",[a("code",[t._v("# 克隆到本地\ngit clone https://github.com/liu-ziting/Wiki.git\n\n# 进入文件夹\ncd Wiki\n\n# 安装依赖\ngitbook install\n\n# 开启本地服务器\ngitbook serve\n\n# 发布环境(打包成静态文件_book)\ngitbook build\n")])]),t._v(" "),a("h2",{attrs:{id:"项目目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构"}},[t._v("#")]),t._v(" 项目目录结构")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Wiki\n├── book.json\t\t配置文件数据(可选)\n├── README.md\t\t简介-书籍的简单介绍(必填)\n├── SUMMARY.md\t\t文章目录配置\n├── AboutUs.md\t\t介绍\n├── style\t\t自定义css\n├── docs\t\t打包生成的文件夹\n└── page\t\t存放单个文件（章节）\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"项目从零开始构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目从零开始构建"}},[t._v("#")]),t._v(" 项目从零开始构建")]),t._v(" "),a("p",[t._v("使用NPM全局安装")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install gitbook-cli -g\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("创建一本书")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ gitbook init\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果你想用现有的目录来创建一本书，你可以通过运行")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ gitbook init ./directory\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("预览您创建的图书")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ gitbook serve\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("构建静态网站")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ gitbook build\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("详情见"),a("a",{attrs:{href:"http://gitbook.hushuang.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitbook中文文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);