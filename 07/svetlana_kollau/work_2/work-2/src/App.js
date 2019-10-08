import React from 'react';
import UserList from './components/UserList'

export class App extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Alex',
        username: 'AlexOrd',
        age: 26,
        checked: false
      },
      {
        id: 2,
        name: 'Vova',
        username: 'vovan',
        age: 21,
        checked: false
      },
      {
        id: 3,
        name: 'Dima',
        username: 'dimon',
        age: 20,
        checked: false
      }
    ]
  }
  checkHandle = (id) => {
    console.log(id)
    const newUsersState = this.state.users.map( user => {
      if (user.id === id){
        user.checked = !user.checked 
      } 
      return user;
    })
    this.setState({users: newUsersState})
  }
  render() {
    
    return (
      <div>
        <UserList users={this.state.users} checkHandle={this.checkHandle}/>
      </div>
    )
  }
}

export default App
