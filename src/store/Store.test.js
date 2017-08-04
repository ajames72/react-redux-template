//------------------------------------------//
//                                          //
// Disable import/default to fix No default //
// export found in module  import/default   //
// lint error in './ConfigureStore'         //
//                                          //
//------------------------------------------//
/*eslint-disable import/default*/
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureStore from './ConfigureStore';
import * as AppActions from '../actions/AppActions';

//-------------------------------------------------//
// This should test the action when dispatched,    //
// and the state after.                            //
//-------------------------------------------------//

describe('Store', () => {
  
  const initialState = { };
  
  const store = configureStore(initialState);
  
  it('should set AppActions settings', () => {
    const action = AppActions.myAppAction();
    store.dispatch(action);
    
    //test property from the rootReducer
    const state = store.getState().appSettings;
    
    expect(state).toEqual({
      setting: 'my_app_setting'
    });
  });
});