function divide(numerator, denominator) {

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('both parameters should be numbers');
    }

    if (denominator === 0) {
        throw new Error('dividing by zero is prohibited');
    }

    return numerator / denominator;

}

try {
    console.log(divide(10, 4));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('jobs done boss')
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('jobs done boss')
}

try {
    console.log(divide('a', 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('jobs done boss')
}