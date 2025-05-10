const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express(); // app express
const port = process.env.PORT;
const hostnaem = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// config static file
app.use(express.static(path.join(__dirname, 'public')));

// khai baos route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/viet", (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
