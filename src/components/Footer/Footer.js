import React from "react";
import PropTypes from "prop-types";
import "./Footer.sass";

const Footer = ({ footer }) => (
  <div id="page-container">
    <footer>
      <ul class="left">
        <li>{footer.info.address}</li>
        <li>{footer.info.email}</li>
        <li>{footer.info.phone}</li>
      </ul>

      <ul class="right">
        {footer.info.links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.title} </a>
          </li>
        ))}
      </ul>
    </footer>
  </div>
);

Footer.PropTypes = {
  footer: PropTypes.objectOf({
    info: PropTypes.objectOf({
      address: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      links: PropTypes.arrayOf({
        link: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
};

export default Footer;
