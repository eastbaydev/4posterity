const {path} = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'East Bay Development',
  description: 'A brief history of East Bay Development, the progenitor of Kalamuna, Lando and Permission Granted.',
  base: '/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    alias: {
      '@theme/Home.vue': path.resolve(__dirname, '..', 'components', 'Home.vue'),
    },
    logo: '/images/icon.svg',
    docsDir: '',
    docsBranch: 'main',
    repo: 'eastbaydev/4posterity',
    sidebarHeader: false,
    versionsPage: false,
    contributorsPage: false,
    sidebar: [],
  },
};
