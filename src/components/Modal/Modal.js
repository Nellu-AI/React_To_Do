import React, { useRef } from 'react';

import './Modal.css';

import { useSelector } from 'react-redux';

import ButtonControls from './ButtonControls/ButtonControls';

const Modal = (props) => {
  const isModal = useSelector((state) => state.modal.isModal);

  const taskContent = useRef(null);

  return (
    <section className={!isModal ? 'modal' : 'modal show'} id="modal">
      <form className="taskSet">
        <input
          id="taskContent"
          className="taskTxt"
          type="text"
          placeholder="Task text"
          autoComplete="off"
          ref={taskContent}
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
        <ButtonControls taskText={taskContent} />
      </form>
    </section>
  );
};

export default Modal;
