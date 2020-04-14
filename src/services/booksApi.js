import tokenService from './tokenService'

const GOOGLE_API = '/api/google'

export function getBooksSearch(term){
    return fetch(GOOGLE_API+'/'+term,
    {
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }   
    }).then(res=>res.json())
    
}

export function getOneBook(id){
  
    return fetch(GOOGLE_API+'/volume/'+id,
    {
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }   
    }).then(res=>res.json())

}
