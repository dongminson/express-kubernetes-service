const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const date = new Date()
  const utcString = date.toUTCString()
  res.send(`The current time in UTC is ${utcString}`)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
})