module.exports = {
  base: '/docs/',
  lang: 'en-US',
  title: 'Surreal Engine API [Beta]',
  description: 'Surreal Engine API [Beta]',
  seviceWorker: true,
  locales: {
    "/": {
      lang: "en-US",
      title: "Surreal Engine API [Beta]",
    },
  },
  plugins: [
    'tabs',
    ["@vuepress/last-updated", {
      transformer: (timestamp, lang) => {
        const dayjs = require("dayjs")
        dayjs.locale(lang)
        return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")
      },
    }]
  ],
  markdown: {
    lineNumbers: false,
  },

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: "https://github.com/surreal-ai/docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    docsDir: "docs",
    sidebar: require("./sidebar.js"),
    displayAllHeaders: true,
    prevLink: true,
    nextLink: true,
  },
}
