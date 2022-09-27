const express = require('express');

const formatQuizQuestions = require('./utils/questionFunctionality');
const calculateScore = require('./utils/calculateScore');
const { getQuestionsWithDifficulty } = require('./utils/mongoDB');

// Express setup
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/fetchEasyQuestions', async (req, res) => {
  const questionData = await getQuestionsWithDifficulty(['easy']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

app.get('/fetchMediumQuestions', async (req, res) => {
  const questionData = await getQuestionsWithDifficulty(['easy', 'medium']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

app.get('/fetchHardQuestions', async (req, res) => {
  const questionData = getQuestionsWithDifficulty(['easy', 'medium', 'hard']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

app.post('/getScore', async (req, res) => {
  console.log(req.body.answers);
  res.json({ score: await calculateScore(req.body.answers) });
});

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
