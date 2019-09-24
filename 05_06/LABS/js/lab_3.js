
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = handleResponse;
xhr.send();

function handleResponse(){
    if(xhr.readyState == 4 && xhr.status === 200) {
        var users = JSON.parse(xhr.response);
         addUsersToPage(users);
    }
}

function generateListItem(users) {
  
    let st = '';
    users.forEach(user => st += `<li class="list-group-item">
        ${user.name} - phone ${user.phone}
    </li>`);
    return st;
}

function generateUnorderedList(listItems){
    return `<ul class="list-group">${listItems}</ul>`;
}

function addUsersToPage(users) {
   
    document.getElementById('users').innerHTML = 
      generateUnorderedList(generateListItem(users));
}

