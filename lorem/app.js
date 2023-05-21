import http from "http"
import dotenv from "dotenv"
import fsPromises from "fs/promises"

dotenv.config()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const readFile = async (filePath) => {
    try {
        return await fsPromises.readFile(filePath, 'utf8');
    }
    catch(err) {
        return false
    }
}

const server = http.createServer(async (req, res) => {

    if (req.url === '/') {
        console.log('Carregando HTML...');
        let html = await readFile('./index.html')
        if (!html) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('File not found');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(html);
            console.log('HTML OK');
        }
    }
    if (req.url === '/styles.css') {
        console.log('Carregando estilos...')
        let css = await readFile('./styles.css')
        if (!css) {
            console.log("css not found")
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('File not found');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            console.log('CSS OK');
            res.end(css);
        }
    }
    if (req.url === '/main.js') {
        let js = await readFile('./main.js')
        console.log('Carregando javascript...')
        if (!js) {
            console.log("js not found")
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('File not found');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            console.log('JS OK');
            res.end(js);
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});