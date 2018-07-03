function sha256(str, callback) {

}

const str = 'Alice gives 5BTC to Bob';

sha256(str, (err, data) => {
    console.log('resultat hachage:', data);
});

