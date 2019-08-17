import React from 'react';

export const getJwt = () => {
    let token = localStorage.getItem('cool-jwt');
    return token;
}