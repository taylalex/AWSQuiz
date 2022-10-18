const router = require('express').Router();
const cors = require('cors');

router.use(cors());

const { calculateScore } = require('../utils/calculateScore');
const { validatePostScoreRequest } = require('../utils/requestValidation');
const { updateScoreToSessionWithId, getScoreFromSessionWithId } = require('../utils/mongoDB');

/* parameters:
  req.body.answers -> [{_id: <String> (question ID), answer: <String> (answer chosen by user)}]
*/
router.post('/postAnswers', async (req, res) => {
  console.log('POST /postAnswers called');
  if (validatePostScoreRequest(req)) {
    const score = await calculateScore(req.body.answers);
    updateScoreToSessionWithId(req.body.sessionId, score);
    res.status(200);
    res.send('Score updated successfully.');
  } else {
    /* Return unhappy path here */
    res.status(400);
    res.send('Malformed request retrieving quiz score.');
  }
});

// May need changing to get
router.post('/getScore', async (req, res) => {
  console.log(`POST /getScore called with sessionId: ${req.body.sessionId}`);
  const score = await getScoreFromSessionWithId(req.body.sessionId);
  res.json({ score });
});

module.exports = router;
