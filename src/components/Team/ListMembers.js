import React from "react";
import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

const ListMembers = ({ data }) => (
  <div className="team">
    {data.map((item, i) => (
      <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        {console.log(item.image)}

        <TeamMember
          name={item.name}
          position={item.position}
          studies={item.studies}
          image={item.imageInfo}
        />
      </div>
    ))}
  </div>
);

ListMembers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      position: PropTypes.string,
      studies: PropTypes.string
    })
  )
};

export default ListMembers;
