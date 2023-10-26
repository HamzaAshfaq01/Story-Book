import * as types from '../actions';

const INITIAL_STATE = {
  newsList: null,
  isInitialized: false,
  message: null,
  error: null,
  coupon: '',
};

export default function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INITIAL: {
      return {
        ...state,
        isInitialized: true,
      };
    }

    case types.GET_NEWS_SUCCESS: {
      return {
        ...state,
        isInitialized: true,

        newsList: action.payload.items,
        message: null,
        error: null,
      };
    }

    case types.NEWS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case types.CLEAR_NEWS_LIST: {
      return {
        ...state,
        newsList: null,
      };
    }

    case types.CLEAR_MESSAGE: {
      return {
        ...state,
        message: null,
      };
    }
    case types.CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}
