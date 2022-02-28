
//console.log("this is node js")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Developer Tool</title>
      <style>
          p{
              color: yellow;
              background-color: blue;
             
          }
      </style>
  </head>
  <body>
      <h3>Developer Tool</h3>
      <p>This is my paragraph abot Developer Tool</p>
      <p>This is my paragraph abo</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});