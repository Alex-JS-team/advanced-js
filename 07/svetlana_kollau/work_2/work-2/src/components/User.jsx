import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
const User = (props) => {
  const textStyle = {
    textDecoration: props.user.checked ? 'line-through' : 'none'
  }

  return (
    <div className='list-group' >
      <div className='card'>
        <div className='card-body'>
          <h5 style={textStyle} className='card-title'>{props.user.name}</h5>
          <p style={textStyle} className='card-text'>Age: {props.user.age} y.o.</p>
          <div className='custom-control custom-checkbox'>
            <input
              checked={props.user.checked}
              type='checkbox'
              className='custom-control-input'
              id={props.user.id}
              onChange={() => props.checkHandle(props.user.id)}/>
            <label
              className='custom-control-label'
              htmlFor={props.user.id}>
              {props.user.checked ? 'checked' : 'unchecked'}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    age: PropTypes.number,
    checked: PropTypes.boolean
  }),
  checkHandle: PropTypes.func
}
export default User
