const sleep = require('../app/lib/sleep');
const assert = require('assert');



describe('sleep', function () {
    it('should wait at least 1000ms before executing.', async () => {
        const date = new Date().getTime();
        await sleep(1000);
        const now = new Date().getTime();
        const test = now - date >= 1000;
        assert.ok(test);
    });
});

