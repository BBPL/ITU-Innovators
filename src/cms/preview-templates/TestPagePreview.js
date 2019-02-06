import React from "react";
import PropTypes from "prop-types";
import { TestPageTemplate } from "../../templates/test";

const TestPagePreview = ({ entry, getAsset }) => {
  const entryListMembers = entry.getIn(["name", "position", "studies"]);
  const listMembers = entryListMembers ? entryListMembers.toJS() : [];

  return (
    <TestPageTemplate
      title={entry.getIn(["data", "title"])}
      members={listMembers}
    />
  );
};

TestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default TestPagePreview;
