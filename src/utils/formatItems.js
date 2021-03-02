const formatPictureUrl = require('./formatPictureUrl')

const formatItems = (items) => {
  const itemsFormatted = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.trunc(item.price),
        decimals: item.price - Math.trunc(item.price)
      },
      picture: formatPictureUrl(item.thumbnail),
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name
    }
  })

  return itemsFormatted
}

module.exports = formatItems
