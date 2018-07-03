const sha256 = require('../app/lib/sha256');

const str = 'Alice donne 5BTC à Paul';

sha256(str, (err, data) => {
    console.log('resultat hachage:', data);
});

