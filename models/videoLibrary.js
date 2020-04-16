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


module.exports = mongoose.model('VideoLibrary', videoSchema)