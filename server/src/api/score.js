const router = require('express').Router();
const cors = require('cors');

router.use(cors());

const { calculateScore } = require('../utils/calculateScore');
const { validateGetScoreRequest } = require('../utils/requestValidation');

/* parameters:
  req.body.answers -> [{_id: <String> (question ID), answer: <String> (answer chosen by user)}]
*/
router.post('/getScore', async (req, res) => {
  console.log('POST /getScore called');
  if (validateGetScoreRequest(req)) {
    res.json({ score: await calculateScore(req.body.answers) });
  } else {
    /* Return unhappy path here */
    res.status(400);
    res.send('Malformed Request retreiving quiz score.');
  }
});

module.exports = router;
