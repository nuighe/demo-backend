const express = require('express');
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

const app = express(); // app express
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
