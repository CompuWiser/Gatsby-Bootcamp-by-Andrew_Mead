import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
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

  const posts = data.allMarkdownRemark.edges.map(
    (edge) => edge.node.frontmatter
  );

  return (
    <Layout>
      <ol>
        {posts.map(({ title, date }, index) => (
          <li key={index}>
            <p>{title}</p>
            <p>{date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};
