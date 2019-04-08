import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamMember = ({ name, position, studies, image }) => (
  <div className="member-wrapper">
    <div className="member">
      <div className="photo">
        <PreviewCompatibleImage imageInfo={image} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <div className="social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus" />
          </a>
          <a href="#">
            <i className="fa fa-envelope" />
          </a>
        </div>
        <div className="bio">
          <h4>Bio:</h4>
          {position}
          {studies}
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
