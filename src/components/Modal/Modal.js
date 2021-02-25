import React from 'react';

import './Modal.css';

import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from './modalSlice';

const Modal = (props) => {
  const isModal = useSelector((state) => state.modal.isModal);
  const dispatch = useDispatch();

  return (
    <section className={!isModal ? 'modal' : 'modal show'} id="modal">
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
          <button onClick={(event) => event.preventDefault()}>Add task</button>
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default Modal;
