class DataFetcher {
    static async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            return await response.json();
        } catch (error) {
            console.error("error recieving todo:", error);
        }
    }

    static async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            return await response.json();
        } catch (error) {
            console.error("error recieving user:", error);
        }
    }
}

class PromiseHandler {
    static async handleRequests() {
        try {
            const resultsAll = await Promise.all([DataFetcher.fetchTodo(), DataFetcher.fetchUser()]);
            console.log("Promise.all:", resultsAll);

            const resultRace = await Promise.race([DataFetcher.fetchTodo(), DataFetcher.fetchUser()]);
            console.log("Promise.race:", resultRace);
        } catch (error) {
            console.error("error recieving data:", error);
        }
    }
}

PromiseHandler.handleRequests();