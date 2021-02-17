import React from 'react';
import './TaskBody.css';
import Task from './TaskElement/TaskElement';

const taskBody = (props) => (
  <div className="taskBody">
    <Task />
    <Task />
    <Task />
  </div>
);

export default taskBody;
