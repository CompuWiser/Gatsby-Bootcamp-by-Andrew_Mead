/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Bootcamp",
    author: "CompuWiser",
    phone: "+963 956 151613",
    email: "compuwiser@outlook.com",
    website: "https://compuwiser.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-remark",
    /* {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    }, */
  ],
};
