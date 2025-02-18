async function fetchTodoAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        return await response.json();
    } catch (error) {
        console.error("error recieving todo:", error);
    }
}

async function fetchUserAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return await response.json();
    } catch (error) {
        console.error("error recieving user:", error);
    }
}

async function fetchData() {
    try {
        const resultsAll = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
        console.log("Promise.all:", resultsAll);

        const resultRace = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
        console.log("Promise.race:", resultRace);
    } catch (error) {
        console.error("error recieving data:", error);
    }
}

fetchData();