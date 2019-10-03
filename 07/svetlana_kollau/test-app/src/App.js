import React from 'react';
import UserList from './components/UserList';
import './App.css';


// <!--  Задание 

// - вывести список из 10 пользователей с url  https://jsonplaceholder.typicode.com/users   
//   (name, username, email) 
// - обязательно использовать композицию компонентов
// - обязательно валидировать props используя библиотеку prop-types   
// - реализовать фильтрацию по имени пользователя  

//  -->

class App extends React.Component {
  state = {
    users: null
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => this.setState({users:data}))
  }
  render() {
    if (!this.state.users){
      return(
        <p>Loading...</p>
      )
    }
   return (
      <div className="App">
      <UserList users={this.state.users}/>
    </div>
  );
  }
  
}

export default App;
