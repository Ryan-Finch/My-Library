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