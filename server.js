// Servidor local sin dependencias: node server.js  ->  http://localhost:3000
const http = require('http'), fs = require('fs'), path = require('path');
const PORT = process.env.PORT || 3000;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.md':'text/plain; charset=utf-8','.ico':'image/x-icon'};
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const f = path.join(__dirname, path.normalize(p));
  if (!f.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404); return res.end('404'); }
    res.writeHead(200, {'Content-Type': types[path.extname(f)] || 'application/octet-stream'});
    res.end(d);
  });
}).listen(PORT, () => console.log(`Kampoz // Zombies en http://localhost:${PORT}`));
