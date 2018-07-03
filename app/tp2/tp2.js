const util = require('util');
const sha256 = util.promisify(require('../lib/sha256'));
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const str = 'Alice donne 5BTC à Paul';


if (cluster.isMaster) {
    console.time('app');
	for (let i = 0; i < numCPUs; i++) {
        const child = cluster.fork();
        child.on('message', (message) => {
            console.log('message from child', i, message);
            // kill all child
            Object.keys(cluster.workers).forEach(c => {
                cluster.workers[c].process.kill();
                
            });
            console.timeEnd('app');
        })
	}
} else {

    (async function () {
        let nonce = cluster.worker.id - 1;
        let hash;
        while (true) {
             hash = await sha256(str + nonce);
            if (hash.startsWith('000000')) {
                break;
            }
            nonce += numCPUs;
        }
        console.log('resultat hachage:', hash);
        console.log('resultat nonce:', nonce);
        process.send('finished ' + (cluster.worker.id - 1));
    })();
    
}






