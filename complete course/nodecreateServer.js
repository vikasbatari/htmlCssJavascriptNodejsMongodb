
const http = require('http');
const fs= require('fs');
const fileContent= fs.readFileSync("position.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);


});

server.listen(3000,'127.0.0.1',()=>{
    console.log("this port is listening on 80");
})