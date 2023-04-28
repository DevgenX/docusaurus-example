// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sebastian Gonzales",
  favicon: "img/favicon.ico",
  url: "https://yourwebsite.com",
  baseUrl: "/",
  organizationName: "Seb",
  projectName: "https://github.com/DevgenX/docusaurus-example",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          path: "whitepaper",
        },
        blog: {
          path: "blog",
          routeBasePath: "blog",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "govern",
      content: "Just a random announcement 🏛️",
      backgroundColor: "#5991c7",
      textColor: "#ffffff",
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: true,
      title: "Sebastian Gonzales",
      logo: {
        alt: "syb-logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "/intro",
          label: "Whitepaper",
          position: "left",
        },
        { to: "/blog", label: "Blogs", position: "left" },
        // { to: "/projects", label: "Projects", position: "left" },
        {
          href: "https://github.com/DevgenX",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/sebgonzales/",
          label: "LinkedIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Official Links",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
    },
    role: "Software Engineer",
  },
};

module.exports = config;
