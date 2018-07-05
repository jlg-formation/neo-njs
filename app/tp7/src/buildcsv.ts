import * as fs from 'fs';

const i : number = 32;

// kiki
console.log('Hello from typescript ' + i);

const filename = 'toto.csv';
const stream = fs.createWriteStream(filename);
for (let i  = 0; i < 1000000; i++) {
    const x = Math.random();
    const y = Math.random();
    const chunk = [(i + '').padStart(8, "0"), x, y].join(';') + '\n';
    stream.write(chunk);
}
