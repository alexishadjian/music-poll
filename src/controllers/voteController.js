const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');


exports.createAVote = async (req, res) => {
    
    try {
        await Music.findById(req.params.id_music);
        const newVote = new Vote({...req.body, music_id: req.params.id_music});

        try {
            const vote = await newVote.save();
            res.status(201);
            res.json(vote);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur (db)'})
        }

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur (post inexistant)'})
    }

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