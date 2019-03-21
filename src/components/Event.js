import React from "react";
import PropTypes from "prop-types";
// #d8e8ea
const Event = ({ name, description, src }) => (
  <div className="event-box">
    <img className="event-image" alt={name} src={src} />
    <div className="event-text">
      <span className="event-title">{name}</span>
      <span className="event-description">{description}</span>
      <a href="https://www.facebook.com/" className="event-button">
        Go to eventee
      </a>
    </div>
  </div>
);

Event.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string
};

export default Event;
