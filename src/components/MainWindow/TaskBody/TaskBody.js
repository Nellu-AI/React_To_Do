import React, { useState } from 'react';
import './TaskBody.css';
import Task from './TaskElement/TaskElement';

import { useSelector, useDispatch } from 'react-redux';
import { addTaskSlice, selectTasks } from '../../AddButton/addTaskSlice';

const TaskBody = (props) => {
  const tasks = useSelector(selectTasks);

  return (
    <div className="taskBody">
      {tasks.map((task) => (
        <Task id={task.id} body={task.body} date={task.date} status={task.status} key={task.id} />
      ))}
    </div>
  );
};

export default TaskBody;
