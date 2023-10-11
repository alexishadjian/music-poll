const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');


router
    .route('/')
        .get(musicController.listAllMusics)
        .post(musicController.createAMusic)


router
    .route('/:id_music')
        .put(musicController.updateAMusic)
        .get(musicController.getAMusic)
        .delete(musicController.deleteAMusic);


router
    .route('/music/results')
        .put(musicController.getResults);

module.exports = router;