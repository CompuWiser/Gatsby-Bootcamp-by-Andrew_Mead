import React from "react";
import Header from './header';
import Footer from './footer';

import '../styles/index.scss';
import styles from './layout.module.scss'

export default ({children}) => (
  <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
);
