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
     * 
     * @param {function} finished Callback when finished
     */
    loadData(finished) {
        // Select from database
        console.log('Loading data for ' + this.steam64);
        db.query(`SELECT * FROM users WHERE identifier = 'steam:${this.steam64}'`, (err, results) => {
            // Handle user not being found
            if (results.length == 0) return finished(true, null);

            // Set data and call finished
            this.data = results[0];
            return finished(false, this);
        });
    }

}

module.exports = UserData;