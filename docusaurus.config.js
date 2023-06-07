// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zfm.digital Documentation',
  tagline: 'zfm codes',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://zfm-alyssonteixeira.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PublicDocuments/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zfm-alyssonteixeira', // Usually your GitHub org/user name.
  projectName: 'PublicDocuments', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'zfm logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'generalSidebar',
            position: 'left',
            label: 'General',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'frontendSidebar',
            position: 'left',
            label: 'frontend',
          },
          {
            href: 'https://github.com/zfm-alyssonteixeira/PublicDocuments',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // {
              //   label: 'General',
              //   to: '/docs/general',
              // },
              // {
              //   label: 'API',
              //   to: '/docs/api',
              // },
              // {
              //   label: 'Frontend',
              //   to: '/docs/frontend',
              // },
            ],
          },
          {
            title: 'zfm-Talentboard',
            items: [
              {
                label: 'Homepage',
                href: 'https://zfm-talentboard.de',
              },
              {
                label: 'Status Page',
                href: 'https://status.zfm-talentboard.de',
              },
              {
                label: 'Production (zfm Tenant)',
                href: 'https://zfm.zfm-talentboard.app',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zfm-alyssonteixeira/PublicDocuments',
              },
              {
                label: 'Slack',
                href: 'https://zfm-digital.slack.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} zfm Executive Consulting GmbH - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
