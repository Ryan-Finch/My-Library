import userService from './userService'
import tokenService from './tokenService'

const BASE_URL= '/api/library'

export function getAll(){
    return fetch(BASE_URL,{
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(res => res.json());
}

export function create(book, data){

    const library = {
        title: book[0].volumeInfo.title,
        authors: book[0].volumeInfo.authors,
        descriptions: book[0].volumeInfo.descriptions,
        cover: book[0].volumeInfo.imageLinks.small ? book[0].volumeInfo.imageLinks.small : book[0].volumeInfo.imageLinks.thumbnail,
        owned: data.owned,
        read:data.read
    }
    return fetch(BASE_URL,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
            'Authorization':`Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(library)
    }).then(res =>res.json());
}
