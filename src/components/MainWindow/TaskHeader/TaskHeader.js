import React from 'react';
import './TaskHeader.css';

const taskHeader = (props) => (
  <div className="tableHeader">
    <div class="_task">Task</div>
    <div class="_id">#</div>
    <div class="_date">Create Date</div>
    <div class="_status">Status</div>
    <div>Actions</div>
  </div>
);

export default taskHeader;
