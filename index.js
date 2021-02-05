const express = require('express');
const crypto = require('crypto')
const app = express();


const { checkEmail, checkPasswordRegex } = require('./verifications.js');

app.use(express.json());

app.use((req, res, next) => {
  const { email, password } = req.body;  
  if (checkEmail(email)) throw new Error('Email invalido');
  if (checkPasswordRegex(password)) throw new Error('Senha invalida');
  next();
});

app.get("/", (req, res) => {
  const token = crypto.randomBytes(6).toString('hex');
  return res.json(token);
});

app.use((err, req, res, next) => {
  res.status(401).json(err.message + " https://http.cat/401");
});

app.listen(3000, () => console.log('running port 3000'));

