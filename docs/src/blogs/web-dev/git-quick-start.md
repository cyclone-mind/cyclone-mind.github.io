---
outline: [2, 3]
title: Git 实战教程
tags: [git, 版本控制, github]
author: shouyu
---

# Git 实战教程

> **来源：** [Git实战（老男孩最新视频）](https://www.bilibili.com/video/BV19E411f76x/?share_source=copy_web&vd_source=2683d5a5c83e6057edf7ad7462417ad5)

听故事顺便学Git，可能是全世界最好玩的Git教程 🎯

## 第一章 快速入门

### 1.1 什么是Git

Git是一个分布式的版本控制软件。

- **软件**：类似于QQ、Office、Dota等安装到电脑上才能使用的工具
- **版本控制**：类似于毕业论文、写文案、视频剪辑等，需要反复修改和保留原历史数据

#### 分布式版本控制的发展历程

1. **文件夹拷贝**
2. **本地版本控制**
3. **集中式版本控制**
4. **分布式版本控制**

### 1.2 为什么要做版本控制

要保留之前所有的版本，以便回滚和修改。

### 1.3 安装Git

详见：[Git官方安装指南](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

#### 检查Git安装

安装完成后，可以通过以下命令检查Git是否安装成功：

```bash
git --version
```

如果返回Git的版本号，说明安装成功。如果你安装过GitHub Desktop或IDE，通常会自动安装Git。

如果没有安装，可以访问[Git官网](https://git-scm.com)下载对应操作系统的安装包进行安装。

## 第二章 "东北热"创业史

### 2.1 第一阶段：单枪匹马开始干

想要让Git对一个目录进行版本控制需要以下步骤：

1. **进入要管理的文件夹**
2. **执行初始化命令**
   ```bash
   git init
   ```
3. **管理目录下的文件状态**
   ```bash
   git status
   ```
   > 注：新增的文件和修改过后的文件都是红色

4. **管理指定文件（红变绿）**
   ```bash
   git add 文件名
   git add .
   ```

5. **个人信息配置：用户名、邮箱【一次即可】**
   ```bash
   git config --global user.email "you@example.com"
   git config --global user.name "Your Name"
   ```

6. **生成版本**
   ```bash
   git commit -m '描述信息'
   ```

7. **查看版本记录**
   ```bash
   git log
   ```

### 2.2 第二阶段：拓展新功能

随着"东北热"火锅店生意越来越好，老板想要添加短视频功能来宣传店铺。

```bash
git add .
git commit -m '添加短视频功能'
```

#### 2.2.1 高效的提交方式

老板雇了个程序员小张来帮忙。小张是个"懒人"，总想着怎么偷懒。他发现每次修改菜单文件后，都要先`git add`再`git commit`，太麻烦了！

"有没有更简单的方法？"小张问道。

老板一拍脑袋："当然有！Git提供了组合技能。"

```bash
# 自动添加已修改的文件到暂存区并提交（注意：只对已被Git管理的文件有效）
git commit -am '更新短视频功能'
```

这下小张开心了，修改菜单价格后直接一条命令就能提交。但老板提醒他：

> **注意**：这个懒人大法只对已经被Git管理的文件有效。如果是新增菜品（新文件），还是得老老实实先`git add`！

小张试了试，果然新增的"麻辣小龙虾"菜品文件用懒人大法提交不了，还是得：
```bash
git add 麻辣小龙虾.md
git commit -m '新增麻辣小龙虾菜品'
```

### 2.3 第三阶段："约饭事件"

#### 回滚至之前版本
```bash
git log
git reset --hard 版本号
```

#### 回滚至之后版本
```bash
git reflog
git reset --hard 版本号
```

#### 2.3.1 小张的手残事件

在处理"约饭事件"回滚后，小张继续整理代码文件。突然，他的手抖了一下...

**删除文件事件**

"糟了！我误删了一个没用的测试文件！"小张慌了。

老板淡定地说："删就删了，用Git告诉它这个文件确实不要了。"

```bash
# 小张误删文件后的补救
rm 测试文件.txt  # 已经删了，没法撤销
git rm 测试文件.txt  # 告诉Git这个删除是故意的
git commit -m '删除无用的测试文件'
```

"下次直接用Git删，一步到位！"老板指点道：

```bash
# 老板的专业做法：让Git来删除
git rm 无用文件.txt
git commit -m '删除无用文件'
```

**重命名文件事件**

第二天，小张发现菜单文件名写错了：`cai_dan.txt`应该是`menu.txt`。

"怎么改名字？"小张问。

"用Git改名，它会帮你追踪文件的变化！"老板演示：

```bash
# 专业的文件重命名
git mv cai_dan.txt menu.txt
git commit -m '菜单文件重命名为英文'
```

小张看傻了："这么简单？那我还可以把文件移动到文件夹里！"

```bash
# 把菜单文件移动到menus文件夹
git mv menu.txt menus/menu.txt
git commit -m '整理菜单文件到menus目录'
```

老板点点头："Git会自动把这些操作加到暂存区，直接commit就行了。比你手动移动文件再告诉Git省事多了！"

### 2.4 小总结

核心命令：
- `git init` - 初始化仓库
- `git add` - 添加文件到暂存区
- `git commit` - 提交版本
- `git commit -am` - 自动添加已修改文件并提交
- `git log` - 查看版本记录
- `git reflog` - 查看所有操作记录
- `git reset --hard 版本号` - 回滚版本
- `git rm 文件名` - 删除文件
- `git mv 旧名 新名` - 移动/重命名文件

#### 2.4.1 老板的后悔药大全

经营"东北热"火锅店这些年，老板总结出人生四大后悔：

1. **刚改完代码就后悔** - 撤销工作区修改
2. **刚提交完就发现问题** - 修改最近提交  
3. **提交了错误代码影响客户** - 安全撤销
4. **想回到几天前的状态** - 重置版本

**第一种后悔：小张改坏了价格文件**

小张正在修改菜单价格，突然发现改错了，想恢复到原来的状态。

"别急，用Git的'后悔药'！"老板说。

```bash
# 撤销单个文件的修改（改错了价格）
git restore 菜单价格.txt

# 撤销所有修改（全改错了）
git restore .
```

小张惊喜地发现，文件瞬间恢复到了未修改状态！

**第二种后悔：刚提交完发现提交信息写错了**

小张提交了代码，但commit信息写成了"修改家具价格"，实际是"修改菜品价格"。

"没关系，改个最近的提交！"老板演示：

```bash
# 只改提交信息
git commit --amend -m "修改菜品价格"

# 或者还要加点文件修改
git add 遗漏的文件.txt
git commit --amend -m "修改菜品价格并更新说明"
```

**第三种后悔：上线后发现bug，客户都在抱怨**

小张的代码上线了，结果价格算错了，所有客户都在投诉！这时候不能用前面的方法，因为会影响其他同事的代码。

"用最安全的方法，创建一个'反向提交'！"老板冷静地说：

```bash
# 安全地撤销某次提交（推荐团队协作时使用）
git revert 错误的commit号
git commit -m "修复价格计算错误"
```

这样既修复了问题，又保留了完整的历史记录，不会影响其他人。

**第四种后悔：想回到三天前的美好时光**

"三天前一切都很好，现在全乱了，我想回到那时候..."小张叹气。

```bash
# 重置到某个版本（慎用！）
git reset --mixed 三天前的commit号
```

老板提醒："这种方法在多人合作时要小心，最好只在自己的分支上用！"

| 后悔药 | 使用场景 | 老板的建议 |
|-------|---------|-----------|
| `git restore` | 刚修改还没提交 | 放心用，不会影响历史 |
| `git commit --amend` | 刚提交完想改 | 只能改最近一次，且没推送到服务器时用 |
| `git revert` | 已经上线的错误 | 最安全，团队协作首选 |
| `git reset` | 想回到过去 | 慎用！多人合作时容易出问题 |

![Git基础操作流程](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/b1fbf9bc3098d5b56380106adb63a21b40c0a765cf2f3728024fc0b83e18d82e.jpg)

### 2.5 第四阶段：商城&紧急修复bug

#### 2.5.1 分支

分支可以给使用者提供多个环境的可能，意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。

#### 2.5.2 紧急修复bug方案

![分支修复Bug流程](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/f2660a2f041d421e1b5b76a8834b9df16d2ad8691e50a800ea56bec2c5414877.jpg)

#### 2.5.3 命令总结

- **查看分支**
  ```bash
  git branch
  ```

- **创建分支**
  ```bash
  git branch 分支名称
  ```

- **切换分支**
  ```bash
  # 传统方法
  git checkout 分支名称
  
  # 现代方法（推荐）
  git switch 分支名称
  ```

- **分支合并（可能产生冲突）**
  ```bash
  git merge 要合并的分支
  ```
  > 注意：切换分支再合并

- **删除分支**
  ```bash
  git branch -d 分支名称
  ```

#### 2.5.4 工作流

![分支工作流](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/62f6ac3c0b609c5e7929cc59b759377161cba8cb05bfee8f3391c40610882384.jpg)

### 2.6 第五阶段：进军三里屯

有钱之后就要造呀，一个人在三里屯买了一层楼做办公室。

![远程仓库示意图](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/2eed48a47db8b0ed80e78e629c2bbf532262b358703a6ecb2c4fe1f5cf6b5caf.jpg)

#### 2.6.1 第一天上班前在家上传代码

首先，需要注册GitHub账号，并创建远程仓库，然后再执行如下命令，将代码上传到GitHub。

![远程仓库配置](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/ba458338b60d7d1d3bc0011cb2617a35bc38c72c39c146abf90e63f55691d0ff.jpg)

1. **给远程仓库起别名**
   ```bash
   git remote add origin 远程仓库地址
   ```

2. **向远程推送代码**
   ```bash
   git push -u origin 分支
   ```

#### 2.6.2 初次在公司新电脑下载代码

1. **克隆远程仓库代码**
   ```bash
   git clone 远程仓库地址
   ```
   > 内部已实现 `git remote add origin 远程仓库地址`

2. **切换分支**
   ```bash
   git checkout 分支
   ```

##### 在公司下载完代码后，继续开发

1. 切换到dev分支进行开发
   ```bash
   git checkout dev
   ```

2. 把master分支合并到dev [仅一次]
   ```bash
   git merge master
   ```

3. 修改代码

4. 提交代码
   ```bash
   git add .
   git commit -m 'xx'
   git push origin dev
   ```

#### 2.6.2.1 小张的"撞车"事件

第二天早上，小张兴冲冲地来上班，准备把昨晚在家写的代码推送到服务器。

```bash
git push origin dev
```

结果屏幕上弹出了一个错误信息：**"推送被拒绝！远程仓库有更新！"**

"怎么回事？我昨天晚上还能推送的啊！"小张懵了。

老板走过来一看："你和小李撞车了！他昨晚也在写代码，比你先推送上去了。"

**解决撞车的两种方案**

老板解释："就像两辆车要进同一个停车位，你得先让前面的车停好，你再调整位置进去。"

**方案一：普通的git pull（会留下痕迹）**

```bash
git pull origin dev  # 相当于：git fetch + git merge
```

小张试了试，成功了！但老板皱眉："这样会在历史记录里留下很多无意义的'合并记录'，就像停车场里到处都是'某某车让位给某某车'的标识牌，看着很乱。"

**方案二：git pull --rebase（推荐）**

"用这个专业方法！"老板演示：

```bash
git pull --rebase origin dev  # 相当于：git fetch + git rebase
```

"这个方法会把你的提交'重新排队'到最新代码的后面，就像你重新排队停车，历史记录会很干净！"

小张看了看提交历史："哇，真的很整齐！没有那些乱七八糟的合并记录了！"

**老板的职场小贴士**

老板设置了默认配置：

```bash
# 让Git默认使用rebase方式
git config pull.rebase true
```

"这样设置后，以后直接用`git pull`就是rebase方式了，不用每次都加`--rebase`参数。"

从那以后，小张再也没有因为"撞车"而烦恼，每次都能优雅地解决冲突！

#### 2.6.3 下班回到家继续写代码

1. 切换到dev分支进行开发
   ```bash
   git checkout dev
   ```

2. 拉代码
   ```bash
   git pull origin dev
   ```

3. 继续开发

4. 提交代码
   ```bash
   git add .
   git commit -m 'xx'
   git push origin dev
   ```

#### 2.6.4 到公司继续开发

1. 切换到dev分支进行开发
   ```bash
   git checkout dev
   ```

2. 拉最新代码（不必再clone，只需要通过pull获取最新代码即可）
   ```bash
   git pull origin dev
   ```

3. 继续开发

4. 提交代码
   ```bash
   git add .
   git commit -m 'xx'
   git push origin dev
   ```

##### 开发完毕，要上线

1. 将dev分支合并到master，进行上线
   ```bash
   git checkout master
   git merge dev
   git push origin master
   ```

2. 把dev分支也推送到远程
   ```bash
   git checkout dev
   git merge master
   git push origin dev
   ```

#### 2.6.5 在公司约妹子忘记提交代码

1. 拉代码
   ```bash
   git pull origin dev
   ```

2. 继续开发

3. 提交代码
   ```bash
   git add .
   git commit -m 'xx'
   ```
   > 注：忘记push了

#### 2.6.6 回家继续写代码

1. 拉代码，发现在公司写的代码忘记提交...
   ```bash
   git pull origin dev
   ```

2. 继续开发其他功能

3. 把dev分支也推送到远程
   ```bash
   git add .
   git commit -m 'xx'
   git push origin dev
   ```

#### 2.6.7 到公司继续写代码

1. 拉代码，把晚上在家写的代码拉到本地（有合并、可能产生冲突）
   ```bash
   git pull origin dev
   ```

2. 如果有冲突，手动解决冲突

3. 继续开发其他功能

4. 把dev分支也推送到远程
   ```bash
   git add .
   git commit -m 'xx'
   git push origin dev
   ```

#### 2.6.8 其他

`git pull origin dev` 等价于：
```bash
git fetch origin dev
git merge origin/dev
```

![Pull操作分解](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/f58715652e556f5a1ba7b94df08a5f52cf013df14cee05cb86b5c7da1f329170.jpg)

#### 2.6.9 rebase的作用？

rebase可以保持提交记录简洁，不分叉。

![Rebase效果对比](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/d730b3b5509c8c47020d12c2198c822eac2340b8e2d857ffe992f9d41a3d14a5.jpg)

#### 2.6.10 快速解决冲突

1. **安装Beyond Compare**

2. **在Git中配置**
   ```bash
   git config --local merge.tool bc3
   git config --local mergetool.path '/usr/local/bin/bcomp'
   git config --local mergetool.KEEPBackup false
   ```

3. **应用Beyond Compare解决冲突**
   ```bash
   git mergetool
   ```

### 2.7 小总结

- **添加远程连接（别名）**
  ```bash
  git remote add origin 地址
  ```

- **推送代码**
  ```bash
  git push origin dev
  ```

- **下载代码**
  ```bash
  git clone 地址
  ```

- **拉取代码**
  ```bash
  git pull origin dev
  ```
  等价于：
  ```bash
  git fetch origin dev
  git merge origin/dev
  ```

- **保持代码提交整洁（变基）**
  ```bash
  git rebase 分支
  ```

- **记录图形展示**
  ```bash
  git log --graph --pretty=format:"%h %s"
  ```

### 2.8 第六阶段：多人协同开发工作流

![多人协同开发工作流](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/595cac2339f86b72090259c8eed630bba981eb12f36afb81373dd57801c0f5aa.jpg)

#### 2.8.0 老板的"侦探"技能

随着团队扩大，老板发现自己需要像侦探一样，经常查看不同分支之间到底有什么区别。

**场景一：小张提交PR前的检查**

小张开发了一个新功能，想要合并到主分支。老板说："先让我看看你这个分支和主分支到底有什么不同。"

```bash
# 老板的侦探技能：查看小张分支比主分支多了哪些提交
git log main..张的功能分支

# 反过来看：主分支比小张分支多了哪些（看看有没有漏掉别人的更新）
git log 张的功能分支..main
```

"咦，看起来你漏了小李昨天的更新！"老板发现了问题。

**场景二：代码冲突侦探**

有一天，合并分支时出现了冲突。老板需要快速了解到底哪些文件发生了变化。

```bash
# 看看具体文件的差异
git diff main..张的功能分支

# 只看改了哪些文件，不看具体内容
git diff --name-only main..张的功能分支
```

"原来是菜单价格文件冲突了，你俩都在改价格！"老板一眼就看出问题。

**场景三：老板的日常检查习惯**

每天早上，老板都要检查自己本地的修改：

```bash
# 看看我修改了什么还没提交
git diff

# 看看我暂存了什么还没提交
git diff --staged

# 看看我的工作区和最新提交的差异
git diff HEAD
```

**场景四：GitHub PR的秘密**

老板发现GitHub的Pull Request页面有个小秘密：

"你们知道GitHub的PR页面默认用的是'三点比较'吗？"老板问。

小张和小李一头雾水。

老板解释："两点比较是看两个分支的直接差异，三点比较是先找到他们的共同祖先，然后只看目标分支的独有变化。"

"比如你的分支和主分支分家后，主分支又有了新提交，三点比较只会显示你分支的变化，不会显示主分支的新内容。这样PR看起来更清楚！"

```bash
# 两点比较：看所有差异
git log main..feature

# 三点比较：只看feature分支的独有提交
git log main...feature
```

从此，团队的代码审查效率大大提升，每个人都知道该关注什么了！

#### 2.8.1 创建项目&邀请成员

协同开发时，需要所有成员都可以对同一个项目进行操作，需要邀请成员并赋予权限，否则无法开发。GitHub支持两种创建项目的方式（供多人协同开发）。

1. **合作者**：将用户添加到仓库合作者中之后，该用户就可以向当前仓库提交代码。

![合作者设置](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/ddbee65da0fbebd960c1b4cf6a3db851da9e96335cfbcf1f26d6ca9022d4d002.jpg)

2. **组织**：将成员邀请进入组织，组织下可以创建多个仓库，组织成员可以向组织下仓库提交代码。

![组织设置](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/9b7ec7d28227d32cdfdcc54b48d03a602c89450a7c8821b6996375b85a5a07ef.jpg)

##### Tag版本管理

| 命令 | 说明 |
|------|------|
| `git tag -a v1.0 -m '版本介绍'` | 创建本地Tag信息 |
| `git tag -d v1.0` | 删除Tag |
| `git push origin --tags` | 将本地tag信息推送到远程仓库 |
| `git pull origin --tags` | 更新本地tag版本信息 |
| `git checkout v1.0` | 切换tag |
| `git clone -b v0.1 地址` | 指定tag下载代码 |

#### 2.8.2 小弟开发

- 小弟注册GitHub或GitLab账号
- 邀请小弟进入组织（默认对组织中的项目具有读权限）

![邀请组织成员](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/33c04798f3dd999bfc1abdbb5abe58c5831f96279ba7d9ea708bd7d3cd2bac17.jpg)

- 邀请小弟成为某项目的合作者

![邀请项目合作者](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/8017248e91a297c18afbb1d3b455c6a4d805370ecde85ff62cd41ac5e9bd0a1e.jpg)

- 小弟在自己电脑上下载代码并开发
  ```bash
  git clone https://github.com/oldboy-org/dbhot.git
  cd dbhot
  git checkout dev
  git checkout -b dzz
  # 写代码...
  git add .
  git commit -m '斗地主功能开发完成'
  git push origin dzz
  ```

#### 2.8.3 Code Review

1. **配置**：代码review之后才能合并到dev分支。

![分支保护设置1](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/0d220e253ba6fe44af227b5d6980e1b1b9490c5d4da68be6b5103d1275ba3ed9.jpg)

![分支保护设置2](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/d20baec133bc573a723e45c5ce598126b06d16396c4cfc0a2413e1d62133d9bd.jpg)

![分支保护设置3](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/07ef0c3191e39f4cbf6050ed1d72ebc1b4ea9c29d5ed6cd32ca95132d0b355be.jpg)

2. **小弟提交Code Review申请**

![提交PR1](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/a28643c7b802293f26d9b615de0f98c8ab3b07ae801289e41fedd3b87e36a469.jpg)

![提交PR2](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/4d2d7e623fb2e5a271a5b89443740f0ad8fbc887f176ca0f76159fce92a782a1.jpg)

![提交PR3](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/a5ab690fc9102a2406738aea4dd9ec22401b3c4c4f7aea99a0260dac90ec6930.jpg)

![创建Pull Request](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/515038a7730974b7607d0aaa1e18287ab3ab527212c61ac9732ca3bf801cfc91.jpg)

3. **组长做Code Review**

![Code Review界面](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/b4a85f4aadd8472e95a56191a657094ef127b9a32d8a2b7c289e6755f6b7929a.jpg)

![Review提示](https://cdn-mineru.openxlab.org.cn/result/2025-08-03/3e505ff5-8259-471f-aa90-1ccbe92bc01a/710c5a83f4256f441f991a1590bb1712418f2abe72dfe286558bd1eab8612a59.jpg)

#### 2.8.4 提测上线（预发布）

由专门团队或团队leader执行以下步骤：

1. **基于dev分支创建release分支**
   ```bash
   git checkout dev
   git checkout -b release
   ```

2. **测试等**

3. **合并到master**
   - 使用Pull Request
   - 或本地将release合并到master分支

4. **在master分支打tag**
   ```bash
   git tag -a v2 -m '第二版 斗地主功能'
   git push origin --tags
   ```

5. **运维人员就可以去下载代码做上线了**
   ```bash
   git clone -b v2 地址
   ```

#### 2.8.5 老板的高级管理技巧

随着"东北热"越做越大，老板学会了一些高级的分支管理技巧。

##### 场景一：小张的"摘樱桃"技能

有一天，小张开发了一个大功能分支，包含了：新菜品管理、价格计算、库存统计三个功能。但老板只想要价格计算功能先上线。

"不用把整个分支合并过来，我们'摘樱桃'！"老板说。

```bash
# 只要价格计算那一次提交
git cherry-pick 价格计算的commit号

# 如果要摘取多个特定提交
git cherry-pick commit1 commit2
```

小张惊呆了："还能这样操作？只要我想要的功能！"

老板笑道："这就叫'cherry-pick'，像摘樱桃一样，只摘最好的！"

##### 场景二：小李的"压缩包"合并

小李做了一个功能，但是提交记录很乱：有"修复bug"、"再次修复"、"最终修复"等7个小提交。

老板看了摇头："这样的历史记录太乱了，我们压缩成一个提交再合并。"

```bash
# 压缩合并：把小李的多个提交压缩成一个
git merge --squash 小李的功能分支

# 然后手动提交一个干净的记录
git commit -m "新增会员管理功能"
```

"这样主分支的历史就很干净，一个功能一个提交！"老板满意地说。

##### 场景三：小张的紧急救火

小张正在开发新功能，代码写了一半，还没完成。突然老板冲过来："有紧急bug需要马上修复！"

小张慌了："我的代码还没写完，怎么切分支？"

老板淡定地说："用Git的'保险箱'！"

```bash
# 把当前未完成的工作存起来
git stash

# 现在工作区是干净的，可以切分支了
git switch hotfix-branch

# 修复完bug后，切回来继续之前的工作
git switch feature-branch
git stash pop  # 取出之前保存的工作
```

**老板的stash管理技巧**

老板经常要处理多个任务，他的stash用得很熟练：

```bash
# 存储时加上描述，方便识别
git stash push -m "新菜品功能开发到一半"

# 查看所有存储的工作
git stash list

# 只查看某个stash的内容，不恢复
git stash show stash@{0}

# 恢复指定的stash（保留stash记录）
git stash apply stash@{1}

# 删除不需要的stash
git stash drop stash@{0}

# 清空所有stash（慎用）
git stash clear
```

小张学会后感叹："有了这些技巧，再复杂的开发任务都不怕了！"

老板总结："Cherry-pick让你精确控制代码，Squash让历史更整洁，Stash让你应对突发情况。这就是高级开发者的必备技能！"

### 2.9 第七阶段：给开源软件贡献代码

1. **Fork源代码**：将别人源代码拷贝到我自己的远程仓库
2. **在自己仓库进行修改代码**
3. **给源代码的作者提交修复bug的申请（Pull Request）**

## 第三章 高级Git技巧

### 3.1 提交历史管理

#### 3.1.1 压缩多个提交

当你有多个小的提交想要合并成一个时：

**方法一：使用reset重做**
```bash
# 查看提交历史
git log

# 重置到想要保留的提交（保留修改在工作区）
git reset --mixed 目标commit号

# 重新提交
git add .
git commit -m "合并之前的多个提交"
```

**方法二：使用交互式rebase**
```bash
# 交互式rebase最近3个提交
git rebase -i HEAD~3

# 在编辑器中将除第一个外的commit前缀改为squash或s
# 保存后会进入commit message编辑界面
```

#### 3.1.2 查看详细提交信息

```bash
# 查看提交历史
git log

# 查看特定提交的详细信息
git show commit号

# 查看某个提交修改了哪些文件
git show --name-only commit号

# 图形化显示提交历史
git log --graph --oneline
```

### 3.2 标签管理

"东北热"火锅店的系统越来越完善，老板决定要像大公司一样，给每个重要版本打标签。

**第一次版本发布**

小张问："老板，我们的系统终于稳定了，要不要发布v1.0版本？"

老板激动地说："当然！这是我们的里程碑！"

```bash
# 老板的第一个正式版本标签
git tag -a v1.0.0 -m "东北热火锅店管理系统 v1.0 正式发布！"

# 推送到服务器，让全世界都知道
git push origin --tags
```

**给历史版本补标签**

小李发现："老板，我们之前的测试版本也应该打个标签纪念一下。"

```bash
# 给历史提交打标签
git tag -a v0.9.0 历史commit号 -m "内测版本"
git tag -a v0.8.0 更早的commit号 -m "原型版本"
```

**查看版本历史**

每当有人问起系统的发展历程，老板就自豪地展示：

```bash
# 查看所有版本
git tag

# 查看某个版本的详细信息
git show v1.0.0
```

**版本管理的烦恼**

有一次，小张不小心打错了标签：

```bash
# 删除错误的标签
git tag -d v1.0.1  # 删除本地
git push origin --delete v1.0.1  # 删除远程
```

老板说："版本号就像店名一样，一旦发布就不能随便改，要慎重！"

### 3.3 老板的合并哲学

老板在管理分支时，发现了一个有趣的现象。

**场景：小张的独自开发**

小张开了一个新分支开发功能，在他开发期间，主分支没有任何变化。当他合并回来时：

```bash
git merge feature-zhang
```

Git显示："Fast-forward"

老板疑惑："什么是Fast-forward？"

小李解释："就像你在空旷的马路上变道，直接过去就行，不需要减速等待。因为主分支没有新变化，Git只需要简单地移动指针。"

**场景：多人协作的复杂合并**

但有时老板希望保留合并记录，即使可以Fast-forward：

```bash
# 强制创建合并提交，记录这次合并事件
git merge --no-ff feature-zhang
```

"这样做的好处是，历史记录会清楚地显示'某某功能在某天合并了'，即使分支很简单也有记录。"老板说。

**反过来，严格的Fast-forward模式**

有时候，老板要求必须是线性历史：

```bash
# 只允许Fast-forward合并，如果不能就报错
git merge --ff-only feature-zhang
```

"如果这个命令失败了，说明你的分支落后了，必须先rebase到最新状态！"

小张学会后感叹："原来合并还有这么多门道！"

## 第四章 其他配置

### 4.1 配置与设置

#### 项目配置文件：项目/.git/config
```bash
git config --local user.name '武沛齐'
git config --local user.email 'wupeiqi@xx.com'
```

#### 全局配置文件：~/.gitconfig
```bash
git config --global user.name 'wupeiqi'
git config --global user.email 'wupeiqi@xx.com'
```

#### 系统配置文件：/etc/.gitconfig
```bash
git config --system user.name 'wupeiqi'
git config --system user.email 'wupeiqi@xx.com'
```
> 注意：需要有root权限

#### 应用场景：
```bash
git config --local user.name '武沛齐'
git config --local user.email 'wupeiqi@xx.com'

git config --local merge.tool bc3
git config --local mergetool.path '/usr/local/bin/bcomp'
git config --local mergetool.KEEPBackup false

git remote add origin 地址，默认添加在本地配置文件中（--local）
```

### 4.2 免密码登录

#### URL中体现
原来的地址：`https://github.com/wuPeiqi/dbhot.git`
修改的地址：`https://用户名:密码@github.com/wuPeiqi/dbhot.git`
```bash
git remote add origin https://用户名:密码@github.com/wuPeiqi/dbhot.git
git push origin master
```

#### SSH实现
1. **生成公钥和私钥**（默认放在 ~/.ssh目录下，id_rsa.pub公钥、id_rsa私钥）
   ```bash
   ssh-keygen
   ```

2. **拷贝公钥的内容，并设置到GitHub中**

3. **在Git本地中配置SSH地址**
   ```bash
   git remote add origin git@github.com:wuPeiqi/dbhot.git
   ```

4. **以后使用**
   ```bash
   git push origin master
   ```

#### Git自动管理凭证

### 4.3 Git忽略文件

让Git不再管理当前目录下的某些文件。

```
*.h
!a.h
files/
*.py[c|a|d]
```

更多参考：[GitHub Gitignore模板](https://github.com/github/gitignore)

### 4.4 GitHub任务管理相关

- **Issues**：文档以及任务管理
- **Wiki**：项目文档

