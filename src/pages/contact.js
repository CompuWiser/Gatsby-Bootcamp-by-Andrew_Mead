import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Head from '../components/head';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phone
          email
          website
        }
      }
    }
  `);

  const { phone, email, website } = data.site.siteMetadata;
  return (
    <Layout>
      <Head title="Contact Us"/>
      <h1>Contact Page</h1>
      <h2>Phone {phone}</h2>
      <h2>
        email{" "}
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </a>
      </h2>
      <a href={website} target="_blank" rel="noreferrer">
        {website.replace("https://", "www.")}
      </a>
    </Layout>
  );
};
