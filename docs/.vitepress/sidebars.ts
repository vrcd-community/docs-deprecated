import { type DefaultTheme } from 'vitepress'

export function beginnerSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '新手引导', link: '/beginner/' },
    { text: '萌新入坑指南', link: '/beginner/getting-started' },
    { text: 'Creator Companion下载和使用手册', link: '/beginner/creator-companion-manual' },
    {
      text: '人话说明书', link: '/beginner/worlds/', collapsed: true, items: [
        { text: '世界', link: '/beginner/worlds/index' }
      ]
    },
    {
      text: '基础组件包', link: '/beginner/worlds/', collapsed: true, items: [
        { text: '世界', link: '/beginner/worlds/index' }
      ]
    },
  ]
}

export function advanceSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '进阶', link: '/advance/' }
  ]
}

export function contributorSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '欢迎', link: '/contributor/' },
    { text: '术语对照表', link: '/contributor/termbank.md' }
  ]
}

export function officialCreatorDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '欢迎', link: '/official-creator-docs/getting-started' },
    {
      text: '安装 SDK',
      link: '/official-creator-docs/sdk/',
      collapsed: true,
      items: [
        { text: '当前支持的 Unity 版本', link: '/official-creator-docs/sdk/current-unity-version' },
        { text: '迁移到更新的 Unity 大版本', link: '/official-creator-docs/sdk/migrating-to-a-newer-minor-unity-version' },
        { text: 'SDK 疑难解答', link: '/official-creator-docs/sdk/sdk-troubleshooting' },
        { text: '升级 SDK', link: '/official-creator-docs/sdk/updating-the-sdk' }
      ]
    },
    {
      text: '化身',
      link: '/official-creator-docs/avatars/',
      collapsed: true,
      items: [
        { text: '制作您的第一个化身', link: '/official-creator-docs/avatars/creating-your-first-avatar' }
      ]
    },
    {
      text: '世界',
      link: '/official-creator-docs/worlds/',
      collapsed: true,
      items: [
        { text: '制作您的第一个世界', link: '/official-creator-docs/worlds/creating-your-first-world' },
        {
          text: 'Udon',
          link: '/official-creator-docs/worlds/udon/',
          collapsed: true,
          items: [
            {
              text: '网络',
              link: '/official-creator-docs/worlds/udon/networking/',
              collapsed: true,
              items: [
              ]
            },
          ]
        },
      ]
    },
    {
      text: '平台特异',
      link: '/official-creator-docs/platforms/',
      collapsed: true,
      items: [
        {
          text: '安卓',
          collapsed: true, link: '/official-creator-docs/platforms/android/',
          items: [
            {
              text: '为 Unity 设置 Quest 内容开发环境',
              link: '/official-creator-docs/platforms/android/'
            }
          ]
        }
      ]
    }
  ]
}

export function theVRChatDocumentationHubSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '概览', link: '' ,
      items: [
        { text: '欢迎来到VRChat', link: '/docs.vrchat.com/OVERVIEW/welcome-to-vrchat.md' },
        { text: '准备开始', link: '/docs.vrchat.com/OVERVIEW/getting-started.md' },
        { text: '常见问题', link: '/docs.vrchat.com/OVERVIEW/frequently-asked-questions.md' },
        { text: '控制', link: '/docs.vrchat.com/OVERVIEW/contorls/README.md',
          items: [
            {
              text: 'HTC Vive 手柄', link: '/docs.vrchat.com/OVERVIEW/contorls/vive.md',
              text: 'Oculus Touch', link: '/docs.vrchat.com/OVERVIEW/contorls/touch.md',
              text: 'Valve Index 控制器', link: '/docs.vrchat.com/OVERVIEW/contorls/valve-index.md',
              text: '键盘与鼠标', link: '/docs.vrchat.com/OVERVIEW/keyboard-and-mouse.md',
              text: '手柄控制器', link: '/docs.vrchat.com/OVERVIEW/contorls/gamepad.md',
              text: '行动菜单', link: '/docs.vrchat.com/OVERVIEW/contorls/action-menu.md',
            }
          ]
        }
        { text: '额外选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/README.md',
          items: [
            {
              text: '手势切换', link: '/docs.vrchat.com/OVERVIEW/additional-options/gesture-toggle.md',
              text: '启动选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/launch-options.md',
              text: '配置文件', link: '/docs.vrchat.com/OVERVIEW/additional-options/configuration-file.md',
              text: 'VRChat图像性能选项', link: '/docs.vrchat.com/OVERVIEW/additional-options/vrchat-configuration-window.md',
              text: 'VRChat 本地存储', link: '/docs.vrchat.com/OVERVIEW/additional-options/local-vrchat-storage.md',
            }
          ]
        }
      ]
    }
    { text: '导航', link: '' ,
      items: [
        { text: '两步身份验证', link: '/docs.vrchat.com/GUIDES/setup-2fa.md' },
        { text: '提出本地化修改建议', link: '/docs.vrchat.com/GUIDES/suggesting-localization-changes.md' },
        { text: '调整您的形象身高', link: '/docs.vrchat.com/GUIDES/adjusting-your-avatars-height.md' },
      ]
    }
  ]
}
