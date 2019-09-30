import React from 'react';
import PropTypes from 'prop-types';

function Option(props) {
  return (
      <option>{props.name}</option>
  )
}

Option.propTypes = {
  name: PropTypes.string
};

Option.propTypes = {
  name: PropTypes.string
};

Option.defaultProps = {
  name: 'Not Found'
};


export default Option;
