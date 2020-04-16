import tokenService from './tokenService'

const BASE_URL = '/api/google'

export function getBooksSearch(term){
    return fetch(BASE_URL+'/'+term,
    {
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }   
    }).then(res=>res.json())
    
}

export function getOneBook(id){
  
    return fetch(BASE_URL+'/volume/'+id,
    {
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }   
    }).then(res=>res.json())

}
