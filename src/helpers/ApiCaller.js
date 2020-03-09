import { baseUrl } from '../constants/Config';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const post = (routes, body) => {
    return fetch(`${baseUrl}/${routes}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });
};

export const get = (routes) => {
    return fetch(`${baseUrl}/${routes}`, {
        method: 'GET',
        headers: headers
    })
};

export const del = (routes, id) => {
    return fetch(`${baseUrl}/${routes}/${id}`, {
        method: 'DELETE',
        headers: headers
    });
};

export const put = (routes, id, body) => {
    return fetch(`${baseUrl}/${routes}/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    });
};