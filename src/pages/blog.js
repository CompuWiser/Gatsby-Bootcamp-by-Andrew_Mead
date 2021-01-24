import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "./blog.module.scss";

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
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {posts.map(({ title, date, slug }, index) => (
          <li className={styles.post} key={index}>
            <Link to={`./${slug}`}>
              <h2>{title}</h2>
              <p>{date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};
