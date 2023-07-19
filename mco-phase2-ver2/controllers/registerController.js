// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user.js');



const registerController = {
    getRegister: function (req, res) {
        res.render('register');
    },

    postRegister: async function (req, res) {
        var email = req.body.email;
        var pw = req.body.password;
        var name = req.body.username;
        var desc = req.body.description;
        var type = req.body.account_type;

        var user = {
            email: email,
            password: pw,
            username: name,
            description: desc,
            account_type: type
        }

        var response = await db.insertOne(User, user);

        if(response != null) {
            res.redirect('/user_profile');
        } else {
            res.render('error');
        }
    }
}

module.exports = registerController;