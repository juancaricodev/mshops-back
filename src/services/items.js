const fetch = require('node-fetch')

class ItemsService {
  async getItems (query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    const items = await response.json()

    const Items = items.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.trunc(item.price),
          decimals: item.price - Math.trunc(item.price)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address: item.address.state_name
      }
    })

    const Categories = items.filters.filter(e => e.id === 'category')[0].values[0].path_from_root.map(e => e.name)

    const result = {
      Categories, Items
    }
    console.log(result)

    return result
  }
}

module.exports = ItemsService
