const person = {
    firstName: "Again",
    lastName: "armed and dangerous",
    age: 30
};

person.email = "armedanddangerousAgain@gmail.com";
delete person.age;

console.log(person);