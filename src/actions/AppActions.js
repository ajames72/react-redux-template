import * as types from './ActionTypes';

export function myAppAction() {
  
  const params = {
    setting: 'my_app_setting'
  };
  
  return {
    type: types.START_ACTION, params
  };
}