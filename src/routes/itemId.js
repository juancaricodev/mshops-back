const express = require('express')
const ItemIdService = require('../services/itemId')

const itemIdApi = (app) => {
  const router = express.Router()
  app.use('/api/items', router)

  const itemIdService = new ItemIdService()

  router.get('/:itemId', async (req, res, next) => {
    const { itemId } = req.params

    try {
      const item = await itemIdService.getItemId({ itemId })

      res.status(200).json({
        author: {
          name: 'Juan Camilo',
          lastname: 'Rico Orjuela'
        },
        item: item
      })
    } catch (err) {
      next(err)
    }

    // res.send(itemId)
  })
}

module.exports = itemIdApi
