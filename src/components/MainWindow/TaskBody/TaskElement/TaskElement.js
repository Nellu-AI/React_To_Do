import React from 'react';
import './TaskElement.css';

const element = (props) => {
  return (
    <div className="Task" data-id={props.id}>
      <div className="task-id">#{props.id}</div>
      <div className="task-description">
        <span className="task-text">{props.body}</span>
        <span className="edit-icon">
          <i className="fas fa-edit fa-2x" aria-hidden="true"></i>
        </span>
      </div>
      <div className="task-date">{props.date}</div>
      <div className="task-status">{props.status}</div>
      <div className="task-actions">
        <span className="edit-icon">
          <i className="fas fa-edit fa-2x" aria-hidden="true"></i>
        </span>
        <span className="remove-icon">
          <i className="fas fa-trash fa-2x" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default element;
