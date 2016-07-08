/* globals filepicker */
import config from '../config/environment';
export default {
  name: 'ember-filestack',

  initialize() {
    filepicker.setKey(config.filepickerKey);
  }
};