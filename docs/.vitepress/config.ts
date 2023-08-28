import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VRCD",
  description: "Another VitePress Site",
  cleanUrls: true,
  lang: 'zh-CN',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vitejs/docs-cn/edit/main/:path',
      text: '为此页提供修改建议',
    },

    outline: {
      label: '本页目录'
    },

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      },
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存到搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索供应商'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为这个查询应该有结果？',
            reportMissingResultsLinkText: '向我们反馈'
          }
        }
      },
    },

    nav: [
      { text: '入门', link: '/beginner/' },
      { text: '进阶', link: '/advance/' },
      { text: '官方创作者文档翻译', link: '/official-creator-docs/getting-started' }
    ],

    sidebar: {
      "/beginner": [
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
      ],
      "/advance": [
        { text: '进阶', link: '/advance/' }
      ],
      "/official-creator-docs": [
        { text: '欢迎', link: '/official-creator-docs/getting-started' },
        {
          text: '虚拟形象',
          link: '/official-creator-docs/avatars/',
          collapsed: true,
          items: [
            { text: '制作您的第一个虚拟形象', link: '/official-creator-docs/avatars/creating-your-first-avatar.md' }
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
