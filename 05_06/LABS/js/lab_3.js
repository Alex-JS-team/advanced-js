const getUsersPromise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/users');
    xhr.onreadystatechange = handleResponse;
    xhr.send();

    function handleResponse(){
        console.log(xhr.readyState);
        if(xhr.readyState == 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.response);
            resolve(users);
        } else if (xhr.readyState == 4){
            reject(xhr.status);
        } 
    }
});

getUsersPromise
    .then((result) => console.log(result));

fetch('http://jsonplaceholder.typicode.com/users')
.then(function(response) {
    debugger;
    return response.json();
})
.then(function(myJson) {
    debugger;
    console.log(JSON.stringify(myJson));
});


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

