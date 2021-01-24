import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "./blog.module.scss";

export default () => {
  /* const data = useStaticQuery(graphql`
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
  `); */

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
            publishedDate
          }
        }
      }
    }
  `);

  const posts = data.allContentfulBlogPost.edges.map((post) => {
    /* const { title, date } = edge.node.frontmatter;
    const slug = edge.node.fields.slug; */
    const { id, title, slug, publishedDate } = post.node;
    return { id, title, date: publishedDate, slug };
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={styles.posts}>
        {posts.map(({ id, title, date, slug }, index) => (
          <li className={styles.post} key={id}>
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
