const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Mixed } = Schema.Types;

const travelSchema = new Schema({

    destination: {
        type: String,
        required: [true, 'Destination is required']
    },

    startDate: {
        type: mongoose.SchemaTypes.Date, 
        required: [true, 'Date is required'],
        default: Date.now
    },

    imageUrl: {
        type: String,
        required: [true, 'Image is required']
    },

    description: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: [true, 'Duration is required']
    },

    price: {
        type: Number,
        required: [true, 'Price is required']
    },

    additionalTrips: [],

    participants: [{
        type: ObjectId,
        ref: "User"
    }]

});

travelSchema.plugin(timeZone, { paths: ['date', 'subDocument.subDate'] });

module.exports = new Model('Travel', travelSchema);