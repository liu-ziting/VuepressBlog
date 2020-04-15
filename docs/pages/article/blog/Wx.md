# 微信公众号开发流程

## 微信公众号分类

- 服务号：为企业和组织提供更强大的业务服务与用户管理能力，主要偏向服务类交互（功能类似12315，114，银行，提供绑定信息，服务交互的）；适用人群：媒体、企业、政府或其他组织。群发次数：服务号1个月（按自然月）内可发送4条群发消息。

- 订阅号：为媒体和个人提供一种新的信息传播方式，主要功能是在微信侧给用户传达资讯；（功能类似报纸杂志，提供新闻信息或娱乐趣事）适用人群：个人、媒体、企业、政府或其他组织。群发次数：订阅号（认证用户、非认证用户）1天内可群发1条消息。

## 注册微信公众号

进入微信公众号注册页面 https://mp.weixin.qq.com/ 点击公众号右上方的注册按钮,进入注册界面,填写基本信息,选择订阅号, 完成身份认证, 此处我选择的是个人订阅号,如下完善即可:
![微信截图_20180914092423.png](https://pic.ik87.cn/2018/09/14/TXJT5yaX.png)

然后注册成功之后进入微信公众平台后台,然后完善微信号名称和微信号ID:
![微信截图_20180914092628.png](https://pic.ik87.cn/2018/09/14/svqj0Cp2.png)

### 微信授权的整体流程

![微信截图_20180914093007.png](https://pic.ik87.cn/2018/09/14/zwz07hb5.png)

### 微信公众号显示的菜单配置

![6.png](https://pic.ik87.cn/2018/09/14/2ys2itVv.png)

## 微信授权开发过程

### 获取微信公众号的AppID和AppSecret

每个公众号都有对应的AppID和AppSecret，可以登录微信公众平台 -> 基本配置中的开发者ID可以查看到。当然，这对应的是生产环境，对于那些关注的人数较多的公众号来说，是不会用这个ID来进行测试的。因此，微信公众平台还提供了相应的测试账号。可以通过开发者工具 -> 公众平台测试账号进入（根据不同微信号可以在同一个公众号中建立不同的测试账号）。

![1.png](https://pic.ik87.cn/2018/09/14/XLDNcRZT.png)
![2.png](https://pic.ik87.cn/2018/09/14/9v9pjCVd.png)

如上图所示，在个人测试号中同样具有appID和appSecret，因此可以使用这个测试号信息进行开发和测试。以下的过程都是针对测试号，生产号的配置基本相同。

### 配置授权回调的页面

在JS接口安全域名中，点击修改来设置网页的域名。安全域名只需要填写域名或IP地址即可，不需要添加http，如www.xxxx.com或127.0.0.1，则在该域名下的页面都能够得到授权，而相关的二级或三级域名（aaa.xxxx.com）则无法获得授权。 

注 若填写时增加了协议，如 http://www.xxxx.com 或 http://127.0.0.1，页面同样可以获得授权，但是会带来一些未知的状况，如用户请求微信二次分享时，分享出来的描述和图片无法正确显示。 
当填写的网址通过了微信公众平台的安全监测时，即说明该域名已经配置成功了。

### 用户授权并获取code

想要对用户进行授权，其实就是让用户进入下面的授权链接：

https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect

微信的授权链接有几部分组成，appid、rediect_uri、response_type、scope、state和wechat_redirect，这几个参数的传值，在微信的开发文档上都有，现在附上，并添加一些需要注意的地方：
![3.png](https://pic.ik87.cn/2018/09/14/0zJgRaGY.png)

通过以上参数可以拼接出需要授权访问的页面链接，如下测试链接：

https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1234567890&redirect_uri=http://www.xxxx.com&response_type=code&scope=snsapi_userinfo 
&state=abcd#wechat_redirect

当用户点击该链接的时候，微信会弹出授权页面，当用户确认授权后，微信会回调一个http://www.xxxx.com?code=12334566778&state=abcd的页面，在该页面中code是微信返回的一串字符串，且使用一次后即失效。

### 使用code换取access_token

access_token是调用微信用户信息的凭证，微信回调的URL地址中带有code参数，通过code可以换取access_token。处于安全的考虑，前端使用code请求access_token容易被窃取，因此前端可以通过截取URL中的code参数值转发给后台，从后台发起请求来获取需要的信息，此处不再赘述请求access_token的过程，相关的步骤可以查看微信的开发文档。

此处附上微信测试号获取access_token的过程： 
微信公众平台开发者文档 -> 接口在线调试，如图所示：

![4.png](https://pic.ik87.cn/2018/09/14/Ahug7aVT.png)

接口调试页面如图所示：

![5.png](https://pic.ik87.cn/2018/09/14/8EfeDSmh.png)

------

## 微信开发工具

微信后台下载微信开发者工具进行调试页面与接口

![8.png](https://pic.ik87.cn/2018/09/14/2Q0T3ToL.png)


## 微信支付流程

![chapter7_4_1.png](https://pic.ik87.cn/2018/09/14/i4ofdgfM.png)

具体文档：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_4