const itemsObject = [
  {
    id: 0,
    name: 'Guitarra Jackson'
  },
  {
    id: 1,
    name: 'Guitarra Ibanez'
  },
  {
    id: 2,
    name: 'Guitarra Dean'
  }
]

class ItemsService {
  async getItems () {
    const items = await Promise.resolve(itemsObject)
    return items || []
  }
}

module.exports = ItemsService
