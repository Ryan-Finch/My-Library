const VideoLibrary= require('../models/videoLibrary') 

module.exports={
    create,
    index,
    delete: deleteOne,
    update
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

async function deleteOne(req,res){
    try{
        const deletedVideo=await VideoLibrary.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedVideo)
    }catch(err){
        res.status(500).json(err)
    }
}

async function update(req,res){

    try{
        const updatedVideo = await VideoLibrary.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(200).json(updatedVideo)
    }catch(err){
        res.status(500).json(err)
    }
}