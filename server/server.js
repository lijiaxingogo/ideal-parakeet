const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const pokemonRoute = require('./routes/pokemonRoute');
// request logger middleware
app.use(morgan('tiny'));
// body parser middleware
app.use(express.json());
// router for Pokemon
app.use('/pokemon', pokemonRoute);
// default error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error (default error handler)',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
// start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`your app is running on port ${port}`);
});
