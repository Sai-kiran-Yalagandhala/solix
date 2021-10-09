function errorCallback(msg) {
    console.log(msg);
}

function successCallback(msg) {
    console.log(msg);
}
async function ping(delay) {
    if (delay > 3) {
        errorCallback("Error with Delay")
    } else if (!delay) {
        successCallback('pong');
    } else {
        setTimeout(async function () { await successCallback('pong'); }, delay * 1000);
    }


}

for (var i = 1; i < 4; i++) {
    ping(i)
}