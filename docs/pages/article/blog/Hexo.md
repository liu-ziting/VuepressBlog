# 最快的 Hexo 博客搭建方法

>Cloud Studio 是基于浏览器的集成式开发环境，为开发者提供了一个永不间断的云端工作站，支持绝大部分编程语言，包括 HTML5、PHP、Python、Java、Ruby、C/C++、.NET 小程序等等。Cloud Studio 提供了完整的 Linux 环境，并且支持自定义域名指向，动态计算资源调整，可以完成各种应用的开发编译与部署。

使用 Cloud Studio ，就不需要再折腾 Hexo 环境，不需要再解决不同平台上的各种冲突，直接在 Cloud Studio 里面即可进行 Hexo 的写作和部署。
>准备工作： 注册 CODING 账户，打开 Cloud Studio ，绑定腾讯云账号并实名认证。

## 第一步 一键构建环境
![此处输入图片的描述][1]

点击左下角的『终端』，接下来就进入敲命令时间。

首先新建一个文件夹并进行初始化，工作区中的所有文件将存放在这个文件夹里面，文件夹名 folder 可自定义（这时候可以去倒杯水喝，闭目养神五分钟）：
```
hexo init <folder>

```
![此处输入图片的描述][2]

接下来进入该文件夹（本文后面所有命令都在该文件夹目录中执行），并进行依赖安装：

```
cd <folder>
npm install
```
安装完成后，该文件夹的目录结构如下：

![此处输入图片的描述][3]

## 第二步 写作

在工作文件夹中执行这条命令来新建一篇文章，title即为文章的标题。
```
hexo new <title>
``` 
终端会返回一条信息，告诉你文章源文件存放在哪里.

打开该 md 文件，开始你的写作吧！

![此处输入图片的描述][4]

## 第三步 生成

写完 md 源文件后，我们需要 Hexo 帮忙生成静态文件，以便能在浏览器中看到渲染后最终的效果。
执行生成文件命令：
```
hexo generate
```
或者其简写形式：
```
hexo g
```

终端执行命令后效果如下。目录中会多出一个 public 文件夹，刚才生成的文件都放在其中。

![此处输入图片的描述][5]

## 第四步 部署

>准备工作：注册域名并进行实名认证，然后绑定域名

点击右边的【绑定域名】填入自己的域名和端口 (8080)。
在左边的文件中，找到【themes】→【_config.yml 】文件，双击进行修改，在 URL 中填入域名。

![此处输入图片的描述][6]

在终端输入命令启动服务：
```
hexo server -p 8080
```

## 第五步 访问博客

打开浏览器输入自己的域名，可以看到自己搭建完成的 Hexo 博客！大功告成！

![此处输入图片的描述][7]

### 备注：
1、域名需要实名认证，否则过一段时间其他人无法访问你的博客。
2、每次在 MD 编写完内容之后，都需要执行[hexo g]进行生成。
3、Markdown 语法可参考这篇帮助文档。更多博客设置请参考 Hexo 官网


  [1]: https://dn-coding-net-production-pp.qbox.me/d515f764-491f-4234-91b4-a769331ffb54.jpg
  [2]: https://dn-coding-net-production-pp.qbox.me/eeff1c31-1770-4045-9f3e-7924d361dade.jpg
  [3]: https://dn-coding-net-production-pp.qbox.me/8d46ff3e-3174-478f-bc1f-fef1d55dc1be.jpg
  [4]: https://dn-coding-net-production-pp.qbox.me/3ea95618-fe1a-43cb-8046-0b76b556438c.jpg
  [5]: https://dn-coding-net-production-pp.qbox.me/c1fc9eee-7ffe-4f31-943e-1ecddf6e4f65.jpg
  [6]: https://dn-coding-net-production-pp.qbox.me/ee63138c-b1ae-4e1f-b4dc-ed87cdd928dc.png
  [7]: https://dn-coding-net-production-pp.qbox.me/cc04c804-9fec-44f8-89fe-c64604eb1351.jpg