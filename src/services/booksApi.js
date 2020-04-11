const API_URL='https://www.googleapis.com/books/v1/volumes?q='
const KEY=process.env.BOOKS_API_KEY
const order = '&orderBy=relevance&'
const pagination = '&startIndex=0&maxResults=20'

export function getBooksSearch(searchTerm){
    console.log(API_URL+searchTerm+KEY+pagination)
    return fetch(API_URL+searchTerm+order+KEY+pagination).then(res=>res.json())
}

// 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDUSPfNfVXsyNu8EBMElBIm4XyZtx8LGbY'



//replace volumeId with id of book to find specific info of book
// https://www.googleapis.com/books/v1/volumes/volumeId