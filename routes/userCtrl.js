// Imports
var bcrypt = require('bcrypt');
const { func } = require('joi');
var jwt = require('jsonwebtoken');
var models = require('../models');


// Routes
module.exports = {
    register: function(req,res){
        // pour implementer
        var idOUVRIERS = req.body.idOUVRIERS;
        var NomOuvrier = req.body.NomOuvrier;
        var PrenomOuvrier = req.body.PrenomOuvrier;
        var EmailOuvrier = req.body.EmailOuvrier;
        var password = req.body.password;
        var username = req.body.username;
        if(EmailOuvrier == null || username == null || password == null){
            return res.status(400).json({'error': 'missing parameters'});
        }
        // to verify pseudo length, mail regex,password etc
        
        models.OUVRIERS.findOne({
            attributes:['Email'],
            where: {EmailOuvrier : Email}
        })
        .then(function(OuvrierFound){
            if(!OuvrierFound){
                bcrypt.hash(password, 5 , function(err,bcryptedPassword){
                    var newOuvrier = models.OUVRIERS.create({
                        idOUVRIERS: idOUVRIERS,
                        NomOuvrier: NomOuvrier,
                        PrenomOuvrier: PrenomOuvrier,
                        EmailOuvrier:EmailOuvrier,
                        password : password,
                        username : username
                       // isAdmin:0
                    })
                    .then(function(newOuvrier){
                        return res.status(201).json({
                            'idOUVRIER':newOuvrier.idOUVRIER
                        })
                    })
                    .catch (function(err){
                        return res.status(500).json({'error':'cannot add ouvrier'});
                    })
                });
            } else {
                return res.status(409).json({'error':'user already exist'});
            }
        })
        .catch(function(err){
            return res.status(500).json({'error':'unable to verify user'});

        });



    },
    login: function(req,res){
        // pour implementer
    },
}