# 解决 ios ( Safari ) 返回后页面不刷新的问题

在做H5项目的时候，在ios下当我们点击左上角的返回按钮，或者安卓上点击后退的时候，发生了两个不可思议的事情：

1、页面没有刷新，而是直接读取的缓存。
2、页面上绑定在window上的事件莫名其妙的消失了（例如onscroll）

这个时候，肯定就很自然的联想到了可能是微信内核引起的，二微信此次换内核，更换成的是苹果的 WKWebview 内核。Safari很早之前就使用了这个内核，而且微信官方明确表示，更换后，将和Safari 表现出高度的相似性。

所以这个问题就被我当成了 Safari的bug去搜，果然，最终解决办法如下：

```
var browserRule = /^.*((iPhone)|(iPad)|(Safari))+.*$/;
    if (browserRule.test(navigator.userAgent)) {
        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload()
            }
        };
    }
```

首先，我们需要判定它是 iPhone、iPad或者Safari 的一种，然后针对他们进行特殊处理。

window.onpageshow 是会在页面加载显示后触发，onpageshow 事件类似于 onload 事件，onload 事件在页面第一次加载时触发， onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。

为了查看页面是直接从服务器上载入还是从缓存中读取，你可以使用 PageTransitionEvent 对象的 persisted 属性来判断。 如果页面从浏览器的缓存中读取该属性返回 ture，否则返回 false。如上代码所示，如果是从缓存加载的，就刷新页面。

之前，reload方法被微信无情的枪毙掉了，但是换了内核之后，这个方法是好用的。