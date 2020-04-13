const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({ 
    title: {
        type: String,
        // required: true,
    },
    authors: {
        type: Array,
        // required: true
    },
    description:{
        type: String
    },
    cover:{
        type: String
    },
    owned:{
        type: Boolean,
        default: false
    },
    read:{
        type: Boolean,
        default: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Library', librarySchema)