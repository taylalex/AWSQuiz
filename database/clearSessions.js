db = connect('mongodb://localhost/AWSQuiz')

db.sessions.deleteMany({score: 0})