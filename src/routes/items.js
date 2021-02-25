const express = require('express')

const itemsApi = (app) => {
  const router = express.Router()
  app.use('/api/person', router)

  router.get('/', async (req, res, next) => {
    const data = {
      name: 'Juanca',
      lastname: 'Rico'
    }

    try {
      const person = await Promise.resolve(data)

      res.status(200).json({
        data: person,
        message: 'Person fetched correctly'
      })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = itemsApi
