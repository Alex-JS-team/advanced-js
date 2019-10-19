import React, {Component} from 'react';
import User from "../User/User";

const UserList = ((props) => {
	props.users.sort((a, b) => a.name.localeCompare(b.name));
	return (
		<ul>
			{props.users.map(({ name, age }) => <User name={name} age={age} />)}
		</ul>
	)
});
export default UserList;