var express = require('express');
var router = express.Router();

// User data
const UserData = require('./lib/UserData');

/* GET a profile */
router.get('/:steam64', function(req, res, next) {
    // Get steam64
    var steam64 = req.params.steam64;

    // Load a user's data from the database
    var data = new UserData(steam64);
    data.loadData(data => res.json(data));
});

module.exports = router;
