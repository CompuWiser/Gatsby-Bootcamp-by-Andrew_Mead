import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";
import Footer from "./footer";

import "../styles/index.scss";
import styles from "./layout.module.scss";

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const { title, author } = data.site.siteMetadata;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header author={author} title={title} />
        {children}
      </div>
      <Footer author={author} />
    </div>
  );
};
