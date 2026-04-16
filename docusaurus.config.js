// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leaving School Wiki',
  tagline: 'A reference for everything we cover on the course',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://wiki.leaving.school',
  baseUrl: '/',

  // Not using GitHub Pages — deployed via Cloudflare Pages
  organizationName: 'leaving-school', // placeholder
  projectName: 'wiki',                // placeholder

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // Remove editUrl until a GitHub repo is connected
          // editUrl: 'https://github.com/your-org/wiki/tree/main/',
        },
        blog: false, // Blog disabled — this is a reference/glossary site
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Leaving School Wiki',
        logo: {
          alt: 'Leaving School Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Reference',
          },
          // GitHub link placeholder — add once repo is created
          // {
          //   href: 'https://github.com/your-org/wiki',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Reference',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leaving School. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
