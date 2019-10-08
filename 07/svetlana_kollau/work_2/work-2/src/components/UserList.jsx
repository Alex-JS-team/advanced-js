import React, { Component } from 'react'
import User from './User'
import PropTypes from 'prop-types';

const UserList = (props) => {
    console.log(props)
    const users = props.users
    return users.map( user => <User key={user.id} user={user} checkHandle={props.checkHandle}/>) 
}

UserList.propTypes = {
    users: PropTypes.array
}

export default UserList
