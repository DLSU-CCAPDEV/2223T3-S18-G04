// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/user.js`
const User = require('../models/user.js');

// import module `Reservation` from `../models/reservation`
const Reservation = require('../models/reservation.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const reservationController = {
        getReservation: function(req, res) {
            res.render('')
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