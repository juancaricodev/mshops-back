require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000
}

const corsOptions = {
  origin: ['https://mshops-juancaricodev.netlify.app', 'http://localhost:3000', 'http://localhost:5000'],
  optionsSuccessStatus: 200
}

module.exports = { config, corsOptions }
