let usersPostsContainer = document.getElementById('usersPostsContainer');

async function fetchUsersPost() {
    const postUrl = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const usersPosts = await postUrl.json();
    const userUrl = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userData = await userUrl.json();

    function render() {
        let result = "";
        let renderUsersPosts = [];
        for (let i = 0; i < 10; i++) {
            usersPosts[i].name = userData[i].name;
            usersPosts[i].username = userData[i].username;
            usersPosts[i].email = userData[i].email;
            renderUsersPosts.push(usersPosts[i]);
        }
        for (let y=0; y<renderUsersPosts.length; y++) {
            result += printUsersPost(renderUsersPosts[y]);
        }
        usersPostsContainer.innerHTML = result;
    }
    render();
}

fetchUsersPost();

let printUsersPost = function (item) {
    return '<div class="post">' +
        '   <h2 class="post-title">'+ item.title +'</h2>' +
        '   <p class="post-body">' + item.body + '</p>' +
        '   <button class="show-user-info" onclick="toggleClass(userInfo' + item.id + ')">' + 'Show user' + '</button>' +
        '   <div id="userInfo' + item.id + '"' + ' class="hide">' +
        '       <p>' + '<strong>Name: </strong>' + item.name + '</p>' +
        '       <p>' + '<strong>Username: </strong>' + item.username + '</p>' +
        '       <p>' + '<strong>Email: </strong>' + item.email + '</p>' +
        '   </div>' +
        '</div>'
};


function toggleClass(element) {
    element.classList.toggle("hide");
}

