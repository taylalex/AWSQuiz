const { MongoClient, ObjectId } = require('mongodb')

// MongoDB setup
const DBCONNECITONSTRING = 'mongodb://localhost:27017'
const client = new MongoClient(DBCONNECITONSTRING);
const dbName = 'AWSQuiz';
const db = client.db(dbName);
const collection = db.collection('questions')

try{
    client.connect();
    console.log('Connected successfully to server');

} catch (e) {
    console.log('Error connecting server to ')
}

async function calculateScore(answers) {
    let score = 0
    
    for (const element of answers) {
        const item = await collection.findOne({_id: ObjectId(element._id)})
        console.log(item.correctAnswer + " " + element.answer)
        if(item.correctAnswer === element.answer) {
            console.log("triggered")
            score++
        }
    }

    console.log(score)
    return score
}

module.exports = calculateScore