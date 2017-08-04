import expect from 'expect';
import * as types from '../actions/ActionTypes';
import * as AppActions from '../actions/AppActions';
import AppReducer from './AppReducer';

//----------------------------------------------//
// These tests should test for initial state,   //
// then state after action                      //
//----------------------------------------------//

describe('AppReducer', () => {
  const initialState = { };
  
  const expectedState = {
    setting: 'my_app_setting'
  };
  
  it('should return the initial state', () => {
    expect(AppReducer(initialState, {})).toEqual(initialState);
  });
  
  it('should return the expected state', () => {
    const action = AppActions.myAppAction();
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });
});