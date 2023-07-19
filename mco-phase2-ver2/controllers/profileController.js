// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

const profileController = {
    getProfile: async function (req, res) {
        var query = {email: localStorage.getItem('email')};
        var projection = 'email username description account_type';

        var result = await db.findOne(User, query, projection);

        if(result != null) {
            var details = {
                email: result.email,
                username: result.username,
                description: result.description,
                account_type: result.account_type
            }

            console.log(details);

            res.render('user_profile', details);
        } else {res.render('error');}
    }
}

module.exports = profileController;