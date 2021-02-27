const express = require('express')
const cors = require('cors')
const app = express()

const { config } = require('./config/index')
const itemsApi = require('./routes/items')
const itemIdApi = require('./routes/itemId')

app.use(cors())

itemsApi(app)
itemIdApi(app)

app.listen(config.port, () => {
  console.log(`Server listening at: http://localhost:${config.port}`)
})
