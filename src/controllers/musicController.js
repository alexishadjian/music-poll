const Music = require('../models/musicModel');

exports.listAllMusic = async (req, res) => {
    
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

exports.createAMusic = async (req, res) => {

    const newMusic = new Music(req.body);
    
    try {
        const music = await newMusic.save();
        res.status(201);
        res.json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'})
    }
}

exports.updateAMusic = async (req, res) => {

    try {
        const music = await Post.findByIdAndUpdate(req.params.id_music, req.body, {new: true});
        res.status(200);
        res.json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }

}

exports.deleteAMusic = async (req, res) => {
    
    try {
        await Post.findByIdAndDelete(req.params.id_music);
        res.status(200);
        res.json({message: 'Musique supprimée'});

    } catch {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }

}

exports.getAMusic = async (req, res) => {
    
    try {
        const music = await Music.findById(req.params.id_music);
        res.status(200);
        res.json(music);

    } catch {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }

}