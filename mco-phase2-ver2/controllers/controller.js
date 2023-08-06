const controller = {
    
    getAbout: function (req, res) {
        
        if(!req.session.email){
            res.redirect('login');
            console.log('User not logged in. Redirected')
        }else{
        res.render('about');
        }
    }
}

module.exports = controller;