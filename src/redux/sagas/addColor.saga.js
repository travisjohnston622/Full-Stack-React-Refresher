import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function addColor(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/colors/',
            data: action.payload
        })
    } catch (err) {
        console.log('Error with block post', err);
    }
}
function* addColorSaga() {
    yield takeLatest('ADD_COLOR', addColor);
}

export default addColorSaga;