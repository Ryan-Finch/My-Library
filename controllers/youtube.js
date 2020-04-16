const API_URL = 'https://www.googleapis.com/youtube/v3/'
const KEY = '&key=' + process.env.REACT_APP_BOOKS_API_KEY
const fetch = require("node-fetch")

module.exports={
    getKey,
}

async function getKey(req,res){
    term = '&q='+req.params.id

    try{
        const searchResults = await fetch(API_URL + 'search?part=snippet&maxResults=30'+term + KEY).then(res => res.json())
        res.status(200).json(searchResults)
    }catch(err){
        res.status(500).json(err)
    }
}