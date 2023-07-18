const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

const app = express();

dotenv.config();
port = process.env.PORT;
hostName = process.env.HOSTNAME;

var currentUser;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.get(['/', '/login'], function(req, res) {
    res.render('login');
});

app.get('/user_profile', function(req, res) {
    res.render('user_profile');
});

app.get('/slot_availability', function(req, res) {
    res.render('slot_availability');
});

app.get('/slot_search', function(req, res) {
    res.render('slot_search');
});

app.get('/edit_account', function(req, res) {
    res.render('edit_account');
});

app.get('/edit_pfp', function(req, res) {
    res.render('edit_pfp');
});

app.get('/delete_account', function(req, res) {
    res.render('delete_account');
});

app.listen(port, hostName, function() {
    console.log('Server running at: ');
    console.log('http://' + hostName + ':' + port);
});