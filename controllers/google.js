const API_URL='https://www.googleapis.com/books/v1/volumes?q='
const SINGLE_API_URL='https://www.googleapis.com/books/v1/volumes/'
const MANY_KEY='&key='+process.env.REACT_APP_BOOKS_API_KEY
const ONE_KEY='?key='+process.env.REACT_APP_BOOKS_API_KEY
const order = '&orderBy=relevance'
const pagination = '&startIndex=0&maxResults=40'
const fetch = require("node-fetch")

module.exports={
    getKey,
    getOne
}

async function getKey(req,res){

    try{
        const searchResults = await fetch(API_URL + req.params.term +MANY_KEY + order + pagination).then(res => res.json())

        res.status(200).json(searchResults)
    }catch(err){
        res.status(500).json(err)
    }

}

async function getOne(req,res){

    try{
        const getBook = await fetch(SINGLE_API_URL + req.params.id+ONE_KEY).then(res=>res.json())

        res.status(200).json(getBook)

    }catch(err){
        res.status(500).json(err)
    }
}

// return fetch(API_URL+searchTerm+MANY_KEY + order + pagination).then(res => res.json())

// 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=APIKEY