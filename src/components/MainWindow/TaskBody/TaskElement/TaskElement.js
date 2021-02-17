import React from 'react';
import './TaskElement.css';

const element = (props) => {
  return (
    <div className="Task" data-id="task-104">
      <div class="task-id">#task-104</div>
      <div class="task-description">
        <span class="task-text">Сделать обед сегодня в 17 00</span>
        <span class="edit-icon">
          <i class="fas fa-edit fa-2x" aria-hidden="true"></i>
        </span>
      </div>
      <div class="task-date">2021-02-05</div>
      <div class="task-status">very important</div>
      <div class="task-actions">
        <span class="edit-icon">
          <i class="fas fa-edit fa-2x" aria-hidden="true"></i>
        </span>
        <span class="remove-icon">
          <i class="fas fa-trash fa-2x" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default element;
