import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ rows, cols, placeholder, id, update }) => (

    <div>
      <textarea rows={rows} cols={cols} placeholder={placeholder} id={id} onChange={update}>

      </textarea>
    </div>

)

TextArea.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  update: PropTypes.func
}

export default TextArea
