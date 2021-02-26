const fetch = require('node-fetch')

class ItemIdService {
  async getItemId ({ itemId }) {
    const resItem = await fetch(`https://api.mercadolibre.com/items/${itemId}`)
    const itemData = await resItem.json()

    const resDescription = await fetch(`https://api.mercadolibre.com/items/${itemId}/description`)
    const itemDescription = await resDescription.json()

    const item = {
      id: itemData.id,
      title: itemData.title,
      description: itemDescription.plain_text
    }

    return item
  }
}

module.exports = ItemIdService
