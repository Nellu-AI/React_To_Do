import React from 'react';

import { useDispatch } from 'react-redux';

import { closeModal } from '../modalSlice';
import { add } from '../../AddButton/addTaskSlice';

import './ButtonControls.css';

const ButtonControls = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="buttons">
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(
            add({
              id: Math.floor(Math.random() * 10 + 1),
              body: props.taskText.current.value,
              date: 'some date',
              status: 'some status',
            })
          );
        }}
      >
        Add task
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(closeModal());
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default ButtonControls;
