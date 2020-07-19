import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://api.tvmaze.com/search/shows?q=girls'
    baseURL: 'https://gorest.co.in/public-api/users?_format=json&access-token=y-FLqITpr25vmS6YeLFaputd2RMl03rSh2DM' 
});

export default api;