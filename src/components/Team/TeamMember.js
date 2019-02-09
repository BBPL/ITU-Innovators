import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamMember = ({ name, position, studies, image }) => (
  <div className="member-container">
    <div className="member">
      <PreviewCompatibleImage imageInfo={image} imageStyle="photo" />
      <div className="info">
        <h3>{name}</h3>
        <div className="bio">
          <h3>{position}</h3>
          <h4>{studies}</h4>
        </div>
      </div>
    </div>
  </div>
);

TeamMember.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  position: PropTypes.string,
  studies: PropTypes.string
};

export default TeamMember;
