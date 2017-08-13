import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as AppActions from '../../actions/AppActions';
import HomeComponent from './HomeComponent';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    params: state.appSettings
  }
}

function matchDispatchToProps(dispatch) {
  return {
    buttonClick: () => {
      dispatch(AppActions.myAppAction());
    }
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(HomeComponent);