const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

// configering files
dotenv.config();

// Rest object
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('Root Route');
});

// port
const PORT = process.env.PORT || 8080;

// creating Server
app.listen(PORT, () => {
    console.log(` server running on http://localhost:${PORT} `.bgWhite.black);
});
