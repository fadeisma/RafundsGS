var express = require('express');
var bodyParser = require('body-parser');
var calc = require('./modules/Calc');
var tranportationType = require('./staitcInfo/TranportationType');
var transportationArea = require('./staitcInfo/TranportationCarArea');
var passengersCost = require('./staitcInfo/PasengersConst');
var TransportationRefund = require('./db/TransportationRefund');
var mongoose = require('mongoose');
var passport = require('passport')
var session = require('express-session');
var localStrategy = require('passport-local');
var multer = require('multer');

var user = require('./modules/Users');
var upload = multer({des:'./uploads'});

mongoose.connect('mongodb://fadeI:fadesa12@ds125181.mlab.com:25181/ransporationrefunds');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we are connected")
});


const app = express();


app.use('/static', express.static('./server/static'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

// handle session 
app.use(session({
    secret : 'secret',
    saveUninitialized :true,
    resave :true
}))


// pasport 
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/user',user);
app.get('/api/reportData', (req, res) => {
    const refuds = [];
    TransportationRefund.find({}, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.json(data);
        }
    });
});

// app.post('/api/user', function(req,res){
//     console.log(req.body)
// });
    app.get('/api/transportationArea', (req, res) => {
        res.json(transportationArea.TranportationCarArea);
    });

    app.get('/api/transporationTypes', (req, res) => {
        res.json(tranportationType.TransportationType);
    });

    app.get('/api/transporationPassengers', (req, res) => {
        res.json(passengersCost.PassengersCost);
    });



    // Post Request 
    app.post('/api/processData', (req, res) => {
        calc.getRequest(req.body.trasnporationDetails);
        res.json(200);
    });

    const port = 5000;

    app.listen(port, () => console.log('server started on port 5000'));