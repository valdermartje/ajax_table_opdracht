// HIER MET AJAX EEN TABLE MAKEN
// JE MAG USER INHOUD VAN DEZE LINK: https://jsonplaceholder.typicode.com/users HALEN
// MET JSON

let page_body = document.querySelector('#table_users');
let load_button = document.querySelector('#load_button');
let users = [];

let table = document.getElementById('table');

function load() {
    loadUsers();
}

// function show() {
//     table.style.display = 'inline';
// }

async function loadUsers(event) {
    console.log('Fetching data online');
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            users = data;
            console.log("RESPONSE:\n", data);
            showUsers();
        })
        .catch((error) => console.log(error));
}

function showUsers() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let template = `
            <tr>
                <th scope="row"> ${user.id} </th>
                <th> ${user.name} </th>
                <td> ${user.username} </td>
                <td> ${user.email} </td> 
                <td> ${user.address.street + ' ' + user.address.suite} </td>   
            </tr>
        `;

        page_body.innerHTML += template;
    }
}
