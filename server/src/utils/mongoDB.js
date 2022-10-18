const { MongoClient } = require('mongodb');
require('dotenv').config();

// Environment
const ENVIRONMENT = process.env.ENVIRONMENT || 'DEVELOPMENT';

// MongoDB setup
const DBCONNECITONSTRING = 'mongodb://localhost:27017';
const client = new MongoClient(DBCONNECITONSTRING);
const dbName = 'AWSQuiz';
const db = client.db(dbName);

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
  const collection = db.collection('questions');

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
  const collection = db.collection('questions');

  const filter = {
    _id: {
      $in: questionIds,
    },
  };

  const cursor = collection.find(filter);
  const questionData = await cursor.toArray();

  return questionData;
};

const createSessionWithId = async (sessionId) => {
  const collection = db.collection('sessions');

  const document = {
    sessionId,
    score: 0,
    finished: false,
  };

  await collection.insertOne(document);
};

const updateScoreToSessionWithId = async (sessionId, score) => {
  const collection = db.collection('sessions');

  const filter = { sessionId };

  const updateDocument = {
    $set: {
      score,
    },
  };

  await collection.updateOne(filter, updateDocument);
};

const getScoreFromSessionWithId = async (sessionId) => {
  const collection = db.collection('sessions');

  const filter = { sessionId };

  const sessionData = await collection.findOne(filter);

  return sessionData.score;
};

module.exports = {
  getQuestionsWithDifficulty,
  getQuestionsWithId,
  createSessionWithId,
  updateScoreToSessionWithId,
  getScoreFromSessionWithId,
};
