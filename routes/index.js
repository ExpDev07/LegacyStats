var express = require('express');
var router = express.Router();

/* Index get */
router.get('/', function (req, res, next) {
    res.render('index');
});

// User data
const UserData = require('./lib/UserData');

router.get('/:steam64', function(req, res, next) {
    // Get steam64
    var steam64 = req.params.steam64;

    // Load a user's data from the database
    var data = new UserData(steam64);
    data.loadData((err, data) => {
        if (err) return res.send(404, 'Profile not found!');
        res.render('profile', data);
    });
});

module.exports = router;
