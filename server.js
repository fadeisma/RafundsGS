var express = require('express');
var bodyParser = require('body-parser');
var calc = require('./modules/Calc');
var tranportationType = require('./staitcInfo/TranportationType');
var transportationArea = require('./staitcInfo/TranportationCarArea');
var passengersCost = require('./staitcInfo/PasengersConst');

var mongoose = require('mongoose');
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

app.get('/api/reportData', (req, res) => {
    const products = [{
        id: 1,
        date: "7/6/18",
        type: 'Car',
        area : 50,
        passengerNumber : 3,
        addtionalCost : 5

    }]
    res.json(products);
});

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