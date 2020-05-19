const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
var bodyParser = require('body-parser');

function recieved(req) {
    req.session.request = req.method + " Request Recieved"
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function create_table(req, placement) {

    var myParams = {};
    for (var p in req) {
        myParams[p] = req[p]
    }

    req.session.qParams = myParams
}

function setQParams(req, input, qParams) {
    input = qParams
}

// create our app obj
const app = express()
// set the port to the port you are communicating with
app.set('port', 54316);
//

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(session({secret: 'asecret'}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// every time it gets a request, will check the session id to see some unique identifiers
app.get('/', (req, res) => {
    // also puts into the header what kind of request it was.
    recieved(req)
    create_table(req.query, req.session)
    res.render('home', req.session)
})

app.post('/', (req, res) => {
    // that puts into the header what kind of request that it was.
    recieved(req)
    console.log(req.body)
    setQParams(req, create_table(req.query, req.body))
    // so it re renders on the post, it doesn't do another get every time something happens
    res.render('home', req.session)
})

// when the app gets the first ready signal for the page.
app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
})

