import React from 'react'
import User from './User'

const UserList = (props) => { 
  console.log(props.users)
    return (
      <div>
        <ul>
          {props.users.sort((a, b) => a.name - b.name).map( (user) => {
            return <User id={user.id} name={user.name} age={user.age} />
          } )}
        </ul>
      </div>
    )
}

export default UserList
