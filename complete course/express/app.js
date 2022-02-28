const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const fs = require('fs')
const { name } = require("pug/lib");
const app = express();
const port = 3000;

// Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
 
// Endpoints
app.get("/", (req, res)=>{ 
    res.status(200).render('index')
});


app.post("/", (req,res)=>{

    //console.log(req.body);
    let name = req.body.name;
    let age= req.body.age;
    let phonenumber= req.body.phonenumber;
    let address= req.body.address;
    let moreinfo = req.body.moreinfo;

    let userOutput= `The client name is ${name} and age is ${age}, The phone number of client is ${phonenumber}`;
    const param={'message': 'your detail has been submitted successfully'}

    fs.writeFileSync('output.txt',userOutput)
    res.render('index.pug',param);
     

});

// start server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
