import axios from 'axios';
export const omdbApi = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params:{apikey:process.env.REACT_APP_API_KEY}
})