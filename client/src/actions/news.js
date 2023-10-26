import * as types from './index';

export const initial = () => ({
  type: types.INITIAL,
});

// send the request to fetch all news
export const getNewsRequest = () => ({
  type: types.GET_NEWS_REQUEST,
});
// sending the data to redux store of all news
export const getNewsSuccess = ({ items }) => ({
  type: types.GET_NEWS_SUCCESS,
  payload: {
    items,
  },
});

export const newsError = ({ error }) => ({
  type: types.NEWS_ERROR,
  payload: {
    error,
  },
});

export const clearNewsList = () => ({
  type: types.CLEAR_NEWS_LIST,
});

export const clearMessage = () => ({
  type: types.CLEAR_MESSAGE,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
});
