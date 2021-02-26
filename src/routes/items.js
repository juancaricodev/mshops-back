const express = require('express')
const ItemsService = require('../services/items')

const itemsApi = (app) => {
  const router = express.Router()
  app.use('/api', router)

  const itemsService = new ItemsService()

  router.get('/items?', async (req, res, next) => {
    const search = req.query.q

    try {
      const items = await itemsService.getItems(search)

      search
        ? res.status(200).json({
            author: {
              name: 'Juan Camilo',
              lastname: 'Rico Orjuela'
            },
            items: items
          })
        : res.status(404).send('Wrong request')
    } catch (err) {
      next(err)
    }
  })
}

module.exports = itemsApi
