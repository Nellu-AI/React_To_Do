import { LOADED } from './actions';

const initialState = {
  tasks: [
    {
      id: 'MXGV',
      body: 'Task 1 - to do list',
      date: '2020-02-04',
      status: 'important',
    },
    {
      id: 'u9n',
      body: 'Task 2 - to do list',
      date: '2021-02-04',
      status: 'basic',
    },
    {
      id: 'ZRC6',
      body: 'Task 3 - to do list',
      date: '2021-05-04',
      status: 'very important',
    },
    {
      id: 'Ia4',
      body: 'Task 4 - to do list',
      date: '2021-12-04',
      status: 'long-term',
    },
  ],
  isLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
