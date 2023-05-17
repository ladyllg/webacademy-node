const http = require('node:http');
const fs = require('fs');
require('dotenv').config()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const folder = process.env.FILES || 'files/';

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    fs.readdir(folder, (err, files) => {
        if (err) console.log(err);
        else {
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            files.forEach(f => res.write(`${f}\n`));
            res.end('Hello, World!\ncomputação');
        }
    })


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});