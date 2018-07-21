var express = require('express')
var router = express.Router()
var GalilInfo   =  require('../staitcInfo/GalilInfo');

// middleware that is specific to this router

// define the home page route
router.post('/register',function (req, res) {
     console.log(req.body)
  res.send('Birds home page')
});

router.get('/GalilCustomers', (req, res) => {
    res.json(GalilInfo.GalilCustoemrs);
});

router.get('/GalilDepartement', (req, res) => {
    res.json(GalilInfo.GalilBU);
});
// define the about route


module.exports = router