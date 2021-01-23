import React from "react";
import Layout from '../components/layout';
import { Link } from "gatsby";

export default () => (
  <Layout>
    <h1>About page</h1>
    <h2>
      you can find my details on my <Link to="/contact">contact page</Link>
    </h2>
  </Layout>
);
