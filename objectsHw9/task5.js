const users = [
    { name: "jorno", email: "jojo1@example.com", age: 18 },
    { name: "jorgie", email: "jojo2@example.com", age: 24 },
    { name: "jonatan", email: "jojo3@example.com", age: 25 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}