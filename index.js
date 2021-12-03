require('dotenv').config();
const express = require('express');

const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
  res.status(200).json([
    {id: 1, username: 'foo'},
    {id: 2, username: 'bar'},
    {id: 3, username: 'foobar'}
  ])
})

server.post('/api/register', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(400).json({
      message: 'username and password required'
    })
  } else {
    res.status(201).json({id: 4, username: req.body.username})
  }
})

server.post('/api/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(400).json({
      message: 'username and password required'
    })
  } else {
    res.status(200).json({
      message: 'Welcome back!'
    })
  }
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})