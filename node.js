const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')

// create our app obj
const app = express()
// set the port to the port you are communicating with
app.set('port', 54316);
//
app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(session({secret: 'asecret'}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// every time it gets a request, will check the session id to see some unique identifiers
app.get('/', (req, res) => {
    // console.log('==================')
    // console.log('==================')
    // console.log(req.sessionStore)
    // console.log('==================')
    // console.log(req.session)
    // console.log('==================')
    // console.log(req.session.id)
    // console.log('==================')
    res.send(null)
})

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
})



//
//
// var express = require('express');
//
// var app = express();
//
// app.set('port', 54316);
//
// app.get('/',function(req,res){
//     res.type('text/plain');
//     res.send('Welcome to the main page!');
// });
//
// app.get('/other-page',function(req,res){
//     res.type('text/plain');
//     res.send('Welcome to the other page!');
// });
//
// app.use(function(req,res){
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - Not Found');
// });
//
// app.use(function(err, req, res, next){
//     console.error(err.stack);
//     res.type('plain/text');
//     res.status(500);
//     res.send('500 - Server Error');
// });
//
// app.listen(app.get('port'), function(){
//     console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
// });