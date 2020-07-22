const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
// router modules
const blocksRouter = require('./routers/blocks.router');
const colorsRouter = require('./routers/colors.router');

//
// MIDDLEWARE
// middleware setup for web application
// --------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// ROUTER REGISTRATION
// --------------------

app.use('/api/blocks', blocksRouter);
app.use('/api/colors', colorsRouter);

//
// RUN SERVER
// --------------------

app.listen(PORT, () => {
    console.log('Server is running on port: ', 5000);
});
