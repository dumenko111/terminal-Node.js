// const Joi = require('joi') //підключаємо бібліотеку
// const passwordSchema = Joi.string().min(3).max(10).alphanum()//використовуємо бібліотеку joi для валідації паролю
// console.log(passwordSchema.validate('w'))//перевіряємо введений пароль/ надто мало символів, потрібно мінімум 3
// ///////////////////////////////
// const shortid = require('shortid')//підключаємо бібліотеку
// console.log(shortid.generate())//генеруємо IDшник
// ///////////////////////////////
// ctr + c = оновлює консоль
const express = require('express')//підключаємо бібліотеку

const app = express()

app.use('*', (req, res) => {
  console.log('Був запит від браузера')
  res.send('<h1>HTML</h1>')
})
const listener = app.listen(4444, () => {
  console.log(`Веб сервер запущений на порті ${listener.address().port}`)
})

