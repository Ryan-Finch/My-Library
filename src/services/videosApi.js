import tokenService from "./tokenService";


const BASE_URL= '/api/youtube'

export function getVideosSearch(searchTerm){
    return fetch(BASE_URL + '/' + searchTerm,
    {
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }   
    }).then(res=>res.json())
}