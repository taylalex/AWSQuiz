/* eslint-disable no-underscore-dangle */
const { MongoClient, ObjectId } = require('mongodb');

// MongoDB setup
const DBCONNECITONSTRING = 'mongodb://localhost:27017';
const client = new MongoClient(DBCONNECITONSTRING);
const dbName = 'AWSQuiz';
const db = client.db(dbName);
const collection = db.collection('questions');

try {
  client.connect();
  console.log('Connected successfully to server');
} catch (e) {
  console.log('Error connecting server to ');
}

async function calculateScore(answers) {
  let score = 0;

  const questionMap = new Map();

  answers.forEach((element) => {
    questionMap.set(element._id, element.answer);
  });

  const questionObjectIds = [...questionMap.keys()].map((element) => ObjectId(element));

  const filter = {
    _id: {
      $in: questionObjectIds,
    },
  };

  const cursor = collection.find(filter);
  const questionAnswers = await cursor.toArray();

  questionAnswers.forEach((element) => {
    const userAnswer = questionMap.get(element._id.toString());
    if (userAnswer === element.correctAnswer) {
      score += 1;
    }
  });

  return score;
}

module.exports = calculateScore;
