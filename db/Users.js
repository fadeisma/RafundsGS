var mongoose = require('mongoose');
//var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName : {type : String , unique : true} ,
    password : String,
    departement : String,
    customer : String,
    role : String
});

var User = mongoose.model('User', UserSchema);
//TranportationSchema.plugin(autoIncrement.plugin, 'TranportationRefund');


// make this available to our users in our Node applications
module.exports = User;