const math = require('remark-math')
const katex = require('rehype-katex')
require('dotenv').config()

module.exports = {
  customFields: {
    // Analytics proxy URL
    analyticsProxyUrl: process.env.REACT_APP_AMPLITUDE_PROXY_URL,
    // Determines if staging env
    stagingEnv: process.env.REACT_APP_STAGING,
    // From node
    nodeEnv: process.env.NODE_ENV,
  },
  title: 'ReefSwap',
  tagline: 'Documentation and Guides',
  url: 'https://docs.reefswap.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'ReefSwap', // Usually your GitHub org/user name.
  projectName: 'reefswap-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/twitter_card_bg.jpg',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: '32465e2ab6f7554ff014e64c0d92171c',
      indexName: 'v3-docs',
      appId: 'S0IDD0YGLZ',
    },
    navbar: {
      title: 'ReefSwap Docs',
      logo: {
        alt: 'ReefSwap Unicorn',
        src: 'img/uni_dark_icon.svg',
      },
      items: [
        {
          label: 'GitHub',
          to: 'https://github.com/reef-chain/reefswap-docs/',
          position: 'right',
          className: 'persistent',
        },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'Developers',
          items: [
            {
              label: 'ReefSwap Discord',
              href: 'https://discord.com/invite/3fSsVvCuc4',
            },
            {
              label: 'Feedback',
              href: '#',
            },
            {
              label: 'Bug Bounty',
              href: '#',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'reefswap-v2',
              href: 'https://github.com/reef-chain/reefswap-docs',
            },
            {
              label: 'Deployment addresses',
              href: '/contracts/v2/reference/smart-contracts',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'App',
              href: 'https://app.reefswap.com/',
            },
            {
              label: 'Token Lists',
              href: 'https://app.reefswap.com/pools',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.reef.io/',
            },
            {
              label: 'ReefSwap on X',
              href: 'https://x.com/reefswap',
            },
            {
              label: 'Reef Chain Twitter',
              href: 'https://x.com/reef_chain',
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/reef-chain/reefswap-docs/tree/main/',
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    ['@saucelabs/theme-github-codeblock', {}],
  ],
}
