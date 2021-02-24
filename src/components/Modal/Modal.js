import React from 'react';

import './Modal.css';

import { useSelector } from 'react-redux';

const Modal = (props) => {
  const isModal = useSelector((state) => state.addTask.isModal);

  return !isModal ? (
    <section className="modal" id="modal">
      <form className="taskSet">
        <input
          id="taskContent"
          className="taskTxt"
          type="text"
          placeholder="Task text"
          autoComplete="off"
        />
        <input id="taskDate" className="taskDate" type="date" disabled />
        <select className="taskStat" id="taskStatus">
          <option value="none" defaultValue>
            - set - status -
          </option>
          <option value="very important">very important</option>
          <option value="basic">basic</option>
          <option value="long-term">long-term</option>
        </select>

        <div className="buttons">
          <button id="addTaskBtn">Add task</button>
          <button id="closeModBtn">Cancel</button>
        </div>
      </form>
    </section>
  ) : (
    <section className="modal show" id="modal">
      <form className="taskSet">
        <input
          id="taskContent"
          className="taskTxt"
          type="text"
          placeholder="Task text"
          autoComplete="off"
        />
        <input id="taskDate" className="taskDate" type="date" disabled />
        <select className="taskStat" id="taskStatus">
          <option value="none" defaultValue>
            - set - status -
          </option>
          <option value="very important">very important</option>
          <option value="basic">basic</option>
          <option value="long-term">long-term</option>
        </select>

        <div className="buttons">
          <button id="addTaskBtn">Add task</button>
          <button id="closeModBtn">Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default Modal;
