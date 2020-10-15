module.exports = {
  author: "@aleksa-stojsic",
  siteTitle: "Aleksa Stojsic | Web Dev",
  siteShortTitle: "as.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Hi there! I'm Aleksa Stojsic, a Computer Science Student and Web Developer, based in Belgrade.",
  siteUrl: "https://google.com",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

  splashScreen: true, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  // mediumRssFeed:
  //   "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
  // shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/aleksa-stojsic/",
    },
    {
      name: "Medium",
      url: "https://medium.com/@stojsic.aleksa",
    },
    {
      name: "Github",
      url: "https://github.com/aleksa-stojsic/aleksa-stojsic.github.io",
    },
    // {
    //   name: "Behance",
    //   url: "https://www.behance.net/konstanmnster",
    // },
  ],

  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Interests/Skills",
        url: "/#interests",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
