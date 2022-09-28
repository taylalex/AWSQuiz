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

const getUserScore = async ({ userAnswers, setScore }) => {
  /* parameters
    userAnswers: format on ../../server/server.js endpoint */
  await axios.post('http://localhost:3001/getScore', userAnswers).then((response) => setScore(response.data.score));
};

export default getUserScore;
