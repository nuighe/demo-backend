const connection = require('../config/database');


const getHomepage = (req, res) => {

    let user = [];

    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            user = results;
            console.log("........results= ", results);

            res.send(JSON.stringify(user));
        }
    );
}

const getHomename = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getHomename
}