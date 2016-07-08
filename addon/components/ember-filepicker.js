/* globals filepicker */
import Ember from 'ember';
import layout from '../templates/components/ember-filepicker';

const { Component } = Ember;

export default Component.extend({
  layout,
  actions: {
    clicked() {
      filepicker.pick(
        (file)=> {
          this.get('onFileSelected')(file);
        }
      );
    }
  }
});