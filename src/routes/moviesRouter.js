const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', async (req, res) => {
    await moviesController.getMoviesResult(req, res);
});

router.get('/count', async (req, res) => {
    await moviesController.getMoviesResultCount(req, res);
});

module.exports = router;
