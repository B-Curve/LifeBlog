'use strict';
const path = require('path');
//express - nodejs library that is used for
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rest = require('./routing/rest');

//bodyParser removes the need for the client to specify the MIME type.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Setting the directory for the html files. Setting the views path removes the need to reference the folder,
//instead allowing you to reference the file like I did below for "res.render('index.html');"
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//static directories
app.use(express.static(path.join(__dirname, 'bundle')));
app.use(express.static(path.join(__dirname, 'src/components/images')));
app.use(express.static(path.join(__dirname, 'images')));

app.use('/rest', rest);

app.get("*", (req, res) => {
  res.render('index.html');
});

//Starts the server at localhost:9090, app.get above listens for requested pages. In this case, it only listens for "*",
//which represents any address. React will handle what html to show based on the url.
app.listen(9090, () => console.log("Listening at " + 9090));
