import {CONFIG } from '../config'
import { User } from '../model/user.model'


export const singUp =async (user:User) => {
    const requestHeaders = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const response = await fetch(CONFIG.server + CONFIG.port + "/users/singUp" , requestHeaders);
    const jsonResponse = await response.json();
    return jsonResponse;
}


export const login =async (loginDetails:{email: string, password: string}) => {
    const requestHeaders = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginDetails)
    };
    const response = await fetch(CONFIG.server + CONFIG.port + "/users/login" , requestHeaders);
    const jsonResponse = await response.json();
    return jsonResponse;
}
