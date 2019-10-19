import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Select from "./components/Select/Select";

export default class App extends React.Component {
	state = {
		allUsers: [],
		filteredUsers: []
	};

	handleChange = event => {
		const usersAge = event.target.value;
		debugger;
		if (usersAge != "all") {
			const filteredUsers = this.state.allUsers.filter(user => {
				return user.age == usersAge;
			});
			this.setState({ filteredUsers: filteredUsers });
		} else {
			this.setState({ filteredUsers: this.state.allUsers });
		}
	};

	componentWillMount() {
		const asyncUsers = [
			{ id: 1, name: "Sam", age: 33 },
			{ id: 2, name: "Pete", age: 22 },
			{ id: 3, name: "David", age: 44 },
			{ id: 4, name: "Ashley", age: 22 },
			{ id: 5, name: "Nancy", age: 33 },
			{ id: 6, name: "Vivien", age: 44 }
		];
		const getUsersPromise = Promise.resolve(asyncUsers);
		getUsersPromise.then(userList => {
			this.setState({
				allUsers: [...userList],
				filteredUsers: [...userList]
			});
		});
	}

	render() {
		return (
			<>
				<Header headerText="Hello World!" />
				<Select
					users={this.state.allUsers}
					change={this.handleChange}
				/>
				<Content users={this.state.filteredUsers} />
				<Footer footerText="copyright" />
			</>
		);
	}
}
