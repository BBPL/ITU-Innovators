import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamMember = ({ name, position, studies, imageInfo }) => (
  <div>
    {console.log(imageInfo)}
    <PreviewCompatibleImage imageInfo={imageInfo} />
    <h1>{name}</h1>
    <h2>{position}</h2>
    <h3>{studies}</h3>
  </div>
);

TeamMember.propTypes = {
  imageInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  position: PropTypes.string,
  studies: PropTypes.string
};

export default TeamMember;
