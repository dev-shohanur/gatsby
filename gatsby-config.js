

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-transformer-remark",
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `jobs`,
        // Path to the directory
        path: `${__dirname}/src/jobs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `freelancersInfo`,
        // Path to the directory
        path: `${__dirname}/src/freelancersInfo/`,
      },
    },
  ],
  siteMetadata: {
    title: "Gatsby",
    description: "This is Dev Portfolio website",
    copyright: "This website is copyright 2023 Gatsby",
    contact: "md.shohanur192@gmail.com"
  },
};
