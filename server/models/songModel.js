const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },

    chords: [{
        type : String,
        required : true
    }],
    
    capo: {
        type : String,
        required : true
    },

    imageUrl : {
        type: String,
        required: true
    },

    userOwner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true,
    },
});

const SongModel = mongoose.model("Songs", songSchema);

module.exports = SongModel;