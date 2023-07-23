// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/user.js`
const User = require('../models/user.js');

// import module `Reservation` from `../models/reservation.js`
const Reservation = require('../models/reservation.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const reservationController = {
        postNewreserve: async function(req, res) {
            try {
                var email = localStorage.getItem('email');
                var {reservenumber, username, lab, seat, requestdatetime, reservedate, time, isAnonymous} = req.body
                if (!seat || reservedate === '' || time === '') {
                    res.status(400).json({ message: 'Error: Incomplete entries'});
                } else {
                    var reservedatetime = reservedate + "T" + time;
                    const newreserve = {email, reservenumber, username, lab, seat, requestdatetime, reservedatetime, isAnonymous};
                    console.log(newreserve);
                    var res = await db.insertOne(Reservation, newreserve)
                        .then(result => res.json(result))
                        .catch(error => res.json(error));
                }
            } catch (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred while fetching data.' });
            }
        },
    
        postEditreserve: async function (req, res) {
            try {
                var email = localStorage.getItem('email');
                var {reservenumber, username, lab, seat, requestdatetime, reservedate, time, isAnonymous} = req.body
                var reservedatetime = reservedate + "T" + time;
                var filter = { reservenumber: reservenumber };
                var update = {$set: { email, reservenumber, username, lab, seat, requestdatetime, reservedatetime, isAnonymous},};
                var res = await db.updateOne(Reservation, filter, update)
                    .then(result => res.json(result))
                    .catch(error => res.json(error));
            } catch (error) {   
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred while fetching data.' });
            }
        },
    
        getExistingreserve: async function (req, res) {
            try {
                var query = {email: localStorage.getItem('email')};
                var projection = 'email reservenumber username lab seat requestdatetime reservedatetime isAnonymous'
                const specificlabs = await db.findMany(Reservation, query, projection);
                res.json(specificlabs);
            } catch (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred while fetching data.' });
            }
        },
    
        deleteReserve: function(req, res) {
            try {
                const {reservenumber} = req.body;
                var filter = { reservenumber: reservenumber };
                db.deleteOne(User, filter)
                    .then(result => res.json(result))
                    .catch(error => res.send(error));
            } catch (error) {
                console.error('Error:', error);
                res.status(500).json({ error: 'An error occurred while fetching data.' });
            }
        },
    
        // getGetSize: async function (req, res) {
        //     try {
        //         const size = await Reservation.countDocuments();
        //         res.json({ size });
        //     } catch (error) {
        //         console.error('Error:', error);
        //         res.status(500).json({ error: 'An error occurred while fetching data.' });
        //     }
        // }

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
