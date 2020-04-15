# CSS静效

## 1.清除默认样式

```
@charset "UTF-8";
* {
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
html, body, h1, h2, h3, h4, h5, h6, div, dl, dt, dd, ul, ol, li, p, blockquote, pre, hr, figure, table, caption, th, td, form, fieldset, legend, input, button, textarea, menu {
  margin: 0;
  padding: 0;
}
header, footer, section, article, aside, nav, hgroup, address, figure, figcaption, menu, details {
  display: block;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
  font-weight: normal;
}
html, body, fieldset, img, iframe, abbr {
  border: 0;
}
i, cite, em, var, address, dfn {
  font-style: normal;
}

li {
  list-style: none;
}
h1, h2, h3, h4, h5, h6, small {
  font-size: 100%;
}
sup, sub {
  font-size: 83%;
}
pre, code, kbd, samp {
  font-family: inherit;
}
q:before, q:after {
  content: none;
}
textarea {
  overflow: auto;
  resize: none;
}
label, summary {
  cursor: default;
}
a, button {
  cursor: pointer;
}
h1, h2, h3, h4, h5, h6, em, strong, b {
  font-weight: bold;
}
del, ins, u, s, a, a:hover {
  text-decoration: none;
}
body, textarea, input, button, select, keygen, legend {
  font: 12px/1.14 arial, 宋体;
  color: #333;
  outline: 0;
}
body {
  background: #fff;
}
a, a:hover {
  color: #333;
}
input {
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  /*解决ios上按钮的圆角问题*/
  border-radius: 0;
  /*解决ios上输入框圆角问题*/
  outline: medium;
  /*去掉鼠标点击的默认黄色边框*/
  background-color: transparent;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}
input[type=number] {
  -moz-appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

## 2.自定义滚动条样式（如现在的滚动条）

```
.scroll-container {
  height: 250px;
  border: 1px solid #ddd;
  padding: 15px;
  overflow: auto;
}
.scroll-container .row {
  margin: 0;
  line-height: 1.5;
}
.scroll-container::-webkit-scrollbar {
  width: 8px;
  background: white;
}
.scroll-container::-webkit-scrollbar-corner, .scroll-container::-webkit-scrollbar-thumb, .scroll-container::-webkit-scrollbar-track {
  border-radius: 4px;
}
.scroll-container::-webkit-scrollbar-corner, .scroll-container::-webkit-scrollbar-track {
  /* 滚动条轨道 */
  background-color: rgba(180, 160, 120, 0.1);
  box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
}
.scroll-container::-webkit-scrollbar-thumb {
  /* 滚动条手柄 */
  background-color: #00adb5;
}
```

## 3.常用媒体查询midea

```
/* 横屏 */
@media screen and (orientation:landscape){
     
}
/* 竖屏 */
@media screen and (orientation:portrait){
     
}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width:959px){
     
}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width:767px){
     
}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width:639px){
     
}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width:479px){
     
}
/* 设备像素比为2 */
/* 常用于1px边框，还应规定 3dppx 的情况 */
@media (min-resolution: 2dppx) {

}
/* windows UI 贴靠 */
@media screen and (-ms-view-state:snapped){
     
}
/* 打印 */
@media print{
     
}
```

## 4.强制横屏

```
.landscape-container {
  position: absolute;
  overflow: hidden;
}

// 竖屏
@media screen and (orientation: portrait) {
  .landscape-container {
    width: 100vh;
    height: 100vw;
    top: calc((100vh - 100vw) / 2);
    left: calc((100vw - 100vh) / 2);
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
}

// 横屏
@media screen and (orientation: landscape) {
  .landscape-container {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: none;
    transform-origin: 50% 50%;
  }
}
```
## 5.投影阴影

```
// 无偏移投影
.shadow1 {
  box-shadow: 0 0 12px rgba(0, 173, 181, 0.8);
}
// 下侧投影
.shadow2 {
	box-shadow: 0px 6px 12px -4px rgba(0, 173, 181, 0.8);
}
// 右侧投影
.shadow3 {
	box-shadow: 6px 6px 12px -5px rgba(0, 173, 181, 0.8);
}
// 双侧投影
.shadow4 {
	box-shadow: 6px 0 12px -5px rgba(0, 173, 181, 0.8), -6px 0 12px -5px rgba(0, 173, 181, 0.8);
}
// 菜单投影
.shadow5 {
	box-shadow: 0 3px 12px rgba(0, 173, 181, 0.8);
}
// 投影边框
.shadow6 {
	box-shadow: 0 0 0 1px rgba(0, 173, 181, 0.8);
}
```
