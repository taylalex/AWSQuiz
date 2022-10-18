const axios = require('axios');

// const bodyRaw = {
//   answers: [
//     {
//       _id: '633302ef8e6b50de9ab41f00',
//       answer: 'CloudFormation',
//     },
//     {
//       _id: '633302ef8e6b50de9ab41f01',
//       answer: 'CloudFront',
//     },
//     {
//       _id: '633302ef8e6b50de9ab41f02',
//       answer: 'CloudInspector',
//     },
//   ],
// };

const postUserAnswers = async (userAnswers, sessionId) => {
  const req = {
    answers: userAnswers,
    sessionId,
  };
  /* parameters
    userAnswers: format on ../../server/server.js endpoint */
  await axios.post('http://localhost:3001/postAnswers', req);
};

const getScore = async (setScore, sessionId) => {
  const req = {
    sessionId,
  };

  await axios.post('http://localhost:3001/getScore', req).then((response) => {
    console.log(response.data.score);
    setScore(response.data.score);
  });
};

const getEasyQuestions = async (setQuestions) => {
  await axios.get('http://localhost:3001/getEasyQuestions').then((response) => setQuestions(response.data.collections));
};

export {
  postUserAnswers,
  getScore,
  getEasyQuestions,
};
