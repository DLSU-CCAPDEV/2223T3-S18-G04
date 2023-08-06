const express = require('express');
const path = require('path');
const session = require('express-session');

const db = require('./models/db.js');
const routes = require('./routes/routes.js');

const app = express();
const port = 9090;

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));



db.connect();

app.use(session({
    'secret': "CCAPDEV_MCO",
    'resave': false,
    'saveUninitialized': false
}));
app.use('/', routes);

//codes for session-handling




app.listen(port, function() {
    console.log('App listening at port ' + port);
});
