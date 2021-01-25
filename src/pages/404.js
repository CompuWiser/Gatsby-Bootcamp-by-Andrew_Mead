import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from '../components/head';

export default () => (
  <Layout>
    <Head title="404"/>
    <h1>oopss... not found!</h1>
    <h2>
      Go to <Link to="/">Home Page</Link>
    </h2>
  </Layout>
);
