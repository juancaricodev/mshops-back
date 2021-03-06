const express = require('express')
const ItemsService = require('../services/items')

const itemsApi = (app) => {
  const router = express.Router()
  app.use('/api', router)

  const itemsService = new ItemsService()

  router.get('/items?', async (req, res, next) => {
    const search = req.query.q

    try {
      const data = await itemsService.getItems(search)

      search
        ? res.status(200).json({
            author: {
              name: 'Juan Camilo',
              lastname: 'Rico Orjuela'
            },
            categories: data.Categories,
            items: data.Items
          })
        : res.status(400).send('Bad request')
    } catch (err) {
      next(err)
    }
  })
}

module.exports = itemsApi
