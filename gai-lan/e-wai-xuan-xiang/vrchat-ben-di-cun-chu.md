# VRChat 本地存储

VRChat在本地存储了许多不同的数据。这个非详尽的列表展示了VRChat存储数据的位置，以及这些数据的作用。

## AppData LocalLow

`%UserProfile%\AppData\LocalLow\VRChat\VRChat\`

| 文件夹/文件 名称                 | 目的                                             | 注释                                                          |
| ------------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `output_log_HH-MM-SS.txt` | <p>包含应用程序运行时记录的信息。</p><p>还包含Udon调试输出。 </p>     | <p>时间戳表示客户端启动时的时间。<br>如果这些文件存在了超过24小时，VRChat启动时会自动将其删除。</p> |
| `config.json`             | 配置文件，包含应用程序设置。                                 | 查看[配置文件](pei-zhi-wen-jian.md)文档以了解详细内容。                     |
| `Cache-WindowsPlayer\`    | <p>资源下载缓存。</p><p>下载的角色、世界、图片和其他资源存储在这里。</p>    | 可以通过[配置文件](pei-zhi-wen-jian.md)重新配置存储位置，以便将文件夹移到更大容量的磁盘上。   |
| `Avatars\`                | 本地测试角色。使用SDK“构建和测试（Build\&Test）”时,角色文件将会存储在这里。 |                                                             |
| `OSC\`                    | OSC设置存储。存储使用OSC in VRChat所需的数据。                | 即使你不使用OSC,这里也可能存在数据。                                        |
| `LocalAvatarData\`        | 角色参数存储。存储已使用过的角色的参数。                           |                                                             |
| `Tools\`                  | 额外应用程序。存储运行VRChat需要的其他应用程序。                    | 目前,这里只包含视频URL解析器。                                           |
| `LocalPlayerModerations`  | 本地存储的玩家调整。存储对其他用户实行的“玩家调整”操作。                  | <p>目前,仅存储“显示”和“隐藏角色”操作。<br>参见下文以了解文件格式。</p>                 |

### LocalPlayerModerations 文件格式

LocalPlayerModerations File Format

{% code title="LocalPlayerModerations文件格式" %}
```csharp
/*
*  Storage line format:
*   <key><padding><value><newline>
*    |    |        |      |
*    |    |        |      +-> "\r\n"
*    |    |        +--------> 3 bytes, human-readable decimal, 0-prefixed (e.g. 127, 004, 012)
*    |    +-----------------> ' ' (padded by spaces up to 64)
*    +----------------------> UTF-8 encoded key
*/
```
{% endcode %}

根据当前情况，value字段有两个可能的值。004表示隐藏角色，005表示显示角色。

## 临时文件

VRChat及其依赖项可能会在设备上的各种“temp”文件夹中存储临时数据。以下的列表并不详尽。

| 文件夹/文件 名称              | 目的          | 注释                                                                                             |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `%TEMP%\VRChat\VRChat` | 分析文件临时存储在此。 | <p>VRChat为开发目的收集分析信息。<br>请查看我们的<a href="https://hello.vrchat.com/privacy">隐私政策</a>以获取更多信息。</p> |

## Windows注册表

VRChat通过[Unity PlayerPrefs API](https://docs.unity3d.com/2019.4/Documentation/ScriptReference/PlayerPrefs.html)在`HKCU\Software\VRChat\vrchat`中存储各种玩家首选项。
