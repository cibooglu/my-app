import {takeLatest, put, call} from 'redux-saga/effects';
import { loadPostSuccess, loadPostFail } from './app.actions';
import {loadPostApi} from './api';

export function* onLoadPostStartAsync() {
try {
    const response = yield call(loadPostApi);
    yield put(loadPostSuccess(response.data.units));
} catch(error) {
    yield put(loadPostFail(error));
}
}

export function* onLoadPost() {
yield takeLatest("LOAD_POST_START", onLoadPostStartAsync);
} 