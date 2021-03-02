const fetch = require('node-fetch')

const formatItems = require('../utils/formatItems')
const itemsCategories = require('../utils/itemsCategories')

class ItemsService {
  async getItems (query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const items = await response.json()

    const Items = formatItems(items.results)

    let Categories

    !items.filters.length > 0
      ? Categories = [items.query]
      : Categories = itemsCategories(items.filters)

    const result = {
      Categories, Items
    }

    return result
  }
}

module.exports = ItemsService
