const express = require('express')
const app = express()

const { config } = require('./config/index')
const itemsApi = require('./routes/items')

itemsApi(app)

app.listen(config.port, () => {
  console.log(`Server listening at: http://localhost:${config.port}`)
})
