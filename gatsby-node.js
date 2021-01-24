const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const blogPosts = res.data.allMarkdownRemark.edges;

  blogPosts.forEach((edge) => {
    const slug = edge.node.fields.slug;

    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: { slug },
    });
  });
};