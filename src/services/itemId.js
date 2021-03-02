const fetch = require('node-fetch')

const formatItemId = require('../utils/formatItemId')

class ItemIdService {
  async getItemId ({ itemId }) {
    const resItem = await fetch(`https://api.mercadolibre.com/items/${itemId}`)
    const itemData = await resItem.json()

    const resDescription = await fetch(`https://api.mercadolibre.com/items/${itemId}/description`)
    const itemDescription = await resDescription.json()

    const idCategory = itemData.category_id
    const resCategories = await fetch(`https://api.mercadolibre.com/categories/${idCategory}`)
    const itemCategories = await resCategories.json()

    const Item = formatItemId(itemData, itemDescription, itemCategories)

    return Item
  }
}

module.exports = ItemIdService
