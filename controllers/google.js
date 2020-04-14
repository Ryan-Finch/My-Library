const API_URL='https://www.googleapis.com/books/v1/volumes?q='
const SINGLE_API_URL='https://www.googleapis.com/books/v1/volumes/'
const MANY_KEY='&key='+process.env.REACT_APP_BOOKS_API_KEY
const ONE_KEY='?key='+process.env.REACT_APP_BOOKS_API_KEY
const order = '&orderBy=relevance'


module.exports={
    getKey
}

async function getKey(req,res){
    key = MANY_KEY;

    console.log(req.body.searchTerm)

    // const book = await etch(API_URL+searchTerm+key + order + pagination)
    // console.log(book)
    // res.status(200).json(book)
}


// return fetch(API_URL+searchTerm+MANY_KEY + order + pagination).then(res => res.json())