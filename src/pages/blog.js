import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges.map((edge) => {
    const { title, date } = edge.node.frontmatter;
    const slug = edge.node.fields.slug;
    return { title, date, slug };
  });

  return (
    <Layout>
      <ol>
        {posts.map(({ title, date, slug }, index) => (
          <li key={index}>
            <Link to={`./${slug}`}>{title}</Link>
            <p>{date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};
