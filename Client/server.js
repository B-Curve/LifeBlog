'use strict';
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'bundle')));

app.get("*", (req, res) => {
  res.render('index.html');
});

app.listen(9090, () => console.log("Listening at " + 9090));
