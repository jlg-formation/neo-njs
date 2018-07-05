import * as fs from 'fs';

console.time('build');
const i : number = 32;

// kiki
console.log('Hello from typescript ' + i);

const filename = 'toto.csv';
const stream = fs.createWriteStream(filename);
for (let i  = 0; i < 1000000; i++) {
    const x = Math.random() * Math.random() * 1000;
    const y = Math.random() * Math.random() * 1000;
    const chunk = [(i + '').padStart(8, "0"), x, y].join(';') + '\n';
    stream.write(chunk);
}
stream.end();
stream.on('finish', () => console.timeEnd('build'));
// console.timeEnd('build');
