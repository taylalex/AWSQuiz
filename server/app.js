const express = require('express');
const cors = require('cors');
const { formatQuizQuestions } = require('./utils/questionFunctionality');
const { calculateScore } = require('./utils/calculateScore');
const { getQuestionsWithDifficulty } = require('./utils/mongoDB');
const { validateGetScoreRequest } = require('./utils/requestValidation');

// Express setup
const app = express();
app.use(express.json());
app.use(cors());

app.get('/fetchEasyQuestions', async (req, res) => {
  console.log('GET fetchEasyQuestions called');
  const questionData = await getQuestionsWithDifficulty(['easy']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

app.get('/fetchMediumQuestions', async (req, res) => {
  console.log('GET fetchMediumQuestions called');
  const questionData = await getQuestionsWithDifficulty(['easy', 'medium']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

app.get('/fetchHardQuestions', async (req, res) => {
  console.log('GET fetchHardQuestions called');
  const questionData = await getQuestionsWithDifficulty(['easy', 'medium', 'hard']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

/* parameters:
  req.body.answers -> [{_id: <String> (question ID), answer: <String> (answer chosen by user)}]
*/
app.post('/getScore', async (req, res) => {
  if (validateGetScoreRequest(req)) {
    res.json({ score: await calculateScore(req.body.answers) });
  } else {
    /* Return unhappy path here */
    res.status(400);
    res.send('Malformed Request retreiving quiz score.');
  }
});

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

module.exports = app;
