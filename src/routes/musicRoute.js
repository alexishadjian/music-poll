const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');


// /music
router
    .route('/')
    .get(musicController.listAllMusic)
    .post(musicController.createAMusic)

// /music/:id_comment
router
    .route('/music/:id_music')
    .put(musicController.updateAMusic)
    .get(musicController.getAMusic)
    .delete(musicController.deleteAMusic);

module.exports = router;