let height = 4;

let width = 6;

function calculateArea(height, width){
    return height * width
}
console.log(`function declaration ${calculateArea(width, height)}`)

const areaFunc = function (height, width) {
    return height * width
}
console.log(`function expression ${areaFunc(width, height)}`)

areaArrow = (height, width) => height * width;
console.log(`arrow function ${areaArrow(width, height)}`)
