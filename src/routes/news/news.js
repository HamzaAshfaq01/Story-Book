const express = require('express');

const { getAllNews } = require('../../controllers/news/newsController');

const route = express.Router();

route.get('/', getAllNews);

module.exports = route;
