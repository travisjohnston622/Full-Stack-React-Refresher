import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function deleteBlock(action) {
    try {
        const response = yield axios({
            method: 'DELETE',
            url: '/api/blocks/' + action.payload,
            data: action.payload
        })
    } catch (err) {
        console.log('Error with deleting block', err);
    }
}
function* deleteBlockSaga() {
    yield takeLatest('DELETE_BLOCK', deleteBlock);
}

export default deleteBlockSaga;