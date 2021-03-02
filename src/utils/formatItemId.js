const formatItemId = (item, description, categories) => {
  const itemFormatted = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.trunc(item.price),
      decimals: item.price - Math.trunc(item.price)
    },
    picture: item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text,
    categories: categories.path_from_root.map(e => e.name)
  }

  return itemFormatted
}

module.exports = formatItemId
