'use strict';

const path = require('path');

// Resolve the storage root against this folder rather than require.main,
// which is unset when the app is loaded by a test runner.
module.exports = {
  photos: {
    root: path.join(__dirname, 'files'),
  },
};
