# 各大站通用首页变灰代码

#### 百度

```
.qm-activity {
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
```
#### 淘宝,京东

```
html {
  -webkit-filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
```
#### 华为

```
body {
  filter: gray;
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  overflow-x: hidden;
}
```
#### 知乎

```
.gray-mode {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  filter: gray;
  -webkit-filter: grayscale(1);
}
```
#### 网易

```
html {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  _filter: none;
}
```
#### 网易云音乐

```
html {
  /*兼容FF*/
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
  /*兼容IE内核*/
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  /*兼容其它，谷歌之类的*/
  -webkit-filter: grayscale(1);
}
```
#### 360首页

```
html {
  filter: progid:DXImageTransForm.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: saturate(0);
}
```
#### 腾讯网

```
.garyBody {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -webkit-filter: grayscale(1);
}
```
#### 掘金

```
html.mourning {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: #808080;
}
```
#### CSDN

```
html {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
```
#### 中国中央政府

```
/* 版块颜色变黑 */
.header_right,.nav,.rfmfoot,.column3 *{
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\' x=\'0\' y=\'0\' width=\'100%\' height=\'100%\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
```
#### 国务院新闻办公室

```
div,p,h1,h2,h3,h4,h5,h6,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,table,th,td,img,b,i,em{
  filter: grayscale(100%);/*火狐*/
  -webkit-filter:grayscale(100%);/*chrome*/
  filter: gray;
}
```