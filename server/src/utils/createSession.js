const { v4: uuid } = require('uuid');
const { createSessionWithId } = require('./mongoDB');

const createSession = () => {
  const sessionId = uuid();
  createSessionWithId(sessionId);
  return sessionId;
};

module.exports = createSession;
