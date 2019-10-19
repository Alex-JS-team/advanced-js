import React, {Component} from 'react';
import './App.css';
import UserList from "./components/UserList/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    users: [
        {id: 1, name: "Bill", age: 50},
        {id: 2, name: "Tom",  age: 40},
        {id: 3, name: "Pete",  age: 30},
        {id: 4, name: "Ashley",  age: 20},
        {id: 5, name: "Greg",  age: 60}
    ]
  };
  render() {
    return (
        <>
          <UserList users={this.state.users}/>
        </>
    );
  }
}

export default App;
