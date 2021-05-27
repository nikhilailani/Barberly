const express = require('express');
const path = require('path');
const moment = require('moment')

const app = express();

app.use(express.urlencoded({ extended: false }));

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
  next();
}

app.use(logger);

app.post('/login', (req, res, next) => {
  if(req.body) {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  }
  res.send("There is some error. We are currently working on it");
});

app.get('/login', (req, res) => {
  res.json("Login page");
});

// app.use('/api/members', require('./routes/members'));

// Init middleware

// Assigning static folder
app.use('/static', express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.clear());