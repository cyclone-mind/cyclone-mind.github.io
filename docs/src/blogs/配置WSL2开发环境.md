---
title: 配置 WSL2 开发环境
date: 2024-03-21
description: 详细介绍如何在 Windows 系统上配置 WSL2 开发环境，包括基础设置、开发工具安装和 GUI 应用配置
tags: [WSL2, Windows, Linux, 开发环境]
author: shouyu
---

# {{ $frontmatter.title }}

## 1 安装 WSL2

### 1.1 开启虚拟化

必须运行 Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11 才能使用以下命令。

首先打开任务管理器查看虚拟化是否已开启，若未开启说明是 Windows 家庭版，不满足要求。

<img
  src="https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/Pasted%20image%2020240926175550.png"
  width="600"
  align="middle"
  alt="任务管理器虚拟化"
/>

操作系统版本必须是 windows 的专业版。在设置中的 启用或关闭 windows 功能中打开 **适用于 windows 的 linux 子系统** 和 **虚拟机平台两个选项**

<img
 src="https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image.png"
 width="600"
 align="middle"
 alt="Windows功能设置"
/>

重启电脑。

### 1.2 基本配置

选择在 Microsoft Store 中选择任意一个版本点击下载安装：

![image-20250321133805437](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250321133805437.png)

或者使用命令行安装：
打开 cmd 或者 PowerShell：

#### 安装

```bash
# 查看可通过在线商店下载的可用 Linux 发行版列表
wsl --list --online

# 下载对应版本，-d 参数意味着将该版本设置为默认的发行版
wsl --install -d <发行版名称> --web-download

# 如不设置任何参数，默认下载 Ubuntu 最新版
wsl --install

# 或者不加 -d 参数，可以后续自行设置默认版
wsl --set-default <发行版名称>
```

#### 启动与停止

```bash
# 启动默认子系统或启动任意一个子系统
wsl
wsl -d <发行版名称>

# 下载完成后，查看所有子系统运行状态
wsl --list -v

# 退出子系统
exit
```

#### 卸载和备份

```bash
# 卸载与导出
wsl --unregister <发行版名称>
wsl --export <发行版名称> <备份文件名.tar>

# 导入 E 盘的一个目录
cd E:
mkdir wsl
wsl --import <发行版名称> <目标目录> <备份文件路径>
# 导入成功后会显示一个 Hyper-V 的镜像文件。
```

## 2 zsh

`zsh` 比 `bash` 更加强大也更好看，配合 `oh-my-zsh` 和相关插件，可以实现命令高亮、命令补全、Git 快捷操作等等。

```bash
# 更新 package
sudo apt update && sudo apt upgrade

# 安装 zsh
sudo apt install zsh -y

# 安装 oh-my-zsh
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# 安装命令补全和高亮插件
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/plugins/zsh-autosuggestions
sed -i 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/g' ~/.zshrc

# 将 zsh 设置为默认的shell
chsh -s /bin/zsh
```

配置好之后下次打开默认就是 zsh 了，也可以输入`zsh`进入 zsh 环境。另外，我会在 zsh 的配置文件中设置一些常用的指令。编辑配置文件`vim .zshrc`，命令行敲入 `code .zshrc` ，打开 VSCode 在最后加入：

```bash
# 列表形式显示所有文件详情
alias ll="ls -alF"
# 删除文件前需确认
alias rm="rm -i"
```

## 3 Git

若要安装 Git，请参阅 [适用于 Linux 的 Git 下载](https://git-scm.com/download/linux) 站点。每个 Linux 发行版都有自己的包管理器和安装命令。

对于 Ubuntu/Debian 中最新的稳定 Git 版本，请输入命令：

```bash
sudo apt-get install git
```

Git 默认会忽略大小写，配环境的时候更改此设置：

```bash
# 启用大小写敏感
git config --global core.ignorecase false
```

Git 的常规配置

```bash
# 配置用户名和密码
git config --global user.name < Your Name >
git config --global user.email < youremail@domain.com >

# 生成 ssh key
ssh-keygen
# 用 Github 的话，可以拷贝生成的公钥到 https://github.com/settings/keys
```

## 4 nvm、Node.js 和 npm

除了选择在 Windows 还是在 WSL 上安装，安装 Node.js 时还要作出其他选择。建议使用版本管理器，因为版本变更速度非常快。你可能需要根据所使用的不同项目的需求在多个版本的 Node.js 之间进行切换。Node Version Manager（通常称为 `nvm`）是安装多个版本的 Node.js 的最常见方法。我们将演练安装 `nvm` 的步骤，然后使用它来安装 Node.js 和节点包管理器（npm）。

1. 打开 Ubuntu 命令行（或所选的发行版）。

2. 使用以下命令安装 cURL（用于在命令行中从 Internet 下载内容的工具）：`sudo apt-get install curl`

3. 使用以下命令安装 nvm：`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`

4. 若要验证安装，请输入：`command -v nvm`。此命令应返回 "nvm" ，如果你收到"找不到命令"或根本没有响应，请关闭当前终端，将其重新打开，然后重试。

5. 列出当前安装的 Node 版本（此时应为无）：`nvm ls`

   ![image-20250321141737962](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250321141737962.png)

6. 安装 Node.js 的当前版本和稳定的 LTS 版本。 后面的步骤将介绍如何使用 `nvm` 命令在 Node.js 的活动版本之间切换。

   - 安装 Node.js 的当前稳定的 LTS 版本（推荐用于生产应用程序）：`nvm install --lts`

   - 安装 Node.js 的当前版本（用于测试最新的 Node.js 功能和改进，但更容易出现问题）：`nvm install node`列出安装的 Node 版本：`nvm ls`。现在应会看到刚安装的两个版本。

![显示 LTS 和当前 Node 版本的 NVM 列表](https://learn.microsoft.com/zh-cn/windows/images/nvm-node-installed.png)

7. 使用以下命令验证 Node.js 是否已安装，以及是否为当前默认版本：`node --version`。 然后使用以下命令验证是否也有 npm：`npm --version`（还可以使用 `which node` 或 `which npm` 来查看用于默认版本的路径）。

8. 若要更改要用于项目的 Node.js 版本，请创建新的项目目录 `mkdir NodeTest`，输入目录 `cd NodeTest`，然后输入 `nvm use node` 切换到当前版本，或输入 `nvm use --lts` 切换到 LTS 版本。

## 5 GUI

适用于 Linux 的 Windows Subsystem for Linux (WSL) 现在支持在 Windows 上运行 Linux GUI 应用程序（X11 和 Wayland），提供了完全集成的桌面体验。我们安装一些常用的 GUI 应用。

```bash
# 更新包
sudo apt update

# 安装 Gnome 文本编辑器
# Gnome 文本编辑器是 GNOME 桌面环境的默认文本编辑器。
sudo apt install gnome-text-editor -y
```

若要在编辑器中启动 bashrc 文件，请输入：`gnome-text-editor ~/.bashrc`

### 安装 GIMP（可选）

GIMP 是一种免费的开源光栅图形编辑器，用于图像操作和图像编辑、自由形态绘图、不同图像文件格式之间的转码，以及更专业的任务，可以暂时用来替代 PhotoShop

```bash
sudo apt install gimp -y
```

若要启动，请输入：`gimp`

### 安装 Nautilus（建议）

Nautilus 也称为 GNOME Files，是 GNOME 桌面的文件管理器。 （类似于 Windows 文件资源管理器）。

```bash
sudo apt install nautilus -y
```

若要启动，请输入：`nautilus`

### 安装 VLC（可选）

VLC 是一种免费的开源跨平台多媒体播放器和框架，可播放大多数多媒体文件。

```bash
sudo apt install vlc -y
```

若要启动，请输入：`vlc`

### 安装 X11 应用（可选）

X11 是 Linux 窗口管理系统，这是随它一起提供的各种应用和工具的集合，例如 xclock、xcalc 计算器、用于剪切和粘贴的 xclipboard、用于事件测试的 xev 等。有关详细信息，请参阅 [x.org 文档](https://www.x.org/wiki/UserDocumentation/GettingStarted/)。

```bash
sudo apt install x11-apps -y
```

若要启动，请输入要使用的工具的名称。 例如：

- `xcalc`、`xclock`、`xeyes`

### 安装适用于 Linux 的 Google Chrome（建议）

安装适用于 Linux 的 Google Chrome：

1. 将目录更改为 temp 文件夹：`cd /tmp`
2. 使用 wget 下载它：`wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
3. 安装包：`sudo apt install --fix-missing ./google-chrome-stable_current_amd64.deb`

*`--fix-missing` 选项用于修复安装过程中可能出现的缺少依赖项。 命令中的 `./` 指定 .deb 文件所在的当前目录。 如果 .deb 文件位于其他目录中，则需要在命令中指定该文件的路径。

若要启动，请输入：`google-chrome`

## 6 Windows Terminal

Windows Terminal 是一个新推出的很好用的终端，可以使用命令行接口运行任何应用程序。Windows 10 18362/11 自带，如果没有的话，可以从**应用商店**下载。
它的主要功能包括多个选项卡、窗格、Unicode 和 UTF-8 字符支持、GPU 加速文本呈现引擎，你还可用它来创建你自己的主题并自定义文本、颜色、背景和快捷方式。

![image-20250321143119511](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250321143119511.png)

每当安装新的 WSL Linux 发行版时，都会在 Windows Terminal 中为其创建一个新实例，该实例可根据你的偏好进行自定义。

例如可以将某个 WSL 实例设置为默认启动。

![image-20250321143524461](https://images-xxueyu.oss-cn-shanghai.aliyuncs.com/image-20250321143524461.png)

## 7 Miniconda

```bash
sudo apt update  # 更新软件包列表
sudo apt upgrade # 升级软件包
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
sudo chmod 777 Miniconda3-latest-Linux-x86_64.sh 
./Miniconda3-latest-Linux-x86_64.sh
```

打开并编辑 *~/.bashrc*文件：

如果你使用的是 zsh 文件，则需要编辑~/.zshrc文件：

 在 ~/.bashrc文件最下面输入（注意：路径中的**YOURNAME**替换为你刚刚在Ubuntu设置的**用户名**）：

```bash
export PATH=$PATH:/home/<YOURNAME>/anaconda3/bin
```

 保存后输入下面命令重新加载 .bashrc 文件或 .zshrc：

```bash
source ~/.bashrc
source ~/.zshrc
```

 如果 WSL 命令提示符前出现 *(base)* 即代表配置成功

具体的 conda 命令这里不再赘述。

## 8 参考资料

1. [安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)
2. [在 WSL 上使用 Linux GUI 应用 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps)
3. [Windows Terminal 概述 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/terminal/)
4. [WSL2 搭建 Windows 更好用的前端开发环境](https://codec.wang/blog/setup-wsl-for-frontend)
5. [Linux 深度学习环境搭建教程 ( WSL + miniconda + pytorch + cuda  + cudnn + vscode)](https://zhuanlan.zhihu.com/p/683058297)
