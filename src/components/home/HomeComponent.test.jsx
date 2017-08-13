import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import HomeComponent from './HomeComponent';

describe('HomeComponent', () => {
  describe('Component Structure', () => {
    
    const mockButtonClickProp = sinon.spy();
    
    const mocksParams = {
      setting: 'my_app_setting'
    };
    
    let homeComponent;
    
    beforeEach(() => {
      homeComponent = shallow(<HomeComponent buttonClick={mockButtonClickProp} params={mocksParams} />);
    });
    
    describe('header', () => {
      it('should contain a header', () => {
        expect(homeComponent.find('h2').length).toEqual(1);
      });
      
      it('should have heading text \'Home Component\'', () => {
        expect(homeComponent.find('h2').at(0).text()).toEqual('Home Component');
      });
    });
    
    describe('Button', () => {
      it('should contain a button', () => {
        expect(homeComponent.find('button').length).toEqual(1);
      });
      
      it('should trigger an action when clicked', () => {
        homeComponent.find('button').simulate('click');
        
        expect(mockButtonClickProp.calledOnce).toBeTruthy();
      });
    });
    
    describe('setting text', () => {
      it('should display some setting text', () => {
        expect(homeComponent.find('span').at(1).text()).toEqual('my_app_setting');
      });
    });
  });
  
  describe('Component Props', () => {
    const mockButtonClickProp = () => {
      return true;
    };
    
    const mocksParams = {
      setting: 'my_app_setting'
    };
    
    let homeComponent;
    
    //----------------------------------------------//
    // When testing props, use 'mount'              //
    //----------------------------------------------//
    beforeEach(() => {
      homeComponent = mount(<HomeComponent buttonClick={mockButtonClickProp} params={mocksParams} />);
    });
    
    it('should have a button click prop', () => {
      expect(homeComponent.props().buttonClick()).toBeTruthy();
    });
    
    it('should have a params prop', () => {
      expect(homeComponent.props().params).toEqual(mocksParams);
    });
  });
})