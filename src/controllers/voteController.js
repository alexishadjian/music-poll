const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.voteForMusic = async (req, res) => {
    
}

exports.getResults = async (req, res) => {
    
    try {
        const musics = await Music.find({});
        res.status(200);
        res.json(musics);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'})
    }
}