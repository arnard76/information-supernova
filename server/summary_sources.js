export let sources = [
  {
    url: "https://www.stuff.co.nz/",
    contentRoles: [{ name: "summary", domSelectorQuery: "app-headline" }],
  },
  {
    url: "https://web.dev/blog/",
    contentRoles: [{ name: "summary", domSelectorQuery: ".card__heading" }],
  },
];
