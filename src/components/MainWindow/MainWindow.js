import React, { Component } from 'react';
import TaskHeader from './TaskHeader/TaskHeader';
import TaskBody from './TaskBody/TaskBody';
import './MainWindow.css';

import AddButton from '../AddButton/AddButton';

class MainWindow extends Component {
  render() {
    return (
      <div className="MainWindow">
        <AddButton />
        <TaskHeader />
        <TaskBody />
      </div>
    );
  }
}

export default MainWindow;
