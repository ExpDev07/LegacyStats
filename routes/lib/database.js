// MySQL
var mysql = require('mysql');

// Configuration
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'essentialmode'
});

// Connect
con.connect(function (err) {
    if (err) console.log('Could not connect to database!');
});

// sql, function (err, result)
function query(sql, callback) {
    if (con.err) return;
    con.query(sql, function (err, result) {
        if (callback) callback(err, result);
    });
}

module.exports = { con: con, query: query };