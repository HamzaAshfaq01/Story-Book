import { takeEvery, call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/news';
import * as api from '../api/news';
import * as types from '../actions';

function* getNews() {
  try {
    const result = yield call(api.getNews);

    yield put(
      actions.getNewsSuccess({
        items: result.data,
      })
    );
  } catch (e) {
    yield put(
      actions.newsError({
        error: e.message,
      })
    );
  }
}

function* watchGetNewsRequest() {
  yield takeLatest(types.GET_NEWS_REQUEST, getNews);
}

const newsSagas = [fork(watchGetNewsRequest)];

export default newsSagas;
