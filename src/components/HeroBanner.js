import React from "react";
import PropTypes from "prop-types";

const HeroBanner = ({ url }) => (
  <div>
    {/* https://www.youtube.com/embed/ldOBTcOwBZQ
        <iframe 
            width="560" 
            height="315" 
            src={url} 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe> */}
  </div>
);

HeroBanner.propTypes = {
  url: PropTypes.string
};

export default HeroBanner;
