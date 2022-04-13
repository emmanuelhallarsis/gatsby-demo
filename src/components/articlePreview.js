import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
 
 
const ArticlePreview = ({ title, path, image, alt, summary }) => (
 <div>
   <Link to={path}>
     <h2>{title}</h2>
   </Link>
   <img src={image} alt={alt} />
   <div dangerouslySetInnerHTML={{__html: summary}} />
 </div>
);
 
ArticlePreview.propTypes = {
 title: PropTypes.string.isRequired,
 path: PropTypes.string.isRequired,
 image: PropTypes.string.isRequired,
 alt: PropTypes.string.isRequired,
 summary: PropTypes.string.isRequired,
};
 
export default ArticlePreview;