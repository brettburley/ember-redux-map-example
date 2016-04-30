const usersReducer = (state, action) => {
  state = state || [
    { id: 0, firstName: 'Mary', lastName: 'Smith' },
    { id: 1, firstName: 'John', lastName: 'Doe' }
  ];

  if (action.type === 'ADD_USER') {
    const newUser = Object.assign({
      id: state[state.length - 1].id + 1
    }, action.data);
    return [...state, newUser];
  }

  return state;
};

export default {
  users: usersReducer
};