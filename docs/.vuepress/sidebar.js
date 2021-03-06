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
      "/guide/authentication.md",
      "/guide/tts.md",
      "/guide/a2v.md",
      "/guide/v2v.md",
      "/guide/cg_avatar.md",
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
      "/reference/v2v.md",
      "/reference/cg_avatar.md",
    ]
  },
  {
    title: "Join Discord",
    path: "https://discord.gg/R9URkXm6ZQ"
  }
  /**
  {
    title: "Examples",
    path: "/examples/",
  },
  */
]
