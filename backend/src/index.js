const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://gooweek:admin123@ds221435.mlab.com:21435/goweek-maycon-backend', {
  useNewUrlParser: true
})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000,  () => {
  console.log(`server run on port 3000`)
})