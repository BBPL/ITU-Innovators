import React from "react";
import PropTypes from "prop-types";
import { TestPageTemplate } from "../../templates/test";

const TestPagePreview = ({ entry, getAsset }) => {
  const entryListMembers = entry.getIn(["data", "members"]);
  const listMembers = entryListMembers ? entryListMembers.toJS() : [];
  console.log(listMembers);
  return (
    <TestPageTemplate
      title={entry.getIn(["data", "title"])}
      banner={entry.getIn(["data","banner"])}
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
