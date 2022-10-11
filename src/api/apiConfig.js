import axios from 'axios';

export default axios.create({
    baseURL: `https://5eed24da4cbc340016330f0d.mockapi.io/api/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
    },
});