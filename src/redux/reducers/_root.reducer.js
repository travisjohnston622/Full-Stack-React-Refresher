import { combineReducers } from 'redux';
//Reducers
import getBlocksReducer from './getBlocks.reducer';
import getColorsReducer from './getColors.reducer';

const rootReducer = combineReducers({
	getBlocksReducer,
	getColorsReducer,
});
export default rootReducer;
