import React from "react";
import PropTypes from "prop-types";
import "./Panel.sass";

const Panel = ({ panel }) => (
  <div>
    {console.log(JSON.stringify(panel[0]))}
    <div id="page-container">
      <div>
        {panel[0].titles.map((title, index) => (
          <ul key={index}>
            <li>{title.title}</li>
            <li>{title.content} </li>
          </ul>
        ))}
      </div>
    </div>
  </div>
);

Panel.PropTypes = {
  // panel: PropTypes.any,
  panel: PropTypes.arrayOf({
    info: PropTypes.objectOf({
      titles: PropTypes.arrayOf({
        title: PropTypes.string,
        content: PropTypes.string,
      }),
    }),
  }),
};

export default Panel;
