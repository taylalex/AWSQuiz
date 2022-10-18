const { validateRequestFormat, validateAnswersFormat, validatePostScoreRequest } = require('../utils/requestValidation');

const validateRequestFormatCases = [

];
test.each(validateRequestFormatCases);

describe.each([
  [{ body: {} }, true, 'Pass Validation (Body exists as object)'],
  [{ body: {}, headers: {} }, true, 'Pass Validation (Other headers are ignored)'],
  [{ body: [] }, false, 'Fail Validaiton (Body is an array)'],
  [{ headers: {} }, false, 'Fail Validaiton (Body does not exist)'],
  [{}, false, 'Fail Validation (Request is empty)'],
])('requestValidation.validateRequestFormat', (testValue, expectedValue, message) => {
  // console.log(testValue);
  // console.log(typeof testValue[0]);

  const actualValue = validateRequestFormat(testValue);
  test(`Validate request format: ${message}`, () => {
    expect(actualValue.valid).toBe(expectedValue);
  });
});

describe.each([
  [{ answers: [], sessionId: 'test' }, { _id: '1', answer: 'dummyAnswer' }, 10, true, 'Pass Validation '],
  [{ answers: [], sessionId: 'test' }, { _id: '1', answer: 'dummyAnswer' }, 9, false, 'Fail Validation (Incorrect number of answers)'],
  [{ answers: [], sessionId: 'test' }, { id: '1', answers: 'dummyAnswer' }, 1, false, 'Fail Validation (Missing required feild \'_id\')'],
])('requestValidation.validateAnswersFormat', (testValue, dummyAnswerValue, arrayLength, expectedValue, message) => {
  for (let i = 0; i < arrayLength; i += 1) {
    testValue.answers.push(dummyAnswerValue);
  }

  const actualValue = validateAnswersFormat(testValue);
  test(`Validating answers format via schema: ${message}`, () => {
    expect(actualValue.valid).toEqual(expectedValue);
  });
});

describe.each([
  [{ body: { answers: [], sessionId: 'test' } }, { _id: '1', answer: 'dummyAnswer' }, 10, true, 'Pass Validation'],
  [{ headers: { answers: [], sessionId: 'test' } }, { _id: '1', answer: 'dummyAnswer' }, 0, false, 'Fail Validation (Body does not exist)'],
  [{ body: { answers: [], sessionId: 'test' } }, { _id: '1', answer: 'dummyAnswer' }, 1, false, 'Fail Validation (Answers are of incorrect length)'],
  [{ body: { responses: [], sessionId: 'test' } }, { _id: '1', answer: 'dummyAnswer' }, 1, false, 'Fail Validation (Answers does not exist)'],
])('requestValidation.validatePostScoreRequest', (testValue, dummyAnswerValue, arrayLength, expectedValue, message) => {
  if (Object.keys(testValue).includes('body') && Object.keys(testValue.body).includes('answers')) {
    for (let i = 0; i < arrayLength; i += 1) {
      testValue.body.answers.push(dummyAnswerValue);
    }
  }

  const actualValue = validatePostScoreRequest(testValue);
  console.log(`actual value: ${actualValue}`);
  test(`validates http request: ${message}`, () => {
    // console.log(testValue);
    expect(actualValue).toEqual(expectedValue);
  });
});
