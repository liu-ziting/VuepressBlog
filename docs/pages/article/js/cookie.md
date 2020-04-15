# cookie

## 1.设置cookie

```
function setCookie(key, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = key + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
```

## 2.获取cookie

```
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = document.cookie.match(reg)){
    return (arr[2])
  } else{
    return null
  }
}
```

## 3.删除cookie

```
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
  }
}
```