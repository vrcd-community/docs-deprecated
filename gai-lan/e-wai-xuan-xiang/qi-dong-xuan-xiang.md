# 启动选项

{% hint style="info" %}
<mark style="color:blue;">**高级设置**</mark>

这些选项将会更加高级，并为创作者们调试他们的问题而设计。
{% endhint %}

有几种启动选项在VRChat里是可用的。

如果您使用的是Steam平台，那么您可以通过进入VRChat的属性界面来设置这些选项。您可以在您的游戏库中右键VRChat，点击属性>通用>启动选项，然后将您想要的启动选项写入启动选项输入框内。

如果您使用的是Oculus PC，您必须为VRChat应用程序创建一个快捷方式，然后右键快捷方式、点击属性，在“目标”栏位中的双引号外部添加这些启动选项参数。在您打开Oculus Home之后，您必须通过点击刚刚创建的快捷方式图标打开VRChat才能让启动选项生效。Oculus启动器并不原生支持设置启动选项。

Oculus Quest 不支持以任何方式设置启动选项。

| 启动选项                          | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--no-vr`                     | 强制使用桌面模式                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--profile=X`                 | 使用不同的用户档案启动，X是一个数字，它默认为0。                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--fps=X`                     | 将帧率限制固定为X。在桌面端，它默认为90。在虚拟现实模式下，默认的帧率限制将取决于头显最高支持的帧率。                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--enable-debug-gui`          | 启用调试菜单快捷键，在[键盘与鼠标](../kong-zhi/jian-pan-yu-shu-biao.md)文档中查看对应的快捷键。                                                                                                                                                                                                                                                                                                                                                                                          |
| `--enable-sdk-log-levels`     | <p>启用大量的额外应用日志。</p><p></p><p><strong>警告</strong>：这将会让您的日志文件变得<strong>非常</strong>大！<br><br>使用这个选项可能会因为日益增大的日志文件而降低您的性能，不要将它持续开启！</p>                                                                                                                                                                                                                                                                                                                          |
| `--enable-udon-debug-logging` | <p>在客户端中启用 Udon 堆内存和堆栈转储。通常只在编辑器中启用。<br><br><strong>警告</strong>：这将会让你的日志文件在存在问题的Udon世界中变得非常大！<br><br>使用这个选项可能会因为日益增大的日志文件而降低您的性能，不要将它持续开启！</p>                                                                                                                                                                                                                                                                                                               |
| `--midi=deviceName`           | 强制 MIDI 驱动搜索包含指定`deviceName`（设备名称）的已连接 MIDI 设备,支持部分匹配和忽略大小写。                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--watch-worlds`              | <p>监视 VRChat SDK 构建世界的位置，并自动加入任何用VRChat SDK创建的新的本地世界。<br>查看<a href="https://creators.vrchat.com/worlds/udon/using-build-test/#build--relaunch">创建与测试</a>（翻译中）</p>                                                                                                                                                                                                                                                                                            |
| `--watch-avatars`             | 监视 VRChat SDK 构建角色的位置。如果正在使用的测试角色进行了更新，将会自动切换为更新后的版本。                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--osc=inPort:outIP:outPort`  | <p>自定义输入和输出 OSC 信息的网络设置。<br>支持一下三种参数：<br>- inPort: VRChat客户端监听OSC信息输入的端口。<br>- outIP: OSC信息将会传到的IP地址。<br>- outPort: 传出的OSC消息将会被接收的端口。</p>                                                                                                                                                                                                                                                                                                                    |
| `--affinity=<ARG>`            | <p>这个启动参数可以设置VRChat的线程亲和性，选择分配给VRChat的线程。</p><p><code>&#x3C;ARG></code>是一个位掩码,指示应该使用哪些线程。例如，<code>FFFF</code>选择前16个线程，<code>FF</code>选择前8个线程，等等。<br><br><strong>不要在非AMD CPU上使用此功能，它仅解决AMD CPU的跨CCX延迟问题。</strong>如果误用,会导致严重性能问题。<br><br>大多数用户不需要使用此功能。用户需要自行判断是否需要使用。<br><br>存在可以帮助您计算位掩码的<a href="https://bitsum.com/tools/cpu-affinity-calculator/">实用程序</a>。<br><br>这个启动参数最适用于可以从限制进程到某些线程以减少内部延迟中受益的AMD CPU。<br><br>这是一个高级功能。如果您不确定是否需要使用到它，那么最好不要使用!</p> |

## AMD的跨CCX延迟和核心亲和性

{% hint style="info" %}
感谢VRChat社区中的"Fallen Ninja"提供的这些信息！

请注意以下内容来自社区成员，VRChat团队还没有直接验证。
{% endhint %}

如果你正在使用多CCX的AMD CPU(大多数1000/2000/3000系列和一部分5000/7000系列)，可以使用--affinity启动参数限制仅使用第一个CCX以减少核心间的通信延迟并获得不错的帧率提升。

可以在[这里](https://en.wikipedia.org/wiki/List\_of\_AMD\_Ryzen\_processors)查看CPU的“核心配置”。如果x前的数字不是1（CCX数量），你的设置可能会从亲和性限制中受益。注意x后的数字（每个CCX中的核心数量）并在下面查找理想的亲和性字符串：

2: --affinity=F (我建议换一个更好的CPU，这个线程数设置亲和性可能帮助不大，因为仅限制两个物理核芯)&#x20;

3: --affinity=3F&#x20;

4: --affinity=FF&#x20;

6: --affinity=FFF&#x20;

8: --affinity=FFFF

在低端机型上还有一些**边缘案例**的例外(此外，假设您没有关闭SMT...如果你问了，那就表示您没有)，但这些例外最坏的情况便是使这种解决方案效果变差，而并不是有害的。

## 分辨率和屏幕的选择

在Unity 2019版本中移除了通过按住shift/alt的同时启动应用时弹出分辨率和画质选项框的功能，但您可以使用启动参数替代大部分功能。

<table><thead><tr><th>启动选项</th><th>描述</th><th data-hidden>描述</th><th data-hidden></th></tr></thead><tbody><tr><td><code>-screen-width N</code></td><td>设置默认屏幕宽度，<code>N</code>必须是受支持分辨率的整数。</td><td></td><td></td></tr><tr><td><code>-screen-height N</code></td><td>设置默认屏幕高度，<code>N</code>必须是受支持分辨率的整数。</td><td></td><td></td></tr><tr><td><code>-screen-fullscreen N</code></td><td>覆盖默认全屏状态，<code>N</code>必须是0或1</td><td></td><td></td></tr><tr><td><code>-screen-quality</code></td><td><strong>没有作用！</strong>列出来只是为了避免您尝试了之后产生了生效与否的困惑。</td><td></td><td></td></tr><tr><td><code>-monitor N</code></td><td>在指定的监视器上运行，<code>N</code>代表从1开始的显示器编号</td><td></td><td></td></tr></tbody></table>

您可以在[这里](https://docs.unity3d.com/Manual/CommandLineArguments.html)“Unity Standalone Player command line arguments”下找到这些选项。

注意，大多数`Force`（强制）启动选项会导致无法使用VRChat，请不要使用。

您需要使用左上角的选择器来选择正确的Unity版本。参考[当前支持的Unity版本](https://creators.vrchat.com/sdk/current-unity-version/)页面以查看VRChat当前使用的版本。
