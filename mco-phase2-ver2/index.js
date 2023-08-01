const express = require('express');
const path = require('path');
const db = require('./models/db.js');
const routes = require('./routes/routes.js');

const app = express();
const port = 9090;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

db.connect();

app.listen(port, function() {
    console.log('App listening at port ' + port);
});
