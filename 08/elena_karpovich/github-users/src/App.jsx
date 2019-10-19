import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Userlist from "./components/Userlist/Userlist";
import Search from "./components/Search/Search";

class App extends React.Component {
	state = { users: [] };

	componentDidMount() {
		fetch(`https://api.github.com/search/users?q=${this.state.username}`)
		.then(res => res.json())
		.then(json => this.setState({ users: json.items }));
	}

	changeValue = () => {
		fetch(`https://api.github.com/search/users?q=${this.state.searchString}`)
		.then(res => res.json())
		.then(json => this.setState({ users: json.items }));
	};

	onChangeValue = event => {
		this.setState({ searchString: event.target.value });
	};

	resetValue = () => {
		fetch(`https://api.github.com/search/users?q=${this.state.username}`)
		.then(res => res.json())
		.then(json => this.setState({ users: json.items }));
		document.getElementById('userSearch').value = '';
	};

	render() {
		return (
			<div className="App">
				<Search
					onChangeValue={event => this.onChangeValue(event)}
					resetValue={this.resetValue}
					changeValue={this.changeValue}
				/>
				<Userlist users={this.state.users} />
			</div>
		);
	}
}

export default App;
