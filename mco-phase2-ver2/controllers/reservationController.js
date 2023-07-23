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
            var query = {email: req.query.email};
            var projection = 'labnum seatnum requestDateTime reserveDateTime'

            var result = await db.findMany(Reservation, query, projection);
            res.send(result);
        }
}

module.exports = reservationController;