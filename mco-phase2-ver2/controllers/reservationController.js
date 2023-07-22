// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const reservationController = {

        getReservation: function(req, res) {
            localStorage.clear();
            res.render('')
        },

        getSearchSlots: function(req, res) {
            localStorage
        }

}

module.exports = reservationController;