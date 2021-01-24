import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishedDate
    }
  }
`;

const Blog = (props) => {
  const { id, title, slug, publishedDate: date } = props.data.contentfulBlogPost;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
    </Layout>
  );
};

export default Blog;
