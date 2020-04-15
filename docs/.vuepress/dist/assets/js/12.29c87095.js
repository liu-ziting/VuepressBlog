(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{244:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"wiki-知识库管理搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiki-知识库管理搭建"}},[t._v("#")]),t._v(" Wiki 知识库管理搭建")]),t._v(" "),s("blockquote",[s("p",[t._v("Wiki基于GitBook+GitPage，构建的知识库管理，用于记录碎片化的代码片段，文章集合，破解软件下载地址等等，持续更新中...")])]),t._v(" "),s("p",[t._v("传送门："),s("a",{attrs:{href:"http://wiki.lihail.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1),t._v(" --项目部署于GitPage")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"产品依赖于"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产品依赖于"}},[t._v("#")]),t._v(" 产品依赖于:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.gitbook.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"项目运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目运行"}},[t._v("#")]),t._v(" 项目运行")]),t._v(" "),s("pre",[s("code",[t._v("# 克隆到本地\ngit clone https://github.com/liu-ziting/Wiki.git\n\n# 进入文件夹\ncd Wiki\n\n# 安装依赖\ngitbook install\n\n# 开启本地服务器\ngitbook serve\n\n# 发布环境(打包成静态文件_book)\ngitbook build\n")])]),t._v(" "),s("h2",{attrs:{id:"项目目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构"}},[t._v("#")]),t._v(" 项目目录结构")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Wiki\n├── book.json\t\t配置文件数据(可选)\n├── README.md\t\t简介-书籍的简单介绍(必填)\n├── SUMMARY.md\t\t文章目录配置\n├── AboutUs.md\t\t介绍\n├── style\t\t自定义css\n├── docs\t\t打包生成的文件夹\n└── page\t\t存放单个文件（章节）\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"项目从零开始构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目从零开始构建"}},[t._v("#")]),t._v(" 项目从零开始构建")]),t._v(" "),s("h4",{attrs:{id:"使用npm全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用npm全局安装"}},[t._v("#")]),t._v(" 使用NPM全局安装")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ npm install gitbook-cli -g\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"创建一本书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一本书"}},[t._v("#")]),t._v(" 创建一本书")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ gitbook init\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"如果你想用现有的目录来创建一本书，你可以通过运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果你想用现有的目录来创建一本书，你可以通过运行"}},[t._v("#")]),t._v(" 如果你想用现有的目录来创建一本书，你可以通过运行")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ gitbook init ./directory\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"预览您创建的图书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览您创建的图书"}},[t._v("#")]),t._v(" 预览您创建的图书")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ gitbook serve\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"构建静态网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建静态网站"}},[t._v("#")]),t._v(" 构建静态网站")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ gitbook build\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("详情见"),s("a",{attrs:{href:"http://gitbook.hushuang.me/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitbook中文文档"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);