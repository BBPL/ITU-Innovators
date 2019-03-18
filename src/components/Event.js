import React from "react";
import PropTypes from "prop-types";
// #d8e8ea
const EventDiv = ({ data }) =>(
    <div className="event-box">
        <img className="event-image" alt={data.name} src={data.src} />
        <div className="event-text">
            <span className="event-title">{data.name}</span>
            <span className="event-description">{data.description}</span>
        </div>
    </div>
)

EventDiv.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        src: PropTypes.string
      })
    )
  };

export default EventDiv;