import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "./blog.module.scss";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  const posts = data.allContentfulBlogPost.edges.map((post) => {
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
