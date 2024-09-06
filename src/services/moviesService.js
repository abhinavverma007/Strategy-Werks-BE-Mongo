const Movies = require('../models/Movies');

class MoviesService {
    async getMoviesResults({ limit, offset, filter }) {
        try {
            let query = Movies.find(filter);
            if (limit) query = query.limit(parseInt(limit, 10));
            if (offset) query = query.skip(parseInt(offset, 10));
            const moviesResult = await query.exec();
            return moviesResult;
        } catch (error) {
            throw new Error('Error getting movies results');
        }
    }

    async getMoviesResultsCount(req) {
        try {
            let query = Movies.countDocuments(req.query);
            const countResult = await query.exec()
            return {
                count: countResult
            };
        } catch (error) {
            
        }
    } 
}

module.exports = new MoviesService();
