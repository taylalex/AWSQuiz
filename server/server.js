const e = require('express')
const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()
const PORT = process.env.PORT || 3000
const DBCONNECITONSTRING = 'mongodb://localhost:27017'
const client = new MongoClient(DBCONNECITONSTRING);

// Open constant connection 
try{
    client.connect();
    console.log('Connected successfully to server');
    const dbName = 'AWSQuiz';
    const db = client.db(dbName);
    const collection = db.collection('questions')
} catch (e) {
    console.log('Error connecting server to ')
}

app.get('/fetchEasyQuestions', async (req, res) => {
    // const collection = db.collection('questions')
    const cursor = collection.find({difficulty:'easy'})
    const allValues = await cursor.toArray();
    res.json({colelctions:allValues});

})

app.get('/fetchMediumQuestions', async (req, res) => {
    // const collection = db.collection('questions')
    const cursor = collection.find({ $or: [{difficulty:'medium'}, {difficulty:'easy'}]})
    const allValues = await cursor.toArray();
    res.json({colelctions:allValues});

})

app.get('/fetchHardQuestions', async (req, res) => {
    // const collection = db.collection('questions')
    const cursor = collection.find()
    const allValues = await cursor.toArray();
    res.json({colelctions:allValues});

})

app.get('/', async (req, res) => {
    res.json({ hello: 'world' })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})