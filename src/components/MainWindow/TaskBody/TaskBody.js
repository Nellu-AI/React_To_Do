import React from 'react';
import './TaskBody.css';
import Task from './TaskElement/TaskElement';

const TaskBody = (props) => {
  return (
    <div className="taskBody">
      {props.taskList.map((task) => (
        <Task id={task.id} body={task.body} date={task.date} status={task.status} key={task.id} />
      ))}
    </div>
  );
};

export default TaskBody;
