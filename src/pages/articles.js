import React from "react";
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
 
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticlePreview from "../components/articlePreview";
 
const Articles = ({ data }) => {
 const articles = data.allNodeArticle.nodes;
 
 return (
   <Layout>
     <SEO title="Articles" />
     <h1>Articles</h1>
     {articles.map(article => (
       <ArticlePreview
         key={article.id}
         title={article.title}
         path={article.path.alias}
         image={article.relationships.field_media_image.relationships.field_media_image.localFile.publicURL}
         alt={article.relationships.field_media_image.field_media_image.alt}
         summary={article.body.processed.substring(0, 300)}
       />
     ))}
   </Layout>
 );
};
 
Articles.propTypes = {
 data: PropTypes.object.isRequired,
};
 
export const data = graphql`
 {
   allNodeArticle(
     sort: {fields: created, order: ASC}
     limit: 100
   ) {
      nodes {
        id
        title
        created
        body {
          processed
        }
        path {
          alias
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
 }
`;
 
export default Articles;