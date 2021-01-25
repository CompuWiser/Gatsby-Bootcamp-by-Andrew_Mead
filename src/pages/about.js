import React from "react";
import Layout from '../components/layout';
import { Link } from "gatsby";
import Head from '../components/head';

export default () => (
  <Layout>
    <Head title="About Us"/>
    <h1>About page</h1>
    <h2>
      you can find my details on my <Link to="/contact">contact page</Link>
    </h2>
  </Layout>
);
