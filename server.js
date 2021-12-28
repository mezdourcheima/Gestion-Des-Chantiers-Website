// Imports
var express = require('express');
//Instantiate server
var server = express();

//configure routes

server.get('/' , function(req,res){
    res.setHeader('Content-type', 'text/html');
    res.status(200).send('<h1> Bonjour sur mon super server</h>');

});

//Launch server
server.listen(8080,function(){
    console.log('Server en écoute :)');
});
