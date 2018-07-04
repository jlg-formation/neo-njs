const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');

const access = util.promisify(fs.access);
const readFile = util.promisify(fs.readFile);

const mimetypes = {
    html: 'text/html',
    json: 'application/json',
    txt: 'text/plain',
};

const port = 9000;

const server = http.createServer(async (req, res) => {
    const { method, url, headers } = req;
    const filename = path.resolve(__dirname, 'www' + url);
    try {
        await access(filename, fs.constants.R_OK);
        const content = await readFile(filename);
        const ext = path.extname(filename).substring(1);
        res.writeHead(200, { 'Content-Type': `${mimetypes[ext]}; charset=utf-8` });
        res.end(content, 'utf8');
    } catch (e) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('file does not exist', 'utf8');
    }
    
});

server.listen(port, () => {
    console.log('Server started on port', port);
});
