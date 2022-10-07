const express = require('express');
const questionsRouter = require('./api/questions');
const scoreRouter = require('./api/score');

// Express setup
const app = express();
app.use(express.json());
app.use(questionsRouter);
app.use(scoreRouter);

/* parameters:
  req.body.answers -> [{_id: <String> (question ID), answer: <String> (answer chosen by user)}]
*/

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

module.exports = app;
