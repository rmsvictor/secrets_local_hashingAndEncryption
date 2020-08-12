const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', function(req,res){
  res.render('home.ejs');
});

app.get('/login', function(req,res){
  res.render('login.ejs');
});

app.get('/register', function(req,res){
  res.render('register.ejs');
});


app.listen(3000,function(){
  console.log('Server running on port 3000.');
});