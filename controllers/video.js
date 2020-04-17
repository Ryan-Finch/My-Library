const VideoLibrary= require('../models/videoLibrary') 

module.exports={
    create,
    index
}



async function index(req,res){

    try{

        const videoLibrary = await VideoLibrary.find({user: req.user._id}).populate('user')

        res.status(200).json(videoLibrary)
    }catch(err){
        res.status(500).json(err)
    }
}

async function create(req,res){
    req.body.user = req.user._id

    try{

        const videoLibrary = await VideoLibrary.create(req.body)

        res.status(201).json(videoLibrary)
    }catch(err){
        res.status(500).json(err)
    }
}