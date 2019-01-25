module.exports = {
  siteMetadata: {
    title: `Yueying Catherine Tang`,
    description: `Hi, nice to meet you. I'm Catherine, a UX designer, Product Manager, and Web Developer. Check out my portfolio to know more.`,
    author: `Yueying Tang`,
    email: `yueying.catherine@gmail.com`,
    domain: `http://yueyingcatherine.com/`,
    repository: 'https://github.com/DeveloperCatherine/DeveloperCatherine.github.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yueying Catherine Tang's Porfolio`,
        short_name: `Catherine`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FE840E`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-react-grid-system`, // This is a local plugin that's under experiement
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
