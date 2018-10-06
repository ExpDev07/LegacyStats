var express = require('express');
var router = express.Router();

/* Index get */
router.get('/', function (req, res, next) {
    res.render('index');
});

// Database
const db = require('./lib/database');

/* Profile get */
router.get('/:steam64', function(req, res, next) {
    // Get steam64 and lower it
    var steam64 = req.params.steam64.toLowerCase();

    // Select from database
    console.log('Loading data for ' + steam64);
    db.query(`SELECT * FROM users WHERE identifier = 'steam:${steam64}'`, (err, results) => {
        // Handle user not being found
        if (results.length == 0) return res.render('profile', { name: 'Not found' });

        // Send user data
        return res.render('profile', results[0]);
    });
});

module.exports = router;
