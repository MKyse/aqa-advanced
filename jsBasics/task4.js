// task4.1
let radiusCircle = 3;

console.log(
    roundTwoSymbols(
        Math.PI * Math.pow(radiusCircle, 2)
    )
);

//task 4.2

let lenght = 5;

let width = 7;

console.log(roundTwoSymbols(lenght * width));

//task 4.3

let radiusConus = 4;

let heightConus = 6;

console.log(
    roundTwoSymbols(
        Math.PI * Math.pow(radiusConus, 2) * heightConus
    )
);

function roundTwoSymbols(number){
    return number.toFixed(2)
}
