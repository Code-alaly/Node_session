const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')

function recieved(req) {
    req.session.request = req.method + " Request Recieved"
}

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
    // also puts into the header what kind of request it was.
    recieved(req)
    var qParams = "";
    for (var p in req.query){
        qParams += "The name " + p + " contains the value " + req.query[p] + ", ";
    }
    qParams = qParams.substring(0,qParams.lastIndexOf(','));
    qParams += '.';
    var context = {};
    context.dataList = qParams;
    req.session.qParams = context.dataList
    res.render('home', req.session)

})

// app.get('/get-loopback',function(req,res){
//
// });

//here app is posting something, taking request and response, for whenever there is a
// submit button? if there is something in tod-o, then it gets pushed onto what's already there,
// otherwise it becomes the start of the new list.

// when the app gets any post method, it takes the req, waits for the response,
// and then does something with the response
app.post('/', (req, res) => {
    // that puts into the header what kind of request that it was.
    recieved(req)
    // so it re renders on the post, it doesn't do another get every time something happens
    res.render('home', req.session)
})

// when the app gets the first ready signal for the page.
app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
})

