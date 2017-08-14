import {combineReducers} from 'redux';
import params from './AppReducer';

//----------------------------------------------------//
// Add reducers as neccessary.                        //
// A popular convention is to name reducers           //
// after the state slices they manage, so             //
// you can use ES6 property shorthand notation        //
// http://redux.js.org/docs/api/combineReducers.html  //
//----------------------------------------------------//
const rootReducer = combineReducers({
  params
});

export default rootReducer;