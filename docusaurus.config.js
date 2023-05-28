// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crowd Cloud docs',
  tagline: 'Crowd Cloud - Cloud made free',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://docs.cuest.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cuest.io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          breadcrumbs: true,
          routeBasePath: '/',
          editUrl:
            'https://github.com/Cuest-IO',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Cuest Logo',
          src: 'img/horizontal.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/Cuest-IO',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://console.cuest.io',
            position: 'right',
            label: 'Sign Up | Login',
          },
          {
            href: 'https://cuest.io',
            position: 'right',
            label: 'Book a Demo',
            //className: 'button button--primary button--lg'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@cuestio',
              },
              {
                label: 'Slack',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cuest.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
