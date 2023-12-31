# 启动选项

> **高阶设置**<br>
> 这些选项更加高阶，旨在帮助创作者调试其创作时出现的问题。

以下几种选项皆可用于启动VRChat。

## 使用启动选项

### Steam

如果您使用的是Steam平台，那么您可以通过进入VRChat的属性界面来轻松设置这些选项。您可以在您的游戏库中右键VRChat，点击属性>通用>启动选项，然后将您想要的启动选项写入启动选项输入框内。

### Oculus PC / Meta Rift

如果您使用的是Oculus PC，您必须为VRChat应用程序创建一个快捷方式，然后右键快捷方式、点击属性，在“目标”栏位中的双引号外部添加这些启动选项参数。在您打开Oculus Home之后，您必须通过点击刚刚创建的快捷方式图标打开VRChat才能让启动选项生效。Oculus启动器并不原生支持设置启动选项。

### Oculus Quest

Oculus Quest 不支持以任何方式设置启动选项。

## 启动选项列表

启动选项 | 描述
-- | --
`--no-vr` | 强制使用桌面模式
`--profile=X` | 使用不同的用户档案启动，X是一个数字，它默认为0。
`--fps=X` | 将帧率限制固定为X。在桌面端，它默认为90。在虚拟现实模式下，默认的帧率限制将取决于头显最高支持的帧率。
`--enable-debug-gui` | 启用调试菜单快捷键，在[键盘与鼠标](../contorls/keyboard-and-mouse.md)文档中查看对应的快捷键。
`--enable-sdk-log-levels` | 启用大量的额外应用日志。<br>**警告**：这将会让您的日志文件变得**非常**大！<br>使用这个选项可能会因为日益增大的日志文件而降低您的性能，不要将它持续开启！
`--enable-udon-debug-logging` | 在客户端中启用 Udon 堆内存和堆栈转储。通常只在编辑器中启用。**警告**：这将会让你的日志文件在存在问题的Udon世界中变得非常大！<br>使用这个选项可能会因为日益增大的日志文件而降低您的性能，不要将它持续开启！
`--midi=deviceName` | 强制 MIDI 驱动搜索包含指定 `deviceName` （设备名称）的已连接 MIDI 设备,支持部分匹配和忽略大小写。
`--watch-worlds` | 监视 VRChat SDK 构建世界的位置，并自动加入任何用 VRChat SDK 创建的新的本地世界。<br>查看[创建与测试](../../blank.md)（翻译中）
`--watch-avatars` | 监视 VRChat SDK 构建角色的位置。如果正在使用的测试角色进行了更新，将会自动切换为更新后的版本。
`--osc=inPort:outIP:outPort` | 自定义输入和输出 OSC 信息的网络设置。<br>支持一下三种参数：<br>- inPort: VRChat客户端监听OSC信息输入的端口。<br>- outIP: OSC信息将会传到的IP地址。<br>- outPort: 传出的OSC消息将会被接收的端口。
`--affinity=<ARG>` | 这个启动参数可以设置VRChat的线程亲和性，选择分配给VRChat的线程。`<ARG>`是一个位掩码,指示应该使用哪些线程。例如，`FFFF`选择前16个线程，`FF`选择前8个线程，等等。<br>**不要在非AMD CPU上使用此功能，它仅解决AMD CPU的跨CCX延迟问题**。如果误用,会导致严重性能问题。<br>**大多数用户不需要使用此功能**。用户需要自行判断是否需要使用。<br>存在可以帮助您计算位掩码的[实用程序](https://bitsum.com/tools/cpu-affinity-calculator/)。<br>这个启动参数最适用于可以从限制进程到某些线程以减少内部延迟中受益的AMD CPU。<br>这是一个高级功能。如果您不确定是否需要使用到它，那么最好不要使用!

## 额外笔记

### AMD的跨CCX延迟和核心亲和性

> 感谢VRChat社区中的"Fallen Ninja"写下这个建议！请注意以下内容来自社区成员，VRChat团队还没有直接验证。

> 如果您正在使用多CCX的AMD CPU(大多数1000/2000/3000系列和一部分5000/7000系列)，可以使用`--affinity`启动参数限制仅使用第一个CCX以减少核心间的通信延迟并获得不错的帧率提升。
> 
> 可以在[这里](https://en.wikipedia.org/wiki/List\_of\_AMD\_Ryzen\_processors)查看CPU的“核心配置”。如果x前的数字不是1（CCX数量），你的设置可能会从亲和性限制中受益。注意x后的数字（每个CCX中的核心数量）并在下面查找理想的亲和性字符串：
> 
> 2: `--affinity=F` (我建议换一个更好的CPU，这个线程数设置亲和性可能帮助不大，因为仅限制两个物理核芯)<br>
> 3: `--affinity=3F`<br>
> 4: `--affinity=FF`<br>
> 6: `--affinity=FFF`<br>
> 8: `--affinity=FFFF`<br>
> 
> 在低端机型上还有一些边缘案例的例外(此外，假设您没有关闭SMT...如果你问了，那就表示您没有)，但这些例外最坏的情况便是使这种解决方案效果变差，而并不是有害的。

## 分辨率，屏幕，和本地Unity引擎启动的选择

在Unity 2019版本中移除了通过按住shift/alt的同时启动应用时弹出分辨率和画质选项框的功能，但您可以使用启动参数替代大部分功能。

启动选项 | 描述
-- | --
`-screen-width N` | 设置默认屏幕宽度，`N` 必须是受支持分辨率的整数。
-screen-height N | 设置默认屏幕高度，`N` 必须是受支持分辨率的整数。
`-screen-fullscreen N` | 覆盖默认全屏状态，`N` 必须是0或1
-monitor N | 在指定的监视器上运行，`N` 代表从1开始的显示器编号

您可以在[这里](https://docs.unity3d.com/Manual/CommandLineArguments.html)“Unity Standalone Player command line arguments”下找到这些选项，该链接还包含其他的启动选项，但我们不建议您去使用它们。

如果您看到了这里。请确保您通过左上角选择器观察自己配置的是否是[当前支持的Unity版本](../../blank.md)。

请注意，大多数 `Force`（强制）启动选项会导致无法使用VRChat，请不要使用。