import axios from '../utils/axios';

export const getNews = () => axios.get('/news');
