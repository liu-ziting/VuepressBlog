# ajax长轮询、轮询应用和介绍


#### 什么是轮询

轮询是指客户端定时向服务器发送ajax请求，服务器接到请求后马上返回响应信息并关闭连接。

#### 轮询的简单实现
仅仅是说出定义来，好像很模糊，代码更加直观一些，下面就简单写一下轮询的实现方式：
前端代码（以jquery ajax为例，当然你也可以通过纯js的方式）
```
<html>
<head>
    <title>haorooms博客轮询测试案例</title>
    <script src="http://www.haorooms.com/theme/assets/js/jquery.js"></script>
</head>
<body>
<script type="text/javascript">
        var getting = {
        url:'server.php',
        dataType:'json',
        success:function(res) {
         console.log(res);
}
};
//Ajax定时访问服务端，不断获取数据 ，这里是1秒请求一次。
window.setInterval(function(){$.ajax(getting)},1000);
</script>
</body>
</html>
```
大家可以看到，前一次请求完成后，无论有无结果返回，一秒之后下一次请求又会发出。这就叫做Ajax轮询。通过这个案例，大家也可以看出，这样存在性能问题，服务器也增加很多压力。但是这就是轮询的一种实现方式了。

#### 什么是长轮询

客户端向服务器发送Ajax请求，服务器接到请求后hold住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。
通过上面描述，我们可以看出，长轮询本身不是一种真正的推送技术，而只是传统轮询技术的一个变种。然而，其能够在真正推送技术无法实现时模拟推送机制。

#### 长轮询的简单实现
直接上代码展示吧！前端代码如下：
```
<html>
<head>
    <title>haorooms博客长轮询测试案例</title>
    <script src="http://www.haorooms.com/theme/assets/js/jquery.js"></script>
</head>
<body>
<script type="text/javascript">
    //前端Ajax持续调用服务端，称为Ajax轮询技术
    var getting = {
        url:'server.php',
        dataType:'json',
        success:function(res) {
         console.log(res);
         $.ajax(getting); //关键在这里，回调函数内再次请求Ajax
}        
        //当请求时间过长（默认为60秒），就再次调用ajax长轮询
        error:function(res){
        $.ajax($getting);
        }
};
$.ajax(getting);
</script>
</body>
</html>
```