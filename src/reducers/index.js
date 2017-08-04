import {combineReducers} from 'redux';
import appSettings from './AppReducer';

//-----------------------------//
// Add reducers as neccessary  //
//-----------------------------//

const rootReducer = combineReducers({
  appSettings
});

export default rootReducer;