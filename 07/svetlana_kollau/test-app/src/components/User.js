import React from 'react'
import {string} from 'prop-types'

const propTypes = {
    name: string,
    username: string,
    email: string
} 
const User = (props) => (
    <li className='list-group-item'><b>{props.name}</b> <br/> {props.email} <br/> {props.username}</li>
)

User.propTypes = propTypes;
export default User
