/* globals filepicker */
import Ember from 'ember';
import layout from '../templates/components/ember-filepicker';

const { Component } = Ember;
const FILEPICKER_METHOD_PICK = 'pick';
const FILEPICKER_METHOD_PICK_MULTIPLE = 'pickMultiple';

export default Component.extend({
  buttonText: 'Upload',
  layout,
  multiple: false,
  pickerOptions: {},
  showUploadButton: true,

  actions: {
    selectFile() {
      let method = FILEPICKER_METHOD_PICK;
      if (this.get('multiple')) {
        method = FILEPICKER_METHOD_PICK_MULTIPLE;
      }
      filepicker[method](
        this.get('pickerOptions'),
        (object)=> {
          this.get('onSelection')(object);
        }
      );
    }
  }
});