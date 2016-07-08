/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName() {
  },
  afterInstall(options) {
    return this.addBowerPackageToProject('filepicker-js');
  }
};