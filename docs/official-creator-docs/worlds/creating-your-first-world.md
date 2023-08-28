# 制作您的第一个世界
在开始之前，请确保您有一个[安装了 SDK 的 Unity 项目](https://creators.vrchat.com/sdk)。

## Step 1 - 设置场景
您需要做的第一件事是制作一个包含您制作内容的场景。打开场景后，您需要将 VRCWorld Prefab 拖放到场景中。

您可以在 "Project" 选项卡中搜索 VRCWorld Prefab，并将您的搜索设置为 "In Packages" 或 "All" 来找到它。

![](/vrcworld.png)

## Step 2 - 创建出生点
现在，您需要在场景中部署至少一个可以用于生成用户模型的点。在默认情况下，玩家将在你的“ VRCWorld ”物体坐标处生成。这是最简单的部署方式，也是大多数人的选择。

如果您想部署其他生成点，请先在场景中创建一个“空游戏物体”，并将其放置在你希望用户出现的地方，然后将这个游戏物体添加到“VRC_SceneDescriptor”的列表中。所有你自行部署的生成点都得这样操作。
如果你、您部署了多个生成点，您可以通过改变“Spawn Order property（生成顺序）”这一属性来决定用户生成到这些地方的顺序。

## Step 3 - Descriptor的设置
您可以设置“VRC_SceneDescriptor”中的各种选项来更改房间里的活动。以下是部分常用的功能。

Spawns – 这是一个坐标数组，决定玩家进入世界时的生成位置。默认情况下，玩家会在“Scene Descriptor”游戏物体的坐标处生成。

Respawn Height -Y – 这是玩家重生及其拾取物重置或被摧毁时的高度。任何在这个Y值以下的物体都会被重置（如果是被配置过的对象，则销毁）。

Reference Camera - 在玩家进入房间时可以将玩家的（自定义）设置应用到上面的一个相机。通常用于调整相机裁切面及添加后处理。

您可以在VRC_SceneDescriptor上找到更多的功能。
网址如下：
https://docs.vrchat.com/docs/vrc_scenedescriptor

## Step 4 - 搭建场景
让我们开始吧！请转到VRChat SDK > Show Control Panel > Builder。在这里您可以看到一些用于搭建场景、构建世界的选项。请按照下文进行操作：

设置匹配 VRChat layer的层。这是必要的步骤，否则您的世界可能无法正常运行。

设置匹配VRChat的碰撞层矩阵。详情见上文，请勿跳过这一步！

运行时自动将 3D 空间化应用于 3D 音频源。如果您希望场景中的所有音频源都是空间化的，请使用此选项。

将 3D 空间化应用于当前场景中的 3D 音频源。如果您以后想添加 2D 音频源（如背景音乐），则应使用它。

## Step 5 - 构建您的世界
接下来您需要构建您的世界！您可以选择您首先要做的事情：您可以制作一个非上传的测试版本来测试您的世界，或者您可以直接将世界发布到 VRChat。在“ Test ”和“ Publish ”标题下您可以找到“ Last Build ”和“ New Build ”按钮。Last Build将最近运行的世界版本进行测试或上传。New Build则将新的世界放在一起进行测试或上传。

（可选项）
如果您要测试您的世界，请按“ Test ”标题下的“ New Build ”按钮。这将构建世界的新版本，并在VRChat中启动世界。“ The Number of Clients ”选项用于要打开多个客户端以测试网络行为（如触发器）的情况。
网址如下：
https://docs.vrchat.com/docs/trigger-triggers

现在，我们可以通过按“ Publish ”标题下的“ New Build ”按钮来构建和上传您的世界！这将构建您的世界并准备好上传。Unity 应进入Play模式，并且显示一个屏幕，您可以在其中输入有关上传内容的详细信息，其中包括：

World name - 向所有人展示您的世界名称！

Player capacity - 世界的软人数上限。如果在世界内的玩家人数高于软上限，则只有房主的好友才能加入。一旦玩家人数达到世界软上限的 2 倍，它就处于“硬上限”状态，其他用户无法加入。

世界创建者和房主不受“硬上限”的限制;在上述情况中即使有限制，他们也将被允许加入。在确定普通用户是否可以加入时，豁免用户仍包含在容量中。此外，将来“硬上限”可能会包含更多例外情况，因此不建议见过实例的容量限于任何特定数量的用户。
 
Description - 这些内容将显示在应用程序内页面和网站的“World Details”上。
 
Content Warnings - 敏感内容警告功能已被弃用，目前不再使用。您不能向VRChat上传违反我们的社区准则或服务条款的内容。这样做（即使您已选中敏感内容警告）也会经过审核操作。
网址如下：
https://vrchat.com/community-guidelines
https://vrchat.com/legal

您还可以返回到Scene view并调整 VRCCam 摄像机，以使封面看起来很棒。

输入完所有内容后，您必须确认您有权将内容上传到VRChat。在这之后，您可以单击“Upload”按钮。然后世界将上传到VRChat！完成后，您应该能够在游戏中看到它，或者通过VRChat SDK > Show Control Panel > Content Manager中的内容管理器看到。

如果您的世界上传失败，请检查console面板以查看是否有任何错误，如果有，请在尝试再次构建您的世界之前解决它们。如果您需要帮助，请查看我们在 Discord 中发布的其他资料
