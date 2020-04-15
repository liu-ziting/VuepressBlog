# 内网穿透工具natapp

在开发过程中，很多时候为了方便我们往往只做内网测试，即同个局域网内，通过localhost或者127.0.0.1即可访问您正在开启的服务，但有些功能必须使用外网才能完成测试，比如微信小程序、公众号和支付宝小程序等。但又不能为了一个测试去搭建一个外网服务器。可以使用内网穿透工具，本地开启的服务器，外网可以访问。

## natapp 

官网地址：[natapp ][1]

## 注册登录，进入用户中心

可以购买不同的隧道，有不同的功能， 如绑定自己的域名，都有详细介绍, 简单的测试建议使用免费隧道。 

![natapp1.png](http://tc.lihail.cn/natapp1.png)

## 配置本地相关信息

可配置指定的端口，默认80

![natapp2.png](http://tc.lihail.cn/natapp2.png)

## 查看authtoken

![natapp3.png](http://tc.lihail.cn/natapp3.png)

## 下载客户端

![natapp4.png](http://tc.lihail.cn/natapp4.png)

## 配置文件

下载后解压缩得到 natapp.exe文件， 还需下载config.ini文件natapp.cn/article/con… ，将config.ini和natapp.exe放在同个目录 , 并打开config.ini 添加authtoken (购买时“我的隧道”中的authtoken)

![natapp5.png](http://tc.lihail.cn/natapp5.png)

## 在natapp.exe的目录下命令行运行 $ natapp 

![natapp6.png](http://tc.lihail.cn/natapp6.png)

此时 http://bgwsn5.natappfree.cc -> 192.168.0.27:8000， 本地的服务映射到了 http://bgwsn5.natappfree.cc , 外网请求http://bgwsn5.natappfree.cc 即可访问到本地的localhost:8000, 注意此时本地必须开启一个localhost:8000的服务。

还有，每次开启natapp，生成的子域名都不同，且免费版不能自定义子域名，如果需要可以购买相关套餐。

相关还有个内网穿透推荐：[ngrok][2]




 [1]: https://natapp.cn/
 [2]: https://ngrok.com/