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
    'Bucket Store'
]

const formatQuizQuestions = (questions) => {
    /* Parameters: 
        Questions: Array */
    return questions.map(question => {
        const questionAnswers = fetchAnswers(question)
        const shuffledAnswers = shuffleArray(questionAnswers)
        return {answers: shuffledAnswers, _id: question['_id'], image: question['image']}
    })
}

const fetchAnswers = (question) => {
    let random =   Math.floor(Math.random() * possibleAnswers.length)
    let random2 = random
    while(random == random2){
        random2 = Math.floor(Math.random() * possibleAnswers.length)
    }

    const answerOptions = [
        question['correctAnswer'],
        question['redHerringAnswer'],
        possibleAnswers[random],
        possibleAnswers[random2],
    ]
    return answerOptions
}

const shuffleArray = (answers) => {
    /* This function follows the Fisher-yates Shuffle Algorithm  */
    arrayLength = answers.length
    for(let i=0; i<arrayLength; i++){
        randInt = Math.floor(Math.random() * arrayLength)

        /* Swap the answers in position i and randInt */
        const holdingAnswer = answers[randInt]
        answers[randInt] = answers[i]
        answers[i] = holdingAnswer
    }

    return answers
}

module.exports = formatQuizQuestions