import React from "react";
import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

const ListMembers = ({ data }) => (
  <div>
    {data.map((item, i) => (
      <div key={i}>
        <TeamMember
          name={item.name}
          position={item.position}
          studies={item.studies}
          imageInfo={item.imageInfo}
        />
      </div>
    ))}
  </div>
);

ListMembers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      name: PropTypes.string,
      position: PropTypes.string,
      studies: PropTypes.string
    })
  )
};

export default ListMembers;
