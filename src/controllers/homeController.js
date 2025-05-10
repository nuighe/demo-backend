const getHomepage = (req, res) => {
    res.send('hello world viet');
}

const getHomename = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getHomename
}