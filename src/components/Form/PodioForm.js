import React, { Component } from "react";
import { withPrefix } from "gatsby";
import PropTypes from "prop-types";
import TextArea from "../Input/TextArea";
import TextField from "../Input/TextField";

const PodioForm = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form
          method="POST"
          action="https://podio.com/webforms/22559549/1592076/"
          encType="application/x-www-form-urlencoded"
        >
          <input type="text" name="fields[title]" />
          <input type="text" name="fields[email]" />
          <input type="text" name="fields[studies]" />

          <select name="fields[which-team-do-you-want-to-apply-for]">
            <option id="1" value="1">
              Projects and Partnerships Team
            </option>
            <option id="2" value="2">
              Member Satisfaction Team
            </option>
            <option id="3" value="3">
              Press and communication Team
            </option>
            <option id="4" value="4">
              IT Management Team
            </option>
          </select>
          <input type="text" name="fields[why-would-you-like-to-join]" />
          <input type="text" name="fields[your-awesome-skills]" />
          <input type="submit" value="Submit ME" />
        </form>
      </div>
    );
  }
};

export default PodioForm;
