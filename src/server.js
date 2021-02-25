const express = require('express')
const app = express()

const { config } = require('./config/index')

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/json', (req, res) => {
	res.send({ 'greeting': 'Hello world' })
})

app.listen(config.port, () => {
  console.log(`Server listening at: http://localhost:${config.port}`)
})
