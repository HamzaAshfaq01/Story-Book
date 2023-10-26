const asyncHandler = require('express-async-handler');
const { getAllNewssMiddleware } = require('./newsHelper');

// @desc Get news data
// @route GET /news
// @access Private
const getAllNews = asyncHandler(async (req, res) => {
  try {
    //get all Top Stories

    const news = await getAllNewssMiddleware();

    if (!news.data) {
      res.status(400);
      throw new Error('No news found');
    }

    res.status(200).send(news.data.results);
  } catch (error) {
    res.status(error.statusCode ? error.statusCode : res.statusCode ? res.statusCode : 500);
    throw new Error(
      `${
        error.statusCode !== 400 && res.statusCode !== 400 ? 'Something went wrong while fetching Top Stories: ' : ''
      }${error.message}`
    );
  }
});

module.exports = {
  getAllNews,
};
