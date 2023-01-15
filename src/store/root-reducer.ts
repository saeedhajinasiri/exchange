import {combineReducers} from 'redux';
import conversionReducer from './conversion/conversion-reducer'

const rootReducer = combineReducers({
  conversion: conversionReducer,
});

export default rootReducer;
