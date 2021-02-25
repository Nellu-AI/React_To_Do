import React, { Component } from 'react';
import TaskHeader from './TaskHeader/TaskHeader';
import TaskBody from './TaskBody/TaskBody';
import './MainWindow.css';

import AddButton from '../AddButton/AddButton';

import { connect } from 'react-redux';
import { showModal } from '../Modal/modalSlice';

class MainWindow extends Component {
  render() {
    // console.log(this.props.tasksList, this.props.isModal);
    return (
      <div className="MainWindow">
        <AddButton clicked={this.props.showModal} />
        <TaskHeader />
        <TaskBody taskList={this.props.tasksList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasksList: state.addTask.tasksList,
    isModal: state.modal.isModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch(showModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWindow);
