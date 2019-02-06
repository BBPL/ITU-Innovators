import React from "react";
import PropTypes from "prop-types";

const TeamMember = ({ name, position, studies }) => (
  <div>
    <h1>{name}</h1>
    <h2>{position}</h2>
    <h3>{studies}</h3>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  studies: PropTypes.string
};

export default TeamMember;
