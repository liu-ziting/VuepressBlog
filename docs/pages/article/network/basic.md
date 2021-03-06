# 网络基础知识

### 交换机
 - 二层交换
 - 三层交换
>三层交换机就是具有部分路由器功能的交换机

### 路由器

### 防火墙
### 
>帮助计算机网络于其内、外网之间构建一道相对隔绝的保护屏障
>防火墙的思路是在保障互联互通的前提下，尽可能安全

 - 1、入侵检测功能
 - 2、网络地址转换功能
 - 3、网络操作的审计监控功能
 - 4、强化网络安全服务
### 网闸
### 
>连接两个独立主机系统的信息安全设备
>网闸的思路是在保证必须安全的前提下，尽可能互联互通，如果不安全则隔离断开

 - 1、独立网络方案
 - 2、终端级解决方案
 - 缺点：只支持静态数据交换，不支持交互式访问
 - 
### 堡垒机
### 
>在一个特定的网络环境下，为了保障网络和数据不受来自外部和内部用户的入侵和破坏
>运用各种技术手段实时收集和监控网络环境中每一个组成部分的系统状态、安全事件、网络活动的服务器，以便集中报警、及时处理及审计定责

### 局域网
 
>覆盖范围一般是方圆几千米之内，其具备的安装便捷、成本节约、扩展方便等特点使其在各类办公室内运用广泛

### 城域网

>在一个城市范围内所建立的计算机通信网

### 广域网

>连接不同地区局域网或城域网计算机通信的远程网，通常跨接很大的物理范围

### 域名解析过程

>当应用过程需要将一个主机域名映射为IP地址时，就调用域名解析函数，解析函数将待转换的域域名解析名放在DNS请求中，以UDP报文方式发给本地域名服务器
本地的域名服务器查到域名后，将对应的IP地址放在应答报文中返回

### 阿里云服务器类型定义

 - ECS
 - RDS-关系型数据库服务
 - CDN
 - OCS-在线计费系统
 - OSS-运营支撑系统
 - SLB-服务器负载均衡

### 宽带估算
 - Byte（字节）和bit（比特）
 - 1Byte=8bit
 - 1M宽带（1Mbps）的下载峰值并不是1M/秒，要除以8
 - 1M宽带（1Mbps）所对应的下载峰值为128KB/秒（128KBps）
 - 2M宽带的下载峰值就是128K*2=256KB/秒
### 七层模型
 - 应用层
>网络服务与最终用户的一个接口。
>协议有：HTTP FTP TFTP SMTP SNMP DNS TELNET HTTPS POP3 DHCP
 - 表示层
>数据的表示、安全、压缩。（在五层模型里面已经合并到了应用层）
>格式有，JPEG、ASCll、DECOIC、加密格式等
 - 会话层
>建立、管理、终止会话。（在五层模型里面已经合并到了应用层）
>对应主机进程，指本地主机与远程主机正在进行的会话
 - 传输层
>定义传输数据的协议端口号，以及流控和差错校验。
>协议有：TCP UDP，数据包一旦离开网卡即进入网络传输层
 - 网络层
>进行逻辑地址寻址，实现不同网络之间的路径选择。
>协议有：ICMP IGMP IP（IPV4 IPV6）
 - 数据链路层
>>建立逻辑连接、进行硬件地址寻址、差错校验 [2]  等功能。（由底层网络定义协议）
>将比特组合成字节进而组合成帧，用MAC地址访问介质，错误发现但不能纠正。
 - 物理层
>建立、维护、断开物理连接。（由底层网络定义协议）
>TCP/IP 层级模型结构，应用层之间的协议通过逐级调用传输层（Transport layer）、网络层（Network Layer）和物理数据链路层（Physical Data Link）而可以实现应用层的应用程序通信互联。


### SaaS
>软件即服务
### PaaS
>平台即服务
### LaaS
>基础设施即服务