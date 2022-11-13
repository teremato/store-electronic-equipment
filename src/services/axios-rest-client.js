import axios from "axios";


const token = localStorage.getItem('token');

export const $api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${ (token) ? token : '' }`
    }
});
