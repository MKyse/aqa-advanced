function checkOrder(available, ordered){
    if (ordered <= 0){
        return "Your order is empty"
    }
    if (available < ordered){
        return "Your order is too large, we don’t have enough goods."
    }
    return "Your order is accepted"
}

console.log(`empty order attempt: ${checkOrder(5, 0)}`)

console.log(`order is too large attempt: ${checkOrder(5, 10)}`)

console.log(`Your order is accepted attempt: ${checkOrder(3, 3)}`)
