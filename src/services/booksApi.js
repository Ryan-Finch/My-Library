const API_URL='https://www.googleapis.com/books/v1/volumes?q='
const SINGLE_API_URL='https://www.googleapis.com/books/v1/volumes/'
const MANY_KEY='&key='+process.env.REACT_APP_BOOKS_API_KEY
const ONE_KEY='?key='+process.env.REACT_APP_BOOKS_API_KEY
const order = '&orderBy=relevance'
const pagination = '&startIndex=0&maxResults=40'

export function getBooksSearch(searchTerm){
    // console.log(order)
    return fetch(API_URL+searchTerm+MANY_KEY + order + pagination).then(res => res.json())
}

// 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=APIKEY

export function getOneBook(id){
    // console.log(fetch(SINGLE_API_URL + id+ ONE_KEY).then(res=>res.json()))
    return fetch(SINGLE_API_URL + id+ ONE_KEY).then(res=> res.json())
}

//replace volumeId with id of book to find specific info of book
// https://www.googleapis.com/books/v1/volumes/volumeId