module.exports = {
  siteMetadata: {
    title: `Mike Sherov`,
    author: `Mike Sherov`,
    description: `Mike Sherov's personal website and blog`,
    siteUrl: `https://mike.sherov.com/`,
    social: {
      devto: `mikesherov`,
      twitter: `mikesherov`,
      github: `mikesherov`,
      slides: `mikesherov`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-132674236-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike Sherov`,
        short_name: `mikesherov`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "Egghead",
        url: `https://egghead.io/api/v1/instructors/mike-sherov/lessons`,
        method: "get",
        name: `lessons`,
        verboseOutput: true,
        enableDevRefresh: true,
        refreshId: `id`,
      },
    },
  ],
}
