const config = require("./data/SiteConfig");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `You Gotta Love Frontend Conference`,
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
  ],
}
