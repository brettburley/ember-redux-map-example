import Ember from 'ember';

let initCount = 0;

export default Ember.Component.extend({
  user: null,

  init() {
    this._super(...arguments);
    this.set('initCount', initCount++);
  }
});
