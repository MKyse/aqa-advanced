const car1 = {
    brand: "VAZ",
    model: "Kopeyka" ,
    year: "2001"
}

const car2 = {
    brand: "zxc",
    model: "mid",
    owner: "dondo"
}

const car3 = {...car1, ...car2};

console.log(car3)
