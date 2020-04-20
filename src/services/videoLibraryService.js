import tokenService from './tokenService'
import fetch from 'node-fetch';

const BASE_URL ='/api/video'


export function getAll(){
    return fetch(BASE_URL,{
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(res => res.json());
}

export function create(video, ){

    return fetch(BASE_URL, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
            'Authorization':`Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(video)
    }).then(res => res.json());
}

export function deleteOne(id){
    return fetch(BASE_URL+'/'+id,{
        method: 'DELETE',
        headers:{
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(res=>res.json())
}

export function update(updatedInfo,id){

    return fetch(BASE_URL+'/'+id,{
        method:'PUT',
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(updatedInfo) 
    }).then(res=>res.json())
}