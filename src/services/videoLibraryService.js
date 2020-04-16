import tokenService from './tokenService'

const BASE_URL ='/api/video'

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