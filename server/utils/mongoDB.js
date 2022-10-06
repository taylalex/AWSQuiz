const { MongoClient } = require('mongodb');
require('dotenv').config();

// Environment
const ENVIRONMENT = process.env.ENVIRONMENT || 'DEVELOPMENT';

// MongoDB setup
const DBCONNECITONSTRING = 'mongodb://localhost:27017';
const client = new MongoClient(DBCONNECITONSTRING);
const dbName = 'AWSQuiz';
const db = client.db(dbName);
const collection = db.collection('questions');

// Open constant connection

if (ENVIRONMENT !== 'CI') {
  try {
    client.connect();
    console.log('Connected successfully to server');
  } catch (e) {
    console.log('Error connecting server to ');
  }
}

const getQuestionsWithDifficulty = async (difficulties) => {
  const filter = {
    difficulty: {
      $in: difficulties,
    },
  };

  const cursor = collection.find(filter);
  const questionData = await cursor.toArray();

  return questionData;
};

const getQuestionsWithId = async (questionIds) => {
  const filter = {
    _id: {
      $in: questionIds,
    },
  };

  const cursor = collection.find(filter);
  const questionData = await cursor.toArray();

  return questionData;
};

module.exports = {
  getQuestionsWithDifficulty,
  getQuestionsWithId,
};
