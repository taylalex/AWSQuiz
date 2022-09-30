const { validateRequest } = require('../utils/requestValidation');

// test.each([
//   [{ body: {} }, true],
//   [{ body: {}, headers: {} }, true],
//   [{ body: [] }, false],
//   [{ headers: {} }, false],
//   [{}, false],
// ])('requestValidation.validateRequest', async (testValue, expectedValue) => {
//   const actualValue = await validateRequest(testValue);

//   expect(actualValue).toBe(expectedValue);
// });

const requestValidationCases = [
  [{ body: {} }, true],
  [{ body: {}, headers: {} }, true],
  [{ body: [] }, false],
  [{ headers: {} }, false],
  [{}, false],
];
test.each(requestValidationCases)('requestValidation.validateRequest', async (testValue, expectedValue) => {
  const actualValue = await validateRequest(testValue);
  expect(actualValue).toBe(expectedValue);
});

// describe.each([
//   [{ body: {} }, true],
//   [{ body: {}, headers: {} }, true],
//   [{ body: [] }, false],
//   [{ headers: {} }, false],
//   [{}, false],
// ]);
