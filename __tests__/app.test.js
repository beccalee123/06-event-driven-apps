'use strict';

// const events = require('../event-modules/events.js');
const logger = require('../event-modules/logger.js');

describe('Logger handlers', () => {
  it('logs file saved when a real file is passed in', () => {
    const spy = jest.spyOn(console, 'log');
    logger.fileSaved('test.txt');
    expect(spy).toHaveBeenCalled();
  });

  it('logs an error when an incorrect file is passed in', () => {
    const spy = jest.spyOn(console, 'error');
    logger.fileError();
    expect(spy).toHaveBeenCalled();
    
  });
});
