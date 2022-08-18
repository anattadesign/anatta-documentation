const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Anatta Documentation",
  base: "/anatta-documentation/",
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
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["script",{src: "/scroll-fix.js", type: "text/javascript"}] 
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/favicon.ico",
    repo: "https://github.com/anattadesign/anatta-documentation",
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: "docs/src",
    lastUpdated: true,
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
            text: "Prismic 1.0",
            link: "/Prismic-1.0/",
          },
          {
            text: "Prismic 2.0",
            link: "/Prismic-2.0/",
          },
          {
            text: "Common Terms and Code Snippets",
            link: "/common-terms-and-code-snippets/",
          },
        ],
      },
      {
        text: "Shopify Shell",
        link: "/shopify-shell/",
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
      "/prismic-1.0-integration/": [
        {
          title: "Prismic Integration",
          collapsable: false,
          children: [
            '',
            'getting-started',
            'verify-integration',
            'code-integration',
            'common-adapter-errors',
          ]
        }
      ],
      "/prismic-1.0/": [
        {
          title: "Prismic 1.0",
          collapsable: false
        }
      ],
      "/prismic-2.0/": [
        {
          title: "Prismic 2.0",
          collapsable: false
        }
      ],
      "/prismic-2.0-integration/": [
        {
          title: "Prismic 2.0 Integration",
          collapsable: false,
          children: [
            '',
            'app-integration',
            'code-integration',
            'custom-types'
          ]
        }
      ],
      "/common-terms-and-code-snippets/": [
        {
          title: "Common Terms and Code Snippets",
          collapsable: false,
          children: [
            '',
            'working-with-built-in-elements',
            'code-snippets',
          ]
        }
      ],
      "/shopify-shell/": [
        {
          title: "Shopify Shell",
          collapsable: false,
          children: [
            '',
            'folder-structure',
            'code-structure',
            'features',
            'commands',
            'how-does-it-work'
          ]
        }
      ],
      "/vue-3/": [
        {
          title: "Shopify Shell - Vue 3",
          collapsable: false,
          children: [
            '',
            'required-packages',
            'config-files'
          ]
        }
      ],
      "/vue-2/": [
        {
          title: "Shopify Shell - Vue 2",
          collapsable: false,
          children: [
            '',
            'required-packages',
            'config-files'
          ]
        }
      ],
      "/design-tokens/": [
        {
          title: "Design Tokens",
          collapsable: false,
          children: [
            '',
            'typography',
            'colors',
            'animations',
            'helper-mixins',
          ],
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
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", ['vuepress-plugin-code-copy', {align: 'top', color: '#fff'}]]
};


