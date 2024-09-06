const moviesService = require('../services/moviesService');

class MoviesController {
    async getMoviesResult(req, res) {
        const { limit, offset, ...filter } = req.query;
        try {
            const moviesResult = await moviesService.getMoviesResults({
                limit,
                offset,
                filter,
            });
            res.status(200).json(moviesResult);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async getMoviesResultCount(req,res) {
        try {
            const moviesResultCount = await moviesService.getMoviesResultsCount({
                req,
            });
            res.status(200).json(moviesResultCount);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new MoviesController();
