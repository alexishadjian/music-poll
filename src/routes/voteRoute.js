const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');


// /music
router
    .route('/votes/:id_music')
    // .get(voteController.voteForMusic)
    .post(voteController.voteForMusic)

// /music/:id_comment
router
    .route('/votes/result')
    .put(voteController.getResults)
    // .get(musicController.getAMusic)
    // .delete(musicController.deleteAMusic);

module.exports = router;