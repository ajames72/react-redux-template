import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  describe('Component Structure', () => {
    //Fake Store and Middleware
    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);
    //----------------------------------------------//
    // This should match the shape of the state     //
    // object of the passed reducers.               //
    // Refer to the rootReducer object.             //
    //----------------------------------------------//
    const initialState = {
      params: {
        setting: 'my-test-setting'
      }
    };
    
    let homeComponent;
    
    beforeEach(() => {
      let store = mockStore(initialState);

      homeComponent = mount(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
    
    it('should set the setting text when the button is clicked', () => {
      homeComponent.find('button').simulate('click');
      expect(homeComponent.find('span').at(1).text()).toEqual('my-test-setting');
    });
  });
});