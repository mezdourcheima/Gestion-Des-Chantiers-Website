//imports
var express = require('express');
var usersCtrl = require('./routes/userCtrl');

//Router

exports.router = (function (){
    var appRouter = express.Router();
    // Users routes
    appRouter.route('/users/register/').post(usersCtrl.register);
    appRouter.route('/users/login/').post(usersCtrl.login);
    return appRouter;
})();