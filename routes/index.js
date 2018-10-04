var express = require('express');
var router = express.Router();

/* Index get */
router.get('/', function (req, res, next) {
    res.render('index');
});

// Module for http requests
const request = require('request');

/* Profile get */
router.get('/:steam64', function(req, res, next) {
  // The steam64 for the profile
  var steam64 = req.params.steam64;

    // Make a request to our API
    request('0.0.0.0:3000/api/' + steam64, { json: true }, (err, re, body) => {
      if (err) return console.log(err);
      console.log(body);
      res.render("profile", body);
    });
});

module.exports = router;
