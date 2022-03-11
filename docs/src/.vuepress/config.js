const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Anatta Documentation 💯",
  base: "/prismic-adaptor-integration/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ff322e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/favicon.ico",
    repo: "https://github.com/anattadesign/prismic-adaptor-integration",
    editLinks: false,
    docsDir: "docs",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Prismic",
        link: "/prismic/",
        items: [
          {
            text: "Prismic",
            link: "/prismic/",
          },
          {
            text: "Prismic Adapter",
            link: "/prismic-adapter/",
          },
          {
            text: "Prismic Integration",
            link: "/prismic-integration/",
          },
        ],
      },
      {
        text: "Design Token",
        link: "/design-tokens/",
      },
      {
        text: "Developer Guide",
        link: "/developer-guide/",
      },
    ],
    sidebar: {
      "/prismic/": [
        {
          title: "Prismic",
          collapsable: false,
          children: ["", "features"],
        },
      ],
      "/prismic-adapter/": [
        {
          title: "Prismic Adapter",
          collapsable: false,
          children: [
            "",
            "supported-types",
            "prismic-preview",
            "under-the-hood",
          ],
        },
      ],
      "/prismic-integration/": [
        {
          title: "Prismic Integration",
          collapsable: false,
          children: [
            '',
            'prismic-integration',
            'getting-started',
            'custom-types',
            'slices',
            'documents',
            'verify-integration',
            'code-integration'
          ]
        }
      ],
      "/design-tokens/": [
        {
          title: "Design Tokens",
          collapsable: false,
          children: [""],
        },
      ],
      "/developer-guide/": [
        {
          title: "Developer Guide",
          collapsable: false,
          children: ["", "markdown", "development-guide"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
