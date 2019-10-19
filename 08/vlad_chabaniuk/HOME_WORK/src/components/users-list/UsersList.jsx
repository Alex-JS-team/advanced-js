import React from 'react'
import UsersListItem from './UsersListItem'
import { func } from 'prop-types'

const propTypes = { setUsersToRender: func }

const UsersList = ({ usersToRender }) => (
  <ul className='list-group'>
    {usersToRender.map(({ id, name, age }) => <UsersListItem key={id} name={name} age={age} />)}
  </ul>
)

UsersList.propTypes = propTypes

export default UsersList
