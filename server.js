// Imports
var express = require('express');
var bodyParser = require('body-parser');
var appRouter = require('./AppRouter').router;
//Instantiate server
var server = express();
// Body Parser configuration
server.use(bodyParser.urlencoded({extended:true }));
server.use(bodyParser.json());

//configure routes

server.get('/' , function(req,res){
    res.setHeader('Content-type', 'text/html');
    res.status(200).send('<h1> Bonjour sur mon super server</h>');

});

server.use('/app/' , appRouter);

//Launch server
server.listen(8080,function(){
    console.log('Server en écoute :)');
});
