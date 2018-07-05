

const assert = require('assert');
const axios = require('axios');
const server = require('../app/tp3/tp3');

let port;

describe.only('tp3', function () {
    before(async () => {
        server.listen(0, () => { 
            
            port = server.address().port;
            console.log('started on port ', port);
         });
    });
    after(() => {
        server.close();
    });
    it('should not find the file', async () => {

        // call axios with 'http://localhost:9000/asdf
        // expect file not found
        try {
            const response = await axios.get(`http://localhost:${port}/asdf`);
        } catch (e) {
            assert.equal(e.response.data, 'file does not exist')
            assert.equal(e.response.status, 404)
        }
    });

    it('should find the file', async () => {

        // call axios with 'http://localhost:9000/toto.txt
        // expect file not found
        try {
            const response = await axios.get(`http://localhost:${port}/toto.txt`);
            assert.equal(response.data, 'Toto !!!');
            assert.equal(response.status, 200);
        } catch (e) {
            assert.fail('should not throw an exception');
        }
    });
});





