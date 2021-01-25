import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';
import Head from '../components/head';

export default () => (
  <Layout>
    <Head title="Home"/>
    <h1>Hello</h1>
    <h1>I'm Brian</h1>
    <p>Do you need a developer?</p>
    <Link to="/contact">Contact Me ==></Link>
  </Layout>
);
