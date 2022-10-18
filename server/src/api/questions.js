const router = require('express').Router();
const cors = require('cors');

router.use(cors());

const { formatQuizQuestions } = require('../utils/questionFunctionality');
const { getQuestionsWithDifficulty } = require('../utils/mongoDB');

router.get('/getEasyQuestions', async (req, res) => {
  console.log('GET getEasyQuestions called');
  const questionData = await getQuestionsWithDifficulty(['easy']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

router.get('/getMediumQuestions', async (req, res) => {
  console.log('GET getMediumQuestions called');
  const questionData = await getQuestionsWithDifficulty(['easy', 'medium']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

router.get('/getHardQuestions', async (req, res) => {
  console.log('GET getHardQuestions called');
  const questionData = await getQuestionsWithDifficulty(['easy', 'medium', 'hard']);
  const formattedQuestionData = formatQuizQuestions(questionData);
  res.json({ collections: formattedQuestionData });
});

module.exports = router;
