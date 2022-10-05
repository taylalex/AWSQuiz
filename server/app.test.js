const request = require('supertest');
const app = require('./app');

const { getQuestionsWithDifficulty } = require('./utils/mongoDB');
const { formatQuizQuestions } = require('./utils/questionFunctionality');
const { calculateScore } = require('./utils/calculateScore');

// Mocks
jest.mock('./utils/questionFunctionality');
jest.mock('./utils/mongoDB');
jest.mock('./utils/calculateScore');

describe('GET /', () => {
  it('Should return 200 with hello: world', () => request(app)
    .get('/')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({
        hello: 'world',
      });
    }));
});

describe('GET /fetchEasyQuestions', () => {
  const dummyQuestionData = {
    correctAnswer: 'testCorrectAnswer',
    redHerringAnswer: 'testRedHerringAnswer',
    difficulty: 'testDifficulty',
    image: 'testImage',
  };

  const dummyFormattedQuestionData = {
    _id: 'testId',
    answers: ['option 1', 'option 2', 'option 3', 'option 4'],
    image: 'testImage',
  };

  beforeEach(() => {
    getQuestionsWithDifficulty.mockReturnValue(dummyQuestionData);
    formatQuizQuestions.mockReturnValue(dummyFormattedQuestionData);
  });

  it('Should return 200 with formatted question data', () => request(app)
    .get('/fetchEasyQuestions')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({ collections: dummyFormattedQuestionData });
      expect(getQuestionsWithDifficulty).toBeCalledWith(['easy']);
      expect(formatQuizQuestions).toBeCalledWith(dummyQuestionData);
    }));
});

describe('GET /fetchMediumQuestions', () => {
  const dummyQuestionData = {
    correctAnswer: 'testCorrectAnswer',
    redHerringAnswer: 'testRedHerringAnswer',
    difficulty: 'testDifficulty',
    image: 'testImage',
  };

  const dummyFormattedQuestionData = {
    _id: 'testId',
    answers: ['option 1', 'option 2', 'option 3', 'option 4'],
    image: 'testImage',
  };

  beforeEach(() => {
    getQuestionsWithDifficulty.mockReturnValue(dummyQuestionData);
    formatQuizQuestions.mockReturnValue(dummyFormattedQuestionData);
  });

  it('Should return 200 with formatted question data', () => request(app)
    .get('/fetchMediumQuestions')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({ collections: dummyFormattedQuestionData });
      expect(getQuestionsWithDifficulty).toBeCalledWith(['easy', 'medium']);
      expect(formatQuizQuestions).toBeCalledWith(dummyQuestionData);
    }));
});

describe('GET /fetchHardQuestions', () => {
  const dummyQuestionData = {
    correctAnswer: 'testCorrectAnswer',
    redHerringAnswer: 'testRedHerringAnswer',
    difficulty: 'testDifficulty',
    image: 'testImage',
  };

  const dummyFormattedQuestionData = {
    _id: 'testId',
    answers: ['option 1', 'option 2', 'option 3', 'option 4'],
    image: 'testImage',
  };

  beforeEach(() => {
    getQuestionsWithDifficulty.mockReturnValue(dummyQuestionData);
    formatQuizQuestions.mockReturnValue(dummyFormattedQuestionData);
  });

  it('Should return 200 with formatted question data', () => request(app)
    .get('/fetchHardQuestions')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({ collections: dummyFormattedQuestionData });
      expect(getQuestionsWithDifficulty).toBeCalledWith(['easy', 'medium', 'hard']);
      expect(formatQuizQuestions).toBeCalledWith(dummyQuestionData);
    }));
});

describe('POST /getScore', () => {
  const dummyAnswerData = {
    answers: [
      { _id: 'testId1', answer: 'testAnswer1' },
      { _id: 'testId2', answer: 'testAnswer2' },
      { _id: 'testId3', answer: 'testAnswer3' },
      { _id: 'testId4', answer: 'testAnswer4' },
      { _id: 'testId5', answer: 'testAnswer5' },
      { _id: 'testId6', answer: 'testAnswer6' },
      { _id: 'testId7', answer: 'testAnswer7' },
      { _id: 'testId8', answer: 'testAnswer8' },
      { _id: 'testId9', answer: 'testAnswer9' },
      { _id: 'testId410', answer: 'testAnswer10' },
    ],
  };
  const dummyScoreData = 1;

  beforeEach(() => {
    calculateScore.mockReturnValue(dummyScoreData);
  });

  it('Should return 200 with score data', () => request(app)
    .post('/getScore')
    .send(dummyAnswerData)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual({ score: dummyScoreData });
      expect(calculateScore).toBeCalledWith(dummyAnswerData.answers);
    }));
});
