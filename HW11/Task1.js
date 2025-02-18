function delayedLog(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

delayedLog("ohaioooo", 5000);