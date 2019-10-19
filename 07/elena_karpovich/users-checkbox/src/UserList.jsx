import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User/User';

class UserList  extends React.Component {
	state = {
		users: [
			{id: 1, name: "Bill", checked: false},
			{id: 2, name: "Tom", checked: false},
			{id: 3, name: "Pete", checked: false},
			{id: 4, name: "Ashley", checked: false},
			{id: 5, name: "Greg", checked: false}
		]
	};

	checkHandle = (id) => {
		const newUsersState = this.state.users.map(user => {
			if (user.id === id) {
				user.checked = !user.checked;
			}
			return user;
		});
		this.setState({users: newUsersState});
	};

	render() {
		return (
			<div>
				{this.state.users.map(({ id, name, checked }) =>
					<User key={id} id={id} name={name} checked={checked} checkHandle={this.checkHandle}/>
				)}
			</div>
		)
	}

}

export default UserList;