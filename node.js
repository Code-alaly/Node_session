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
// here's some comments of some different things and changes

app.use(session({secret: 'asecret'}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// every time it gets a request, will check the session id to see some unique identifiers
app.get('/', (req, res) => {
    // console.log('==================')
    console.log('==================')
    console.log(req.sessionStore)
    console.log('==================')
    // console.log(req.session)
    // console.log('==================')
    // console.log(req.session.id)
    // console.log('==================')
    res.render('home', req.session)
})


app.post('/', (req, res) => {
    if (req.session.todo)
        req.session.todo.push(req.body)
    else
        req.session.todo = [req.body]
    console.log('==================')
    console.log(req.sessionStore)
    console.log('==================')
    // so it re renders on the post, it doesn't do another get every time something happens
    res.render('home', req.session)
})

// when the app gets the first ready signal for the page.
app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
})

