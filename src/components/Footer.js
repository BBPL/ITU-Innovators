import React from "react";
import PropTypes from "prop-types";


const Footer = ({ data }) => (
  <div id="page-container">
    <footer>
      <ul class='left'>

      {data.texts.map((item, i) => (
        <li key={i}>
          item.text
        </li>
      ))}

      </ul>

      <ul class='right'>
      {data.links.map((item, i) => (
        <li key={i}>
          <a href='#'>item.link </a>

        </li>
      ))}

      </ul>
    </footer>
 </div>
);

Footer.PropTypes = {
  data: {
    texts: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })),
      links: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string
      }))
  }
}


export default Footer;
