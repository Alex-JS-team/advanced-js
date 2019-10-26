import React from 'react';
import User from './User';
import {array} from 'prop-types';

const propTypes = {
    users: array 
} 
function UserList(props) {
  return (
    <div>
{props.users.map(user =>(
        <User 
        key={user.id}
        name={user.name} 
        email={user.email} 
        username={user.username} 
        />))}
        </div>
    );
}
UserList.propTypes = propTypes;
export default UserList;
