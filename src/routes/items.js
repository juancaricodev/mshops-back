const express = require('express')
const ItemsService = require('../services/items')

const itemsApi = (app) => {
  const router = express.Router()
  app.use('/api', router)

  const itemsService = new ItemsService()

  router.get('/items?:query', async (req, res, next) => {
    const { query } = req.params

    try {
      const items = await itemsService.getItems({ query })

      res.status(200).json({
        message: 'Data fetched correctly',
        data: items
      })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = itemsApi
