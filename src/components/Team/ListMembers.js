import React from "react";
import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

const ListMembers = ({ data }) => (
  <div>
    {data.map(item => (
      <TeamMember
        name={item.name}
        position={item.position}
        studies={item.studies}
      />
    ))}
  </div>
);

ListMembers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(TeamMember))
};

export default ListMembers;
