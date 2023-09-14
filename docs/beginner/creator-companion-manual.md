---
title: Creator Companion下载和使用手册
---

![tag VRChat入门包](/img/starter/beginner-header-high.png)  
# Creator Companion下载和使用手册；
![tag vrcd](/img/vrcd-img/tag-vrcd.png)  

### 前言//
![CreatorCompanion](/img/starter/creator-companion/CreatorCompanion.png)  
Creator Companion（以下简称CC）是VRChat（以下简称VRC）官方推出的用于辅助开发者的开发软件，功能齐全，可以做到检测和替换SDK，实时更新等的多个功能，并且有着英文版的官网手册，开发工具，社区资源等等。

从某种意义上来说，在VRC开发过程中CC是必不可少的工具，缺少这一工具可能会让工程开发变得十分困难，我们推荐您尽可能下载CC。

您将在此教程中了解到以下有关CC环境配置的知识，分别是：
**下载和设置CC**（必读）  
**创建工程**（必读）  
**更新工程**（必读）  
**CC默认插件列表**（必读）  

既然您选择了这个文档，我们在接下来的文章中将默认您具备建立国际网络环境的能力，**如果您无法建立国际网络环境，我们建议您阅读《Vrchat SDK装配手册》以顺利装配开发环境。**

### 下载和设置CC//
我们可以在VRChat Creation网站中找到下载CC的入口，网址如下：
https://docs.vrchat.com/docs/setting-up-the-sdk

请点击红框标注的Here安装Creator Companion。

![cc 1](/img/starter/creator-companion/1.png)

在安装好CC后初次打开会看见这一个界面，点击中间的**Show Me Around**即可进入主界面。

![cc 2](/img/starter/creator-companion/2.png)

首先，让我们简单了解一下CC界面（**仅限于VRCD-VRChat入门包涉及的内容/英文界面为例**）。

![cc 3](/img/starter/creator-companion/3.png)

工程文件区域显示您基于CC所创建的所有项目文件，在框中标明了该项目的名字，储存位置，项目类型，以及管理项目的入口。

在CC中总共有三种项目类型，分别是**Avatars（形象）**，**Worlds（世界）**，**Worlds U#（世界 U#）**，项目类型的本质是Unity项目模板预设的不同，详细内容将在下方进行解释。

登录您的VRChat账号，进入设置页面点击更新检测您的版本，请注意，在CC内插件的更新和导入需要依靠科学，请为自己搭建正确的网络环境。

![cc 4](/img/starter/creator-companion/4.png)

### 创建工程//
回到主界面，在左侧栏中选择Projects，之后点击右上角的Create New Project.

![cc 5](/img/starter/creator-companion/5.png)

在Select template下，有三个Unity工程模板选项：
+ **World Project是为制作世界提供的模板。**
+ **Avatar Project是为制作化身提供的模板。**
+ **World Project with UdonSharp是为制作以U#为基础建立的世界提供的模板。**  
您可以根据需求点击任意一个来创建所需要的Unity环境，需要注意辨别的是，再点一次即为取消选择，请仔细确认自己是否选择相应的模板。

接下来便是在Project Name里为自己的工程命名，之后在Project Location选择您打算储存工程的地方，这边建议设置为和Unity Hub设置的工程储存位置一致的地方。

点击Create Project按钮进行工程创建，在短暂的等待后CC会为您创建工程并且自动安装相应的插件。

![cc 6](/img/starter/creator-companion/6.png)

如果CC显示工程创建失败或您没有看见有任何工程被创建，您可以试着检查Unity Hub的许可证是否过期。

创建好项目以后，您将看到如下的界面，在这里您将看到许多来自于社区与VRC官方的插件包，在大部分情况下保持默认设置足够您进行开发活动。
在设置好后请点击右上角的Open Project打开项目（以World Project为例）。

![cc 7](/img/starter/creator-companion/7.png)

如果您的项目是通过Unity Hub创建的，请点击Create New Project旁的下箭头展开，点击Add Existing Project，选择储存项目的文件夹。

![cc 8](/img/starter/creator-companion/8.png)

### 更新工程//
您需要在制作项目时定期更新组件包，我们需要进入指定的管理项目页面去更新组件包。
如果您的项目已经未更新许久，在您通过VCC打开项目时，VCC会自动帮您更新项目。

![cc 9](/img/starter/creator-companion/9.png)

被标有绿色向上箭头的包便是需要更新的组件包，单击便可开始更新。

![cc 10](/img/starter/creator-companion/10.png)

另外，由于VCC存在的各种不尽人意的网络连接与逻辑问题，我们建议您时常备份项目。

### CC默认插件列表//

#### Avatar Project-模型项目菜单-

VRChat Package Resolver Tool  
VRChat SDK - Base  
VRChat SDK - Avatars  
Gesture Manager  
Avatars 3.0 Manager  
Av3Emulator  
EasyQuestSwitch  
VRWorld Toolkit  
AudioLink  

#### World Project with UdonSharp-带Udon的世界项目菜单-

VRChat Package Resolver Tool  
VRChat SDK - Base  
VRChat SDK - Worlds  
VRChat Client Simulator  
UdonSharp  
Av3Emulator  
EasyQuestSwitch  
VRWorld Toolkit  
AudioLink  

![tag Creator Companion下载和使用手册](/img/starter/creator-companion/creator-companion-manual.png)