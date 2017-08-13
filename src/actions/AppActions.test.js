import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from './ActionTypes';
import * as AppActions from './AppActions';

//----------------------------------------------//
// These tests should test for initial state,   //
// then state after action                      //
//----------------------------------------------//

describe('AppActions', () => {
  
  /**
   * Sample Setup
   */
  const middlewares = [ thunk ];
  const mockStore = configureMockStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);
  
  it('should return settings from AppActions', () => {
    const mockActionParams = {
      setting: 'my_app_setting'
    };
    
    const expectedAction = {
      type: types.START_ACTION, params: mockActionParams
    };
    
    expect(AppActions.myAppAction()).toEqual(expectedAction);
  });
  
});
