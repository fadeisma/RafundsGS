var express = require('express')
var router = express.Router()
var GalilInfo   =  require('../staitcInfo/GalilInfo');
var userInfo = require('../db/Users');

// middleware that is specific to this router

// define the home page route
router.post('/register',function (req, res) {
    var Userdetails = new userInfo({
        userName : req.body.user.email,
        fullName : req.body.user.firstName +' '+  req.body.user.lastName,
        password: req.body.user.password,
        departement : req.body.user.department.value,
        customer  : req.body.user.customer.value,
    });
    console.log('UserDer' , Userdetails);
    Userdetails.save((err) => {if (err) console.log('Failed to insert User to DB')});
    
  
});

router.get('/GalilCustomers', (req, res) => {
    res.json(GalilInfo.GalilCustoemrs);
});

router.get('/GalilDepartement', (req, res) => {
    res.json(GalilInfo.GalilBU);
});


module.exports = router