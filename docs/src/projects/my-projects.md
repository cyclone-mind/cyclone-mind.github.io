---
title: 我的项目
---

# 我的项目

以下是我目前正在做的一些项目。我经常捣鼓一些新项目和提出许多好的新想法。总是在做一些新的东西，所以经常回来看看。

## Kong_OA

- **描述**: 一个基于 FastAPI (Python) 和 Vue3 的现代化 RBAC 权限管理系统模板。
- **核心特色**:
  - 完整的前后端分离架构，后端采用高性能异步框架 FastAPI。
  - 前端使用 Vue3、TypeScript、Pinia 和 Element Plus 构建响应式界面。
  - 实现了基于角色的访问控制 (RBAC) 核心功能：用户、角色、权限管理。
  - 自动生成 OpenAPI (Swagger) 文档，方便 API 调试与对接。
  - 模块化设计，易于扩展，适合作为企业级后台管理系统的开发基础。
- **链接**: [https://github.com/cyclone-mind/Kong_OA](https://github.com/cyclone-mind/Kong_OA)

## CrawlerWorks

- **描述**: 一个专注于 JavaScript 逆向工程的案例集合，提供多种网站的分析实例。
- **技术亮点与案例**:
  - 包含 **JS 反混淆**技术实践，如利用 AST (抽象语法树) 进行代码分析与还原。
  - 覆盖**高难度网站逆向**案例，例如针对**瑞数 (Ruishu)** 的补环境和纯算法分析。
  - 包含**验证码处理**案例，如**滑块验证码 (丰巢)** 的分析。
  - 涉及多种逆向场景：登录加密、请求参数/签名算法分析 (如抖音、喜马拉雅)、反调试技术对抗 (无限 debugger) 等。
  - 提供 **Python 与 JS 交互** (如 subprocess 模块) 和 **JS Hook** 技术应用实例。
- **链接**: [https://github.com/cyclone-mind/CrawlerWorks](https://github.com/cyclone-mind/CrawlerWorks)

## AsyncTaskThreadPool

- **描述**: 一个高效的 C++异步任务线程池实现，支持动态线程管理和任务调度。
- **核心特色**:
  - **异步任务执行**: 支持任意类型的可调用对象，使用 `std::future` 获取任务执行结果。
  - **动态线程管理**: 根据任务负载自动调整线程数量，避免频繁创建销毁带来的性能开销。
  - **线程安全设计**: 使用 `mutex` 和 `condition_variable` 实现高效的线程间通信。
  - **性能优化**: 采用细粒度锁设计，减少锁竞争，任务执行时不持有队列锁。
- **链接**: [https://github.com/cyclone-mind/AsyncTaskThreadPool](https://github.com/cyclone-mind/AsyncTaskThreadPool)
