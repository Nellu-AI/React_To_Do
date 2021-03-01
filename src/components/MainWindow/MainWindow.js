import React from 'react';
import './MainWindow.css';

import TaskBody from './TaskBody/TaskBody';
import TaskHeader from './TaskHeader/TaskHeader';

const mainWindow = (props) => {
  return (
    <div className="MainWindow">
      <TaskHeader />
      <TaskBody />
    </div>
  );
};

export default mainWindow;
