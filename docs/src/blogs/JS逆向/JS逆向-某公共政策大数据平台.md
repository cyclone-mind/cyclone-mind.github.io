---
outline: deep
---
# 1 全国公共政策大数据平台

网址：aHR0cHM6Ly93d3cuc3BvbGljeS5jb20v

![image-20250218205009281](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218205009281.png)

## 2 思路分析

### 2.1 反调试

该网站F12打不开，右键检查可以打开。打开后是虚拟机形式的无限debugger。采用hook debugger的形式过掉反调试

```js
AAA = Function.prototype.constructor;

Function.prototype.constructor = function(a) {
    if (a === 'debugger') {
        return function(){}
    } else {
        return AAA(a);
    }
}
```

### 2.2 接口参数

![image-20250218205302150](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218205302150.png)

点击不同的政策类型切换接口，找到showPolicyType接口。发现请求载荷是进制流参数。

![image-20250218205340706](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218205340706.png)

打开堆栈，断点到最后一步，找到请求参数其实是一个Array Buffer。

![image-20250218205726809](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218205726809.png)

继续断点往前找，断在第一个promise前。发现e是请求对象。e.data还是未加密的参数。

![image-20250218205946424](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218205946424.png)

那么参数就一定是在promise.then之后进行加密的。i数组有6个方法。

![image-20250218210409463](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218210409463.png)

我们先进去这个i的数组中第一个，挨个看看。

![image-20250218210649470](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218210649470.png)

axios...函数接受e函数，返回了a值。这是就要盯着a值。分别在函数中打三个断点，注意e和a的变化。发现请求载荷e显示赋值了r，r再赋值a，后期对a进行了加密，a.data成了加密后的参数。

![image-20250218211048034](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218211048034.png)

划线的就是加密入口，经过字符串的显示：

```js
a["data"] = d["encode"](a["data"])["finish"]()['slice']()
```

![image-20250218211342443](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218211342443.png)

悬浮进入`d["encode"]`方法，发现是一个VM文件。VM不是一个真实的文件，这里会有一个bug。打上断点，悬浮进去后是：
![image-20250218211629086](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218211629086.png)

`Winter.create()`执行结果是一个已有的对象。找不到原始的来源。找不到Winter是从哪里生成的。

![image-20250218211655290](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218211655290.png)

这时搜索Winter关键字发现Winter的定义的地方，

![image-20250218211840861](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218211840861.png)

这段代码其实是在一个webpack的模块里，webpack加载器自执行初始化的时候生成了Winter对象，存放在加载器对象中。

接着去找webpack的入口：加载器，i2

![image-20250218212258685](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250218212258685.png)

然后copy整个自执行函数。

新建一个loader.js文件，将webpack放进去，执行以下，发现commonjsGlobal未定义。这时想在网页中断点到webpack刚开始的地方，发现由于网站反调试的原因，无法断点在webpack之中。那么就在本地调试。将commonjsGlobal定义为全局对象Window。就不再报错。

本地调试过程中发现Winter对象就存放在i2加载器对象之中。

随后吧加载器赋值给一个全局对象，就可以得到Winter对象。随后便全部完成了。
