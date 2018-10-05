// Document ready
$(document).ready(function () {

    // Set click events
    $('#searchBtn').click(onSearchClick);
    
});

/**
 * Handles click on the search button
 * 
 * @param {*} e Event
 */
function onSearchClick(e) {
    // Results div and make sure to clear it
    var results = $('#results');
    results.children('a').remove();

    // Collect users
    getUsersFromQuery($("#query").val(), function(data) {
        // Append results
        data.forEach(user => results.append('<a href="/' + extractSteam64Id(user.identifier) + '">' + user.name + ' - ' + user.firstname + ' ' + user.lastname + '</a>'));
        results.slideDown();
    });
}

/**
 * Makes a call to the api to obtain users from a query
 * 
 * @param {string} query Query to make
 * @param {function} callback Callback when results are receieved
 */
function getUsersFromQuery(query, callback) {
    $.getJSON('/api/users/' + query.toLowerCase(),
        function (data, textStatus, jqXHR) {
            // Callback!
            return callback(data);
        }
    );
}

/**
 * Extracts the steam64 from an identifier
 * 
 * @param {string} identifier Identifier to extract from
 */
function extractSteam64Id(identifier) {
    return identifier.split(':')[1];
}