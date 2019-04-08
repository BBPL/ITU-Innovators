import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ type, placeholder, label, id, update }) => (

  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} placeholder={placeholder} id={id} onChange={update}/>
  </div>
);

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  update: PropTypes.func
}

export default TextField
