---
outline: deep
titile: JS逆向之招标公告搜索引擎
# JavaScript 逆向  JS逆向之招标公告搜索引擎

---

# {{ $frontmatter.title }}

JS 逆向（JavaScript Reverse Engineering）指通过分析网页中 JavaScript 代码的加密逻辑，还原数据请求的加密参数生成过程。它是爬虫开发中绕过反爬机制的核心技术，常用于处理以下场景：

- 网页通过 eval、webpack 混淆加密参数（如 _signature、token）
- 请求参数包含动态生成的加密字段（如 sign、timestamp）
- 验证码或敏感接口的加密验证逻辑

## 项目介绍

网址：aHR0cHM6Ly9jdGJwc3AuY29tLyMvYnVsbGV0aW5MaXN0

![image-20250221133417625](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221133417625.png)

## 1 思路分析

### 1.1 接口分析

通过翻页触发请求，看到需要加密的参数type__1017和返回的加密后的字符串。

![image-20250221133548149](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221133548149.png)

![image-20250221133558309](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221133558309.png)

### 1.2 数据解密

搜索decrypt( 得到加密入口

![image-20250221133911756](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221133911756.png)

很明显使用的是`DES`算法，那么直接扣代码，替换使用`cryptoJS`模块即可

```js
const cryptoJS = require('crypto-js')
function Y(e) {
    var t = cryptoJS.enc.Utf8.parse("1qaz@wsx3e")
        , i = cryptoJS.DES.decrypt({
        ciphertext: cryptoJS.enc.Base64.parse(e)
    }, t, {
        mode: cryptoJS.mode.ECB,
        padding: cryptoJS.pad.Pkcs7
    });
    return i.toString(cryptoJS.enc.Utf8)
}

// let data = '....'
// console.log(Y(data))
```

### 1.3 参数加密

参数加密是一个难点，通过堆栈分析发现`Jk`参数包含了加密后的type__1017，那么往上瞅一眼`Jk`的生成位置。打上断点。

![image-20250221134439647](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221134439647.png)

发现确实是在当前断点生成了type参数。

![image-20250221134741034](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221134741034.png)

3个参数分别如下所示。其中Jk参数包含了待加密的参数。

![image-20250221134900312](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221134900312.png)

![image-20250221134914981](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221134914981.png)

![image-20250221134926555](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221134926555.png)

将`Ja[Fh(bc.F)]`函数一一扣下来之后发现绕了一大圈其实是

![image-20250221135037389](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221135037389.png)

`Jw`函数加的密。那么就开始扣`Jw`函数即可。`Jw`函数进去发现加密是在`JU['E']`函数里。

![image-20250221135230264](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221135230264.png)

`JU['E']`函数如下，是一个典型的混淆函数加控制流。其中f0是解密函数PX，是一个解密字符串数组。

```js
'E': function(Jd, JP) {
    var fC = f0
      , JB = J[fC(PX.J)][fC(PX.f)]('|')
      , Jb = -0xd3e + 0x1db0 + 0x2 * -0x839;
    while (!![]) {
        switch (JB[Jb++]) {
        case '0':
            return JP[J[fC(PX.F)](Jt[J[fC(PX.h)](JE, Jt[fC(PX.J0)])], J[fC(PX.J1)](JE, 0x3 * -0x17a4 + 0xd * -0x579 + 0x209 * 0x59))] = Ju,
            Jd[fC(PX.J2)] = (0x8d9 + 0xf75 + -0x6 * 0x40d,
            JF['L'])(Jd[fC(PX.J2)], JP),
            (-0x1 * -0xa11 + 0xfb * -0x18 + 0x17f * 0x9,
            JF['p'])(Jd);
        case '1':
            for (var JP = J[fC(PX.J3)](J[fC(PX.J4)](J[fC(PX.J5)](J[fC(PX.J6)](J[fC(PX.J7)](JU[fC(PX.J8)](Ju), '|'), J[fC(PX.J9)](J9)), '|'), new Date()[fC(PX.JJ)]()), '|1'), Ju = Jf['ua'](JP, !(0x3af * -0x1 + 0x21d1 + -0x1e22)), JE = -0xc * 0x2df + -0x22ac + 0x4520, JL = -0x114d + 0x77b * 0x2 + 0x257; J[fC(PX.Jf)](JL, Jd[fC(PX.JF)][fC(PX.J0)]); JL++)
                JE += Jd[fC(PX.Jt)][JL][fC(PX.JU)]();
            continue;
        case '2':
            JP = {};
            continue;
        case '3':
            JP && (Ju += JP);
            continue;
        case '4':
            var Ju = (0x1 * 0x3a1 + -0x66c * -0x5 + 0x23bd * -0x1,
            JF['p'])(Jd, !(0x5 * 0x7b5 + -0x233 * 0x9 + -0x12be));
            continue;
        }
        break;
    }
}
}
```

我们在return处打上断点，发现type参数给了Ju。

![image-20250221135900914](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221135900914.png)

那么我们重新观察，Ju是何处赋值的。Ju在case1里进行的赋值。核心加密逻辑是 `Jf['ua']`函数，接收两个参数。先将生成JP的逻辑扣下来。然后悬浮进入 `Jf['ua']`函数

![image-20250221140122794](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221140122794.png)

![image-20250221140225390](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221140225390.png)

```js
'ua': function(Jd, JP) {
    var PH = {
        J: 0x1e9,
        f: 0x296
    }
      , fY = f0
      , JB = J[fY(PA.J)][fY(PA.f)]('|')
      , Jb = 0x3 * -0xbc5 + -0x3e5 * -0x4 + -0x13bb * -0x1;
    while (!![]) {
        switch (JB[Jb++]) {
        case '0':
            switch (J[fY(PA.F)](Ju[fY(PA.h)], 0x962 * 0x1 + 0x20 * 0x90 + -0x1b5e)) {
            default:
            case -0x4ff + -0x732 + 0xc31:
                return Ju;
            case 0x2277 + 0x1 * -0x1566 + -0xd10:
                return J[fY(PA.J0)](Ju, J[fY(PA.J1)]);
            case -0x902 + -0x1b86 + 0x1245 * 0x2:
                return J[fY(PA.J2)](Ju, '==');
            case -0x1 * -0x2475 + -0x1c9e + -0x3ea * 0x2:
                return J[fY(PA.J2)](Ju, '=');
            }
            continue;
        case '1':
            if (J[fY(PA.J3)](null, Jd))
                return '';
            continue;
        case '2':
            if (JP)
                return Ju;
            continue;
        case '3':
            var Ju = JJ['uu'](Jd, 0x1d * -0x94 + -0x1f44 + -0x1 * -0x300e, function(Jp) {
                var fj = fY;
                return JL[fj(PH.J)][fj(PH.f)](Jp);
            });
            continue;
        case '4':
            var JE = {};
            JE[fY(PA.J4)] = J[fY(PA.J5)];
            var JL = JE;
            continue;
        }
        break;
    }
}
```

对于`Jf['ua']`函数，直接全扣即可。

### 1.4 ob混淆分析

这是一个典型的ob混淆案例。三部分：

大数组：

![image-20250221140808788](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221140808788.png)

解密函数U：

![image-20250221140827785](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221140827785.png)

数组移位：

![image-20250221140901906](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221140901906.png)

将这三部分扣下来，解密函数U即可使用。需要注意的是，大数组和解密函数U都需要进行压缩copy，否则会报如下错误。然后加密模块中缺什么数组补什么数组即可。

![image-20250221141335424](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250221141335424.png)
