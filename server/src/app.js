const express = require('express');
const questionsRouter = require('./api/questions');
const scoreRouter = require('./api/score');
const sessionsRouter = require('./api/sessions');

// Express setup
const app = express();
app.use(express.json());
app.use(questionsRouter);
app.use(scoreRouter);
app.use(sessionsRouter);

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

module.exports = app;
