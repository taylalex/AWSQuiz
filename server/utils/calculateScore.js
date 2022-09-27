/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');

const { getQuestionsWithId } = require('./mongoDB');

const createUserAnswersMap = (userAnswers) => {
  const incomingAnswerMap = new Map();
  userAnswers.forEach((element) => {
    incomingAnswerMap.set(element._id, element.answer);
  });
  return incomingAnswerMap;
};

const calculateScore = async (userAnswers) => {
  let score = 0;

  // Map {question ID => answer chosen}
  const userAnswersMap = createUserAnswersMap(userAnswers);

  // Gets the question IDs from the keyset and turns them to ObjectId types
  const questionIds = [...userAnswersMap.keys()].map((element) => ObjectId(element));

  // Get questions where the Ids match those that were answered
  const questionData = await getQuestionsWithId(questionIds);

  /* Iterates through question data from DB to check whether user answers
  match correct answers for given question ID */
  questionData.forEach((question) => {
    const currentQuestionId = question._id.toString();
    const userAnswer = userAnswersMap.get(currentQuestionId);
    if (userAnswer === question.correctAnswer) {
      score += 1;
    }
  });

  return score;
};

module.exports = calculateScore;
