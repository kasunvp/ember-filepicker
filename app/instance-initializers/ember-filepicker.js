/* globals filepicker */
import config from '../config/environment';
export default {
  name: 'ember-filepicker',

  initialize() {
    filepicker.setKey(config.filepickerKey);
  }
};