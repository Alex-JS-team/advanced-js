import React from 'react'
import { string, number } from 'prop-types'

const propTypes = {
  name: string,
  age: number
}

const UsersListItem = ({ name, age }) => (
  <li className='list-group-item'>
    {name}: {age} y.o.
  </li>
)

UsersListItem.propTypes = propTypes

export default UsersListItem
