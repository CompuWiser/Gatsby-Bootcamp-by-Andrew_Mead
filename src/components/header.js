import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";

export default () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Shanioob Shop</h1>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
