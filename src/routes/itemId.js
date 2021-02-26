const express = require('express')

const itemIdApi = (app) => {
  const router = express.Router()
  app.use('/api/items', router)

  router.get('/:itemId', async (req, res, next) => {
    const { itemId } = req.params
    res.send(itemId)
  })
}

module.exports = itemIdApi
