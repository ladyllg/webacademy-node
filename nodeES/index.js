import http from "http"
import fs from "fs"
import dotenv from "dotenv"
import { createLink } from './utils.js'

dotenv.config()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const folder = process.env.FILES || 'files';


const server = http.createServer((req, res) => {

    res.statusCode = 200;

    fs.readdir(folder, (err, files) => {
        if (err) console.log(err);
        else {
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            if (req.url != '/') {
                res.write('<a href="/">Voltar</a><br>\n')
                fs.readFile(`${folder}/${req.url}`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    res.end(data);
                });
            } else {
                files.forEach(f => res.write(createLink(f)));
                res.end('Insituto de Computação');
            }
        }
    })


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});