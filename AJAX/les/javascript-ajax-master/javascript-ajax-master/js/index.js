/*
 * GLOBALE VARIABELEN
 */

let page_body = document.querySelector('#todos-row');
let load_button = document.querySelector('#load-todos');
let todos = [];

/*
 * FUNCTIES
 */

window.onload = function () {
    load_button.addEventListener('click', loadGames);
};

async function loadGames(event) {
    console.log('Fetching data online');
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((response) => {
            todos = response;
            console.log("RESPONSE:\n", response);
            showTodos();
        })
        .catch((error) => console.log(error));
}

function showTodos() {
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        let template = `
            <div class="row">
                <div class="col-md-2">
                    ID: ${todo.id}
                </div>
                <div class="col-md-2">
                    USER ID: ${todo.name}
                </div>
                <div class="col-md-6">
                    ${todo.email}
                </div>
            </div>
        `;
        page_body.innerHTML += template;
    }
}