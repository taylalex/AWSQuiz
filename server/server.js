const express = require('express')
const { MongoClient } = require('mongodb')

const formatQuizQuestions = require('./utils/questionFunctionality')
const calculateScore = require('./utils/calculateScore')

// Express setup
const app = express()
app.use(express.json());
const PORT = process.env.PORT || 3000

// MongoDB setup
const DBCONNECITONSTRING = 'mongodb://localhost:27017'
const client = new MongoClient(DBCONNECITONSTRING);
const dbName = 'AWSQuiz';
const db = client.db(dbName);
const collection = db.collection('questions')

// Open constant connection 
try{
    client.connect();
    console.log('Connected successfully to server');

} catch (e) {
    console.log('Error connecting server to ')
}

app.get('/fetchEasyQuestions', async (req, res) => {
    const cursor = collection.find({difficulty:'easy'})
    const allValues = await cursor.toArray();
    const formattedQuestion = formatQuizQuestions(allValues)
    res.json({collections:formattedQuestion});

})

app.get('/fetchMediumQuestions', async (req, res) => {
    const cursor = collection.find({ $or: [{difficulty:'medium'}, {difficulty:'easy'}]})
    const allValues = await cursor.toArray();
    res.json({collections:allValues});

})

app.get('/fetchHardQuestions', async (req, res) => {
    const cursor = collection.find()
    const allValues = await cursor.toArray();
    res.json({collections:allValues});

})

app.post('/sendAnswers', async (req, res) => {
    console.log(req.body.answers)
    res.json({score: await calculateScore(req.body.answers)})
})

app.get('/', async (req, res) => {
    res.json({ hello: 'world' })
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

