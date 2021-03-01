export const LOADED = 'LOADED';

export const loadTasks = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(loadDone());
    }, 2000);
  };
};

const loadDone = () => {
  return {
    type: LOADED,
  };
};
