# 技巧

## 1.垂直居中
### 1-1.未知父元素高度

```
.parentElement {
  position: relative;
}
// 方法1   transform: translateY(-50%);
.parentElement .childElement {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
// 方法2
.parentElement .childElement {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

### 1-2.已知父元素高度，仅有一个子元素

```
.parentElement {
  height: 100px;
}
.parentElement .childElement {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```

### 1-3.display:flex

```
.parentElement{
  display: flex;
  align-items: center
}
```

### 1-4.伪元素:before

```
.parentElement {
  display: block;
}
.parentElement:before {
  content: " ";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.parentElement .childElement {
  display: inline-block;
  vertical-align: middle;
}
```

### 1-5.display:table-cell

```
.parentElement {
  display: table;
}
.parentElement .childElement {
  display: table-cell;
  vertical-align: middle;
}
```

## 2.消除图片下方间隙

```
vertical-align: top;
```

## 3.图文居中
<style>
.container1 {
  padding: 15px 0;
}
.container1 img {
	width: 200px;
  vertical-align: middle;
}
</style>

<div class="container1">
  <img src="http://tc.lihail.cn/e7.png">
  <span>我是十一，我超可爱</span>
</div>

```
<div class="container">
  <img src="http://tc.lihail.cn/e7.png">
  <span>安能摧眉折腰事权贵，使我不得开心颜</span>
</div>
```

```
.container {
  padding: 15px 0;
}
.container img {
	width: 200px;
  vertical-align: middle;
}
```

## 4.超过部分...
### 4-1.单行文字
```
// 注意宽度是必须的
.article-container {
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

```
### 4-2.多行文字
```
.article-container {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
}

```
## 5.插入换行

<style>
.content .br::after {
  content: "\a";
  white-space: pre;
}
</style>

<div class="content">
  <span class="br">我是十一，我超可爱</span>
  <span class="br">注意，这是span标签</span>
  <span class="br">通过css插入\a 进行换行的</span>
  <span class="br">再说一遍，十一超可爱</span>
</div>

```
<div class="content">
  <span class="br">我是十一，我超可爱</span>
  <span class="br">注意，这是span标签</span>
  <span class="br">通过css插入\a 进行换行的</span>
  <span class="br">再说一遍，十一超可爱</span>
</div>
```

```
.content .br::after {
  content: "\a";
  white-space: pre;
}
```

## 6.毛玻璃效果

```
<main>
  <section>
    <article>我叫十一，一二三的一，八九十的十</article>
    <footer>--
      <cite>eleven 《十一的自白》</cite>
    </footer>
  </section>
</main>
```

```
main {
  height: 350px;
  background: url(http://tc.lihail.cn/e6.png) fixed center -50px/cover no-repeat;
  position: relative;
}
main section {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  width: 80%;
  height: 55%;
  box-sizing: border-box;
  padding: 66px 30px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
}
main section::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  background: url(http://tc.lihail.cn/e6.png) fixed center -50px/cover no-repeat;
  z-index: -1;
}
main section footer {
  font-size: 14px;
  text-align: right;
}
```

## 7.长文本折行

```
.long-text{
  white-space: pre-line;
  word-wrap: break-word;
}
```

## 8.小于12px文字生成
<p style="font-size:12px">十一很可爱不是吗（12px）</p>
<svg width="195.625" height="9.14">
  <text
    dominant-baseline="baseline"
    font-size="8"
    y="7.14"
    style="line-height: 1; vertical-align: middle;"
  >
    谁说不是呢！！！（8px）
  </text>
</svg>


```
<svg width="195.625" height="9.14">
  <text
    dominant-baseline="baseline"
    font-size="8"
    y="7.14"
    style="line-height: 1; vertical-align: middle;"
  >
    谁说不是呢！！！（8px）
  </text>
</svg>
```

