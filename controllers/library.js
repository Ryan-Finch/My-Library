const Library = require('../models/library')

module.exports ={
    create,
    index,
    indexOne,
    update
};

//All Index
async function index(req,res){

    try{
        const library = await Library.find({user: req.user._id}).populate('user');
        
        res.status(200).json(library)
    }catch(err){
        res.status(500).json(err)
    }
}

//Index of One
async function indexOne(req,res){

    try{
        const book = await Library.find({user:req.user._id, bookId: req.params.id}).populate('user');
        
        res.status(200).json(book)
    }catch(err){
        res.status(500).json(err)
    }
}

//Create
async function create(req,res){
    req.body.user = req.user._id;

    try{
        const library = await Library.create(req.body);

        res.status(201).json(library)
    }catch(err){
        res.status(500).json(err)
    }
}

//update
async function update(req,res){

    try{
        const updatedLibrary = await Library.findOneAndUpdate({user:req.user._id, bookId: req.params.id}, req.body, {new:true})
        res.status(200).json(updatedLibrary)
    }catch(err){
        res.status(500).json(err)
    }
}