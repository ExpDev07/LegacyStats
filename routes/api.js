var express = require('express');
var router = express.Router();

// Database
const db = require('./lib/database');

/* GET users by search query */
router.get('/:query', function(req, res, next) {
    var query = req.params.query.toLowerCase();
    var sql = `SELECT * FROM users WHERE (LOWER(identifier)LIKE '%${query}%' OR LOWER(name) LIKE '%${query}%' OR LOWER(firstname) LIKE '%${query}%' OR LOWER(lastname) LIKE '%${query}%' OR LOWER(phone_number) LIKE '%${query}%')`;
    db.query(sql, function(err, results) {
        if (err) return res.json([]);
        res.json(results);
    });
});

module.exports = router;
