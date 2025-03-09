---
outline: deep
# JavaScript 逆向入门指南：爬虫的加密参数破解

---

# 什么是 JS 逆向？

JS 逆向（JavaScript Reverse Engineering）指通过分析网页中 JavaScript 代码的加密逻辑，还原数据请求的加密参数生成过程。它是爬虫开发中绕过反爬机制的核心技术，常用于处理以下场景：

- 网页通过 `eval`、`webpack` 混淆加密参数（如 `_signature`、`token`）
- 请求参数包含动态生成的加密字段（如 `sign`、`timestamp`）
- 验证码或敏感接口的加密验证逻辑

## 核心工具链

### 1. **调试工具**

- **Chrome DevTools**：断点调试 JavaScript，观察变量变化
- **Fiddler/Charles**：抓包分析请求参数与响应
- **Node.js REPL**：快速验证 JavaScript 加密函数

### 2. **Python 库**

- `requests`：模拟 HTTP 请求
- `selenium`：自动化浏览器操作（处理复杂交互）
- `PyExecJS`：执行 JavaScript 代码片段

---

## 实战案例：破解简单加密参数

以某网站的 `_signature` 参数为例，演示逆向流程。

### 步骤 1：定位加密逻辑

1. 打开目标网页，使用 Chrome DevTools 的 **Network** 面板观察请求参数。
2. 搜索关键词（如 `sign`、`token`），定位生成加密参数的 JavaScript 函数。

```javascript
// 示例：某网站的加密函数
function generateSignature(params) {
  return CryptoJS.MD5(params + "secret_key").toString();
}
```

### 步骤 2：提取并复现加密逻辑

将关键代码复制到本地，用 `PyExecJS` 执行：

```python
import execjs

js_code = """
function generateSignature(params) {
  return CryptoJS.MD5(params + "secret_key").toString();
}
"""
ctx = execjs.compile(js_code)
signature = ctx.call("generateSignature", "page=1")
print(signature)  # 输出加密后的参数
```

### 步骤 3：模拟请求

将生成的参数加入请求头或表单数据：

```python
import requests

headers = {
    "User-Agent": "Mozilla/5.0",
    "X-Signature": signature  # 使用逆向生成的参数
}
response = requests.get("https://api.example.com/data", headers=headers)
```

---

## 进阶方向

1. **复杂混淆处理**  
   - 使用 `webpack` 反混淆工具（如 `deobfuscator`）还原代码
   - 针对 `eval` 动态执行的代码，通过 Hook 技术拦截关键函数

2. **验证码逆向**  
   - 滑动验证码：分析轨迹参数生成逻辑
   - 图形验证码：结合 OCR（如 `ddddocr`）识别

---

## 学习资源推荐

- **视频教程**：B站《JS逆向入门到接单》[[7]]（实战导向）
- **博客文章**：CSDN 的 Python 爬虫 JS 逆向详解
- **开源项目**：GitHub/Gitee 的爬虫合集 （含逆向案例）

---

## 注意事项

1. **法律风险**：遵守网站 `robots.txt` 协议，避免恶意爬取。
2. **伦理规范**：不用于窃取商业机密或侵犯用户隐私。

---

通过本文的入门实践，你可以掌握 JS 逆向的基本思路。后续可深入研究算法（如 AES、RSA）、浏览器指纹模拟等高阶技术。
