# 制作您的第一个模型

## 请先安装 SDK！
在开始之前，请确保您有一个[安装了 SDK 的 Unity 项目](https://creators.vrchat.com/sdk)。

如果您打算在开始之前有一个参考，请打开您的形象文件点击以下路径
'VRChat SDK > Samples > Avatar Dynamics Robot Avatar'.

## Step 0 - 创造一个模型!
尽管大多数用户选择寻找现成模型，但您完全可以从头开始制作模型。您可以使用任何您喜欢的 3D 软件，只要它支持导出带骨架的FBX！Blender和Maya是非常常见的选择。

让我们理清：对于以前从未进行过3D建模的人来说，这将是漫长旅程的开始。学习如何进行3D建模是复杂的，学习如何绑定和纹理也是如此。创造一个绑定模型需要精通许多技能！

如果您选择创建模型，我们建议您从简单的东西开始。即便这些模型不像现成模型一样精致好看，它也是您的模型，您可以在您的模型上尽情发挥创造力。

为了帮助您入门，以下是我们的一位社区成员创建的 VRChat 独占教程：

Rainhet's Blender 3D Virtual Avatar Tutorial 2022
网址如下：
https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1
Rainhet的教程偏长，她将说明在模型制作过程中遇到的所有的知识点。

Rainhet's 3D Avatar Class
网址如下：
https://www.youtube.com/watch?v=w-yhjgnhaNw
这是Rainhet 早期的教程集合。
这里也有10分钟版本的教程用于带你粗略了解模型制作过程。
网址如下：
https://www.youtube.com/watch?v=in9rNze4FD4

## Step 0.5 -使用avatar creator!
您也可以试着使用avatar creator！

我们在这里列出了一些使用简单的制作器，列表持续更新。
网址如下：
Avatar Systems — VRChat

您也许想了解VRoid Studio，这同样在steam发售。这是一个以动漫为主题的角色创建软件，主要用于创建 VTuber 风格的模型，但它的参数非常灵活！请查看VRoid subreddit来了解软件的大体功能。
网址如下：
https://www.reddit.com/r/VRoid/

VRoid Studio 以 .vrm 格式输出形象，Unity 本身并不支持该格式！如果您想直接导入VRoid Studio模型以在VRchat中使用。 
您可能需要查看用于.vrm形象的VRMtoVRChat转换器。
网址如下：
https://github.com/esperecyan/VRMConverterForVRChat
如果您使用此插件，请务必在使用前阅读它的文档。
Vket Store | VRM Converter for VRChat

## Step 1 – 寻找一个模型
这是最为重要的部分，您需要一个3D模型作为您的形象，由于这是您的第一个形象，我们建议您从Unity Asset Store获取一个形象，因为它们通常完全绑定，这意味着您无需执行任何特殊操作即可上传它。如果您决定在Unity Asset Store外寻找模型，请确保模型已完全绑定，并且采用 Unity 接受的格式。

请确保您获得使用要使用的模型的许可证。艺术家们在他们的模型上投入了数百小时。在没有许可证的情况下使用它们违反了VRChat服务条款，也侵犯了模型作者的权利。

请确保您使用的模型低于 70，000 个三角面（Oculus Quest 的 VRChat 为 7，500 个）。在PC上您可以上传超过此数量的模型，但形象将自动标记为“非常差”性能，因为过多的面数可能会导致性能问题。

## Step 2 – 将模型载入您的工程
现在您已经找到了所需的模型，是时候将其放入您的项目中了。如果您从asset store获取了它，则可以下载并直接将其导入到您的项目中。如果您从其他地方获得模型，则需要将其和相关纹理导入“Assets”文件夹。

如果要从 3D 编辑器导入模型，请确保牢记坐标系之间的差异。例如，Blender的默认坐标和单位系统与Unity不同。您必须从Blender按如下方式定义导出FBX文件：

在assets中获取模型后，您需要确保它有着正确的设置，在inspector的“rig”选项卡下，确保“Animation Type”设置为“Humanoid”。

## Step 3 – 将模型导入场景
使用assets中的模型并将其进行正确的设置，接下来请将其拖到Hierarchy或scene中。我们建议每个形象占据一个独立场景，并将其放置在坐标 0， 0， 0中。如果形象没有直立，请旋转以校正。此外，请确保形象不要过小或者大于5x5x5m，您可以使用默认的 Unity 立方体（即 1x1x1m）进行比较。

优化您的形象非常重要，这样您就不会对自己和他人造成低性能困扰。如果出现此类问题，SDK 会告知您。查看我们的形象优化技巧，查看提高形象性能评级的方法。
网址如下：
https://docs.vrchat.com/docs/avatar-optimizing-tips

## Step 4 – 添加模型说明
完成以上操作后，我们现在要添加一个VRC_AvatarDescriptor，然后为其修改设置。

选择hierarchy中的形象。
单击inspector中的'Add Component'。
搜索'VRC Avatar Descriptor'组件并且添加



视角位
首先，您需要设置视角位。这将是您的相机在VRChat中的位置。您可以在场景中将其直观地表示为一个小的白色球体。如果您的形象有一个头，那么视野的最佳位置是在眼睛之间。如果它没有头部，请将其放置在您认为合适的位置。


口型同步模式
当您说话时，您可以让您的型像的嘴（或其他任何东西）自动做出反应。打开您的VRC Avatar Descriptor并展开下拉LipSync列表。有五种模式可供选择：

Default

点击“Auto Detect！”通常足以让您的VRChat形象对你的语音做出反应。
点击“Auto Detect！”让VRChat SDK自动检测适当的口型同步模式。然后将模式切换到以下模式之一。

Jaw Flap Bone
如果您的头像使用单个骨骼来为下颌设置动画，您可以在此处指定它。你的角色的下巴会张开，这取决于您在VRChat中说话声音的大小。请确保您已在 Unity 的Humanoid rig中为您的头像配置了颚部骨骼。

Viseme Blend Shape (推荐)
Blend shapes/shape keys（根据您使用的软件命名）根据顶点位置修改网格。许多模型将其用于详细口型动画。如果您的模型具有这些，则应使用它们！

我们使用 Oculus 音频库来检测和设置口型。您可以在此处看到对所有口型的外观以及触发它们的声音的引用。
网址如下：
https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference

VRChat通常可以自动检测您的形象的嘴型。如果没有，您可以从下拉列表中选择口型。

“Viseme Blend Shape”模式是让你的角色在说话时活动面部最常见的方法。

Unity 会删除导入时为空的Blend shapes/shape keys，因此请确保您的“SIL”形状（未检测到声音但麦克风处于活动状态时嘴巴的形状 - 例如单词之间的间隔）将单个顶点以极微量移动。这将阻止 Unity 删除该节点。

如果您是一名形象制作者，请考虑将您的模型分成两个皮肤网格 - 一个用于您的身体，另一个用于您的头部/面部。
Blend Shape的性能成本取决于它们对 3D 模型的影响程度。将Blend Shape留在单独的头部网格上，并在身体网格上减少Blend Shape可能会提高模型的性能。

Jaw Flap Blend Shape
如果您的头像仅使用单个Blend Shape来为其嘴部设置动画，请在此处进行配置。它的效果类似于“Jaw Flap Bone”，但是通过动画化jaw blend shape而不是颚部骨骼完成动作。

Viseme Parameter Only
如果您是高级创作者，则可以使用此模式通过VRChat的内置动画参数控制形象对语音的反应。
网址如下：
https://docs.vrchat.com/docs/animator-parameters

## Step 5 - 转到builder选项卡/检查形象是否正常
接下来，我们要检查builder窗口中的一切是否正常，为此您需要打开VRChat SDK > Show Control Panel > Builder，在其中您可以看到包含您的形象的gameobject，其下方有一个“Build & Publish”按钮。在两者之间，您将看到多边形数量，错误和警告。如果有任何错误，您需要先修复它们，最常见的错误是多边形太多，要解决此问题，您需要重新搭建您的形象网格，如果您知道如何做，那就去做吧，如果不行，请选择另一个模型。

## Step 6 -上传形象！
现在一切准备就绪。按下“build & Publish”按钮，SDK 将构建您的形象并准备好上传。接下来，您将进入上传界面，您可以在其中命名头像，为其设置图像和其他元数据。要更改图像，请在场景中移动VRCCam。

敏感内容警告功能已被弃用，目前不再使用。您不能向VRChat上传违反我们的社区准则或服务条款的内容。这样做（即使您已选中敏感内容警告）也会经过审核操作。
网址如下：
https://vrchat.com/community-guidelines
https://vrchat.com/legal

输入完所有内容后，您需要确认您有权将内容上传到VRChat，然后您可以点击上传按钮，形象将开始上传，完成后，您应该能够在游戏中或通过SDK中VRChat SDK > Show Control Panel > Content Manager的内容管理器查看。
