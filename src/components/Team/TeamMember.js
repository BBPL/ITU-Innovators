import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const TeamMember = ({ name, position, studies, image }) => (
  <div>
    {console.log(image)}
    <PreviewCompatibleImage image={image} />
    <h1>{name}</h1>
    <h2>{position}</h2>
    <h3>{studies}</h3>
  </div>
);

TeamMember.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  position: PropTypes.string,
  studies: PropTypes.string
};

export default TeamMember;
