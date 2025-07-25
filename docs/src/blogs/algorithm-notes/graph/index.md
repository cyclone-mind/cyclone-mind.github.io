---
title: 图论专题
outline: deep
tags: [数据结构, 算法, 图论, Leetcode]
author: shouyu
---

# 图论专题

图论是计算机科学和数学中的重要分支，研究图这种数据结构及其相关算法。图由节点（顶点）和边组成，广泛应用于网络分析、路径规划、社交网络等领域。本专题整理了图论相关的经典算法题及其解法。

## 目录

### 基础理论
- [图论理论基础](./图论理论基础)
- [深搜理论基础](./深搜理论基础)
- [广搜理论基础](./广搜理论基础)
- [并查集理论基础](./并查集理论基础)
- [图论总结](./图论总结)

### 深度优先搜索（DFS）应用
- [岛屿数量-深搜](./岛屿数量-深搜)
- [岛屿的最大面积](./岛屿的最大面积)
- [孤岛总面积](./孤岛总面积)
- [沉没孤岛](./沉没孤岛)
- [水流问题](./水流问题)
- [建造最大人工岛](./建造最大人工岛)
- [所有可达路径](./所有可达路径)
- [有向图的完全可达性](./有向图的完全可达性)

### 广度优先搜索（BFS）应用
- [岛屿数量-广搜](./岛屿数量-广搜)
- [字符串接龙](./字符串接龙)

### 岛屿问题专题
- [岛屿周长](./岛屿周长)
- [岛屿数量-深搜](./岛屿数量-深搜)
- [岛屿数量-广搜](./岛屿数量-广搜)
- [岛屿的最大面积](./岛屿的最大面积)
- [孤岛总面积](./孤岛总面积)
- [沉没孤岛](./沉没孤岛)
- [水流问题](./水流问题)
- [建造最大人工岛](./建造最大人工岛)

### 并查集应用
- [寻找存在的路径](./寻找存在的路径)
- [冗余连接](./冗余连接)
- [冗余连接II](./冗余连接II)
- [最小生成树之Kruskal](./最小生成树之Kruskal)

### 最小生成树
- [最小生成树之Kruskal](./最小生成树之Kruskal)
- [最小生成树之Prim](./最小生成树之prim)

### 最短路算法
- [Dijkstra朴素版](./dijkstra朴素版)
- [Dijkstra堆优化版](./dijkstra堆优化版)
- [Bellman-Ford算法](./bellman-ford算法)
- [Bellman-Ford之单源有限最短路](./Bellman-ford之单源有限最短路)
- [Bellman-Ford之判断负权回路](./Bellman-ford之判断负权回路)
- [SPFA算法](./SPFA算法)
- [Floyd算法](./Floyd算法)
- [A*算法](./A-star)
- [最短路问题总结](./最短路问题总结)

### 拓扑排序与有向图
- [拓扑排序](./拓扑排序)
- [有向图的完全可达性](./有向图的完全可达性)
- [冗余连接II](./冗余连接II)

## 学习要点

- **图的基本概念**：节点、边、度、路径、环
- **图的表示方法**：邻接矩阵、邻接表
- **图的遍历**：深度优先搜索（DFS）、广度优先搜索（BFS）
- **连通性**：连通分量、强连通分量
- **最短路问题**：单源最短路、全源最短路
- **最小生成树**：Kruskal算法、Prim算法
- **拓扑排序**：有向无环图的线性排序
- **并查集**：高效处理动态连通性问题

## 核心思想

- **深度优先搜索（DFS）**：递归遍历，适合路径探索和连通性检测
- **广度优先搜索（BFS）**：层次遍历，适合最短路径和最小步数问题
- **动态规划思想**：最短路算法中的状态转移
- **贪心思想**：最小生成树算法的核心
- **分治思想**：图的分解与合并
- **并查集思想**：高效的集合合并与查询

## 算法分类

### 按问题类型分类
- **连通性问题**：判断图的连通性、寻找连通分量
- **路径问题**：最短路、所有路径、路径存在性
- **环检测**：判断图中是否存在环
- **拓扑问题**：拓扑排序、有向无环图
- **最优化问题**：最小生成树、最短路径

### 按算法复杂度分类
- **线性时间算法**：DFS、BFS遍历
- **对数线性时间算法**：Kruskal算法（排序）
- **多项式时间算法**：Dijkstra、Floyd、Bellman-Ford
- **近似算法**：A*启发式搜索

## 应用场景

- **网络路由**：互联网路由协议
- **社交网络**：好友推荐、影响力分析
- **地图导航**：最短路径规划
- **项目管理**：任务调度、依赖关系
- **电路设计**：最小连线成本
- **游戏AI**：路径寻找、决策树 