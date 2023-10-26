const express = require('express');
let cors = require('cors');

const { errorHandler } = require('../src/middleware/errorMiddleware'),
  news = require('../src/routes/news/news');

module.exports = function (app) {
  app.use(express.static('public'));
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(cors());

  app.use('/news', news);

  app.use(errorHandler);
};
