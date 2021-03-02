const itemsCategories = (filters) => {
  const categories = filters.filter(e => e.id === 'category')[0].values[0].path_from_root.map(e => e.name)

  return categories
}

module.exports = itemsCategories
