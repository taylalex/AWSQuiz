const { v4: uuid } = require('uuid');

const createSession = () => {
  const sessionId = uuid();
  console.log(sessionId);
};

module.exports = createSession;
