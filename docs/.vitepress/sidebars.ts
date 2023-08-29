import { type DefaultTheme } from 'vitepress'

export function beginnerSidebar(): DefaultTheme.SidebarItem[] {
  return [
    { text: '新手引导', link: '/beginner/' },
    { text: '萌新入坑指南', link: '/beginner/getting-started' },
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
      text: '化身',
      link: '/official-creator-docs/avatars/',
      collapsed: true,
      items: [
        { text: '制作您的第一个化身', link: '/official-creator-docs/avatars/creating-your-first-avatar.md' }
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
