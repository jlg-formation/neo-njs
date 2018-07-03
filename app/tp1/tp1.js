const sleep = require('../lib/sleep');


(async function () {
    console.time('tp1');
    for (let n = 30; n <= 80; n++) {
        await sleep(100);
        console.log('n:', n);
    }
    console.log('');
    console.timeEnd('tp1');    
})();
