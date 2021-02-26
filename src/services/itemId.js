const fetch = require('node-fetch')

class ItemIdService {
  async getItemId ({ itemId }) {
    const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`)
    const item = await response.json()

    return item
  }
}

module.exports = ItemIdService
