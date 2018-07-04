var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarCost = new Schema({
    TranportationCarArea : String, 
    TranposrtationCost : Number 
});


var TranportatioCost = mongoose.model('TranportationCost', TranportationSchema);
// make this available to our users in our Node applications
module.exports = TranportatioCost;