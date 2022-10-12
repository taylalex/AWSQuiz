const router = require('express').Router();
const cors = require('cors');
const createSession = require('../utils/createSession');

router.use(cors());

router.post('/createSession', async (req, res) => {
  console.log('POST /createSession called');
  createSession();
});

module.exports = router;
