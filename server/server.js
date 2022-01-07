const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

// request logger middleware
app.use(morgan('tiny'));
// body parser middleware
app.use(express.json());

// start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`your app is running on port ${port}`);
});
