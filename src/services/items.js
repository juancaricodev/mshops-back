const fetch = require('node-fetch')

class ItemsService {
  async getItems ({ query }) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const items = await response.json()
    return items || []
  }
}

module.exports = ItemsService
