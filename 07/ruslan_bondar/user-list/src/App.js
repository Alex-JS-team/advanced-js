import React, {useEffect} from 'react';
import UserList from './Users/UserList';

function App() {
  let [users, setUsers] = React.useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setUsers(users.sort(function(a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }))
    })
  }, [])

  function toggleUser(id) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.completed = !user.completed
      }
      return user;
    }))
  }

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList users={users} onToggle={toggleUser} />
    </div>
  );
}

export default App;