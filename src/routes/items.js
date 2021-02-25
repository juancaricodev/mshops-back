const express = require('express')
const ItemsService = require('../services/items')

const itemsApi = (app) => {
  const router = express.Router()
  app.use('/api/items', router)

  const itemsService = new ItemsService()

  router.get('/', async (req, res, next) => {
    try {
      const items = await itemsService.getItems()

      res.status(200).json({
        data: items,
        message: 'Person fetched correctly'
      })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = itemsApi
