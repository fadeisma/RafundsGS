var mongoose = require('mongoose');
//var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;



var TranportationSchema = new Schema({
    TranportationDate : Date ,
    TranportationType : String,
    TranportationArea : String,
    PssengersCost : String,
    AddtionalCost: String,
    TotlaCost : Number,
});
var TranportationRefund = mongoose.model('TranportationType', TranportationSchema);
//TranportationSchema.plugin(autoIncrement.plugin, 'TranportationRefund');


// make this available to our users in our Node applications
module.exports = TranportationRefund;