import Ember from 'ember';
import connect from 'ember-redux/components/connect';

const memoizedMap = (mapFunction) => {
  const previousResults = new WeakMap();

  return (newArray) => newArray.map((item) => {
    if (previousResults.has(item)) {
      return previousResults.get(item);
    }
    const result = mapFunction(item);
    previousResults.set(item, result);
    return result;
  });
};

const decoratedUser = (user) => Object.assign({
  fullName: `${user.firstName} ${user.lastName}`
}, user);

const memoizedMapUsers = memoizedMap(decoratedUser);
const stateToComputed = (state) => ({
  users: state.users.map(decoratedUser),
  memoizedUsers: memoizedMapUsers(state.users)
});

const dispatchToActions = (dispatch) => ({
  addUser: () => dispatch({ type: 'ADD_USER', data: { firstName: 'New', lastName: 'User' } })
});

export default connect(stateToComputed, dispatchToActions)(
  Ember.Controller.extend()
);
