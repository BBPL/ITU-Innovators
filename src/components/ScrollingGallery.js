import React from "react";
import PropTypes from "prop-types";
// #d8e8ea
const ScrollingGallery = ({ images }) => (
  <div className="gallery-container">
    <div className="gallery-arrow"></div>
    {
      images.map((image,index) => (
        <img className="event-image" alt={image.alt} src={image.src} />
        )
      )
    }
    <div className="gallery-arrow"></div>
  </div>
);

ScrollingGallery.propTypes = {
  images: PropTypes.arrayOf({
    image: PropTypes.objectOf({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  })
};

export default ScrollingGallery;
