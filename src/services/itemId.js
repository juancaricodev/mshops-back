const fetch = require('node-fetch')

class ItemIdService {
  async getItemId ({ itemId }) {
    const resItem = await fetch(`https://api.mercadolibre.com/items/${itemId}`)
    const itemData = await resItem.json()

    const resDescription = await fetch(`https://api.mercadolibre.com/items/${itemId}/description`)
    const itemDescription = await resDescription.json()

    const idCategory = itemData.category_id
    const resCategories = await fetch(`https://api.mercadolibre.com/categories/${idCategory}`)
    const itemCategories = await resCategories.json()

    const Item = {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: Math.trunc(itemData.price),
        decimals: itemData.price - Math.trunc(itemData.price)
      },
      picture: itemData.pictures[0].url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: itemDescription.plain_text,
      categories: itemCategories.path_from_root.map(e => e.name)
    }

    return Item
  }
}

module.exports = ItemIdService
