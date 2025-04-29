function ageControl(age) {
    if (age >= 18) {
        return true
    }
    return false
}
console.log('25 is adult: ' + ageControl(25))
console.log(`15 is adult: ${ageControl(15)}`)
