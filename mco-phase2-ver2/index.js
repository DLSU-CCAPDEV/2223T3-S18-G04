const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const db = require('./models/db.js');
const routes = require('./routes/routes.js');

var bodyParser = require('body-parser');

const app = express();

var jsonParser = bodyParser.json();

dotenv.config();
port = process.env.PORT;
hostName = process.env.HOSTNAME;

var currentUser;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

db.connect();

app.listen(port, hostName, function() {
    console.log('Server running at: ');
    console.log('http://' + hostName + ':' + port);
});
