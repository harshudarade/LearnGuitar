const express = require('express');
const mongoose = require('mongoose');
const SongModel = require("../models/songModel");
const UserModel = require("../models/authModel");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await SongModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

// create a new recipe
router.post("/", async (req, res) => {
    const song = new SongModel(req.body);
    try {
        const response = await song.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.put("/", async(req, res) => {
    try {
        const song = await SongModel.findById(req.body.songID);
        const user = await UserModel.findById(req.body.userID);
        user.savedSongs.push(song);
        await user.save();
        res.json({
            savedSongs: user.savedSongs
        });

    } catch (err) {
        res.json(err);
    }
});

router.get("/savedSongs/ids", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID);
        res.json({
            savedSongs: user?.savedSongs
        });

    } catch (err) {
        res.json(err);
    }
});

router.get("/savedSongs", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID);
        const savedSongs = await SongModel.find({
            _id: {
                $in: user.savedSongs
            },
        });

        res.json({
            savedSongs
        });

    } catch (err) {
        res.json(err);
    }
});

module.exports = router;