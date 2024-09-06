const mongoose = require('mongoose');

class Movies {
    constructor() {
        const movieSchema = new mongoose.Schema({
            plot: String,
            genres: [String],
            runtime: Number,
            rated: String,
            cast: [String],
            num_mflix_comments: Number,
            poster: String,
            title: String,
            fullplot: String,
            countries: [String],
            released: Date,
            directors: [String],
            writers: [String],
            awards: {
                wins: Number,
                nominations: Number,
                text: String,
            },
            lastupdated: Date,
            year: Number,
            imdb: {
                rating: Number,
                votes: Number,
                id: Number,
            },
            type: String,
            tomatoes: {
                viewer: {
                    rating: Number,
                    numReviews: Number,
                    meter: Number,
                },
                production: String,
                lastUpdated: Date,
            },
        });

        this.Model = mongoose.model('Movies', movieSchema);
    }
}

module.exports = new Movies().Model;
