import Ember from 'ember';

let counter = 0;

export function renderCounter() {
  return counter++;
}

export default Ember.Helper.helper(renderCounter);
