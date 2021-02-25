const fetch = require('node-fetch')

// const itemsObject = [
//   {
//     id: 0,
//     name: 'Guitarra Jackson'
//   },
//   {
//     id: 1,
//     name: 'Guitarra Ibanez'
//   },
//   {
//     id: 2,
//     name: 'Guitarra Dean'
//   }
// ]

class ItemsService {
  async getItems () {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=guitarra')
    const items = response.json()
    return items || []
  }
}

module.exports = ItemsService
