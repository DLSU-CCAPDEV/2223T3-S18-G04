// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/user.js`
const User = require('../models/user.js');

// import module `Reservation` from `../models/reservation`
const Reservation = require('../models/reservation.js');

// import module `ObjectId`
const ObjectId = require('mongodb').ObjectId;

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const reservationController = {
    getSlotSearch: async function(req, res) {
        
        if(!req.session.email){
            res.redirect('login');
            console.log('User not logged in. Redirected')
        }else{
        res.render('slot_search');
        }
    }, 

    getSlotAvailability: async function(req, res) {
        
        if(!req.session.email){
            res.redirect('login');
            console.log('User not logged in. Redirected')
        }else{
        res.render('slot_availability');
        }
    }, 

    seeReservations: async function (req, res) {
        
        if(!req.session.email){
            res.redirect('login');
            console.log('User not logged in. Redirected')
        }else{
        if(req.query.email != '') {
            var query = {email: req.query.email};
        } else {
            var query = {
                email: localStorage.getItem('email'),
                markasDone: false
            };
        }
        //console.log(query);
        var projection = 'labnum seatnum requestDateTime reserveDateTime'

        var result = await db.findMany(Reservation, query, projection);
        //console.log(result);
        res.send(result);
        }
    },

    searchSlots: async function (req, res) {
        
        if(!req.session.email){
            res.redirect('login');
            console.log('User not logged in. Redirected')
        }else{
        var labnum = req.query.labnum;
        var reserveDateTime = req.query.reserveDateTime;
        var projection = 'labnum seatnum reserveDateTime';

        var result = await db.findMany(Reservation, {labnum: labnum, reserveDateTime: reserveDateTime}, projection);
        res.send(result);
        }
    },

   postNewreserve: async function(req, res) {
        var email = req.body.email;
        if (email == null) {
            email = localStorage.getItem('email');
        }
        var username = req.body.username;
        var lab = req.body.lab;
        var seatnum = req.body.seatnum;
        var requestDateTime = req.body.requestDateTime;
        var reserveDateTime = req.body.reserveDateTime;
        var isAnonymous = req.body.isAnonymous;

        var newreserve = {
            email: email,
            username: username,
            labnum: lab,
            seatnum: seatnum,
            requestDateTime: requestDateTime,
            reserveDateTime: reserveDateTime,
            isAnonymous: isAnonymous,
            markasDone: false
        }
        var result = await db.insertOne(Reservation, newreserve);
        //console.log(result);
        res.send(result);
    },

    getExistingreserve: async function (req, res) {
        var currentemail = localStorage.getItem('email');
        var adminemail = await db.findMany(User, {account_type: 'tech'}, ' email ');

        if (adminemail.some(admin => admin.email === currentemail)) {
            var query = {markasDone: false};
        } else {
            var query = {email: currentemail, markasDone: false};
        }

        var projection = ' _id email username labnum seatnum reserveDateTime '
        var result = await db.findMany(Reservation, query, projection);
        //console.log(result);
        res.send(result);
    },

    getAllReserves: async function (req, res) {
        var projection = ' _id email username labnum seatnum requestDateTime reserveDateTime isAnonymous'
        var result = await db.findMany(Reservation, req.query, projection);
        //console.log(result);
        res.send(result);
    },

    postEditreserve: async function (req, res) {
        var username = req.body.username;
        var seatnum = req.body.seatnum;
        var requestDateTime = req.body.requestDateTime;
        var reserveDateTime = req.body.reserveDateTime;
        var isAnonymous = req.body.isAnonymous;
        var id = req.body._id;
        var idtoupdate = new ObjectId(id);

        var update = {
            username: username,
            seatnum: seatnum,
            requestDateTime: requestDateTime,
            reserveDateTime: reserveDateTime,
            isAnonymous: isAnonymous
        }
        var result = await db.updateOne(Reservation, { _id: idtoupdate }, update)
        res.send(result);
    },

    deleteReserve: async function (req, res) {
        var id = req.params.id;
        var idtodelete = new ObjectId(id);

        var result = await db.deleteOne(Reservation, { _id: idtodelete });
        res.send(result);
    },

    postgetSeats: async function (req, res) {
        var seatlab = req.body.labseat;
        var datetime = req.body.datetime;
        var query = {
            labnum: seatlab,
            reserveDateTime: datetime
        };
        var projection = ' seatnum ';

        var result = await db.findMany(Reservation, query, projection);
        res.send(result);
    },

    getEmails: async function (req, res) {
        var query = {account_type: 'student'};
        var projection = ' email ';

        var result = await db.findMany(User, query, projection);
        //console.log(result);
        res.send(result);
    },

    checkAdmin: async function (req, res) {
        var currentemail = localStorage.getItem('email');
        var adminemail = await db.findMany(User, {account_type: 'tech'}, ' email ');
        if (adminemail.some(admin => admin.email === currentemail)) {
            res.send(true);
        } else {
            res.send(false);
        }
    },

    not_MarkasDone: async function (req, res) {
        var query = {markasDone: false};
        var projection = ' reserveDateTime ';

        var result = await db.findMany(Reservation, query, projection);
        //console.log(result);
        res.send(result);
    },

    markasDone: async function (req, res) {
        var ids = req.body;
        var MarkasDoneIds = ids.map(id => new ObjectId(id));

        var filter = {_id: { $in: MarkasDoneIds }};
        var update = {markasDone: true};

        var result = await db.updateMany(Reservation, filter, update);
        res.send(result);
    }
}

module.exports = reservationController;
