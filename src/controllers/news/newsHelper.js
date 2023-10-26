const axios = require('axios');

const apiUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json'; // Sample API endpoint

const getAllNewssMiddleware = () => {
  return axios
    .get(`${apiUrl}?api-key=${process.env.API_KEY}`)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

//
module.exports = {
  getAllNewssMiddleware,
};
