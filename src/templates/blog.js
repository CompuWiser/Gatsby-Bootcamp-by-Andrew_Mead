import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

const Blog = (props) => {
  const images = props.data.contentfulBlogPost.body.references.reduce(
    (acc, image) => {
      const { contentful_id, title } = image;
      const { url } = image.file;
      const { width, height } = image.file.details.image;
      acc[contentful_id] = { title, url, width, height };
      return acc;
    },
    {}
  );

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const contentful_id = node.data.target.sys.id;
        const { title, url, width, height } = images[contentful_id];
        return <img src={url} alt={title} width={width} height={height} />;
      },
    },
  };

  const { title, publishedDate, body } = props.data.contentfulBlogPost;
  const bodyInJSON = JSON.parse(body.raw);
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(bodyInJSON, options)}
    </Layout>
  );
};

export default Blog;
