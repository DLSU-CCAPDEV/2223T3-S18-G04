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
        res.render('slot_search');
    }, 

    getSlotAvailability: async function(req, res) {
        res.render('slot_availability');
    }, 

       postNewreserve: async function(req, res) {
        console.log(req.query.email);
            if(req.query.email != null) {
                var email = req.query.email;
            } else {var email = localStorage.getItem('email');}
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
            }
            console.log(newreserve);
            var result = await db.insertOne(Reservation, newreserve);
            console.log(result);
            res.send(result);
        },

        getExistingreserve: async function (req, res) {
            var query = {email: localStorage.getItem('email')};
            var projection = ' _id username labnum seatnum requestDateTime reserveDateTime isAnonymous'
            var result = await db.findMany(Reservation, query, projection);
            console.log(result);
            res.send(result);
        },

        postEditreserve: async function (req, res) {
            var username = req.body.username;
            var seatnum = req.body.seatnum;
            var requestDateTime = req.body.requestDateTime;
            var reserveDateTime = req.body.reserveDateTime;
            var isAnonymous = req.body.isAnonymous;
            var filter = {_id: req.body._id};

            var update = {
                username: username,
                seatnum: seatnum,
                requestDateTime: requestDateTime,
                reserveDateTime: reserveDateTime,
                isAnonymous: isAnonymous
            }
            var result = await db.updateOne(Reservation, filter, update)
            console.log(result);
            res.send(result);
        },

        deleteReserve: async function (req, res) {
            const { id } = req.params;
            const _id = ObjectId(id);

            var result = await db.deleteOne(Reservation, _id);
            console.log(result);
            res.send(result);
        },

        seeReservations: async function (req, res) {
            if(req.query.email != '') {
                var query = {email: req.query.email};
            } else {var query = {email: localStorage.getItem('email')};}
            console.log(query);
            var projection = 'labnum seatnum requestDateTime reserveDateTime'

            var result = await db.findMany(Reservation, query, projection);
            console.log(result);
            res.send(result);
        },

        searchSlots: async function (req, res) {
            var labnum = req.query.labnum;
            var reserveDateTime = req.query.reserveDateTime;
            var projection = 'labnum seatnum reserveDateTime';

            var result = await db.findMany(Reservation, {labnum: labnum, reserveDateTime: reserveDateTime}, projection);
            res.send(result);
        }
}

module.exports = reservationController;
