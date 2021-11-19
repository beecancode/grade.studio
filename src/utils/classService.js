import tokenService from './tokenService';
const BASE_URL = '/api/classes/';

export function getClasses() {
    const token = tokenService.getToken()
    return fetch(BASE_URL , {
        method: 'GET',
        headers: new Headers({
            Authorization: `Bearer ${token}`
        })  
    })
        .then(res => {
            if (res.ok) return res.json();
            // Probably a duplicate email

            throw new Error(res);
        })
}


export function addClass(classObject) {
    const token = tokenService.getToken()
    return fetch(BASE_URL + 'create', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }),  
        body: JSON.stringify(classObject)
    })
        .then(res => {
            if (res.ok) return res.json();
            // Probably a duplicate email

            throw new Error(res);
        })
        // Parameter destructuring!
        
    // The above could have been written as
    //.then((token) => token.token);

}