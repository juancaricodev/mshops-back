const formatPictureUrl = (url) => {
  const urlFormatted = url.replace('http://', 'https://')

  return urlFormatted
}

module.exports = formatPictureUrl
