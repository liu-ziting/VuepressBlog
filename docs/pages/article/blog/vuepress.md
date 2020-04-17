# 10分钟搞定vuepress快速制作vue文档/博客+免费部署预览
<div class="my-wrapper">

## 首先

### 什么是Vuepress？

[Vuepress](https://www.vuepress.cn/ "vuepress") 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。

由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。


就像官网说的一样

### 像数 1, 2, 3 一样容易

VuePress 好处：简洁至上、Vue 驱动、高性能

## 话不多说

前置要求：

* 了解markdown文件格式：☆☆☆☆☆
* 安装好npm/yarn的使用环境：☆☆☆☆☆

## 第一步
下载我这一套VuePress代码模板

```
git clone https://github.com/liu-ziting/VuepressBlog.git
```

你会得到下面这个目录结构

```
//下面没有文件类型后缀的都是文件夹
//部分内容并不是必须的，想自己定制的话可以参考官方文档。这里是按照我的思路写的。
├── docs
│   ├── .vuepress  //存放核心内容的文件夹
│   │   ├── components  //存放你需要添加的vue组件
│   │   ├── public  //存放静态文件，如图片等
│   │   ├── styles  //存放需要定制的样式
│   │   │   └── palette.styl  //配置页面主题颜色的文件
│   │   └── config.js   //设定顶部导航栏、侧边导航栏等项目配置的核心文件
│   ├── pages   //存放markdown文件，用于设置其他页面内容
│   ├── README.md   //首页展示用的markdown文件
├── deploy.sh     //之后用于编写上传、发布脚本的文件
└── package.json  //之前创建的Node.js项目描述文件
```

## 第二步

先 npm install 一下

```
npm install 
```

然后全局安装我们的vuepress

```
npm install -g vuepress
```


## 第三步

项目跑起来
```
npm run dev 
```
这个时候，你就可以用 localhost:8080 访问到我这个页面了

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416143119.png">
## 修改

接下来教你如何修改成自己的博客网站

### 修改配置文件

修改首页以及对应的左侧菜单栏，打开config.js，里面都有相关的配置注释，应该都能看到懂。

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416144141.png">

config.js所在目录：VuepressBlog\docs\.vuepress\config.js

所有的页面都是.md文件格式，并且存放在VuepressBlog\docs\pages目录下面

### 修改首页

首页所在目录：VuepressBlog\docs\README.md

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416144153.png">


此时所有配置都修改完成后，开始编写你的文章，写完md文件后记得存放到pages文件下，并且在config加入你新增的文件
然后 npm run dev 重新跑一下就可以了

## 打包

```
npm run build 
```

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416144852.png">


打包完成后的文件存放在：VuepressBlog\docs\.vuepress\dist 

## 部署

### 注册coding

官网：[coding](https://coding.net/)，coding是什么？自行了解下，现在你只要知道它可以免费部署和托管静态资源就可以了

### 创建项目

创建项目，选择DevOps模板，创建好项目

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416145139.png">

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416145458.png">

获取git仓库地址，然后将自己代码提交到这个仓库。

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416145728.png">

### 部署静态资源

点击持续部署-静态资源，注意，这个一定要勾选触发机制-：代码更新时自动部署，这样下次修改好，直接提交代码就自动部署更新了，非常方便。

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416145847.png">


### 发布

点击立即部署，就好得到一个公网可以访问的链接地址，如下：

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416150157.png">

然后，如果有域名的，可以进行绑定自己的域名：

<img class="my-img" src="http://tc.lihail.cn/微信截图_20200416150507.png">


好，一切都搞定了，差不多9分钟，现在我们倒一杯茶，抽根烟，刚好10分钟。


</div>