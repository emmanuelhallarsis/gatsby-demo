import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
 
import Layout from '../components/layout';
 
const Article = ({ data }) => {
 const post = data.nodeArticle;
 
 return (
   <Layout>
     <h1>{post.title}</h1>
     <img 
        src={data.nodeArticle.relationships.field_media_image.relationships.field_media_image.localFile.publicURL}
        alt={data.nodeArticle.relationships.field_media_image.field_media_image.alt}
      />
 
     <div
       dangerouslySetInnerHTML={{ __html: post.body.processed }}
     />
   </Layout>
 );
};
 
Article.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const query = graphql`
 query($ArticleId: String!) {
   nodeArticle(id: { eq: $ArticleId }) {
      id
      title
      body {
        processed
      }
      relationships {
        field_media_image {
          field_media_image {
            alt
          }
          relationships {
            field_media_image {
              localFile {
                publicURL
              }
            }
          }
        }
      }
   }
 }
`;
 
export default Article;