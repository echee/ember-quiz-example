import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('quiz', params.quiz_id, {include: 'questions'});
  }
});
 