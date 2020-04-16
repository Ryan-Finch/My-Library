const VideoLibrary= require('../models/videoLibrary') 

module.exports={
    create,
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