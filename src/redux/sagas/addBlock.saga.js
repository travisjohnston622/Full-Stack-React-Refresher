import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBlock(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/blocks/',
            data: action.payload
        })
    } catch (err) {
        console.log('Error with block post', err);
    }
}
function* addBlockSaga() {
    yield takeLatest('ADD_BLOCK', addBlock);
}

export default addBlockSaga;