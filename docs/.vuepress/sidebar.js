module.exports = [
  {
    title: "Overview",
    collapsable: false,
    link: "/apis/overview",
  },
  {
    title: "Usage Guide",
    children: [
      "/apis/guide/basic.md",
      "/apis/guide/ratelimit.md",
      "/apis/guide/quota.md",
    ],
  },
  {
    title: "Reference",
    children: [
      "/apis/reference/tts.md",
      "/apis/reference/a2v.md",
    ]
  },
  {
    title: "Examples",
    collapsable: false,
    link: "/apis/examples",
  },
]
