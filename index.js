/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-filepicker',
  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/filepicker-js/filepicker.min.js');
  }
};
