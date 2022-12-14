const possibleAnswers = ['CloudFormation',
  'CloudGeneration',
  'CloudFront',
  'NetworkGraph',
  'CloudWatch',
  'CloudInspector',
  'DynamoDB',
  'AccelerateDB',
  'Elastic Compute Cloud',
  'CloudCompute',
  'Identity and Access Management',
  'Identity Config',
  'Lambda',
  'Sigma',
  'Route 53',
  'Road 53',
  'Simple Notification Service',
  'Glue',
  'Simple Queue Service',
  'Task Organise Service',
  'Simple Storage Service',
  'Bucket Store',
];

const fetchAnswers = (question) => {
  const random = Math.floor(Math.random() * possibleAnswers.length);
  let random2 = random;
  while (random === random2) {
    random2 = Math.floor(Math.random() * possibleAnswers.length);
  }

  const answerOptions = [
    question.correctAnswer,
    question.redHerringAnswer,
    possibleAnswers[random],
    possibleAnswers[random2],
  ];
  return answerOptions;
};

const shuffleArray = (answers) => {
  const shuffledAnswers = answers;
  /* This function follows the Fisher-yates Shuffle Algorithm  */
  const arrayLength = shuffledAnswers.length;
  for (let i = 0; i < arrayLength; i += 1) {
    const randInt = Math.floor(Math.random() * arrayLength);

    /* Swap the answers in position i and randInt */
    const holdingAnswer = answers[randInt];
    shuffledAnswers[randInt] = answers[i];
    shuffledAnswers[i] = holdingAnswer;
  }

  return answers;
};

/* Parameters: Questions: Array */
const formatQuizQuestions = (questions) => questions.map((question) => {
  const questionAnswers = fetchAnswers(question);
  const shuffledAnswers = shuffleArray(questionAnswers);

  // eslint-disable-next-line no-underscore-dangle
  return { _id: question._id, answers: shuffledAnswers, image: question.image };
});

module.exports = {
  formatQuizQuestions,
};
