var express = require('express');
var router = express.Router();

// User data
const UserData = require('./lib/UserData');

/* GET a profile */
router.get('/user/:steam64', function(req, res, next) {
    // Get steam64
    var steam64 = req.params.steam64;

    // Load a user's data from the database
    var data = new UserData(steam64);
    data.loadData((err, data) => res.json(data));
});

// Database
const db = require('./lib/database');

/* GET users by search query */
router.get('/users/:query', function(req, res, next) {
    var query = req.params.query.toLowerCase();
    var sql = `SELECT * FROM users WHERE (LOWER(identifier) LIKE '%${query}%' OR LOWER(name) LIKE '%${query}%' OR LOWER(firstname) LIKE '%${query}%' OR LOWER(lastname) LIKE '%${query}%' OR LOWER(phone_number) LIKE '%${query}%')`;
    db.query(sql, function(err, results) {
        if (err) return res.json([]);
        res.json(results);
    });
});

module.exports = router;
