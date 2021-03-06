var express = require('express'); // defining the Express application
var router = express.Router(); // defining the router, which define an app behavior when a specific reuest is received

db = require('../queries');

router.get('/api/get/:id', db.getRequest); // outputs the getRequest function

module.exports = router;