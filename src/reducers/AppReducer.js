import * as types from '../actions/ActionTypes';

const initialState = { };

export default function AppReducer(state = initialState, action) {
  switch(action.type) {
    case types.START_ACTION:
      return action.params;
    default:
      return state;
  }
}