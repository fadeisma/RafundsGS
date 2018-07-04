var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TranportationSchema = new Schema({
    TranportationDate : Date ,
    TranportationType : String,
    TranportationArea : String,
    PssengersNumber : Number,
    TranportationCost : Number,
    AddtionalCost: Number 
});

var TranportationRefund = mongoose.model('TranportationType', TranportationSchema);

// make this available to our users in our Node applications
module.exports = TranportationRefund;