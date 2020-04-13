const Library = require('../models/library')

module.exports ={
    create,
    index
};

async function index(req,res){

    try{
        const library = await Library.find({user: req.user._id}).populate('user');
        
        res.status(200).json(library)
    }catch(err){
        res.status(500).json(err)
    }
}


async function create(req,res){
    req.body.user = req.user._id;

    try{
        const library = await Library.create(req.body);
        console.log('library:', library)
        res.status(201).json(library)
    }catch(err){
        res.status(500).json(err)
    }
}