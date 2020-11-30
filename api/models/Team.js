const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const teamSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    imageUrl: {
        type: String,
        required: [true, 'Image is required']
    },

    position: {
        type: String,
        required: [true, 'Position is required']
    }

});

module.exports = new Model('Team', teamSchema);