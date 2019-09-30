import React from 'react'
import { string } from 'prop-types'

const propTypes = {
  name: string,
  email: string,
  username: string
}

const User = ({ name, username, email }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text"><small className="text-muted">@{username}</small></p>
      <p className="card-text">email: {email}</p>
    </div>
  </div>
)

User.propTypes = propTypes

export default  User