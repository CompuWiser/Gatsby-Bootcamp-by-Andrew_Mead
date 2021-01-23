import React from "react";
import styles from "./footer.module.scss";

export default ({ author }) => (
  <footer className={styles.footer}>
    <p>Created by {author}, © using Gatsby®</p>
  </footer>
);
