const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');


exports.listAllVotes = async (req, res) => {
    
    try {
        const votes = await Vote.find({ music_id: req.params.id_music });
        res.status(200);
        res.json(votes);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'})
    }
}



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
            res.json({message: "Server error (db)"})
        }

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Server error (post not found)"})
    }

}

exports.updateAVote = async (req, res) => {

    try {
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Server error"});
    }

}

exports.deleteAVote = async (req, res) => {
    
    try {
        const vote = await Vote.findByIdAndDelete(req.params.id_vote);

        if (vote) {
            res.json({message: "Comment deleted"});
            res.status(200);
        } else {
            res.json({message: "Comment doesn't exist"});
            res.status(204);
        }

    } catch {
        res.status(500);
        console.log(error);
        res.json({message: "Server error"});
    }

}

exports.getAVote = async (req, res) => {
    
    try {
        const vote = await Vote.findById(req.params.id_vote);

        if (vote) {
            res.status(200);
            res.json(vote);
        } else {
            res.status(204);
            res.json({ message: "Vote not found"});
        }

    } catch {
        res.status(500);
        console.log(error);
        res.json({message: "Server error"});
    }

}