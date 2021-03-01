import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import Loader from './components/Loader/Loader';

import MainWindow from './components/MainWindow/MainWindow';

import { loadTasks } from './app/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.onFirstLoaded();
  }

  render() {
    return <div className="App">{!this.props.isLoaded ? <Loader /> : <MainWindow />}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoaded: state.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstLoaded: () => dispatch(loadTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
