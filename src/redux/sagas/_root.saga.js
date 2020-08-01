import { all, takeEvery } from 'redux-saga/effects';
//Sagas
import getBlocksSaga from './getBlock.saga';
import deleteBlockSage from './deleteBlock.saga';
import getColorsSaga from './getColors.saga';
import addBlockSaga from './addBlock.saga';
import addColorSaga from './addColor.saga';
//Watch Saga
function* rootSaga() {
    yield takeEvery('ADD_BLOCK', getBlocksSaga)
    yield all(
        [
            getBlocksSaga(),
            deleteBlockSage(),
            getColorsSaga(),
            addBlockSaga(),
            addColorSaga(),
        ]
    );

}

export default rootSaga;