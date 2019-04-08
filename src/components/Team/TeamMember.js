import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamMember = ({ name, position, studies, image }) => (
  <div className="member-wrapper">
    <div className="member">
      <div class="photo">
        <PreviewCompatibleImage imageInfo={image} />
      </div>
      <div class="info">
        <h3>{name}</h3>
        <div class="social">
          <a href="#">
            <i class="fa fa-facebook" />
          </a>
          <a href="#">
            <i class="fa fa-linkedin" />
          </a>
          <a href="#">
            <i class="fa fa-google-plus" />
          </a>
          <a href="#">
            <i class="fa fa-envelope" />
          </a>
        </div>
        <div class="bio">
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
