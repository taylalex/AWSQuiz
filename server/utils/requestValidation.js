const { Validator } = require('jsonschema');

const v = new Validator();
/*
  Check that the request has a body
  Validate the body schema
*/
const validateRequestFormat = (req) => {
  /* This function currently only ensures that the request has a body */
  const requestSchema = {
    id: '/requestScema',
    type: 'object',
    properties: {
      body: { type: 'object' },
    },
    required: ['body'],
  };

  const validation = v.validate(req, requestSchema);
  if (validation.errors.length === 0) { return { valid: true }; }
  return { valid: false, errorMessages: validation.errors };
};

const validateAnswersFormat = (answers) => {
  /* Validates that  */
  const singleAnswerSchema = {
    id: '/singleAnswer',
    type: 'object',
    properties: {
      _id: { type: 'string' },
      answer: { type: 'string' },
    },
    required: ['_id', 'answer'],
  };

  const bodySchema = {
    id: '/bodySchema',
    type: 'object',
    properties: {
      answers: {
        type: 'array',
        items: {
          $ref: '/singleAnswer',
        },
        minItems: 10,
        maxItems: 10,
      },
    },
    required: ['answers'],
  };

  v.addSchema(singleAnswerSchema, '/singleAnswer');
  const validation = v.validate(answers, bodySchema);
  if (validation.errors.length === 0) { return { valid: true }; }
  return { valid: false, errorMessages: validation.errors };
};

const validateGetScoreRequest = (req) => {
  /* Validate the request has body */
  const requestIsValid = validateRequestFormat(req).valid;
  if (requestIsValid === false) { console.log('request invalid'); return false; }

  /* Validate that the answers exist in the body */
  const { body } = req;
  const bodyIsValid = validateAnswersFormat(body).valid;
  if (bodyIsValid === false) { return false; }
  // console.log('returning true');
  return true;
};

module.exports = { validateRequestFormat, validateAnswersFormat, validateGetScoreRequest };
