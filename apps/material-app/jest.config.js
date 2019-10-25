module.exports = {
  name: 'material-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/material-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
