# 移动端position:fixed、键盘遮住输入框问题


在移动端开发的时候，用到了position:fixed的遮罩蒙层，在蒙层里又放置里输入框。当用户输入时，软键盘会弹起来，会遮罩住输入框；又或者是图标定位在下面的，上面有输入框，当输入的时候，软键盘弹起来，下面定位的图标也上来了。

比较合理的解决方法是：通过resize() 方法触发 resize 事件，或规定当发生 resize 事件时运行的函数。

```
var windheight = $(window).height();  /*未唤起键盘时当前窗口高度*/    
$(window).resize(function(){   
   var docheight = $(window).height();  /*唤起键盘时当前窗口高度*/          
   if(docheight < windheight){ /*当唤起键盘高度小于未唤起键盘高度时执行*/  
     $("div").css("position","static");   
   }else{      
     $("div").css("position","fixed");   
   }           
});
```