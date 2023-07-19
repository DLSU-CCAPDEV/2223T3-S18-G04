
// import module `express`
const express = require('express');
var bodyParser = require('body-parser');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js')
const registerController = require('../controllers/registerController.js')

const app = express();

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.get(['/', '/login'], function(req, res) {
    res.render('login');
});

app.get('/register', registerController.getRegister);

app.post('/register', urlencodedParser, registerController.postRegister);

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

module.exports = app;
