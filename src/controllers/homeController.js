const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getHomename = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log("check-> ", email, name, city);

    // connection.query(
    //     ` INSERT INTO users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //     }
    // );

    let [results, fields] = await connection.query(` INSERT INTO users (email, name, city)
        VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log("check user-> ", results);
    res.send("aaaaaaaaaaaaaaa");

    //     const [results, fields] = await connection.query('SELECT * FROM users');
    //     console.log("check user-> ", results);
    // }
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getHomename,
    postCreateUser,
    getCreatePage
}