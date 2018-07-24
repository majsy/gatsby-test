const postcssImport = require('postcss-import');
const postcssVars = require('postcss-simple-vars');

module.exports = {
  siteMetadata: {
    title: 'Gatsby test',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          postcssImport({
            path: 'src/'
          }),
          postcssVars()
        ],
        precision: 8
      }
    },
  ],
}