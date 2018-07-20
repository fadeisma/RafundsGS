var express = require('express')
var router = express.Router()

// middleware that is specific to this router

// define the home page route
router.post('/',function (req, res) {
     console.log(req.body)
  res.send('Birds home page')
})
// define the about route


module.exports = router