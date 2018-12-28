'use strict';

const events = require('./events.js');

events.on('saved', fileSaved);
events.on('error', fileError);

function fileSaved(payload) {
  console.log('File was saved');
  console.log({payload});
}

function fileError(payload) {
  console.error('File error');
  console.error({payload});
}

module.exports = {fileSaved, fileError};