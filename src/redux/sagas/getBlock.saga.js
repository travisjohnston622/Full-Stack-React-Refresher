import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function getBlocks(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/blocks/',
        })
        yield put({
            type: 'SET_BLOCKS',
            payload: response.data
        });
    } catch (err) {
        console.log('Error getting color blocks', err);
    }
}
function* getBlockSaga() {
    yield takeLatest('GET_BLOCKS', getBlocks);
}

export default getBlockSaga;