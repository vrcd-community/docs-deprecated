# 升级 SDK

如果您需要更新 SDK，请务必遵循以下步骤，以确保更新正常进行，并且不会出现任何旧文件/冲突文件。

## 版本控制

如果您知道如何使用，您可能会发现使用 [Git](https://git-scm.com/) 等版本控制软件来管理您的项目很有益处。你不需要将版本库上传到 Github 或类似服务，就能获得版本控制的好处。在升级 SDK 之前，请先创建一个提交，以确保万无一失。

## VRChat 创作者伴侣

有了 VCC，更新 SDK 变得非常容易。请参阅 [VRChat Creator Companion 文档](https://vcc.docs.vrchat.com/guides/getting-started) 了解如何使用它！

## 迁移到 VCC

如果您想了解如何迁移您的项目以使用 VCC，请查看[指南](https://vcc.docs.vrchat.com/vpm/migrating)。

## 手动更新

如果您使用的是 VCC，则无需担心手动更新。

### 传统 SDK3

::: warning
这些说明仅适用于我们的传统 SDK (`Assets\VRCSDK`) 用户。
如果您的 SDK 位于 "Packages "文件夹（"Packages\com.vrchat.base"）中，请勿按照以下说明操作。
:::

**这对 SDK3-Avatars 尤为重要，因为如果更新错误，可能会丢失动画的状态行为！** 如果您想要格外小心，请在更新 SDK 之前备份您的项目。

#### SDK3 - 世界

1. 关闭 Unity。
2. 备份您的 Unity 项目！您不必备份库文件夹，Unity 会自动生成这些文件。

::: warning 从 2020.3.2 之前发布的 SDK3 版本升级
**这是一个不常用的步骤，您可能不需要这样做。**

如果您是从比 2020.3.2 更早发布的 SDK 升级，请进入项目的 `Assets` 文件夹并删除 `VRCSDK` 和 `Udon` 文件夹以及 `VRCSDK.meta` 和 `Udon.meta` 文件。
:::

3. 打开您的 Unity 项目。
4. 在旧版本上导入新的 SDK3 - World。

### SDK3 - 化身

::: danger 对于 SDK3 化身项目，请勿执行 "删除重装" 操作！
**如果您在关闭 Unity 的情况下删除 SDK 文件夹，然后在未安装 SDK 的情况下打开 Unity，您将丢失状态行为。** 请确保经常备份您的项目，并保存/记录您的状态行为设置。

如果您**必须**执行 SDK3 - 化身软件包的完全删除重装，请先备份您的项目。您将不得不重新设置状态行为，因此请确保您已妥善记录。
:::

1. 关闭 Unity。
2. 备份您的 Unity 项目！您无需备份库文件夹，Unity 会自动生成这些文件。
3. 打开您的 Unity 项目。
4. 在旧版本上导入新的 SDK3 - Avatars。如果导入完成后出现错误，请尝试重新启动 Unity。

::: info SDK3 在升级化身动态时的预期错误
当您第一次将化身 SDK3 升级到 Avatar Dynamics SDK 时，预计会出现一些错误。这是由于 SDK 在安装过程中安装了 Burst 和 Mathematics 软件包，而 Unity 过早地导入这些软件包。

如果清除错误或重新启动 Unity，应该也可以正常工作。
:::

#### SDK3 - 头像 - 独立项目流程

如果您在通过上述过程升级时遇到问题，请尝试以下方法：

1. 关闭 Unity。
2. 新建一个空白项目。
3. 将新的 SDK3 - Avatars 软件包导入该项目。
4. 关闭该 Unity 项目。
5. 使用资源管理器（先不要打开 Unity！），删除要升级的项目中的 VRCSDK3 文件夹。除非本指南另有说明，否则**不要打开 Unity**
6. 从导入 SDK 的新空白项目中，将 VRCSDK3 文件夹复制到要升级的项目中。
7. 复制完成后，打开 Unity 并打开升级后的项目。您可以删除空白项目。

### 高级更新流程

如果您要在包含使用复杂触发器设置的世界的项目中重新安装 SDK，这里有一个更安全的更新 SDK 的方法。

1. 关闭 Unity
2. 将项目备份到另一个文件夹（不要备份库文件夹，这些文件由 Unity 自动生成）
3. 删除 SDK 和 Plugins 文件夹以及相关的 .META 文件
4. 创建一个新的临时 Unity 项目
5. 在临时项目中安装最新的 SDK
6. 将新添加的 SDK/插件和相关 .META 文件从临时项目复制到原始项目中
7. 完成。现在，您可以打开升级后的项目，无论触发器多么复杂，都不会出现崩溃！

## 更新 Unity

如果您要从旧版本的 Unity 更新，我们[提供了更新指南](/official-creator-docs/sdk/migrating-to-a-newer-minor-unity-version)到我们支持的最新版本！