// 1. Сгрупировать пользователей по возрасту и вывести
//    в элемент select с value=""

// 2. При віборе соответствующего option осуществить вывод
//    соответствующих пользователей в элемент <div id="res"></div>
  
const usersSelect = document.querySelector('#users-select')
const res = document.querySelector('#res')

let users = [
  { id: 1, name: 'John', age: '20' },
  { id: 2, name: 'Sasha', age: '30' },
  { id: 3, name: 'Bill', age: '40' },
  { id: 4, name: 'Ashley', age: '20' },
  { id: 5, name: 'Rachel', age: '40' },
  { id: 6, name: 'Tom', age: '30' },
  { id: 7, name: 'Steve', age: '30' },
  { id: 8, name: 'Jim', age: '40' },
  { id: 9, name: 'Willy', age: '20' }
]
  
const ages = [...new Set(users.map(({ age }) => age))]

// Render options with ages
ages.forEach(age => { usersSelect.innerHTML += `<option value="${age}">${age}</option>` })

usersSelect.addEventListener('change', e => {
  // Clear rendered users
  res.innerHTML = ''

  // Render new users
  users
    .filter(user => user.age === e.target.value)
    .forEach(({ name, age }) => { res.innerHTML += `<li class="list-group-item">${name} - ${age} y.o.</li>` })
})
