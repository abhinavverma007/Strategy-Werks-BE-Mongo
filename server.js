const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
//cors middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//rate limit middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: `Too many requests from this IP. Please try again later`,
});

app.use(limiter);

mongoose
    .connect(
        `${process.env.MONGO_URI}/sample_mflix?retryWrites=true&w=majority&appName=TYPE-MASTER`,
        {},
    )
    .then(() => {
        console.log('Mongo db connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/api/movies', require('./src/routes/moviesRouter'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
