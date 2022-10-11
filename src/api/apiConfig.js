import axios from 'axios';

export default axios.create({
    baseURL: `https://5eed24da4cbc340016330f0d.mockapi.io/api/`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});