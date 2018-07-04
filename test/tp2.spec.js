const sha256 = require('../app/lib/sha256');

const assert = require('assert');



describe('sha256', function () {
    it('should hash in sha256 something.', (done) => {
        const str = 'Alice donne 5BTC à Paul';

        sha256(str, (err, data) => {
            assert.equal(data, '449f3a811b007cf5f1108600cd5c287f7b8381ac21fe2705d8175fa3168572df');
            done();
        });
        
        
    });
});





