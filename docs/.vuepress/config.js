module.exports = {
  lang: 'en-US',
  title: 'Surreal Engine Developer Hub',
  description: 'Surreal Engine Developer Hub',
  seviceWorker: true,
  locales: {
    "/": {
      lang: "en-US",
      title: "Surreal Engine Developer",
    },
  },
  plugins: [
    "tabs",
    "@vuepress/back-to-top",
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
  },
}
