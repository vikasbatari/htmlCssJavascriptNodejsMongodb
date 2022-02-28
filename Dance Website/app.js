const express = require("express");
const app = express();
const path = require("path");


const port = 3000;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/", (req, res)=>{ 
    const param={}
    res.status(200).render('home.pug', param)
});

app.get("/contact", (req, res)=>{ 
    const param={}
    res.status(200).render('contact.pug', param)
});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});