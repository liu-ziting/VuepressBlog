# CSS动效

## 1.提示气泡
<style>
.poptip {
  position: relative;
  z-index: 101;
}
.poptip::before, .poptip::after {
  visibility: hidden;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s ease 0.2s;
  box-sizing: border-box;
}
.poptip::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 8px 0 8px;
  border-color: #30363d transparent transparent transparent;
  left: calc(50% - 8px);
  top: 0px;
  transform: translateX(0%) translateY(-12px);
}
.poptip::after {s
  font-size: 14px;
  color: #fff;
  content: attr(aria-controls);
  position: absolute;
  padding: 6px 12px;
  white-space: nowrap;
  z-index: -1;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%) translateY(-12px);
  background: #30363d;
  line-height: 1;
  border-radius: 2px;
}
.poptip:hover::before, .poptip:hover::after {
  visibility: visible;
  opacity: 1;
}

.btn {
  width: 100px;
	margin: 40px auto;
  line-height: 1.5;
  padding: 5px 10px;
  color: #fff;
  background: #00adb5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
</style>

<div class="poptip btn" aria-controls="弹出气泡">poptip</div>

```
  <div class="poptip btn" aria-controls="弹出气泡">poptip</div>
```

```
  .poptip {
    position: relative;
    z-index: 101;
  }
  .poptip::before, .poptip::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
  }
  .poptip::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 8px 0 8px;
    border-color: #30363d transparent transparent transparent;
    left: calc(50% - 8px);
    top: 0px;
    transform: translateX(0%) translateY(-12px);
  }
  .poptip::after {
    font-size: 14px;
    color: #fff;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 12px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY(-12px);
    background: #30363d;
    line-height: 1;
    border-radius: 2px;
  }
  .poptip:hover::before, .poptip:hover::after {
    visibility: visible;
    opacity: 1;
  }
  
  .btn {
    width: 100px;
  	margin: 40px auto;
    line-height: 1.5;
    padding: 5px 10px;
    color: #fff;
    background: #00adb5;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

```

## 2.手风琴

<style>
ul{
	padding:0;
}
.accordion-container {
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.accordion-container .accordion-item {
  list-style: none;
  height: 500px;
  transition: width 0.5s;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.accordion-container .accordion-item:not(:hover) {
  width: 20%;
}
.accordion-container .accordion-item:hover {
  width: 800px;
}
.accordion-container .accordion-item:hover::after {
  opacity: 1;
}
.accordion-container .accordion-item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
}
.accordion-container .accordion-item .accordion-title {
  color: #fff;
  font-size: 18px;
  z-index: 2;
}
</style>

<ul class="accordion-container">
	<li class="accordion-item" style="background-image: url(http://tc.lihail.cn/e6.png);">
		<p class="accordion-title">背景1</p>
	</li>
	<li class="accordion-item" style="background-image: url(http://tc.lihail.cn/e6.png);">
		<p class="accordion-title">背景2</p>
	</li>
	<li class="accordion-item" style="background-image: url(http://tc.lihail.cn/e6.png);">
		<p class="accordion-title">背景3</p>
	</li>
	<li class="accordion-item" style="background-image: url(http://tc.lihail.cn/e6.png);">
		<p class="accordion-title">背景4</p>
	</li>
	<li class="accordion-item" style="background-image: url(http://tc.lihail.cn/e6.png);">
		<p class="accordion-title">背景5</p>
	</li>
</ul>

```
<ul class="accordion-container">
	<li class="accordion-item" style="background-image: url(bg1.jpg);">
		<p class="accordion-title">背景1</p>
	</li>
	···
</ul>
```

```
.accordion-container {
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.accordion-container .accordion-item {
  list-style: none;
  height: 500px;
  transition: width 0.5s;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.accordion-container .accordion-item:not(:hover) {
  width: 20%;
}
.accordion-container .accordion-item:hover {
  width: 800px;
}
.accordion-container .accordion-item:hover::after {
  opacity: 1;
}
.accordion-container .accordion-item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
}
.accordion-container .accordion-item .accordion-title {
  color: #fff;
  font-size: 18px;
  z-index: 2;
}
```

## 3.图片闪光

<style>
.flash-container {
  width: 300px;
  height: 225px;
  background: #333333;
  margin: 30px auto;
  position: relative;
  overflow: hidden;
}
.flash-container::after {
  content: "";
  height: 150%;
  width: 25px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.6;
  filter: blur(6px);
  animation: move 1s infinite ease-out;
}

@keyframes move {
  0% {
    transform: translate(-200px, -200px) rotate(45deg);
  }
  100% {
    transform: translate(200px, 200px) rotate(45deg);
  }
}
</style>
<div class="flash-container">
    <img src="http://tc.lihail.cn/e6.png" alt="">
</div>

```
<div class="flash-container">
    <img src="..." alt="">
</div>
```

```
.flash-container {
  width: 300px;
  height: 500px;
  background: #333333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.flash-container::after {
  content: "";
  height: 150%;
  width: 25px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.6;
  filter: blur(6px);
  animation: move 1s infinite ease-out;
}

@keyframes move {
  0% {
    transform: translate(-200px, -200px) rotate(45deg);
  }
  100% {
    transform: translate(200px, 200px) rotate(45deg);
  }
}
```

## 4.加载动画
### 4-1.加载动画1
<style>
.load-container1 {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.load-container1 .boxLoading {
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.load-container1 .boxLoading:before {
  content: "";
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
}
.load-container1 .boxLoading:after {
  content: "";
  width: 50px;
  height: 50px;
  background: #00adb5;
  animation: animate 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
<div class="load-container1">
  <div class="boxLoading"></div>
</div>

```
<div class="load-container">
  <div class="boxLoading"></div>
</div>
```

```
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.load-container .boxLoading {
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.load-container .boxLoading:before {
  content: "";
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
}
.load-container .boxLoading:after {
  content: "";
  width: 50px;
  height: 50px;
  background: #00adb5;
  animation: animate 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
```
### 4-2.加载动画2
<style>
.load-container2 {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.load-container2 .container {
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
.load-container2 .container .boxLoading {
  background-color: #00adb5;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.load-container2 .container .boxLoading2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container2 .container .boxLoading3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container2 .container .boxLoading4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container2 .container .boxLoading5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
<div class="load-container2">
  <div class="container">
      <div class="boxLoading boxLoading1"></div>
      <div class="boxLoading boxLoading2"></div>
      <div class="boxLoading boxLoading3"></div>
      <div class="boxLoading boxLoading4"></div>
      <div class="boxLoading boxLoading5"></div>
  </div>
</div>

```
<div class="load-container">
  <div class="container">
      <div class="boxLoading boxLoading1"></div>
      <div class="boxLoading boxLoading2"></div>
      <div class="boxLoading boxLoading3"></div>
      <div class="boxLoading boxLoading4"></div>
      <div class="boxLoading boxLoading5"></div>
  </div>
</div>
```

```
.load-container {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.load-container .container {
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
.load-container .container .boxLoading {
  background-color: #00adb5;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.load-container .container .boxLoading2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container .container .boxLoading3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container .container .boxLoading4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container .container .boxLoading5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
```
### 4-3.加载动画3
<style>
.load-container3 {
  margin: 50px auto;
  width: 150px;
  text-align: center;
}
.load-container3 .load {
  width: 20px;
  height: 20px;
  background-color: #00adb5;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container3 .load1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load-container3 .load2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
<div class="load-container3">
		<div class="load load1"></div>
		<div class="load load2"></div>
		<div class="load"></div>
</div>

```
<div class="load-container">
		<div class="load load1"></div>
		<div class="load load2"></div>
		<div class="load"></div>
</div>
```

```
.load-container {
  margin: 50px auto;
  width: 150px;
  text-align: center;
}
.load-container .load {
  width: 20px;
  height: 20px;
  background-color: #00adb5;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container .load1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load-container .load2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
```
### 4-4.加载动画4
<style>
.load-container4 {
  margin: 50px auto;
  width: 48px;
  height: 48px;
  position: relative;
}
.load-container4 .container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.load-container4 .container .circle {
  width: 12px;
  height: 12px;
  background-color: #00adb5;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container4 .container .circle1 {
  top: 0;
  left: 0;
}
.load-container4 .container .circle2 {
  top: 0;
  right: 0;
}
.load-container4 .container .circle3 {
  right: 0;
  bottom: 0;
}
.load-container4 .container .circle4 {
  left: 0;
  bottom: 0;
}
.load-container4 .container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container4 .container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.load-container4 .container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.load-container4 .container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.load-container4 .container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container4 .container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.load-container4 .container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.load-container4 .container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.load-container4 .container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.load-container4 .container3 .circle1 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container4 .container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.load-container4 .container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.load-container4 .container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
<div class="load-container4">
  <div class="container container1">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container2">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container3">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
</div>


```
<div class="load-container">
  <div class="container container1">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container2">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
  <div class="container container3">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
  </div>
</div>
```

```
.load-container {
  margin: 50px auto;
  width: 48px;
  height: 48px;
  position: relative;
}
.load-container .container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.load-container .container .circle {
  width: 12px;
  height: 12px;
  background-color: #00adb5;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container .container .circle1 {
  top: 0;
  left: 0;
}
.load-container .container .circle2 {
  top: 0;
  right: 0;
}
.load-container .container .circle3 {
  right: 0;
  bottom: 0;
}
.load-container .container .circle4 {
  left: 0;
  bottom: 0;
}
.load-container .container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container .container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.load-container .container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.load-container .container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.load-container .container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container .container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.load-container .container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.load-container .container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.load-container .container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.load-container .container3 .circle1 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container .container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.load-container .container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.load-container .container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
```

### 4-5.加载动画5
<style>
.load5 {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178, 0.2);
}
.load5::before {
  content: "";
  width: 70px;
  height: 70px;
  background-color: #00adb5;
  position: absolute;
  left: 50%;
  bottom: 50%;
  z-index: 1;
  transform-origin: left bottom;
  animation: rotate 1.5s infinite linear;
}
.load5::after {
  content: "";
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  z-index: 2;
  border-radius: 50%;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<div class="load5"></div>

```
<div class="load"></div>
```

```
.load {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178, 0.2);
}
.load::before {
  content: "";
  width: 70px;
  height: 70px;
  background-color: #00adb5;
  position: absolute;
  left: 50%;
  bottom: 50%;
  z-index: 1;
  transform-origin: left bottom;
  animation: rotate 1.5s infinite linear;
}
.load::after {
  content: "";
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  z-index: 2;
  border-radius: 50%;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

### 4-6.加载动画6

<style>
.load-container6 {
  width: 60px;
  height: 60px;
  background-color: #00adb5;
  margin: 50px auto;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
<div class="load-container6"></div>
	
```
<div class="load-container"></div>
```

```
.load-container {
  width: 60px;
  height: 60px;
  background-color: #00adb5;
  margin: 50px auto;
  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
  animation: rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
```


## 5.粘性球

<style>
.sticky-container {
  background: #000;
  overflow: hidden;
}
.sticky-container .blurfield {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  filter: blur(10px) contrast(30);
}
.sticky-container .ball1,
.sticky-container .ball2 {
  width: 80px;
  height: 80px;
  background-color: #fff;
  position: absolute;
  animation: ball 10s infinite;
  border-radius: 100%;
}
.sticky-container .ball2 {
  animation-delay: -2s;
}

@keyframes ball {
  0% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(-100px);
  }
}
</style>
<div class="sticky-container">
 <div class="blurfield">
	 <div class="ball1"></div>
	 <div class="ball2"></div>
 </div>
</div>

```
<div class="sticky-container">
 <div class="blurfield">
	 <div class="ball1"></div>
	 <div class="ball2"></div>
 </div>
</div>
```

```
.sticky-container {
  background: #000;
  overflow: hidden;
}
.sticky-container .blurfield {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  filter: blur(10px) contrast(30);
}
.sticky-container .ball1,
.sticky-container .ball2 {
  width: 80px;
  height: 80px;
  background-color: #fff;
  position: absolute;
  animation: ball 10s infinite;
  border-radius: 100%;
}
.sticky-container .ball2 {
  animation-delay: -2s;
}

@keyframes ball {
  0% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(-100px);
  }
}
```

## 6.背景星空

```
<div id="starsBox"></div>
```

```
body {
    background: #22313f;
}
#starsBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    opacity: .5;
}

#starsBox span {
    display: inline-block;
    width: auto;
    position: absolute;
    border-radius: 100%;
    transition: 100s linear;
}
```

```
var cols = ['#f5d76e', '#f7ca18', '#f4d03f', '#ececec', '#ecf0f1', '#a2ded0'];
var stars = 250;
for(var i = 0; i <= stars; i++) {
    var size = Math.random() * 3;
    var color = cols[parseInt(Math.random() * 4)];
    $('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; background: ' + color + '; box-shadow: 0 0 ' + Math.random() * 10 + 'px' + color + ';"></span>');
};
setTimeout(function() {
    $('#starsBox span').each(function() {
        $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
}, 1);
setInterval(function() {
    $('#starsBox span').each(function() {
        $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
}, 100000);
```