const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const videoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    videoId:{
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps:true
})


const librarySchema = new Schema({ 
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: Array,
        required: true
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
    bookId:{
        type: String,
        required: true
    },
    currentlyReading:{
        type: Boolean,
        default: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});


module.exports = mongoose.model('Library', librarySchema)