const sleep = require('../lib/sleep');

(async function () {
    for (let n = 30; n <= 80; n++) {
        await sleep(100);
        console.log('n:', n);
    }
})();
