import React from "react";
import PropTypes from "prop-types";
import "./Panel.sass";


const Panel = ({ panel }) => (
  <div id="page-container">
    <panel>
      {panel.info.titles.map((title, index) => (
        <ul key={index}>
          <li>{title.title}</li>
          <li>{title.content} </li>
        </ul>
      ))}
    </panel>
  </div>
);

Panel.PropTypes = {
  panel: PropTypes.objectOf({
    info: PropTypes.objectOf({
      titles: PropTypes.arrayOf({
        title: PropTypes.string,
        content: PropTypes.string,
      }),
    }),
  }),
};

export default Panel;
