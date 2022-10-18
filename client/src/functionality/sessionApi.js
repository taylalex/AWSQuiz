const axios = require('axios');

const createSession = async () => axios.post('http://localhost:3001/createSession').then((response) => response.data.sessionId);

module.exports = createSession;
