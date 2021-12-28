// Imports
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// Routes
module.exports = {
    register: function(req,res){
        // pour implementer
        var EmailOuvrier = req.body.EmailOuvrier;
        var password = req.body.password;
        var username = req.body.username;
        if(EmailOuvrier == null || username == null || password == null){
            return res.status(400).json({'error': 'missing parameters'});
        }
    
    },
    login: function(req,res){
        // pour implementer
    },
}