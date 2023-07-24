
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

const securityController = require('../controllers/securityController.js');
const profileController = require('../controllers/profileController.js');
const reservationController = require('../controllers/reservationController.js');

const app = express();

var urlencodedParser = bodyParser.urlencoded({extended: true});

const upload = multer({storage: storage});

app.get(['/', '/login'], securityController.getLogin);
app.post(['/', '/login'], urlencodedParser, securityController.postLogin);

app.get('/register', securityController.getRegister);
app.post('/register', urlencodedParser, securityController.postRegister);

app.get('/user_profile', profileController.getProfile);

app.get('/edit_account', profileController.getEditAccount);
app.post('/edit_account', urlencodedParser, profileController.postEditAccount);

app.get('/edit_pfp', profileController.getEditPfp);
app.post('/edit_pfp', upload.single("pfp"), profileController.postEditPfp);

app.get('/delete_account', profileController.getDeleteAccount);
app.post('/delete_account', urlencodedParser, profileController.postDeleteAccount);

app.get('/slot_search', reservationController.getSlotSearch);

app.get('/getSearchUsers', profileController.getSearchAccount);

app.get('/seeReservations', reservationController.seeReservations);

app.get('/searchSlots', reservationController.searchSlots);

app.use(express.json());
app.get('/slot_availability', urlencodedParser, reservationController.getSlotAvailability);
app.post('/slot_availability/add_reserve', reservationController.postNewreserve);
app.get('/slot_availability/get_reservations', reservationController.getExistingreserve);
app.post('/slot_availability/edit_reserve', reservationController.postEditreserve);
app.delete('/slot_availability/:id', reservationController.deleteReserve);
app.post('/slot_availability/seats_postget', reservationController.postgetSeats);

module.exports = app;
