module.exports = [
  {
    title: "Overview",
    path: "/overview/",
    collapsable: false,
  },
  {
    title: "Core Concepts",
    path: "/concepts/",
    collapsable: false,
  },
  {
    title: "Developer Guide",
    collapsable: false,
    children: [
      "/guide/basic.md",
      "/guide/ratelimit.md",
      "/guide/quota.md",
    ],
  },
  {
    title: "Reference",
    collapsable: false,
    children: [
      "/reference/api-token.md",
      "/reference/tts.md",
      "/reference/a2v.md",
    ]
  },
  /**
  {
    title: "Examples",
    path: "/examples/",
  },
  */
]
