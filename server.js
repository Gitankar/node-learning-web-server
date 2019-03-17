const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine",hbs);

app.use(express.static(__dirname + "/public"));

app.use((req,res,next) =>{
  console.log(new Date().toString());
  console.log( `Method : ${req.method}  ${req.url}`);
  next();
});

app.use((req,res,next)=>{
  res.render('mainteance.hbs');
});

app.get('/', (req,res) =>{
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMsg: 'Welcome to Home Page'
  });
});

app.get('/about', (req,res) =>{
  res.render('about.hbs',{
    pageTitle: 'About Page'
    });
});


app.get('/bad', (req,res) =>{
  res.send({
    "statusCode": 400,
    "errorMsg": "Invalid Request"
  });
});

app.listen(port,()=>{
  console.log("Server is up on port : "+ port);
});
