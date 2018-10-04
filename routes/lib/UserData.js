const db = require('./database');

/**
 * Class to store data of a user
 */
class UserData {

    constructor(steam64) {
        this.steam64 = steam64;
    }

    /**
     * Loads data from the database
     */
    loadData(finished) {
        // Select from database
        console.log('Loading data...');
        db.query(`SELECT * FROM users WHERE identifier = 'steam:${this.steam64}'`, (err, results) => {
            if (results.length == 0) return console.log('User not found');

            // Set data and call finished
            this.data = results[0];
            finished(this);
        });
    }

}

function getSteamId(identifier) {
    return identifier.split(':')[1];
}

module.exports = UserData;