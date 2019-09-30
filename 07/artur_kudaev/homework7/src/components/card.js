import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
      <div className='card'>
        <h5>{props.name}</h5>
        <p>{props.username}</p>
        <p>{props.email}</p>
      </div>
  )
}

Card.defaultProps = {
  name: 'Not Found',
  username: 'Not Found',
  email: 'Not Found'
};

Card.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string
};


export default Card;
