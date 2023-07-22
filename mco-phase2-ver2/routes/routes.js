
// import module `express`
const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const profileController = require('../controllers/profileController.js');

const app = express();

var urlencodedParser = bodyParser.urlencoded({extended: true});

const upload = multer({storage: storage});

app.get(['/', '/login'], loginController.getLogin);
app.post(['/', '/login'], urlencodedParser, loginController.postLogin);

app.get('/register', registerController.getRegister);
app.post('/register', urlencodedParser, registerController.postRegister);

app.get('/user_profile', profileController.getProfile);

app.get('/edit_account', profileController.getEditAccount);
app.post('/edit_account', urlencodedParser, profileController.postEditAccount);

app.get('/edit_pfp', profileController.getEditPfp);
app.post('/edit_pfp', upload.single("pfp"), profileController.postEditPfp);

app.get('/delete_account', function(req, res) {
    res.render('delete_account');
});

app.get('/slot_search', function(req, res) {
    res.render('slot_search');
});

app.get('/slot_availability', function(req, res) {
    res.render('slot_availability');
});

module.exports = app;
