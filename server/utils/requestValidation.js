const schema = require('schm');
const { default: validate } = require('schm/dist/validate');

const validateRequest = async (req) => {
  const requestSchema = schema({
    body: {
      type: Object,
      required: true,
    },

  });

  const value = await validate(req, requestSchema).then(() => true).catch((e) => {
    console.log('Error validating request object:');
    for (let i = 0; i < e.length; i += 1) { console.log(e[i].message); }
    return false;
  });
  return value;
};

const validateLength = (val) => val.length === 10;

const validateAnswersFormat = (body) => {
  const answersSchema = {
    body: {
      answers: {
        type: [{
          _id: {
            type: String,
            required: true,
          },
          answer: {
            type: String,
            required: true,
          },
        }],
        validate: [validateLength, 'User must have 10 answers'],
      },
    },
  };
};

const validateGetScoreRequest = (req) => {
  /* Validate the request */
  if (validateRequest(req) === false) return false;

  /* Validate that the answers exist in the body */
  const { body } = req;
  validateAnswersFormat(body);
};

// How does it work
// What happens if not all feilds are present

// const testValidateRequest = () => {
//   const req = { body: {} };
//   console.log(validateRequest(req));
// };
module.exports = { validateRequest, validateGetScoreRequest };
