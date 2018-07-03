const sleep = require('../app/lib/sleep');

(async function () {
    for (let n = 30; n <= 31; n++) {
        await sleep(10);
        console.log('n:', n);
    }
})();
