const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

let app = express ();
let router = require('./routes/router')

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'))


//routes
app.use(router);

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// file statiic
app.use(express.static(path.join(__dirname,'./public')))

// starting the server
app.listen(app.get('port'), () => {
    console.log('Listin port on: ' + app.get('port'));
});
