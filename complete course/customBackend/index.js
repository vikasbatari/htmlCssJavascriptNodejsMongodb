
const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname= '127.0.0.1'
const port = 3000;

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const service = fs.readFileSync("./service.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res)=>{

    const url = req.url;
    res.statusCode=200;
    res.setHeader('Content-type','text/html')

   

    if(url == '/')
    {
    res.end(home);
    }
   else if(url == '/about')
    {
    res.end(about);
    }

    else if(url == '/service')
    {
    res.end(service);
    }
    else{
        res.end(contact);

    }

    
});

server.listen(port,hostname, ()=>{

    console.log(`server running at http://${hostname}:${port}`)
});
