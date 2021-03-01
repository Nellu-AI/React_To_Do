import React from 'react';
import './TaskHeader.css';

const taskHeader = (props) => (
  <div className="tableHeader">
    <div className="_id">#</div>
    <div className="_task">Task</div>
    <div className="_date">Create Date</div>
    <div className="_status">Status</div>
    <div>Actions</div>
  </div>
);

export default taskHeader;
