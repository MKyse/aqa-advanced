function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .catch(error => console.error("error recieving todo:", error));
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => console.error("error recieving user:", error));
}

Promise.all([fetchTodo(), fetchUser()])
    .then(results => console.log("Promise.all:", results))
    .catch(error => console.error("error recieving Promise.all:", error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => console.log("Promise.race:", result))
    .catch(error => console.error("error recieving Promise.race:", error));