/* globals filepicker */
import Ember from 'ember';
import layout from '../templates/components/ember-filepicker';

const { Component } = Ember;

export default Component.extend({
  buttonText: 'Upload',
  layout,
  multiple: false,
  pickerOptions: {},
  actions: {
    selectFile() {
      if (this.get('multiple')) {
        filepicker.pickMultiple(this.get('pickerOptions'));
      } else {
        filepicker.pick(
          this.get('pickerOptions'),
          (file)=> {
            this.get('onFileSelected')(file);
          }
        );
      }
    }
  }
});