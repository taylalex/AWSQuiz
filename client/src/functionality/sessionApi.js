const axios = require('axios');

const createSession = async () => {
  await axios.post('http://localhost:3001/createSession');
};

module.exports = createSession;
