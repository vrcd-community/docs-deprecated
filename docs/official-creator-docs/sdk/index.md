# 安装 SDK

## 下载

有多种方式下载 VRChat SDK。

- 点击 [此处](https://vrchat.com/download/vcc) 下载 [VRChat Creator Companion](https://vcc.docs.vrchat.com/)。这是最简单的入门方法。Creator Companion 可自动为您安装 Unity Editor、Worlds SDK 和 Avatars SDK。
- 或者，您也可以使用我们的[GitHub 上的模板项目](https://vcc.docs.vrchat.com/guides/using-project-template-repos)。如果您不使用 Creator Companion，还需要下载 [当前版本的 Unity](/official-creator-docs/sdk/current-unity-version)。我们强烈建议使用 Unity Hub 下载 Unity。

## Step 0 - 安装 Unity

如果您已经安装并运行了 Unity，则可跳至 [Step 1](/official-creator-docs/sdk/#step-1-%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE)。[Creator Companion](https://vcc.docs.vrchat.com/) 会自动为你安装 Unity。

如果你想自己安装 Unity，请查看[当前支持的 Unity 版本](/official-creator-docs/sdk/current-unity-version)页面，并安装 VRChat 当前支持的 Unity 版本——最好使用 Unity Hub。

## Step 1 - 创建项目

对于我们的第一个项目，我们假定您正在为 Windows PC 构建内容。如果您想了解在 Quest 上为 VRChat 创建内容的过程，请查看 [为 Unity 配置 Quest 内容开发环境](https://creator.vrchat.com/platforms/android/setting-up-unity-for-creating-quest-content)。

#### 一些小贴士

- 将项目保存在空间较大的大容量硬盘中——Unity 项目可能会很大，尤其是在使用版本管理软件的情况下。
- 不要将一个项目用于大量不同的头像或世界。这样做会让未来的迁移工作变得非常麻烦！
- 如果你知道如何使用版本控制软件，如 [Git](https://git-scm.com/) 或 [Plastic SCM](https://www.plasticscm.com/)，请使用它！它能让你很容易地回滚那些破坏你项目的更改。
- 如果你不知道如何使用这些软件，那就应该学学！它们很棒。遗憾的是，Git 教程远远超出了我们文档的范围😰。

如果愿意，您可以手动创建一个项目，但无论如何，您都需要使用 [Creator Companion](https://vcc.docs.vrchat.com/) 来安装 SDK（除非您从我们的[模板仓库](https://vcc.docs.vrchat.com/guides/using-project-template-repos)开始安装）。

#### 如果您使用的是 Unity Hub

- 打开 Unity Hub（如果只安装了编辑器，则只打开编辑器）。
- 创建一个新项目，**设置为 3D 并保存**。
- 不要使用 HDRP 或 URP。我们不使用它。

## 第 2 步 - 打开项目

无论使用何种方法创建，现在都可以打开项目。如果项目未列出，请单击项目界面中的 `Add` 并选择它。如果您使用的是 Unity Hub，请单击右上角的 `打开`，然后选择项目所在的目录。

项目打开后，检查标题栏，确保以 `PC, Mac & Linux Standalone <DX11>` 结尾。如果不是，请转到 `文件 > 生成设置...`，选择 `PC, Mac & Linux Standalone`，然后单击左下角的 `切换平台`。

如果您要为 VRChat 的 Meta Quest 或 Android 版本构建内容，您也应该为 Android 构建内容。详情请查看我们的 [Android 文档](https://creator.vrchat.com/platforms/android/)。

## 可选步骤 3 - 安装 SDK

如果没有使用 VCC 设置项目，则需要安装 SDK。请通过 [VRChat Creator Companion](https://vcc.docs.vrchat.com/guides/getting-started) 安装。

如果出现任何错误，即使是全新的空项目，[请联系我们的支持团队](https://vrch.at/support)。

## 第 4 步 - 登录

要使用 SDK，您需要登录。为此，请导航至 "VRChat SDK > Show Control Panel > Authentication"。您可以在此登录您的 VRChat 账户。

请记住，您的 VRChat 账户必须至少为 "新用户 (New User)"[信任等级](https://docs.vrchat.com/docs/vrchat-safety-and-trust-system) 才能上传内容。您不能使用 Steam、Oculus 或 Viveport 帐户上传内容。

### 下一步是什么？

您的项目已准备就绪！您可以查看 [创建世界](/official-creator-docs/worlds/) 或 [创建头像](/official-creator-docs/avatars/)。