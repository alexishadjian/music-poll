const express = require('express');
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/music-poll');

app.use(express.urlencoded());
app.use(express.json());

const musicRoute = require('./routes/musicRoute');
const voteRoute = require('./routes/voteRoute');
// postRoute(app);

app.use('/music', musicRoute);
app.use('/', voteRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})