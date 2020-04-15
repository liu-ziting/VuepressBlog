# 钉钉微应用接入

## 概述

JSAPI为微应用提供调用原生控件的能力，帮助开发者高效使用拍照、定位等手机系统的能力，同时可以直接使用扫一扫、分享、钉盘等钉钉特有的能力，带给微应用接近原生代码的体验。此文档面向开发者介绍钉钉JSAPI如何使用及相关注意事项。

## 应用开发流程

 1. 注册企业: 进入OA管理后台，通过一系列流程，完成企业注册。
 2. 创建微应用: 进入钉钉管理后台后可以进入 “企业应用-应用管理” 页面创建微应用。 
 3. 需要填写应用Logo、应用名称、功能介绍、首页地址等必填信息。完成后，可在钉钉App的“工作”Tab下找到企业，可以查看到微应用入口。

>注意：首页地址必须真实有效，否则无法正常访问
创建微应用后会生成AgentID，方便后续开发使用。AgentID可用于免登鉴权、发送企业会话消息等场景。

![微信截图_20180807151013.png](https://pic.ik87.cn/2018/08/7/WgmwguPf.png)

## 准备工作
1. 开发之前，建议下载钉钉开发者版本的开发包。使用钉钉开发者版本的客户端进行开发、调试，对开发过程中问题的调试定位非常有帮助。钉钉提供了安卓、IOS端的开发者版本安装包，[具体使用方式请点击。][1]
2. 钉钉提供了调试页面，供开发者在开发之前提前体验客户端提供的JSAPI功能。开发者打开钉钉，扫描调试页面二维码即可提前体验，[JSAPI调试页面请点击。][2]

### 使用npm安装

我们推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```
npm install dingtalk-jsapi --save
```
如果你的网络环境不佳，推荐使用 cnpm。

示例代码：
```
import * as dd from 'dingtalk-jsapi'; // 此方式为整体加载，也可按需进行加载
```

### 浏览器引入

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 dd。

```
<script src="//g.alicdn.com/dingding/dingtalk-jsapi/2.0.57/dingtalk.open.js"></script>
```

---
## 前端流程
---
### 1. 获取JSAPI鉴权
a.调用后台提供的接口获取签名;
b.然后前端调用dd.cofig();
### 2. 获取身份免登
a.调用api拿到code;
b.调用后台提供的接口拿到access_token;
c.最后调用钉钉接口拿到用户信息；

## 获取JSAPI鉴权

钉钉提供的jsapi有些需要鉴权后才可调用，比如钉钉业务相关、安全相关的api；有些是手机的基础能力，对这些api的调用不需进行鉴权，只需保证在dd.ready里面调用即可。

### 鉴权流程

![此处输入图片的描述][3]

### JSAPI鉴权

示例代码：

```javascript
dd.config({
    agentId: '', // 必填，微应用ID
    corpId: '',//必填，企业ID
    timeStamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '', // 必填，签名
    type:0/1,   //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
    jsApiList : [
		'runtime.info',
		'biz.contact.choose',
		'device.notification.confirm',
		'device.notification.alert',
		'device.notification.prompt',
		'biz.ding.post',
		'biz.util.openLink',
	] // 必填，需要使用的jsapi列表，注意：不要带dd。
});

```

具体见官方文档：https://open-doc.dingtalk.com/microapp/frontjsapi/uwa7vs


>对调用不需要进行鉴权的api（即不需要进行dd.config），只需要在dd.ready里面调用即可。
>对于一些钉钉业务相关、安全相关的api调用，我们需要开发者先进行鉴权再进行调用（即dd.config）。


## 身份免登

企业或者ISV开发的应用，需要让用户在登录钉钉进入应用的时候通过授权获取用户信息，而不用输入用户名密码。

## 获取免登授权码

使用以下代码获取免登授权码（调用此api不需要进行鉴权，即不需要进行dd.config）

```
dd.ready(function() {
    dd.runtime.permission.requestAuthCode({
        corpId: _config.corpId, // 企业id
        onSuccess: function (info) {
                  code = info.code // 通过该免登授权码可以获取用户身份
        }});
});
```

## 通过免登授权码换取用户身份

企业应用的服务器在拿到CODE后，需要将CODE发送到钉钉开放平台接口，如果验证通过，则返回CODE对应的用户信息。此接口只用于免登服务中用来换取用户信息。

请求说明
Https请求方式: GET

```
https://oapi.dingtalk.com/user/getuserinfo?access_token=ACCESS_TOKEN&code=CODE

```

返回结果
正确时返回示例如下：

```
{
"errcode": 0,
"errmsg": "ok",
"userid": "USERID",
"deviceId":"DEVICEID",
"is_sys": true,
"sys_level": 0|1|2
}
```

>具体JSAPI总览：https://open-doc.dingtalk.com/microapp/frontjsapi/swk0bg
 

```javascript
<script type="text/javascript" src="http://g.alicdn.com/dingding/open-develop/1.5.1/dingtalk.js"></script>
<script>
dd.ready(function(){
    //需要鉴权再进行调用 (dd.config)
    //dd.config({
        //agentId : _config.agentid,
        //corpId : _config.corpId,
        //timeStamp : _config.timeStamp,
        //nonceStr : _config.nonceStr,
        //signature : _config.signature,
        //jsApiList : [ 'runtime.info', 'biz.contact.choose',
                //'device.notification.confirm', 'device.notification.alert',
                //'device.notification.prompt', 'biz.ding.post',
                //'biz.util.openLink' ]
    //});
 
    //不需要进行鉴权的api调用
    dd.ready(function(){
        dd.runtime.permission.requestAuthCode({
            corpId :'corpId',
            onSuccess : function(info) {
                $.ajax({
                    url : '请求地址',
                    type : 'post',
                    dataType:"json",  
                    data:data,  
                    processData : false,// 告诉jQuery不要去处理发送的数据 
                    contentType : false,// 告诉jQuery不要去设置Content-Type请求头
                    success : function(data, status, xhr) {
                        alert('1');
                    },
                    error : function(xhr, errorType, error) {
                        alert('0');
                    }
                });
            },
            onFail : function(err) {
                alert('fail: ' + JSON.stringify(err));
            }
        });
    });    
});
</script>
```


[1]: https://open-doc.dingtalk.com/microapp/debug  
[2]: https://wsdebug.dingtalk.com/
[3]: https://gw.alipayobjects.com/zos/skylark-tools/public/files/de0bb5cec8c79f20acbba95dc9e821ee.png