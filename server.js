var express = require('express');
var bodyParser = require('body-parser');
var calc = require('./modules/Calc');

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
    const tableData = [
        { date: '7/11/2018', transporationType: 'Bus', Cost: 120 }
    ]
    res.json(tableData);
});

app.get('/api/transporationTypes', (req, res) => {
    const trasnportation = [
        { id: 1, TransportationType: 'Bus' },
        { id: 2, TransportationType: 'Car' },
        { id: 3, TransportationType: 'Train' }
    ];

    res.json(trasnportation);
});

app.post('/api/processData', (req, res) => {
    calc.getRequest(req.body);
    res.json(req.body);

});

const port = 5000;

app.listen(port, () => console.log('server started on port 5000'));